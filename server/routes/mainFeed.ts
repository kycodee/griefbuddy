import express, { Request, Response } from 'express';

const router = express.Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

router.get('/allPosts', (req: Request, res: Response) => {
  prisma.Post.findMany({
    orderBy: [
      {
        id: 'desc',
      },
    ],
  })
    .then((results: any) => {
      res.send(results).status(200);
    })
    .catch((err: string) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.post('/addPost', (req: Request, res: Response) => {
  const { user, text } = req.body.data;
  prisma.User.findUnique({
    where: {
      googleId: user,
    },
  }).then((results: any) => {
    prisma.Post.create({
      data: {
        text,
        user: {
          connect: {
            name: results.name,
            googleId: results.googleId,
          },
        },
        name: results.name,
      },
    })
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err: string) => {
        console.error(err);
        res.sendStatus(500);
      });
  });
});

router.post('/addComment', (req: Request, res: Response) => {
  const { postId, text, user } = req.body.data;
  prisma.User.findUnique({
    where: {
      googleId: user,
    },
  }).then((results: any) => {
    console.log(text, results.name, results.googleId);
    prisma.Comment.create({
      data: {
        text,
        user: {
          connect: {
            name: results.name,
            googleId: results.googleId,
          },
        },
        post: {
          connect: {
            id: postId,
          },
        },
      },
    })
      .then(() => {
        res.sendStatus(200);
      })
      .catch((err: string) => {
        console.error(err);
        res.sendStatus(500);
      });
  });
});

router.get('/allComments', (req: Request, res: Response) => {
  prisma.Comment.findMany()
    .then((results: any) => {
      res.send(results).status(200);
    })
    .catch((err: string) => {
      console.error(err);
      res.sendStatus(500);
    });
});

router.delete('/deletePost', (req: Request, res: Response) => {
    const {id} = req.body
   prisma.Post.delete({
      where: {
        id,
      },
    })
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err: string) => {
      console.error(err);
      res.sendStatus(500);
    });
});

export = router;
