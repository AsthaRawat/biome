function accessibility() {
  return (
    <div>
      {/* noAccessKey */}
      <a href="https://webaim.org/" accessKey="w">
        WebAIM.org
      </a>

      {/* noAriaHiddenOnFocusable */}
      <div aria-hidden="true" tabIndex="0" />

      {/* noAriaUnsupportedElements */}
      <meta charset="UTF-8" role="meta" />

      {/* noAutofocus */}
      <input autoFocus={true} />

      {/* noBlankTarget */}
      {/*  eslint-disable-next-line react/jsx-no-target-blank */}
      <a href="http://external.link" target="_blank" rel="noreferrer">
        child
      </a>

      {/*noDistractingElements*/}
      <marquee />

      {/* noHeaderScope:: The scope prop should be used only on <th> elements. */}
      <div scope={scope} />
       
       {/* noInteractiveElementToNoninteractiveRole */}
       <input role="img" />;

       {/* noNoninteractiveElementToInteractiveRole */}
       <h1 role="button">Some text</h1>

       {/* noNoninteractiveTabindex */}
       <div tabIndex="0" />

       {/* noPositiveTabindex */}
       <div tabIndex={1}>foo</div>

       {/* noRedundantAlt */}
       <img src="src" alt="photo content" />;

       {/* noRedundantRoles */}
       <article role='article'></article>

        {/* noSvgWithoutTitle */}
        <svg>foo</svg>

        {/* useAltText	 */}
        <img src="image.png" />

        {/* useAnchorContent */}
        <a />

        {/* useAriaActivedescendantWithTabindex	 */}
        <div aria-activedescendant={someID} />

        {/* useAriaPropsForRole	 */}
        <span role="checkbox"></span>

        {/* useButtonType */}
        <button>Do something</button>

        {/* useHeadingContent */}
        <h1 />

        {/* useHtmlLang	 */}
        <html></html>

        {/* useIframeTitle */}
        <iframe />

        {/* useKeyWithClickEvents */}
        <div onClick={() => {}} />

        {/* useKeyWithMouseEvents */}
        <div onMouseOver={() => {}} />

        {/* useMediaCaption */}
        <video />

        {/* useValidAnchor */}
        <a href={null}>navigate here</a>

        {/* useValidAriaProps */}
        <input className="" aria-labell="" />

        {/* useValidAriaRole */}
        <div role="datepicker"></div>

        {/* useValidAriaValues */}
        <span role="checkbox" aria-checked="test">some text</span>

        {/* useValidLang */}
        <html lang="lorem" />



    </div>
  );
}

export default accessibility;
