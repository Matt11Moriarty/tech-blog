DROP DATABASE IF EXISTS tech_blog_db;
CREATE DATABASE tech_blog_db;


-- SELECT u.username , p.content AS post_content , c.content AS comment_content
-- FROM comment c
-- JOIN user u ON c.user_id = u.id 
-- JOIN post p ON c.post_id = p.id