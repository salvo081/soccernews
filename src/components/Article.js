export default function Article({title, url, author, created_at}) {

	// console.log(obj);
	return (
		<article className="article">
			<h2 className="title">{title}</h2> <a className="url" href={url} target="_blank">{url}</a>
			<p className="author">Author: {author}</p>
			<p className="date">Date: {new Date(created_at).toDateString()}</p>
		</article>
	);
}