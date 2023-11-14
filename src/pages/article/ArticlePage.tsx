import { useFetcher, useParams } from "react-router-dom"

export function ArticlePage() {
  const {articleId} = useParams()

  return (
    <div>
      <h1>Article</h1>
      <p>Article URL - {"http://api.com/article/" + articleId}</p>
    </div>
  )
}