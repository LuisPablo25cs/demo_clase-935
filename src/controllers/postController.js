import {query} from '../db.js';

export const createPost = async (req, res) => {
    const { content } = req.body; 

try {
    const insertPostQuery = `
        INSERT INTO posts (content)
        VALUES ($1)
        RETURNING id, content, created_at;
        `;
    const result = await query(instertPostQuery, [content]);
    res.json(Result.rows[0]);
} catch (error) {
    res.status(400).json({error: error.mesage})
}}

export const getAllPost = async(req, res) => {
    try {
        const getPostsQuery =`
            SELECT id, content, created_at
            FROM posts
            ORDER BY created_at DESC; 
        `;
        const result = await query(getPostsQuery);
        res.json(result.rows)
    } catch (err) {
        res.status(400).json
    }
}