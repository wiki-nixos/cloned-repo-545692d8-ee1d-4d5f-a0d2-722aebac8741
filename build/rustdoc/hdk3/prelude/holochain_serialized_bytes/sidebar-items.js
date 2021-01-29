initSidebarItems({"enum":[["SerializedBytesError",""]],"fn":[["decode",""],["encode",""]],"macro":[["holochain_serial","unidiomatic way to derive default trait implementations of TryFrom in/out of SerializedBytes"]],"mod":[["prelude",""],["serde","SerdeSerde is a framework for serializing and deserializing Rust data structures efficiently and generically."]],"struct":[["SerializedBytes","A Canonical Serialized Bytes representation for data If you have a data structure that needs a canonical byte representation use this Always round-trip through SerializedBytes via. a single TryFrom implementation. This ensures that the internal bytes of SerializedBytes are indeed canonical. The corrolary is that if bytes are NOT wrapped in SerializedBytes we can assume they are NOT canonical. Typically we need a canonical serialization when data is to be handled at the byte level by independently implemented and maintained systems."],["UnsafeBytes","UnsafeBytes the only way to implement a custom round trip through bytes for SerializedBytes It is intended to be an internal implementation in TryFrom implementations The assumption is that any code using UnsafeBytes is NOT valid messagepack data This allows us to enforce that all data round-tripping through SerializedBytes is via TryFrom and also allow for custom non-messagepack canonical representations of data types."]]});