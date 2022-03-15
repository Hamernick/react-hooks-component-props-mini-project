import Article from "../components/Article";

function ArticleList({posts}) {
   
    const postData = posts.map((postObj) => {
    
    return (
            <Article key={postObj.id} title={postObj.title} date={postObj.date} preview={postObj.preview} />
    )})

    return (
        <main>
            {postData}
        </main>
    )
  }
  
export default ArticleList;