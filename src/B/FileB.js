import React from "react";

// Rules focused on preventing accessibility problems.

function FileB() {
	return (
		<div>
			{/*Rule Name: noAriaHiddenOnFocusable => Disallow aria-hidden="true" from being set on focusable elements. */}
			<div aria-hidden="true" tabIndex={0}>
				<div aria-hidden="true">
					<a href="https://google.com">Google</a>
				</div>
				{/* Rule Name: noAccessKey => Avoid the accessKey attribute to reduce inconsistencies between keyboard shortcuts and screen reader keyboard comments. */}
				<input type="submit" accessKey="s" value="Submit" />
				{/* Rule Name: noBlankTarget => Avoid using target="_blank" without rel="noreferrer". */}
				<a href="https://google.com" target="_blank" rel="noreferrer">
					child
				</a>
				{/* Rule Name: useButtonType => Allowed button types are: submit, button or reset */}
				<button type="button">Do something</button>
			</div>
		</div>
	);
}

export default FileB;
