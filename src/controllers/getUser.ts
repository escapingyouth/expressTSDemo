import { RequestHandler } from 'express';
import { users } from '../models/data';

export const getUsers: RequestHandler = (req, res, next) => {
	res.render('show', { users });
};