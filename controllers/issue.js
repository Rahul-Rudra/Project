const express = require("express");
const mongoose = require("mongoose");
const db = require("../models/Issue");
const Book = require("../models/Book");
const User = require("../models/User");
const Activity = require("../models/Activity");
const nodemailer = require("nodemailer");

const getIssueBook = async (req, res) => {
  try {
    const result = await db.find();
    res.json(result);
  } catch (error) {
    res.status(404).json("No details of Issued book");
  }
};

const issueBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.book_id);
    const user = await User.findById(req.params.user_id);
    const pos = user.bookIssueInfo.indexOf(req.params.book_id);
    console.log(pos);
    if (pos > -1) {
      return res.status(403).send("you can not take same book again");
    }
    const st = book.stock;
    if (user.bookIssueInfo.length >= 5) {
      const len = user.bookIssueInfo.length;
      return res.json({ msg: "cannot access more than 5 books", len });
    }
    //console.log(st);
    //console.log(st === 0);
    if (st === 0) {
      return res.json({
        message: "You can not acccess this book because stock is 0",
        st,
      });
    } else {
      book.stock -= 1;
      const issue = new db({
        book_info: {
          id: book._id,
          title: book.title,
          ISBN: book.ISBN,
          stock: book.stock,
          author: book.author,
        },
        user_id: {
          id: user._id,
          name: user.name,
        },
      });

      user.bookIssueInfo.push(book._id);
      book.userId.push(user._id);
      //  const d = issue.book_info.issueDate.split("T");
      //const d1 = issue.book_info.returnDate.split("T");
      //console.log(d[0]);

      const activity = new Activity({
        info: {
          id: book._id,
          title: book.title,
        },
        category: "Issue",
        time: {
          id: issue._id,
          issueDate: issue.book_info.issueDate,
          returnDate: issue.book_info.returnDate,
        },
        user_id: {
          id: user._id,
          name: user.name,
        },
      });

      await user.save();
      await issue.save();
      await activity.save();
      await book.save();
      /*
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '',
    pass: ''
  }
});

var mailOptions = {
  from: '',
  to: '',
  subject: 'confirmation mail',
  text: ``
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
    res.json({ issue: issue, user: user });
  }
});*/
      res.json({ issue: issue, user: user });
    }
  } catch (err) {
    res.json(err).json("error");
  }
};

const returnBook = async (req, res, next) => {
  try {
    const book_id = req.params.book_id;
    console.log(book_id);
    // const name=req.user.name
    const user = await User.findById(req.params.id);
    const pos = user.bookIssueInfo.indexOf(req.params.book_id);
    //console.log(pos);
    //console.log(pos);
    //console.log(pos);

    const book = await Book.findById(book_id);
    const pos1 = book.userId.indexOf(req.params.id);

    const issue = await db.findOne({ "user_id.id": req.params.id });

    console.log(issue.book_info.id);
    const c = issue.book_info.id;
    console.log(c != book_id);
    console.log(issue);
    if (issue === null || c != book_id) {
      return res.json({
        msg: "Not issued by you first issue then return",
        issue,
        c,
        book_id,
      });
    }
    book.stock += 1;
    book.userId.splice(pos1, 1);
    await book.save();

    await issue.remove();

    const result = user.bookIssueInfo.splice(pos, 1);
    // console.log(result);
    await user.save();

    const activity = new Activity({
      info: {
        id: issue.book_info.id,
        title: issue.book_info.title,
      },
      category: "Return",
      time: {
        id: issue._id,
        issueDate: issue.book_info.issueDate,
        returnDate: issue.book_info.returnDate,
      },
      user_id: {
        id: user._id,
        name: user.name,
      },
    });
    await activity.save();
    res.json(issue);
    next();

    /*
var transporter = nodemailer.createTransport({
  service: '',
  auth: {
    user: '',
    pass: ''
  }
});

var mailOptions = {
  from: '',
  to: '',
  subject: '',
  text: ``
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
    res.json(issue);
  }
});*/
  } catch (err) {
    res.status(400).json({ msg: "you do not issued this book" });
    //console.log(err);
    //return res.redirect("back");
  }
};

const renewBook = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.user_id);
    //console.log(user);
    const searchObj = {
      "user_id.id": user._id,
      "book_info.id": req.params.id,
    };
    const issue = await db.findOne(searchObj);
    //console.log(issue);
    //const c = issue.book_info.id;
    if (issue === null) {
      return res.status(404).json({
        msg: "Not issued by you first issue then renew",
        issue,
      });
    }
    const d = Date.now();
    console.log(d > issue.book_info.returnDate);
    if (d > issue.book_info.returnDate === false) {
      return res.json({
        msg: "You can renew after the completion of return date",
      });
    }

    //console.log(issue);

    let time = issue.book_info.returnDate.getTime();
    issue.book_info.returnDate = time + 7 * 24 * 60 * 60 * 1000;
    issue.book_info.isRenewed = true;

    const activity = new Activity({
      info: {
        id: issue._id,
        title: issue.book_info.title,
      },
      category: "Renew",
      time: {
        id: issue._id,
        issueDate: issue.book_info.issueDate,
        returnDate: issue.book_info.returnDate,
      },
      user_id: {
        id: user._id,
        name: user.name,
      },
    });

    await activity.save();
    await issue.save();
    res.json("done");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  issueBook,
  returnBook,
  renewBook,
  getIssueBook,
};
