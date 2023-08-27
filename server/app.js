const path = require("path");

require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const express = require("express");
const cors = require("cors");

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const commentsRouter = require("./comments/comments.router");
const followersRouter = require("./followers/followers.router");
const likesRouter = require("./likes/likes.router");
const mediaRouter = require("./media/media.router");
const messagesRouter = require("./messages/messages.router");
const notificationsRouter = require("./notifications/notifications.router");
const postsRouter = require("./posts/posts.router");
const searchRouter = require("./search/search.router");
const settingsRouter = require("./settings/settings.router");
const usersRouter = require("./users/users.router");
const timelineRouter = require("./timeline/timeline.router");

const app = express();

app.use(cors());
app.use(express.json());

app.use('/comments', commentsRouter);
app.use('/followers', followersRouter);
app.use('/likes', likesRouter);
app.use('/media', mediaRouter);
app.use('/messages', messagesRouter);
app.use('/notifications', notificationsRouter);
app.use('/posts', postsRouter);
app.use('/search', searchRouter);
app.use('/settings', settingsRouter);
app.use('/users', usersRouter);
app.use('/timeline', timelineRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
