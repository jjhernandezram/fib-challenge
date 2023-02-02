import  { Request, Response, Router }  from  'express';

const  router = Router();

const getFibonacciSequence = (req: Request, res: Response) => {

  return res.json({ message: 'Ok'});
};

/**
 * Get Fibonacci value
 */
router.get('/fibonacci/:number', getFibonacciSequence);


export default router;