export async function GET(request){
  try {
    const apiUri = "https://newsapi.org/v2/top-headlines?country=us&apiKey="
    const blogPosts = await fetch(`${apiUri}${process.env.BLOG_API_KEY}`).then(async (res)=> await res.json())
    console.log(blogPosts)
    return Response.json({...blogPosts},{status:200})
  } catch(err){
    console.log(err)
    return Response.json({},{status:500})
  }
}