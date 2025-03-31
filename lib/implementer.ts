import type { ScalarSpec } from "houdini";

type GenericResolver<In, Out> = {
	parseValue: (val: In) => Out;
	serialize: (val: Out) => In;
};

type TsTypes =
	| "string"
	| "number"
	| "boolean"
	| "bigint"
	| "object"
	| "Buffer"
	| "any"
	| "Date"
	| "unknown";

export function implementer<
	TsType extends TsTypes,
	In,
	Out,
	Resolver extends GenericResolver<In, Out>,
>({ tsType, resolver }: { tsType: TsType; resolver: Resolver }): ScalarSpec {
	return {
		type: tsType,
		unmarshal(val) {
			return resolver.parseValue(val);
		},
		marshal(val) {
			return resolver.serialize(val);
		},
	};
}
