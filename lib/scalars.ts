import {
	AccountNumberResolver,
	BigIntResolver,
	ByteResolver,
	CountryCodeResolver,
	CountryNameResolver,
	CuidResolver,
	CurrencyResolver,
	DIDResolver,
	DateResolver,
	DateTimeISOResolver,
	DateTimeResolver,
	DurationResolver,
	EmailAddressResolver,
	GUIDResolver,
	GeoJSONResolver,
	GraphQLDeweyDecimalResolver,
	GraphQLIPCPatent,
	GraphQLLCCSubclass,
	GraphQLNegativeFloat,
	GraphQLNegativeInt,
	HSLAResolver,
	HSLResolver,
	HexColorCodeResolver,
	HexadecimalResolver,
	IBANResolver,
	IPResolver,
	IPv4Resolver,
	IPv6Resolver,
	ISBNResolver,
	ISO8601DurationResolver,
	JSONObjectResolver,
	JSONResolver,
	JWTResolver,
	LatitudeResolver,
	LocalDateResolver,
	LocalDateTimeResolver,
	LocalEndTimeResolver,
	LocalTimeResolver,
	LocaleResolver,
	LongResolver,
	LongitudeResolver,
	MACResolver,
	NonEmptyStringResolver,
	NonNegativeFloatResolver,
	NonNegativeIntResolver,
	NonPositiveFloatResolver,
	NonPositiveIntResolver,
	ObjectIDResolver,
	PhoneNumberResolver,
	PortResolver,
	PositiveFloatResolver,
	PositiveIntResolver,
	PostalCodeResolver,
	RGBAResolver,
	RGBResolver,
	RoutingNumberResolver,
	SESSNResolver,
	SafeIntResolver,
	SemVerResolver,
	TimeResolver,
	TimeZoneResolver,
	TimestampResolver,
	URLResolver,
	USCurrencyResolver,
	UUIDResolver,
	UnsignedFloatResolver,
	UnsignedIntResolver,
	UtcOffsetResolver,
	VoidResolver,
} from "graphql-scalars";
import { implementer } from "./implementer";

export const AccountNumber = implementer({
	tsType: "string",
	resolver: AccountNumberResolver,
});

export const BigInteger = implementer({
	tsType: "bigint",
	resolver: BigIntResolver,
});

export const Byte = implementer({
	// Buffer<ArrayBufferLike>
	tsType: "any",
	resolver: ByteResolver,
});

export const CountryCode = implementer({
	tsType: "string",
	resolver: CountryCodeResolver,
});

export const CountryName = implementer({
	tsType: "string",
	resolver: CountryNameResolver,
});

export const Cuid = implementer({
	tsType: "string",
	resolver: CuidResolver,
});

export const Currency = implementer({
	tsType: "string",
	resolver: CurrencyResolver,
});

export const Date_ = implementer({
	tsType: "Date",
	resolver: DateResolver,
});

export const DateTime = implementer({
	tsType: "Date",
	resolver: DateTimeResolver,
});

export const DateTimeISO = implementer({
	tsType: "Date",
	resolver: DateTimeISOResolver,
});

export const DID = implementer({
	tsType: "string",
	resolver: DIDResolver,
});

export const Duration = implementer({
	tsType: "string",
	resolver: DurationResolver,
});

export const EmailAddress = implementer({
	tsType: "string",
	resolver: EmailAddressResolver,
});

// export const GeoJSON = implementer({
//   // TODO
//   tsType: "any",
//   resolver: GeoJSONResolver,
// });

export const GUID = implementer({
	tsType: "string",
	resolver: GUIDResolver,
});

export const HexColorCode = implementer({
	tsType: "string",
	resolver: HexColorCodeResolver,
});

export const Hexadecimal = implementer({
	tsType: "string",
	resolver: HexadecimalResolver,
});

export const HSL = implementer({
	tsType: "string",
	resolver: HSLResolver,
});

export const HSLA = implementer({
	tsType: "string",
	resolver: HSLAResolver,
});

export const IPv4 = implementer({
	tsType: "string",
	resolver: IPv4Resolver,
});

export const IPv6 = implementer({
	tsType: "string",
	resolver: IPv6Resolver,
});

export const IBAN = implementer({
	tsType: "string",
	resolver: IBANResolver,
});

export const IP = implementer({
	tsType: "string",
	resolver: IPResolver,
});

export const IPCPatent = implementer({
	tsType: "string",
	resolver: GraphQLIPCPatent,
});

export const ISBN = implementer({
	tsType: "string",
	resolver: ISBNResolver,
});

