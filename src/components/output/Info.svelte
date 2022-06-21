<script>
  export let hidden;
</script>

<div class="info" class:hidden={hidden}>
  <p>Additional info on the <abbr title="Flash of Unstyled Content">FOUC</abbr>, f-mods and overrides:</p>
  <ul>
    <li><a href="https://simonhearne.com/2021/layout-shifts-webfonts/">How to avoid layout shifts caused by web fonts</a> by Simon Hearne</li>
    <li><a href="https://blog.vhoyer.dev/posts/prevent-cls-for-font-swap-with-f-mods/">Prevent CLS for font swap with f-mods</a> by Vinícius Hoyer</li>
    <li><a href="https://www.smashingmagazine.com/2021/05/reduce-font-loading-impact-css-descriptors/">A New Way To Reduce Font Loading Impact</a> by Barry Pollard</li>
    <li><a href="https://web.dev/cls/">Cumulative Layout Shift (CLS)</a> by Philip Walton and Milica Mihajlija</li>
    <li><a href="https://drafts.csswg.org/css-fonts-5/#font-metrics-override-desc">CSS Fonts Module Level 5</a> (spec)</li>
    <li><a href="https://opentype.js.org/font-inspector.html">Opentype.js Font Inspector</a></li>
  </ul>
</div>

<style>
  li {
    margin: 0.5rem 0;
  }
</style>