declare module 'cal-heatmap' {
	interface CalHeatmapOptions {
		itemSelector: HTMLElement;
		domain?: {
			type: string;
			label?: {
				text: string;
				textAlign: string;
				position: string;
			};
		};
		subDomain?: {
			type: string;
			radius: number;
			width: number;
			height: number;
			gutter: number;
		};
		date?: {
			start: Date;
			highlight: Date;
		};
		data?: {
			source: Array<{ date: string; value: number }>;
			x: string;
			y: string;
		};
		scale?: {
			color: {
				type: string;
				range: string[];
				domain: number[];
			};
		};
	}

	class CalHeatmap {
		constructor();
		paint(options: CalHeatmapOptions): void;
		destroy(): void;
	}

	export default CalHeatmap;
} 