export const ISO8601Duration = implementer({
	tsType: "string",
	resolver: ISO8601DurationResolver,
});

export const JSON_ = implementer({
	tsType: "any",
	resolver: JSONResolver,
});

export const JSONObject = implementer({
	tsType: "object",
	resolver: JSONObjectResolver,
});

export const JWT = implementer({
	tsType: "string",
	resolver: JWTResolver,
});

export const Latitude = implementer({
	tsType: "number",
	resolver: LatitudeResolver,
});

export const LCCSubclass = implementer({
	tsType: "string",
	resolver: GraphQLLCCSubclass,
});

export const LocalDate = implementer({
	tsType: "string",
	resolver: LocalDateResolver,
});

export const LocalDateTime = implementer({
	tsType: "string",
	resolver: LocalDateTimeResolver,
});

export const LocalEndTime = implementer({
	tsType: "any",
	resolver: LocalEndTimeResolver,
});

export const LocalTime = implementer({
	tsType: "string",
	resolver: LocalTimeResolver,
});

export const Locale = implementer({
	tsType: "string",
	resolver: LocaleResolver,
});

export const Long = implementer({
	tsType: "string",
	resolver: LongResolver,
});

export const Longitude = implementer({
	tsType: "number",
	resolver: LongitudeResolver,
});

export const MAC = implementer({
	tsType: "string",
	resolver: MACResolver,
});

export const NegativeFloat = implementer({
	tsType: "number",
	resolver: GraphQLNegativeFloat,
});

export const NegativeInt = implementer({
	tsType: "number",
	resolver: GraphQLNegativeInt,
});

export const NonEmptyString = implementer({
	tsType: "string",
	resolver: NonEmptyStringResolver,
});

export const NonNegativeFloat = implementer({
	tsType: "any",
	resolver: NonNegativeFloatResolver,
});

export const NonNegativeInt = implementer({
	tsType: "any",
	resolver: NonNegativeIntResolver,
});

export const NonPositiveFloat = implementer({
	tsType: "any",
	resolver: NonPositiveFloatResolver,
});

export const NonPositiveInt = implementer({
	tsType: "number",
	resolver: NonPositiveIntResolver,
});

export const ObjectID = implementer({
	tsType: "string",
	resolver: ObjectIDResolver,
});

export const PhoneNumber = implementer({
	tsType: "string",
	resolver: PhoneNumberResolver,
});

export const Port = implementer({
	tsType: "number",
	resolver: PortResolver,
});

export const PositiveFloat = implementer({
	tsType: "number",
	resolver: PositiveFloatResolver,
});

export const PositiveInt = implementer({
	tsType: "number",
	resolver: PositiveIntResolver,
});

export const PostalCode = implementer({
	tsType: "string",
	resolver: PostalCodeResolver,
});

// TODO
// export const RegularExpression = implementer({
//     tsType: "string",
//     resolver: RegularExpression,
//   });

export const RGB = implementer({
	tsType: "string",
	resolver: RGBResolver,
});

export const RGBA = implementer({
	tsType: "string",
	resolver: RGBAResolver,
});

export const RoutingNumber = implementer({
	tsType: "string",
	resolver: RoutingNumberResolver,
});

export const SafeInt = implementer({
	tsType: "number",
	resolver: SafeIntResolver,
});

export const SemVer = implementer({
	tsType: "string",
	resolver: SemVerResolver,
});

export const SESSN = implementer({
	// TODO
	tsType: "any",
	resolver: SESSNResolver,
});

export const Time = implementer({
	tsType: "string",
	resolver: TimeResolver,
});

export const TimeZone = implementer({
	tsType: "string",
	resolver: TimeZoneResolver,
});

export const Timestamp = implementer({
	tsType: "number",
	resolver: TimestampResolver,
});

export const UnsignedFloat = implementer({
	tsType: "any",
	resolver: UnsignedFloatResolver,
});

export const UnsignedInt = implementer({
	tsType: "any",
	resolver: UnsignedIntResolver,
});

export const URL = implementer({
	tsType: "unknown",
	resolver: URLResolver,
});

export const USCurrency = implementer({
	tsType: "string",
	resolver: USCurrencyResolver,
});

export const UtcOffset = implementer({
	tsType: "string",
	resolver: UtcOffsetResolver,
});

export const UUID = implementer({
	tsType: "string",
	resolver: UUIDResolver,
});

export const Void = implementer({
	tsType: "string",
	resolver: VoidResolver,
});

//TODO
// export const SSN = implementer({
//     tsType: "string",
//     resolver: Graphqlssn,
//   });
