export default function Article(obj) {

	// console.log(obj);
	return (
		<article className="article">
			<h2 className="title">{obj.title}</h2> <a className="url" href={obj.url} target="_blank">{obj.url}</a>
			<p className="author">Author: {obj.author}</p>
			<p className="date">Date: {new Date(obj.created_at).toDateString()}</p>
		</article>
	);
}