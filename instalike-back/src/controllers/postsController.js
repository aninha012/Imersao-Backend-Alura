import getTodosPosts from "../Model/postsModel.js";

export async function listarPosts(req, res) {
    // Obtém todos os posts
    const posts = await getTodosPosts();
    // Envia os posts como resposta JSON com status 200 (OK)
    res.status(200).json(posts);
}
    