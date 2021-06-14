import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, b as claim_element, f as children, j as claim_text, g as detach_dev, k as attr_dev, l as add_location, m as insert_dev, n as append_dev, o as set_data_dev, L as noop } from './client.33602f97.js';

/* src/components/Title.svelte generated by Svelte v3.38.1 */

const file = "src/components/Title.svelte";

function create_fragment(ctx) {
	let div;
	let h2;
	let t;

	const block = {
		c: function create() {
			div = element("div");
			h2 = element("h2");
			t = text(/*text*/ ctx[0]);
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			h2 = claim_element(div_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t = claim_text(h2_nodes, /*text*/ ctx[0]);
			h2_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h2, "class", "svelte-ekhjx3");
			add_location(h2, file, 23, 2, 418);
			attr_dev(div, "class", "title svelte-ekhjx3");
			add_location(div, file, 22, 0, 396);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, h2);
			append_dev(h2, t);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*text*/ 1) set_data_dev(t, /*text*/ ctx[0]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Title", slots, []);
	let { text } = $$props;
	const writable_props = ["text"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Title> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("text" in $$props) $$invalidate(0, text = $$props.text);
	};

	$$self.$capture_state = () => ({ text });

	$$self.$inject_state = $$props => {
		if ("text" in $$props) $$invalidate(0, text = $$props.text);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [text];
}

class Title extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { text: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Title",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*text*/ ctx[0] === undefined && !("text" in props)) {
			console.warn("<Title> was created without expected prop 'text'");
		}
	}

	get text() {
		throw new Error("<Title>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set text(value) {
		throw new Error("<Title>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Title as T };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGl0bGUuODM3MjdkNjguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1RpdGxlLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c3R5bGUgbGFuZz1cInNjc3NcIj5cbkBpbXBvcnQgXCIuLi9zdHlsZS9jb21wb25lbnRzL1RpdGxlLnNjc3NcIjtcbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgbGV0IHRleHQ7XG48L3NjcmlwdD5cblxuPGRpdiBjbGFzcz1cInRpdGxlXCI+XG4gIDxoMj57dGV4dH08L2gyPlxuPC9kaXY+XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O3FCQVNPLEdBQUk7Ozs7Ozs7O3FDQUFKLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7O29EQUFKLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BSkEsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
