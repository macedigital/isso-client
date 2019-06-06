<script>
export let hash = 'f9c24e2abb82063a3ba2c44efd2d3c797f28ac90'; // "missing" encoded as sha1
export let size = 32;

const hsl2rgb = (hue, saturation, lightness) => {
    hue *= 6;
    saturation = [
        lightness += saturation *= lightness < .5 ? lightness : 1 - lightness,
        lightness - hue % 1 * saturation * 2,
        lightness -= saturation *= 2,
        lightness,
        lightness + hue % 1 * saturation,
        lightness + saturation
    ];

    return [
        saturation[(hue | 0) % 6] * 255,
        saturation[(hue | 16) % 6] * 255,
        saturation[(hue | 8) % 6] * 255,
    ].map(num => (~~num).toString(16)).join('');
}

const buildIdenticon = (hash, cell, margin) => {
	const base = 2;
	const steps = 5;
	const points = [];

	for (let i = 0; i < 15; i++) {
		if (parseInt(hash.charAt(i), 16) % 2 !== 0) {
			const factor = ~~(i / steps);
			const y = (i - factor * steps) * cell + margin;
			points.push({
				x: (base - factor) * cell + margin,
				y,
			});
			// don't create a duplicate for i < 5
			if (factor > 0) {
				points.push({
					x: (base + factor) * cell + margin,
					y,
				});
			}
		}
    }

    return points;
};

const baseMargin = 0.08;
const saturation = 0.7;
const brightness = 0.5;

const hue = parseInt(hash.substr(-7), 16) / 0xfffffff;
const color = hsl2rgb(hue, saturation, brightness);
const background = 'f0f0f0';
const cell = Math.floor((size - (baseMargin * 2)) / 5);
const margin = Math.floor((size - cell * 5) / 2);
const rects = buildIdenticon(hash, cell, margin);
</script>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {size}" width={size} height={size} shape-rendering="crispEdges">
	<rect x=0 y=0 width={size} height={size} fill="#{background}"/>
	{#each rects as { x, y }}
		<rect {x} {y} width={cell} height={cell} fill="#{color}"/>
	{/each}
</svg>