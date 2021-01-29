initSidebarItems({"attr":[["hdk_entry",""],["hdk_extern",""]],"constant":[["CAP_SECRET_BITS","The number of bits we want for a comfy secret."],["CAP_SECRET_BYTES","The number of bytes we want for a comfy secret."],["ENTRY_SIZE_LIMIT","Entries larger than this number of bytes cannot be created"],["KEY_REF_BYTES","Key refs are the same length as the keys themselves. The key ref is just a sha256 of the key. There are no benefits, only downsides, to having either a larger or smaller set of outputs (ref size) vs. the set of inputs (key size)."],["X25519_PUB_KEY_BYTES",""]],"derive":[["Deserialize",""],["Deserialize",""],["Serialize",""],["Serialize",""],["SerializedBytes",""],["SerializedBytes",""]],"enum":[["ActivityRequest","Get either the full activity or just the status of the chain"],["CapAccess","Represents access requirements for capability grants."],["CapGrant","Represents a potentially valid access grant to a zome call. Zome call response will be Unauthorized without a valid grant."],["ChainStatus","Status of the agent activity chain"],["Details","Return type for get_details calls. HeaderHash returns an Element. EntryHash returns an Entry."],["ElementEntry","Represents the different ways the entry_address reference within a Header can be intepreted"],["Entry","Structure holding the entry portion of a chain element."],["EntryDefId",""],["EntryDefsCallbackResult",""],["EntryDhtStatus","The status of an [Entry] in the Dht"],["EntryError","Errors involving app entry creation"],["EntryType","Allows Headers which reference Entries to know what type of Entry it is referencing. Useful for examining Headers without needing to fetch the corresponding Entries."],["EntryVisibility",""],["GetStrategy","Describes the get call and what information the caller is concerned about. This helps the subconscious avoid unnecessary network calls."],["Header","Header contains variants for each type of header."],["HeaderType","A unit enum which just maps onto the different Header variants, without containing any extra data"],["HostFnApiError","Anything that can go wrong while calling a HostFnApi method"],["InitCallbackResult",""],["MigrateAgent",""],["MigrateAgentCallbackResult",""],["PostCommitCallbackResult",""],["RequiredValidationType","The level of validation package required by an entry."],["SecurePrimitiveError","Errors related to the secure primitive macro."],["SerializedBytesError",""],["SerializedBytesError",""],["ValidateCallbackResult",""],["ValidateLinkCallbackResult",""],["ValidationPackageCallbackResult",""],["ValidationStatus","The validation status for an op or element much of this happens in the subconscious an entry missing validation dependencies may cycle through Pending many times before finally reaching a final validation state or being abandoned"],["WasmError","Enum of all possible ERROR codes that a Zome API Function could return."],["ZomeCallResponse","Response to a zome call."]],"fn":[["__agent_info",""],["__call",""],["__call_remote",""],["__capability_claims",""],["__capability_grants",""],["__capability_info",""],["__create",""],["__create_link",""],["__create_x25519_keypair",""],["__debug",""],["__decrypt",""],["__delete",""],["__delete_link",""],["__emit_signal",""],["__encrypt",""],["__get",""],["__get_agent_activity",""],["__get_details",""],["__get_link_details",""],["__get_links",""],["__hash_entry",""],["__property",""],["__query",""],["__random_bytes",""],["__remote_signal",""],["__schedule",""],["__show_env",""],["__sign",""],["__sys_time",""],["__unreachable",""],["__update",""],["__verify_signature",""],["__x_25519_x_salsa20_poly1305_decrypt",""],["__x_25519_x_salsa20_poly1305_encrypt",""],["__x_salsa20_poly1305_decrypt",""],["__x_salsa20_poly1305_encrypt",""],["__zome_info",""],["element_with_no_entry",""],["fake_agent_pub_key","A fixture AgentPubKey for unit testing."],["fake_agent_pubkey_1","A fixture AgentPubKey for unit testing. NB: This must match up with AgentPubKeyFixturator's Predictable curve"],["fake_agent_pubkey_2","Another fixture AgentPubKey for unit testing. NB: This must match up with AgentPubKeyFixturator's Predictable curve"],["fake_cap_secret","A fixture CapSecret for unit testing."],["fake_cell_id","A fixture example CellId for unit testing."],["fake_dht_op_hash","A fixture DhtOpHash for unit testing."],["fake_dna_hash","A fixture DnaHash for unit testing."],["fake_entry_hash","A fixture EntryHash for unit testing."],["fake_header_hash","A fixture HeaderHash for unit testing."],["host_args","Receive arguments from the host. The guest sets the type O that the host needs to match. If deserialization fails then a `GuestPtr` to a `WasmError::Deserialize` is returned. The guest should immediately return an `Err` back to the host. The `WasmError::Deserialize` enum contains the bytes that failed to deserialize so the host can unambiguously provide debug information."],["host_call","Given an `GuestPtr` -> `Len` extern that we expect the host to provide:"],["return_err_ptr","Convert an Into into a generic `Err(WasmError::Zome)` as a `GuestPtr` returned."],["return_ptr","Convert any serializable value into a GuestPtr that can be returned to the host. The host is expected to know how to consume and deserialize it."]],"macro":[["debug_msg","Returns a `DebugMsg` combining the message passed `debug_msg!` with the source code location in which it's called."],["fixed_array_serialization","Serialization for fixed arrays is generally not available in a way that can be derived. Being able to wrap fixed size arrays is important e.g. for crypto safety etc. so this is a simple way to implement serialization so that we can send these types between the host/guest."],["holochain_serial","unidiomatic way to derive default trait implementations of TryFrom in/out of SerializedBytes"],["holochain_serial","unidiomatic way to derive default trait implementations of TryFrom in/out of SerializedBytes"],["host_externs",""],["memory_externs",""],["secure_primitive","Cryptographic secrets are fiddly at the best of times."],["try_ptr","A simple macro to wrap return_err_ptr in an analogy to the native rust `?`."]],"mod":[["agent_info",""],["allocation",""],["builder",""],["bytes","represent arbitrary bytes (not serialized) e.g. totally random crypto bytes from random_bytes"],["call",""],["call_remote",""],["capability","Capability Grants and Claims"],["cell","A \"Cell\" represents a DNA/AgentId pair - a space where one dna/agent can track its source chain and service network requests / responses."],["conversions",""],["crdt",""],["debug","Types related to the `debug` host function"],["element","Defines a Element, the basic unit of Holochain data."],["entry","An Entry is a unit of data in a Holochain Source Chain."],["entry_def",""],["fixt","Fixturators for zome types"],["header",""],["holochain_serialized_bytes",""],["init",""],["link",""],["metadata","Metadata types for use in wasm"],["migrate_agent",""],["post_commit",""],["query","Types for source chain queries"],["request","Types for requesting metadata"],["result",""],["serde_bytes","Wrapper types to enable optimized handling of `&[u8]` and `Vec<u8>`."],["signal","App-defined signals"],["signature","Signature for authenticity of data"],["test_utils","Common helpers for writing tests against zome types"],["timestamp","Timestamp"],["validate",""],["validate_link",""],["warrant","Types for warrants"],["x_salsa20_poly1305",""],["zome",""],["zome_info",""],["zome_io",""]],"struct":[["AgentActivity","An agents chain elements returned from a agent_activity_query"],["AgentInfo","The struct containing all information about the executing agent's identity."],["AgentPubKeyFixturator",""],["AgentValidationPkg","Header for an agent validation package, used to determine whether an agent is allowed to participate in this DNA"],["AgentValidationPkgFixturator",""],["AnyDhtHashFixturator",""],["AppEntry","a curve to spit out Entry::App values"],["AppEntryBytes","Newtype for the bytes comprising an App entry"],["AppEntryBytesFixturator",""],["AppEntryType","Information about a class of Entries provided by the DNA"],["AppEntryTypeFixturator",""],["AppSignal","A signal emitted by an app via `emit_signal`"],["Call",""],["CallRemote",""],["CapAccessFixturator",""],["CapClaim","System entry to hold a capability token claim for use as a caller. Stored by a claimant so they can remember what's necessary to exercise this capability by sending the secret to the grantor."],["CapClaimFixturator",""],["CapGrantFixturator",""],["CapSecret","A CapSecret is used by a caller to prove to a callee access to a committed CapGrant."],["CapSecretFixturator",""],["CellId","The unique identifier for a Cell. Cells are uniquely determined by this pair - this pair is necessary and sufficient to refer to a cell in a conductor"],["ChainFork","The chain has been forked by these two headers"],["ChainHead","The header at the head of the complete chain. This is as far as this authority can see a chain with no gaps."],["ChainQueryFilter","Query arguments"],["CloseChain","When migrating to a new version of a DNA, this header is committed to the old chain to declare the migration path taken. Currently unused"],["CloseChainFixturator",""],["CrdtType",""],["CrdtTypeFixturator",""],["Create","A header which \"speaks\" Entry content into being. The same content can be referenced by multiple such headers."],["CreateFixturator",""],["CreateLink","Declares that a metadata Link should be made between two EntryHashes"],["CreateLinkFixturator",""],["CreateLinkInput","Zome IO inner type for link creation."],["CurryPayloads","@todo Ability to forcibly curry payloads into functions that are called with a claim."],["CurryPayloadsFixturator",""],["DebugMsg","Representation of message to be logged via the `debug` host function"],["Delete","Declare that a previously published Header should be nullified and considered deleted."],["DeleteFixturator",""],["DeleteHeader","Placeholder for future when we want to have deletes on headers Not currently in use."],["DeleteLink","Declares that a previously made Link should be nullified and considered removed."],["DeleteLinkFixturator",""],["DhtOpHashFixturator",""],["Dna","The Dna Header is always the first header in a source chain"],["DnaFixturator",""],["DnaHashFixturator",""],["Element","a chain element which is a triple containing the signature of the header along with the entry if the header type has one."],["ElementDetails","A specific Element with any deletes This is all the metadata available for an element."],["ElementVec","Small struct to allow the return type of `query()` to be a vector of elements"],["EntryDef",""],["EntryDefFixturator",""],["EntryDefIdFixturator",""],["EntryDefIndex",""],["EntryDefs",""],["EntryDefsFixturator",""],["EntryDetails","An Entry with all it's metadata."],["EntryFixturator",""],["EntryHashFixturator",""],["EntryHashes","A newtype for a collection of EntryHashes, needed for some wasm return types."],["EntryTypeFixturator",""],["EntryVisibilityFixturator",""],["EntryWithDefId","Data to create an entry."],["ExternIO",""],["ExternIoFixturator",""],["FunctionName","A single function name."],["FunctionNameFixturator",""],["GetAgentActivityInput",""],["GetInput","Zome IO inner for get and get_details calls."],["GetLinksInput",""],["GetOptions","Options for controlling how get works"],["GrantedFunctionFixturator",""],["HashSet","A hash set implemented as a `HashMap` where the value is `()`."],["HashTypeAnyDhtFixturator",""],["HeaderBuilderCommon",""],["HeaderBuilderCommonFixturator",""],["HeaderFixturator",""],["HeaderHashFixturator",""],["HeaderHashedVec",""],["HeaderHashes",""],["HighestObserved","The highest header sequence observed by this authority. This also includes the headers at this sequence. If there is more then one then there is a fork."],["HoloHash","A HoloHash contains a vector of 36 bytes representing a 32-byte blake2b hash plus 4 bytes representing a DHT location. It also contains a zero-sized type which specifies what it is a hash of."],["InitZomesComplete","A header which declares that all zome init functions have successfully completed, and the chain is ready for commits. Contains no explicit data."],["InitZomesCompleteFixturator",""],["KnownCreateLink",""],["KnownDeleteLink",""],["Link",""],["LinkDetails","CreateLinks with and DeleteLinks on them `[CreateLink, [DeleteLink]]`"],["LinkTag","Opaque tag for the link applied at the app layer, used to differentiate between different semantics and validation rules for different links"],["LinkTagFixturator",""],["Links",""],["MaybeSerializedBytesFixturator",""],["MetadataRequest","Metadata that can be requested on a basis"],["MigrateAgentFixturator",""],["NetIdHashFixturator",""],["OpenChain","When migrating to a new version of a DNA, this header is committed to the new chain to declare the migration path taken. Currently unused"],["OpenChainFixturator",""],["PublicCurve","A curve to make headers have public entry types"],["QueryFilter","Query arguments"],["RemoteSignal","Remote signal many agents without waiting for responses."],["RequiredValidationTypeFixturator",""],["RequiredValidations",""],["RequiredValidationsFixturator",""],["SerializedBytes","A Canonical Serialized Bytes representation for data If you have a data structure that needs a canonical byte representation use this Always round-trip through SerializedBytes via. a single TryFrom implementation. This ensures that the internal bytes of SerializedBytes are indeed canonical. The corrolary is that if bytes are NOT wrapped in SerializedBytes we can assume they are NOT canonical. Typically we need a canonical serialization when data is to be handled at the byte level by independently implemented and maintained systems."],["SerializedBytes","A Canonical Serialized Bytes representation for data If you have a data structure that needs a canonical byte representation use this Always round-trip through SerializedBytes via. a single TryFrom implementation. This ensures that the internal bytes of SerializedBytes are indeed canonical. The corrolary is that if bytes are NOT wrapped in SerializedBytes we can assume they are NOT canonical. Typically we need a canonical serialization when data is to be handled at the byte level by independently implemented and maintained systems."],["Sign","Input structure for creating a signature."],["Signature","The raw bytes of a signature."],["SignatureFixturator",""],["SignedHeader","A combination of a Header and its signature."],["SignedHeaderHashed","The header and the signature that signed it"],["ThirtySixHashBytesFixturator",""],["Timestamp","A UTC timestamp for use in Holochain's headers."],["TimestampFixturator",""],["UnsafeBytes","UnsafeBytes the only way to implement a custom round trip through bytes for SerializedBytes It is intended to be an internal implementation in TryFrom implementations The assumption is that any code using UnsafeBytes is NOT valid messagepack data This allows us to enforce that all data round-tripping through SerializedBytes is via TryFrom and also allow for custom non-messagepack canonical representations of data types."],["UnsafeBytes","UnsafeBytes the only way to implement a custom round trip through bytes for SerializedBytes It is intended to be an internal implementation in TryFrom implementations The assumption is that any code using UnsafeBytes is NOT valid messagepack data This allows us to enforce that all data round-tripping through SerializedBytes is via TryFrom and also allow for custom non-messagepack canonical representations of data types."],["Update","A header which specifies that some new Entry content is intended to be an update to some old Entry."],["UpdateFixturator",""],["UpdateHeader","Placeholder for future when we want to have updates on headers Not currently in use."],["UpdateInput","Zome IO inner for update."],["ValidateCreateLinkData",""],["ValidateData",""],["ValidateDeleteLinkData",""],["ValidationPackage",""],["VerifySignature","Mirror struct for Sign that includes a signature to verify against a key and data."],["Warrant","Placeholder for warrant type"],["WasmHashFixturator",""],["WrongHeaderError",""],["X25519PubKey",""],["X25519XSalsa20Poly1305Decrypt",""],["X25519XSalsa20Poly1305Encrypt",""],["XSalsa20Poly1305Data","Data that can be encrypted with secretbox."],["XSalsa20Poly1305Decrypt",""],["XSalsa20Poly1305Encrypt",""],["XSalsa20Poly1305EncryptedData",""],["XSalsa20Poly1305KeyRef",""],["ZomeCallCapGrant","The entry for the ZomeCall capability grant. This data is committed to the callee's source chain as a private entry. The remote calling agent must provide a secret and we source their pubkey from the active network connection. This must match the strictness of the CapAccess."],["ZomeCallCapGrantFixturator",""],["ZomeId","this id is an internal reference, which also serves as a canonical ordering for zome initialization.  The value should be auto-generated from the Zome Bundle def"],["ZomeIdFixturator",""],["ZomeInfo","The properties of the current dna/zome being called."],["ZomeName","ZomeName as a String."],["ZomeNameFixturator",""]],"trait":[["CallbackResult",""],["Deserialize","A data structure that can be deserialized from any data format supported by Serde."],["Deserialize","A data structure that can be deserialized from any data format supported by Serde."],["HasHash","Anything which has an owned HoloHashOf."],["HeaderBuilder","Builder for non-genesis Headers"],["HeaderInner","A trait to specify the common parts of a Header"],["HostFnApiT",""],["Serialize","A data structure that can be serialized into any data format supported by Serde."],["Serialize","A data structure that can be serialized into any data format supported by Serde."],["TryFrom","Simple and safe type conversions that may fail in a controlled way under some circumstances. It is the reciprocal of [`TryInto`]."],["TryFrom","Simple and safe type conversions that may fail in a controlled way under some circumstances. It is the reciprocal of [`TryInto`]."],["TryFrom","Simple and safe type conversions that may fail in a controlled way under some circumstances. It is the reciprocal of [`TryInto`]."],["TryInto","An attempted conversion that consumes `self`, which may or may not be expensive."],["TryInto","An attempted conversion that consumes `self`, which may or may not be expensive."]],"type":[["AgentPubKey","An Agent public signing key. Not really a hash, more of an \"identity hash\"."],["AnyDhtHash","The hash of anything referrable in the DHT. This is a composite of either an EntryHash or a HeaderHash"],["BoxData",""],["Bytes","simply alias whatever serde bytes is already doing for Vec"],["CapClaimEntry","The data type written to the source chain to denote a capability claim"],["CapGrantEntry","The data type written to the source chain when explicitly granting a capability. NB: this is not simply `CapGrant`, because the `CapGrant::ChainAuthor` grant is already implied by `Entry::Agent`, so that should not be committed to a chain. This is a type alias because if we add other capability types in the future, we may want to include them"],["CapSecretBytes","A fixed size array of bytes that a secret must be."],["EntryHash","The hash of an Entry."],["GrantedFunction","a single zome/function pair"],["GrantedFunctions","A collection of zome/function pairs"],["GuestPtr","a WasmSize integer that points to a position in wasm linear memory that the host and guest are sharing to communicate across function calls"],["HashTypeAnyDht",""],["HashTypeEntry",""],["HeaderHash","The hash of a Header"],["HeaderHashed",""],["Len","a WasmSize integer that represents the size of bytes to read/write to memory in direct manipulations"],["MaybeSerializedBytes","Alias"],["SecretBoxData",""],["SecretBoxKeyRef",""],["ThirtySixHashBytes","A type alias for a Vec whose fixturator is expected to only return a Vec of length 36"],["WasmSize","something like usize for wasm wasm has a memory limit of 4GB so offsets and lengths fit in u32"]]});