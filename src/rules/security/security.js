function security() {
	function createMarkup() {
		return { __html: "child" };
	}
	return (
		<>
			{/* noDangerouslySetInnerHtml: ✖ Avoid passing content using the dangerouslySetInnerHTML prop. */}
			{/*  eslint-disable-next-line react/no-danger-with-children */}
			<div dangerouslySetInnerHTML={createMarkup()}>A</div>
			{/* noDangerouslySetInnerHtmlWithChildren */}
			<Component dangerouslySetInnerHTML={createMarkup()}>"child1"</Component>
		</>
	);
}

export default security;
