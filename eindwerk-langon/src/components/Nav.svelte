<script>

	export let segment;
</script>

<style  lang='scss' >
	@import "../style/theme.scss";
	nav {
    border-bottom: 1px solid rgba(255,62,0,0.1);
    font-weight: 300;
    padding: 0 1em;
}

ul {
    margin: 0;
    padding: 0;
}

/* clearfix */
ul::after {
    content: '';
    display: block;
    clear: both;
}

li {
    display: block;
    float: left;
}

[aria-current] {
    position: relative;
    display: inline-block;
}

[aria-current]::after {
    position: absolute;
    content: '';
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(255,62,0);
    display: block;
    bottom: -1px;
}

a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
    color: $main-color;
}
</style>

<nav>
	<ul class="nav-header__items">
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">Home</a></li>
		<li><a aria-current="{segment === 'originals' ? 'page' : undefined}" href="originals">Originals</a></li>
		<li><a aria-current="{segment === 'translations' ? 'page' : undefined}" href="translations">Translations</a></li>
		<li><a aria-current="{segment === 'settings' ? 'page' : undefined}" href="settings">Settings</a></li>
	</ul>
</nav>
