/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
var $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $TypeError = $util.global.TypeError, $Boolean = $util.global.Boolean, $String = $util.global.String, $Array = $util.global.Array;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.CompanionReg = (function() {

    /**
     * Namespace CompanionReg.
     * @exports CompanionReg
     * @namespace
     */
    var CompanionReg = {};

    CompanionReg.ClientPairingProps = (function() {

        /**
         * Properties of a ClientPairingProps.
         * @typedef {Object} CompanionReg.ClientPairingProps.$Properties
         * @property {boolean|null} [isChatDbLidMigrated] ClientPairingProps isChatDbLidMigrated
         * @property {boolean|null} [isSyncdPureLidSession] ClientPairingProps isSyncdPureLidSession
         * @property {boolean|null} [isSyncdSnapshotRecoveryEnabled] ClientPairingProps isSyncdSnapshotRecoveryEnabled
         * @property {boolean|null} [isHsThumbnailSyncEnabled] ClientPairingProps isHsThumbnailSyncEnabled
         * @property {Uint8Array|null} [subscriptionSyncPayload] ClientPairingProps subscriptionSyncPayload
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a ClientPairingProps.
         * @memberof CompanionReg
         * @interface IClientPairingProps
         * @augments CompanionReg.ClientPairingProps.$Properties
         * @deprecated Use CompanionReg.ClientPairingProps.$Properties instead.
         */

        /**
         * Shape of a ClientPairingProps.
         * @typedef {CompanionReg.ClientPairingProps.$Properties} CompanionReg.ClientPairingProps.$Shape
         */

        /**
         * Constructs a new ClientPairingProps.
         * @memberof CompanionReg
         * @classdesc Represents a ClientPairingProps.
         * @constructor
         * @param {CompanionReg.ClientPairingProps.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        var ClientPairingProps = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * ClientPairingProps isChatDbLidMigrated.
         * @member {boolean|null|undefined} isChatDbLidMigrated
         * @memberof CompanionReg.ClientPairingProps
         * @instance
         */
        ClientPairingProps.prototype.isChatDbLidMigrated = null;

        /**
         * ClientPairingProps isSyncdPureLidSession.
         * @member {boolean|null|undefined} isSyncdPureLidSession
         * @memberof CompanionReg.ClientPairingProps
         * @instance
         */
        ClientPairingProps.prototype.isSyncdPureLidSession = null;

        /**
         * ClientPairingProps isSyncdSnapshotRecoveryEnabled.
         * @member {boolean|null|undefined} isSyncdSnapshotRecoveryEnabled
         * @memberof CompanionReg.ClientPairingProps
         * @instance
         */
        ClientPairingProps.prototype.isSyncdSnapshotRecoveryEnabled = null;

        /**
         * ClientPairingProps isHsThumbnailSyncEnabled.
         * @member {boolean|null|undefined} isHsThumbnailSyncEnabled
         * @memberof CompanionReg.ClientPairingProps
         * @instance
         */
        ClientPairingProps.prototype.isHsThumbnailSyncEnabled = null;

        /**
         * ClientPairingProps subscriptionSyncPayload.
         * @member {Uint8Array|null|undefined} subscriptionSyncPayload
         * @memberof CompanionReg.ClientPairingProps
         * @instance
         */
        ClientPairingProps.prototype.subscriptionSyncPayload = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPairingProps.prototype, "_isChatDbLidMigrated", {
            get: $util.oneOfGetter($oneOfFields = ["isChatDbLidMigrated"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPairingProps.prototype, "_isSyncdPureLidSession", {
            get: $util.oneOfGetter($oneOfFields = ["isSyncdPureLidSession"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPairingProps.prototype, "_isSyncdSnapshotRecoveryEnabled", {
            get: $util.oneOfGetter($oneOfFields = ["isSyncdSnapshotRecoveryEnabled"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPairingProps.prototype, "_isHsThumbnailSyncEnabled", {
            get: $util.oneOfGetter($oneOfFields = ["isHsThumbnailSyncEnabled"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPairingProps.prototype, "_subscriptionSyncPayload", {
            get: $util.oneOfGetter($oneOfFields = ["subscriptionSyncPayload"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ClientPairingProps instance using the specified properties.
         * @function create
         * @memberof CompanionReg.ClientPairingProps
         * @static
         * @param {CompanionReg.ClientPairingProps.$Properties=} [properties] Properties to set
         * @returns {CompanionReg.ClientPairingProps} ClientPairingProps instance
         * @type {{
         *   (properties: CompanionReg.ClientPairingProps.$Shape): CompanionReg.ClientPairingProps & CompanionReg.ClientPairingProps.$Shape;
         *   (properties?: CompanionReg.ClientPairingProps.$Properties): CompanionReg.ClientPairingProps;
         * }}
         */
        ClientPairingProps.create = function(properties) {
            return new ClientPairingProps(properties);
        };

        /**
         * Encodes the specified ClientPairingProps message. Does not implicitly {@link CompanionReg.ClientPairingProps.verify|verify} messages.
         * @function encode
         * @memberof CompanionReg.ClientPairingProps
         * @static
         * @param {CompanionReg.ClientPairingProps.$Properties} message ClientPairingProps message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientPairingProps.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.isChatDbLidMigrated != null && $Object.hasOwnProperty.call(message, "isChatDbLidMigrated"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isChatDbLidMigrated);
            if (message.isSyncdPureLidSession != null && $Object.hasOwnProperty.call(message, "isSyncdPureLidSession"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isSyncdPureLidSession);
            if (message.isSyncdSnapshotRecoveryEnabled != null && $Object.hasOwnProperty.call(message, "isSyncdSnapshotRecoveryEnabled"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isSyncdSnapshotRecoveryEnabled);
            if (message.isHsThumbnailSyncEnabled != null && $Object.hasOwnProperty.call(message, "isHsThumbnailSyncEnabled"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isHsThumbnailSyncEnabled);
            if (message.subscriptionSyncPayload != null && $Object.hasOwnProperty.call(message, "subscriptionSyncPayload"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.subscriptionSyncPayload);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified ClientPairingProps message, length delimited. Does not implicitly {@link CompanionReg.ClientPairingProps.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CompanionReg.ClientPairingProps
         * @static
         * @param {CompanionReg.ClientPairingProps.$Properties} message ClientPairingProps message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientPairingProps.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a ClientPairingProps message from the specified reader or buffer.
         * @function decode
         * @memberof CompanionReg.ClientPairingProps
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CompanionReg.ClientPairingProps & CompanionReg.ClientPairingProps.$Shape} ClientPairingProps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientPairingProps.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.CompanionReg.ClientPairingProps();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 0)
                            break;
                        message.isChatDbLidMigrated = reader.bool();
                        message._isChatDbLidMigrated = "isChatDbLidMigrated";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.isSyncdPureLidSession = reader.bool();
                        message._isSyncdPureLidSession = "isSyncdPureLidSession";
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        message.isSyncdSnapshotRecoveryEnabled = reader.bool();
                        message._isSyncdSnapshotRecoveryEnabled = "isSyncdSnapshotRecoveryEnabled";
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        message.isHsThumbnailSyncEnabled = reader.bool();
                        message._isHsThumbnailSyncEnabled = "isHsThumbnailSyncEnabled";
                        continue;
                    }
                case 5: {
                        if (wireType !== 2)
                            break;
                        message.subscriptionSyncPayload = reader.bytes();
                        message._subscriptionSyncPayload = "subscriptionSyncPayload";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a ClientPairingProps message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CompanionReg.ClientPairingProps
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CompanionReg.ClientPairingProps & CompanionReg.ClientPairingProps.$Shape} ClientPairingProps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientPairingProps.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClientPairingProps message.
         * @function verify
         * @memberof CompanionReg.ClientPairingProps
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClientPairingProps.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.isChatDbLidMigrated != null && $Object.hasOwnProperty.call(message, "isChatDbLidMigrated")) {
                properties._isChatDbLidMigrated = 1;
                if (typeof message.isChatDbLidMigrated !== "boolean")
                    return "isChatDbLidMigrated: boolean expected";
            }
            if (message.isSyncdPureLidSession != null && $Object.hasOwnProperty.call(message, "isSyncdPureLidSession")) {
                properties._isSyncdPureLidSession = 1;
                if (typeof message.isSyncdPureLidSession !== "boolean")
                    return "isSyncdPureLidSession: boolean expected";
            }
            if (message.isSyncdSnapshotRecoveryEnabled != null && $Object.hasOwnProperty.call(message, "isSyncdSnapshotRecoveryEnabled")) {
                properties._isSyncdSnapshotRecoveryEnabled = 1;
                if (typeof message.isSyncdSnapshotRecoveryEnabled !== "boolean")
                    return "isSyncdSnapshotRecoveryEnabled: boolean expected";
            }
            if (message.isHsThumbnailSyncEnabled != null && $Object.hasOwnProperty.call(message, "isHsThumbnailSyncEnabled")) {
                properties._isHsThumbnailSyncEnabled = 1;
                if (typeof message.isHsThumbnailSyncEnabled !== "boolean")
                    return "isHsThumbnailSyncEnabled: boolean expected";
            }
            if (message.subscriptionSyncPayload != null && $Object.hasOwnProperty.call(message, "subscriptionSyncPayload")) {
                properties._subscriptionSyncPayload = 1;
                if (!(message.subscriptionSyncPayload && typeof message.subscriptionSyncPayload.length === "number" || $util.isString(message.subscriptionSyncPayload)))
                    return "subscriptionSyncPayload: buffer expected";
            }
            return null;
        };

        /**
         * Creates a ClientPairingProps message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CompanionReg.ClientPairingProps
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CompanionReg.ClientPairingProps} ClientPairingProps
         */
        ClientPairingProps.fromObject = function (object, _depth) {
            if (object instanceof $root.CompanionReg.ClientPairingProps)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".CompanionReg.ClientPairingProps: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.CompanionReg.ClientPairingProps();
            if (object.isChatDbLidMigrated != null)
                message.isChatDbLidMigrated = $Boolean(object.isChatDbLidMigrated);
            if (object.isSyncdPureLidSession != null)
                message.isSyncdPureLidSession = $Boolean(object.isSyncdPureLidSession);
            if (object.isSyncdSnapshotRecoveryEnabled != null)
                message.isSyncdSnapshotRecoveryEnabled = $Boolean(object.isSyncdSnapshotRecoveryEnabled);
            if (object.isHsThumbnailSyncEnabled != null)
                message.isHsThumbnailSyncEnabled = $Boolean(object.isHsThumbnailSyncEnabled);
            if (object.subscriptionSyncPayload != null)
                if (typeof object.subscriptionSyncPayload === "string")
                    $util.base64.decode(object.subscriptionSyncPayload, message.subscriptionSyncPayload = $util.newBuffer($util.base64.length(object.subscriptionSyncPayload)), 0);
                else if (object.subscriptionSyncPayload.length >= 0)
                    message.subscriptionSyncPayload = object.subscriptionSyncPayload;
            return message;
        };

        /**
         * Creates a plain object from a ClientPairingProps message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CompanionReg.ClientPairingProps
         * @static
         * @param {CompanionReg.ClientPairingProps} message ClientPairingProps
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClientPairingProps.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.isChatDbLidMigrated != null && $Object.hasOwnProperty.call(message, "isChatDbLidMigrated"))
                object.isChatDbLidMigrated = message.isChatDbLidMigrated;
            if (message.isSyncdPureLidSession != null && $Object.hasOwnProperty.call(message, "isSyncdPureLidSession"))
                object.isSyncdPureLidSession = message.isSyncdPureLidSession;
            if (message.isSyncdSnapshotRecoveryEnabled != null && $Object.hasOwnProperty.call(message, "isSyncdSnapshotRecoveryEnabled"))
                object.isSyncdSnapshotRecoveryEnabled = message.isSyncdSnapshotRecoveryEnabled;
            if (message.isHsThumbnailSyncEnabled != null && $Object.hasOwnProperty.call(message, "isHsThumbnailSyncEnabled"))
                object.isHsThumbnailSyncEnabled = message.isHsThumbnailSyncEnabled;
            if (message.subscriptionSyncPayload != null && $Object.hasOwnProperty.call(message, "subscriptionSyncPayload"))
                object.subscriptionSyncPayload = options.bytes === $String ? $util.base64.encode(message.subscriptionSyncPayload, 0, message.subscriptionSyncPayload.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.subscriptionSyncPayload) : message.subscriptionSyncPayload;
            return object;
        };

        /**
         * Converts this ClientPairingProps to JSON.
         * @function toJSON
         * @memberof CompanionReg.ClientPairingProps
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClientPairingProps.prototype.toJSON = function() {
            return ClientPairingProps.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for ClientPairingProps
         * @function getTypeUrl
         * @memberof CompanionReg.ClientPairingProps
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        ClientPairingProps.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/CompanionReg.ClientPairingProps";
        };

        return ClientPairingProps;
    })();

    CompanionReg.EncryptedPairingRequest = (function() {

        /**
         * Properties of an EncryptedPairingRequest.
         * @typedef {Object} CompanionReg.EncryptedPairingRequest.$Properties
         * @property {Uint8Array|null} [encryptedPayload] EncryptedPairingRequest encryptedPayload
         * @property {Uint8Array|null} [iv] EncryptedPairingRequest iv
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of an EncryptedPairingRequest.
         * @memberof CompanionReg
         * @interface IEncryptedPairingRequest
         * @augments CompanionReg.EncryptedPairingRequest.$Properties
         * @deprecated Use CompanionReg.EncryptedPairingRequest.$Properties instead.
         */

        /**
         * Shape of an EncryptedPairingRequest.
         * @typedef {CompanionReg.EncryptedPairingRequest.$Properties} CompanionReg.EncryptedPairingRequest.$Shape
         */

        /**
         * Constructs a new EncryptedPairingRequest.
         * @memberof CompanionReg
         * @classdesc Represents an EncryptedPairingRequest.
         * @constructor
         * @param {CompanionReg.EncryptedPairingRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        var EncryptedPairingRequest = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * EncryptedPairingRequest encryptedPayload.
         * @member {Uint8Array|null|undefined} encryptedPayload
         * @memberof CompanionReg.EncryptedPairingRequest
         * @instance
         */
        EncryptedPairingRequest.prototype.encryptedPayload = null;

        /**
         * EncryptedPairingRequest iv.
         * @member {Uint8Array|null|undefined} iv
         * @memberof CompanionReg.EncryptedPairingRequest
         * @instance
         */
        EncryptedPairingRequest.prototype.iv = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(EncryptedPairingRequest.prototype, "_encryptedPayload", {
            get: $util.oneOfGetter($oneOfFields = ["encryptedPayload"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(EncryptedPairingRequest.prototype, "_iv", {
            get: $util.oneOfGetter($oneOfFields = ["iv"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new EncryptedPairingRequest instance using the specified properties.
         * @function create
         * @memberof CompanionReg.EncryptedPairingRequest
         * @static
         * @param {CompanionReg.EncryptedPairingRequest.$Properties=} [properties] Properties to set
         * @returns {CompanionReg.EncryptedPairingRequest} EncryptedPairingRequest instance
         * @type {{
         *   (properties: CompanionReg.EncryptedPairingRequest.$Shape): CompanionReg.EncryptedPairingRequest & CompanionReg.EncryptedPairingRequest.$Shape;
         *   (properties?: CompanionReg.EncryptedPairingRequest.$Properties): CompanionReg.EncryptedPairingRequest;
         * }}
         */
        EncryptedPairingRequest.create = function(properties) {
            return new EncryptedPairingRequest(properties);
        };

        /**
         * Encodes the specified EncryptedPairingRequest message. Does not implicitly {@link CompanionReg.EncryptedPairingRequest.verify|verify} messages.
         * @function encode
         * @memberof CompanionReg.EncryptedPairingRequest
         * @static
         * @param {CompanionReg.EncryptedPairingRequest.$Properties} message EncryptedPairingRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EncryptedPairingRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.encryptedPayload != null && $Object.hasOwnProperty.call(message, "encryptedPayload"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.encryptedPayload);
            if (message.iv != null && $Object.hasOwnProperty.call(message, "iv"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.iv);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified EncryptedPairingRequest message, length delimited. Does not implicitly {@link CompanionReg.EncryptedPairingRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CompanionReg.EncryptedPairingRequest
         * @static
         * @param {CompanionReg.EncryptedPairingRequest.$Properties} message EncryptedPairingRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EncryptedPairingRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes an EncryptedPairingRequest message from the specified reader or buffer.
         * @function decode
         * @memberof CompanionReg.EncryptedPairingRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CompanionReg.EncryptedPairingRequest & CompanionReg.EncryptedPairingRequest.$Shape} EncryptedPairingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EncryptedPairingRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.CompanionReg.EncryptedPairingRequest();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        message.encryptedPayload = reader.bytes();
                        message._encryptedPayload = "encryptedPayload";
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.iv = reader.bytes();
                        message._iv = "iv";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes an EncryptedPairingRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CompanionReg.EncryptedPairingRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CompanionReg.EncryptedPairingRequest & CompanionReg.EncryptedPairingRequest.$Shape} EncryptedPairingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EncryptedPairingRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EncryptedPairingRequest message.
         * @function verify
         * @memberof CompanionReg.EncryptedPairingRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EncryptedPairingRequest.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.encryptedPayload != null && $Object.hasOwnProperty.call(message, "encryptedPayload")) {
                properties._encryptedPayload = 1;
                if (!(message.encryptedPayload && typeof message.encryptedPayload.length === "number" || $util.isString(message.encryptedPayload)))
                    return "encryptedPayload: buffer expected";
            }
            if (message.iv != null && $Object.hasOwnProperty.call(message, "iv")) {
                properties._iv = 1;
                if (!(message.iv && typeof message.iv.length === "number" || $util.isString(message.iv)))
                    return "iv: buffer expected";
            }
            return null;
        };

        /**
         * Creates an EncryptedPairingRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CompanionReg.EncryptedPairingRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CompanionReg.EncryptedPairingRequest} EncryptedPairingRequest
         */
        EncryptedPairingRequest.fromObject = function (object, _depth) {
            if (object instanceof $root.CompanionReg.EncryptedPairingRequest)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".CompanionReg.EncryptedPairingRequest: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.CompanionReg.EncryptedPairingRequest();
            if (object.encryptedPayload != null)
                if (typeof object.encryptedPayload === "string")
                    $util.base64.decode(object.encryptedPayload, message.encryptedPayload = $util.newBuffer($util.base64.length(object.encryptedPayload)), 0);
                else if (object.encryptedPayload.length >= 0)
                    message.encryptedPayload = object.encryptedPayload;
            if (object.iv != null)
                if (typeof object.iv === "string")
                    $util.base64.decode(object.iv, message.iv = $util.newBuffer($util.base64.length(object.iv)), 0);
                else if (object.iv.length >= 0)
                    message.iv = object.iv;
            return message;
        };

        /**
         * Creates a plain object from an EncryptedPairingRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CompanionReg.EncryptedPairingRequest
         * @static
         * @param {CompanionReg.EncryptedPairingRequest} message EncryptedPairingRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EncryptedPairingRequest.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.encryptedPayload != null && $Object.hasOwnProperty.call(message, "encryptedPayload"))
                object.encryptedPayload = options.bytes === $String ? $util.base64.encode(message.encryptedPayload, 0, message.encryptedPayload.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.encryptedPayload) : message.encryptedPayload;
            if (message.iv != null && $Object.hasOwnProperty.call(message, "iv"))
                object.iv = options.bytes === $String ? $util.base64.encode(message.iv, 0, message.iv.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.iv) : message.iv;
            return object;
        };

        /**
         * Converts this EncryptedPairingRequest to JSON.
         * @function toJSON
         * @memberof CompanionReg.EncryptedPairingRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EncryptedPairingRequest.prototype.toJSON = function() {
            return EncryptedPairingRequest.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for EncryptedPairingRequest
         * @function getTypeUrl
         * @memberof CompanionReg.EncryptedPairingRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        EncryptedPairingRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/CompanionReg.EncryptedPairingRequest";
        };

        return EncryptedPairingRequest;
    })();

    CompanionReg.PairingRequest = (function() {

        /**
         * Properties of a PairingRequest.
         * @typedef {Object} CompanionReg.PairingRequest.$Properties
         * @property {Uint8Array|null} [companionPublicKey] PairingRequest companionPublicKey
         * @property {Uint8Array|null} [companionIdentityKey] PairingRequest companionIdentityKey
         * @property {Uint8Array|null} [advSecret] PairingRequest advSecret
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a PairingRequest.
         * @memberof CompanionReg
         * @interface IPairingRequest
         * @augments CompanionReg.PairingRequest.$Properties
         * @deprecated Use CompanionReg.PairingRequest.$Properties instead.
         */

        /**
         * Shape of a PairingRequest.
         * @typedef {CompanionReg.PairingRequest.$Properties} CompanionReg.PairingRequest.$Shape
         */

        /**
         * Constructs a new PairingRequest.
         * @memberof CompanionReg
         * @classdesc Represents a PairingRequest.
         * @constructor
         * @param {CompanionReg.PairingRequest.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        var PairingRequest = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * PairingRequest companionPublicKey.
         * @member {Uint8Array|null|undefined} companionPublicKey
         * @memberof CompanionReg.PairingRequest
         * @instance
         */
        PairingRequest.prototype.companionPublicKey = null;

        /**
         * PairingRequest companionIdentityKey.
         * @member {Uint8Array|null|undefined} companionIdentityKey
         * @memberof CompanionReg.PairingRequest
         * @instance
         */
        PairingRequest.prototype.companionIdentityKey = null;

        /**
         * PairingRequest advSecret.
         * @member {Uint8Array|null|undefined} advSecret
         * @memberof CompanionReg.PairingRequest
         * @instance
         */
        PairingRequest.prototype.advSecret = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(PairingRequest.prototype, "_companionPublicKey", {
            get: $util.oneOfGetter($oneOfFields = ["companionPublicKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(PairingRequest.prototype, "_companionIdentityKey", {
            get: $util.oneOfGetter($oneOfFields = ["companionIdentityKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(PairingRequest.prototype, "_advSecret", {
            get: $util.oneOfGetter($oneOfFields = ["advSecret"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new PairingRequest instance using the specified properties.
         * @function create
         * @memberof CompanionReg.PairingRequest
         * @static
         * @param {CompanionReg.PairingRequest.$Properties=} [properties] Properties to set
         * @returns {CompanionReg.PairingRequest} PairingRequest instance
         * @type {{
         *   (properties: CompanionReg.PairingRequest.$Shape): CompanionReg.PairingRequest & CompanionReg.PairingRequest.$Shape;
         *   (properties?: CompanionReg.PairingRequest.$Properties): CompanionReg.PairingRequest;
         * }}
         */
        PairingRequest.create = function(properties) {
            return new PairingRequest(properties);
        };

        /**
         * Encodes the specified PairingRequest message. Does not implicitly {@link CompanionReg.PairingRequest.verify|verify} messages.
         * @function encode
         * @memberof CompanionReg.PairingRequest
         * @static
         * @param {CompanionReg.PairingRequest.$Properties} message PairingRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PairingRequest.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.companionPublicKey != null && $Object.hasOwnProperty.call(message, "companionPublicKey"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.companionPublicKey);
            if (message.companionIdentityKey != null && $Object.hasOwnProperty.call(message, "companionIdentityKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.companionIdentityKey);
            if (message.advSecret != null && $Object.hasOwnProperty.call(message, "advSecret"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.advSecret);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified PairingRequest message, length delimited. Does not implicitly {@link CompanionReg.PairingRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CompanionReg.PairingRequest
         * @static
         * @param {CompanionReg.PairingRequest.$Properties} message PairingRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PairingRequest.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a PairingRequest message from the specified reader or buffer.
         * @function decode
         * @memberof CompanionReg.PairingRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CompanionReg.PairingRequest & CompanionReg.PairingRequest.$Shape} PairingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PairingRequest.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.CompanionReg.PairingRequest();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        message.companionPublicKey = reader.bytes();
                        message._companionPublicKey = "companionPublicKey";
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.companionIdentityKey = reader.bytes();
                        message._companionIdentityKey = "companionIdentityKey";
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        message.advSecret = reader.bytes();
                        message._advSecret = "advSecret";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a PairingRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CompanionReg.PairingRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CompanionReg.PairingRequest & CompanionReg.PairingRequest.$Shape} PairingRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PairingRequest.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PairingRequest message.
         * @function verify
         * @memberof CompanionReg.PairingRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PairingRequest.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.companionPublicKey != null && $Object.hasOwnProperty.call(message, "companionPublicKey")) {
                properties._companionPublicKey = 1;
                if (!(message.companionPublicKey && typeof message.companionPublicKey.length === "number" || $util.isString(message.companionPublicKey)))
                    return "companionPublicKey: buffer expected";
            }
            if (message.companionIdentityKey != null && $Object.hasOwnProperty.call(message, "companionIdentityKey")) {
                properties._companionIdentityKey = 1;
                if (!(message.companionIdentityKey && typeof message.companionIdentityKey.length === "number" || $util.isString(message.companionIdentityKey)))
                    return "companionIdentityKey: buffer expected";
            }
            if (message.advSecret != null && $Object.hasOwnProperty.call(message, "advSecret")) {
                properties._advSecret = 1;
                if (!(message.advSecret && typeof message.advSecret.length === "number" || $util.isString(message.advSecret)))
                    return "advSecret: buffer expected";
            }
            return null;
        };

        /**
         * Creates a PairingRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CompanionReg.PairingRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CompanionReg.PairingRequest} PairingRequest
         */
        PairingRequest.fromObject = function (object, _depth) {
            if (object instanceof $root.CompanionReg.PairingRequest)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".CompanionReg.PairingRequest: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.CompanionReg.PairingRequest();
            if (object.companionPublicKey != null)
                if (typeof object.companionPublicKey === "string")
                    $util.base64.decode(object.companionPublicKey, message.companionPublicKey = $util.newBuffer($util.base64.length(object.companionPublicKey)), 0);
                else if (object.companionPublicKey.length >= 0)
                    message.companionPublicKey = object.companionPublicKey;
            if (object.companionIdentityKey != null)
                if (typeof object.companionIdentityKey === "string")
                    $util.base64.decode(object.companionIdentityKey, message.companionIdentityKey = $util.newBuffer($util.base64.length(object.companionIdentityKey)), 0);
                else if (object.companionIdentityKey.length >= 0)
                    message.companionIdentityKey = object.companionIdentityKey;
            if (object.advSecret != null)
                if (typeof object.advSecret === "string")
                    $util.base64.decode(object.advSecret, message.advSecret = $util.newBuffer($util.base64.length(object.advSecret)), 0);
                else if (object.advSecret.length >= 0)
                    message.advSecret = object.advSecret;
            return message;
        };

        /**
         * Creates a plain object from a PairingRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CompanionReg.PairingRequest
         * @static
         * @param {CompanionReg.PairingRequest} message PairingRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PairingRequest.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.companionPublicKey != null && $Object.hasOwnProperty.call(message, "companionPublicKey"))
                object.companionPublicKey = options.bytes === $String ? $util.base64.encode(message.companionPublicKey, 0, message.companionPublicKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.companionPublicKey) : message.companionPublicKey;
            if (message.companionIdentityKey != null && $Object.hasOwnProperty.call(message, "companionIdentityKey"))
                object.companionIdentityKey = options.bytes === $String ? $util.base64.encode(message.companionIdentityKey, 0, message.companionIdentityKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.companionIdentityKey) : message.companionIdentityKey;
            if (message.advSecret != null && $Object.hasOwnProperty.call(message, "advSecret"))
                object.advSecret = options.bytes === $String ? $util.base64.encode(message.advSecret, 0, message.advSecret.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.advSecret) : message.advSecret;
            return object;
        };

        /**
         * Converts this PairingRequest to JSON.
         * @function toJSON
         * @memberof CompanionReg.PairingRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PairingRequest.prototype.toJSON = function() {
            return PairingRequest.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for PairingRequest
         * @function getTypeUrl
         * @memberof CompanionReg.PairingRequest
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        PairingRequest.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/CompanionReg.PairingRequest";
        };

        return PairingRequest;
    })();

    CompanionReg.PrimaryEphemeralIdentity = (function() {

        /**
         * Properties of a PrimaryEphemeralIdentity.
         * @typedef {Object} CompanionReg.PrimaryEphemeralIdentity.$Properties
         * @property {Uint8Array|null} [publicKey] PrimaryEphemeralIdentity publicKey
         * @property {Uint8Array|null} [nonce] PrimaryEphemeralIdentity nonce
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a PrimaryEphemeralIdentity.
         * @memberof CompanionReg
         * @interface IPrimaryEphemeralIdentity
         * @augments CompanionReg.PrimaryEphemeralIdentity.$Properties
         * @deprecated Use CompanionReg.PrimaryEphemeralIdentity.$Properties instead.
         */

        /**
         * Shape of a PrimaryEphemeralIdentity.
         * @typedef {CompanionReg.PrimaryEphemeralIdentity.$Properties} CompanionReg.PrimaryEphemeralIdentity.$Shape
         */

        /**
         * Constructs a new PrimaryEphemeralIdentity.
         * @memberof CompanionReg
         * @classdesc Represents a PrimaryEphemeralIdentity.
         * @constructor
         * @param {CompanionReg.PrimaryEphemeralIdentity.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        var PrimaryEphemeralIdentity = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * PrimaryEphemeralIdentity publicKey.
         * @member {Uint8Array|null|undefined} publicKey
         * @memberof CompanionReg.PrimaryEphemeralIdentity
         * @instance
         */
        PrimaryEphemeralIdentity.prototype.publicKey = null;

        /**
         * PrimaryEphemeralIdentity nonce.
         * @member {Uint8Array|null|undefined} nonce
         * @memberof CompanionReg.PrimaryEphemeralIdentity
         * @instance
         */
        PrimaryEphemeralIdentity.prototype.nonce = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(PrimaryEphemeralIdentity.prototype, "_publicKey", {
            get: $util.oneOfGetter($oneOfFields = ["publicKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(PrimaryEphemeralIdentity.prototype, "_nonce", {
            get: $util.oneOfGetter($oneOfFields = ["nonce"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new PrimaryEphemeralIdentity instance using the specified properties.
         * @function create
         * @memberof CompanionReg.PrimaryEphemeralIdentity
         * @static
         * @param {CompanionReg.PrimaryEphemeralIdentity.$Properties=} [properties] Properties to set
         * @returns {CompanionReg.PrimaryEphemeralIdentity} PrimaryEphemeralIdentity instance
         * @type {{
         *   (properties: CompanionReg.PrimaryEphemeralIdentity.$Shape): CompanionReg.PrimaryEphemeralIdentity & CompanionReg.PrimaryEphemeralIdentity.$Shape;
         *   (properties?: CompanionReg.PrimaryEphemeralIdentity.$Properties): CompanionReg.PrimaryEphemeralIdentity;
         * }}
         */
        PrimaryEphemeralIdentity.create = function(properties) {
            return new PrimaryEphemeralIdentity(properties);
        };

        /**
         * Encodes the specified PrimaryEphemeralIdentity message. Does not implicitly {@link CompanionReg.PrimaryEphemeralIdentity.verify|verify} messages.
         * @function encode
         * @memberof CompanionReg.PrimaryEphemeralIdentity
         * @static
         * @param {CompanionReg.PrimaryEphemeralIdentity.$Properties} message PrimaryEphemeralIdentity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrimaryEphemeralIdentity.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.publicKey != null && $Object.hasOwnProperty.call(message, "publicKey"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.publicKey);
            if (message.nonce != null && $Object.hasOwnProperty.call(message, "nonce"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.nonce);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified PrimaryEphemeralIdentity message, length delimited. Does not implicitly {@link CompanionReg.PrimaryEphemeralIdentity.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CompanionReg.PrimaryEphemeralIdentity
         * @static
         * @param {CompanionReg.PrimaryEphemeralIdentity.$Properties} message PrimaryEphemeralIdentity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrimaryEphemeralIdentity.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a PrimaryEphemeralIdentity message from the specified reader or buffer.
         * @function decode
         * @memberof CompanionReg.PrimaryEphemeralIdentity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CompanionReg.PrimaryEphemeralIdentity & CompanionReg.PrimaryEphemeralIdentity.$Shape} PrimaryEphemeralIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrimaryEphemeralIdentity.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.CompanionReg.PrimaryEphemeralIdentity();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        message.publicKey = reader.bytes();
                        message._publicKey = "publicKey";
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.nonce = reader.bytes();
                        message._nonce = "nonce";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a PrimaryEphemeralIdentity message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CompanionReg.PrimaryEphemeralIdentity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CompanionReg.PrimaryEphemeralIdentity & CompanionReg.PrimaryEphemeralIdentity.$Shape} PrimaryEphemeralIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrimaryEphemeralIdentity.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PrimaryEphemeralIdentity message.
         * @function verify
         * @memberof CompanionReg.PrimaryEphemeralIdentity
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PrimaryEphemeralIdentity.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.publicKey != null && $Object.hasOwnProperty.call(message, "publicKey")) {
                properties._publicKey = 1;
                if (!(message.publicKey && typeof message.publicKey.length === "number" || $util.isString(message.publicKey)))
                    return "publicKey: buffer expected";
            }
            if (message.nonce != null && $Object.hasOwnProperty.call(message, "nonce")) {
                properties._nonce = 1;
                if (!(message.nonce && typeof message.nonce.length === "number" || $util.isString(message.nonce)))
                    return "nonce: buffer expected";
            }
            return null;
        };

        /**
         * Creates a PrimaryEphemeralIdentity message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CompanionReg.PrimaryEphemeralIdentity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CompanionReg.PrimaryEphemeralIdentity} PrimaryEphemeralIdentity
         */
        PrimaryEphemeralIdentity.fromObject = function (object, _depth) {
            if (object instanceof $root.CompanionReg.PrimaryEphemeralIdentity)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".CompanionReg.PrimaryEphemeralIdentity: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.CompanionReg.PrimaryEphemeralIdentity();
            if (object.publicKey != null)
                if (typeof object.publicKey === "string")
                    $util.base64.decode(object.publicKey, message.publicKey = $util.newBuffer($util.base64.length(object.publicKey)), 0);
                else if (object.publicKey.length >= 0)
                    message.publicKey = object.publicKey;
            if (object.nonce != null)
                if (typeof object.nonce === "string")
                    $util.base64.decode(object.nonce, message.nonce = $util.newBuffer($util.base64.length(object.nonce)), 0);
                else if (object.nonce.length >= 0)
                    message.nonce = object.nonce;
            return message;
        };

        /**
         * Creates a plain object from a PrimaryEphemeralIdentity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CompanionReg.PrimaryEphemeralIdentity
         * @static
         * @param {CompanionReg.PrimaryEphemeralIdentity} message PrimaryEphemeralIdentity
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PrimaryEphemeralIdentity.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.publicKey != null && $Object.hasOwnProperty.call(message, "publicKey"))
                object.publicKey = options.bytes === $String ? $util.base64.encode(message.publicKey, 0, message.publicKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.publicKey) : message.publicKey;
            if (message.nonce != null && $Object.hasOwnProperty.call(message, "nonce"))
                object.nonce = options.bytes === $String ? $util.base64.encode(message.nonce, 0, message.nonce.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.nonce) : message.nonce;
            return object;
        };

        /**
         * Converts this PrimaryEphemeralIdentity to JSON.
         * @function toJSON
         * @memberof CompanionReg.PrimaryEphemeralIdentity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PrimaryEphemeralIdentity.prototype.toJSON = function() {
            return PrimaryEphemeralIdentity.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for PrimaryEphemeralIdentity
         * @function getTypeUrl
         * @memberof CompanionReg.PrimaryEphemeralIdentity
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        PrimaryEphemeralIdentity.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/CompanionReg.PrimaryEphemeralIdentity";
        };

        return PrimaryEphemeralIdentity;
    })();

    CompanionReg.ProloguePayload = (function() {

        /**
         * Properties of a ProloguePayload.
         * @typedef {Object} CompanionReg.ProloguePayload.$Properties
         * @property {Uint8Array|null} [companionEphemeralIdentity] ProloguePayload companionEphemeralIdentity
         * @property {CompanionReg.CompanionCommitment.$Properties|null} [commitment] ProloguePayload commitment
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a ProloguePayload.
         * @memberof CompanionReg
         * @interface IProloguePayload
         * @augments CompanionReg.ProloguePayload.$Properties
         * @deprecated Use CompanionReg.ProloguePayload.$Properties instead.
         */

        /**
         * Shape of a ProloguePayload.
         * @typedef {CompanionReg.ProloguePayload.$Properties} CompanionReg.ProloguePayload.$Shape
         */

        /**
         * Constructs a new ProloguePayload.
         * @memberof CompanionReg
         * @classdesc Represents a ProloguePayload.
         * @constructor
         * @param {CompanionReg.ProloguePayload.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        var ProloguePayload = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * ProloguePayload companionEphemeralIdentity.
         * @member {Uint8Array|null|undefined} companionEphemeralIdentity
         * @memberof CompanionReg.ProloguePayload
         * @instance
         */
        ProloguePayload.prototype.companionEphemeralIdentity = null;

        /**
         * ProloguePayload commitment.
         * @member {CompanionReg.CompanionCommitment.$Properties|null|undefined} commitment
         * @memberof CompanionReg.ProloguePayload
         * @instance
         */
        ProloguePayload.prototype.commitment = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ProloguePayload.prototype, "_companionEphemeralIdentity", {
            get: $util.oneOfGetter($oneOfFields = ["companionEphemeralIdentity"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ProloguePayload.prototype, "_commitment", {
            get: $util.oneOfGetter($oneOfFields = ["commitment"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ProloguePayload instance using the specified properties.
         * @function create
         * @memberof CompanionReg.ProloguePayload
         * @static
         * @param {CompanionReg.ProloguePayload.$Properties=} [properties] Properties to set
         * @returns {CompanionReg.ProloguePayload} ProloguePayload instance
         * @type {{
         *   (properties: CompanionReg.ProloguePayload.$Shape): CompanionReg.ProloguePayload & CompanionReg.ProloguePayload.$Shape;
         *   (properties?: CompanionReg.ProloguePayload.$Properties): CompanionReg.ProloguePayload;
         * }}
         */
        ProloguePayload.create = function(properties) {
            return new ProloguePayload(properties);
        };

        /**
         * Encodes the specified ProloguePayload message. Does not implicitly {@link CompanionReg.ProloguePayload.verify|verify} messages.
         * @function encode
         * @memberof CompanionReg.ProloguePayload
         * @static
         * @param {CompanionReg.ProloguePayload.$Properties} message ProloguePayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProloguePayload.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.companionEphemeralIdentity != null && $Object.hasOwnProperty.call(message, "companionEphemeralIdentity"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.companionEphemeralIdentity);
            if (message.commitment != null && $Object.hasOwnProperty.call(message, "commitment"))
                $root.CompanionReg.CompanionCommitment.encode(message.commitment, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified ProloguePayload message, length delimited. Does not implicitly {@link CompanionReg.ProloguePayload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CompanionReg.ProloguePayload
         * @static
         * @param {CompanionReg.ProloguePayload.$Properties} message ProloguePayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ProloguePayload.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a ProloguePayload message from the specified reader or buffer.
         * @function decode
         * @memberof CompanionReg.ProloguePayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CompanionReg.ProloguePayload & CompanionReg.ProloguePayload.$Shape} ProloguePayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProloguePayload.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.CompanionReg.ProloguePayload();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        message.companionEphemeralIdentity = reader.bytes();
                        message._companionEphemeralIdentity = "companionEphemeralIdentity";
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.commitment = $root.CompanionReg.CompanionCommitment.decode(reader, reader.uint32(), $undefined, _depth + 1, message.commitment);
                        message._commitment = "commitment";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a ProloguePayload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CompanionReg.ProloguePayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CompanionReg.ProloguePayload & CompanionReg.ProloguePayload.$Shape} ProloguePayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ProloguePayload.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ProloguePayload message.
         * @function verify
         * @memberof CompanionReg.ProloguePayload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ProloguePayload.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.companionEphemeralIdentity != null && $Object.hasOwnProperty.call(message, "companionEphemeralIdentity")) {
                properties._companionEphemeralIdentity = 1;
                if (!(message.companionEphemeralIdentity && typeof message.companionEphemeralIdentity.length === "number" || $util.isString(message.companionEphemeralIdentity)))
                    return "companionEphemeralIdentity: buffer expected";
            }
            if (message.commitment != null && $Object.hasOwnProperty.call(message, "commitment")) {
                properties._commitment = 1;
                {
                    var error = $root.CompanionReg.CompanionCommitment.verify(message.commitment, _depth + 1);
                    if (error)
                        return "commitment." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ProloguePayload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CompanionReg.ProloguePayload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CompanionReg.ProloguePayload} ProloguePayload
         */
        ProloguePayload.fromObject = function (object, _depth) {
            if (object instanceof $root.CompanionReg.ProloguePayload)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".CompanionReg.ProloguePayload: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.CompanionReg.ProloguePayload();
            if (object.companionEphemeralIdentity != null)
                if (typeof object.companionEphemeralIdentity === "string")
                    $util.base64.decode(object.companionEphemeralIdentity, message.companionEphemeralIdentity = $util.newBuffer($util.base64.length(object.companionEphemeralIdentity)), 0);
                else if (object.companionEphemeralIdentity.length >= 0)
                    message.companionEphemeralIdentity = object.companionEphemeralIdentity;
            if (object.commitment != null) {
                if (!$util.isObject(object.commitment))
                    throw $TypeError(".CompanionReg.ProloguePayload.commitment: object expected");
                message.commitment = $root.CompanionReg.CompanionCommitment.fromObject(object.commitment, _depth + 1);
            }
            return message;
        };

        /**
         * Creates a plain object from a ProloguePayload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CompanionReg.ProloguePayload
         * @static
         * @param {CompanionReg.ProloguePayload} message ProloguePayload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ProloguePayload.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.companionEphemeralIdentity != null && $Object.hasOwnProperty.call(message, "companionEphemeralIdentity"))
                object.companionEphemeralIdentity = options.bytes === $String ? $util.base64.encode(message.companionEphemeralIdentity, 0, message.companionEphemeralIdentity.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.companionEphemeralIdentity) : message.companionEphemeralIdentity;
            if (message.commitment != null && $Object.hasOwnProperty.call(message, "commitment"))
                object.commitment = $root.CompanionReg.CompanionCommitment.toObject(message.commitment, options, _depth + 1);
            return object;
        };

        /**
         * Converts this ProloguePayload to JSON.
         * @function toJSON
         * @memberof CompanionReg.ProloguePayload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ProloguePayload.prototype.toJSON = function() {
            return ProloguePayload.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for ProloguePayload
         * @function getTypeUrl
         * @memberof CompanionReg.ProloguePayload
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        ProloguePayload.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/CompanionReg.ProloguePayload";
        };

        return ProloguePayload;
    })();

    CompanionReg.CompanionCommitment = (function() {

        /**
         * Properties of a CompanionCommitment.
         * @typedef {Object} CompanionReg.CompanionCommitment.$Properties
         * @property {Uint8Array|null} [hash] CompanionCommitment hash
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a CompanionCommitment.
         * @memberof CompanionReg
         * @interface ICompanionCommitment
         * @augments CompanionReg.CompanionCommitment.$Properties
         * @deprecated Use CompanionReg.CompanionCommitment.$Properties instead.
         */

        /**
         * Shape of a CompanionCommitment.
         * @typedef {CompanionReg.CompanionCommitment.$Properties} CompanionReg.CompanionCommitment.$Shape
         */

        /**
         * Constructs a new CompanionCommitment.
         * @memberof CompanionReg
         * @classdesc Represents a CompanionCommitment.
         * @constructor
         * @param {CompanionReg.CompanionCommitment.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        var CompanionCommitment = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * CompanionCommitment hash.
         * @member {Uint8Array|null|undefined} hash
         * @memberof CompanionReg.CompanionCommitment
         * @instance
         */
        CompanionCommitment.prototype.hash = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(CompanionCommitment.prototype, "_hash", {
            get: $util.oneOfGetter($oneOfFields = ["hash"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CompanionCommitment instance using the specified properties.
         * @function create
         * @memberof CompanionReg.CompanionCommitment
         * @static
         * @param {CompanionReg.CompanionCommitment.$Properties=} [properties] Properties to set
         * @returns {CompanionReg.CompanionCommitment} CompanionCommitment instance
         * @type {{
         *   (properties: CompanionReg.CompanionCommitment.$Shape): CompanionReg.CompanionCommitment & CompanionReg.CompanionCommitment.$Shape;
         *   (properties?: CompanionReg.CompanionCommitment.$Properties): CompanionReg.CompanionCommitment;
         * }}
         */
        CompanionCommitment.create = function(properties) {
            return new CompanionCommitment(properties);
        };

        /**
         * Encodes the specified CompanionCommitment message. Does not implicitly {@link CompanionReg.CompanionCommitment.verify|verify} messages.
         * @function encode
         * @memberof CompanionReg.CompanionCommitment
         * @static
         * @param {CompanionReg.CompanionCommitment.$Properties} message CompanionCommitment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CompanionCommitment.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.hash != null && $Object.hasOwnProperty.call(message, "hash"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.hash);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified CompanionCommitment message, length delimited. Does not implicitly {@link CompanionReg.CompanionCommitment.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CompanionReg.CompanionCommitment
         * @static
         * @param {CompanionReg.CompanionCommitment.$Properties} message CompanionCommitment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CompanionCommitment.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a CompanionCommitment message from the specified reader or buffer.
         * @function decode
         * @memberof CompanionReg.CompanionCommitment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CompanionReg.CompanionCommitment & CompanionReg.CompanionCommitment.$Shape} CompanionCommitment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CompanionCommitment.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.CompanionReg.CompanionCommitment();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        message.hash = reader.bytes();
                        message._hash = "hash";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a CompanionCommitment message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CompanionReg.CompanionCommitment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CompanionReg.CompanionCommitment & CompanionReg.CompanionCommitment.$Shape} CompanionCommitment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CompanionCommitment.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CompanionCommitment message.
         * @function verify
         * @memberof CompanionReg.CompanionCommitment
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CompanionCommitment.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.hash != null && $Object.hasOwnProperty.call(message, "hash")) {
                properties._hash = 1;
                if (!(message.hash && typeof message.hash.length === "number" || $util.isString(message.hash)))
                    return "hash: buffer expected";
            }
            return null;
        };

        /**
         * Creates a CompanionCommitment message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CompanionReg.CompanionCommitment
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CompanionReg.CompanionCommitment} CompanionCommitment
         */
        CompanionCommitment.fromObject = function (object, _depth) {
            if (object instanceof $root.CompanionReg.CompanionCommitment)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".CompanionReg.CompanionCommitment: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.CompanionReg.CompanionCommitment();
            if (object.hash != null)
                if (typeof object.hash === "string")
                    $util.base64.decode(object.hash, message.hash = $util.newBuffer($util.base64.length(object.hash)), 0);
                else if (object.hash.length >= 0)
                    message.hash = object.hash;
            return message;
        };

        /**
         * Creates a plain object from a CompanionCommitment message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CompanionReg.CompanionCommitment
         * @static
         * @param {CompanionReg.CompanionCommitment} message CompanionCommitment
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CompanionCommitment.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.hash != null && $Object.hasOwnProperty.call(message, "hash"))
                object.hash = options.bytes === $String ? $util.base64.encode(message.hash, 0, message.hash.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.hash) : message.hash;
            return object;
        };

        /**
         * Converts this CompanionCommitment to JSON.
         * @function toJSON
         * @memberof CompanionReg.CompanionCommitment
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CompanionCommitment.prototype.toJSON = function() {
            return CompanionCommitment.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for CompanionCommitment
         * @function getTypeUrl
         * @memberof CompanionReg.CompanionCommitment
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        CompanionCommitment.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/CompanionReg.CompanionCommitment";
        };

        return CompanionCommitment;
    })();

    CompanionReg.CompanionEphemeralIdentity = (function() {

        /**
         * Properties of a CompanionEphemeralIdentity.
         * @typedef {Object} CompanionReg.CompanionEphemeralIdentity.$Properties
         * @property {Uint8Array|null} [publicKey] CompanionEphemeralIdentity publicKey
         * @property {CompanionReg.DeviceProps.PlatformType|null} [deviceType] CompanionEphemeralIdentity deviceType
         * @property {string|null} [ref] CompanionEphemeralIdentity ref
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a CompanionEphemeralIdentity.
         * @memberof CompanionReg
         * @interface ICompanionEphemeralIdentity
         * @augments CompanionReg.CompanionEphemeralIdentity.$Properties
         * @deprecated Use CompanionReg.CompanionEphemeralIdentity.$Properties instead.
         */

        /**
         * Shape of a CompanionEphemeralIdentity.
         * @typedef {CompanionReg.CompanionEphemeralIdentity.$Properties} CompanionReg.CompanionEphemeralIdentity.$Shape
         */

        /**
         * Constructs a new CompanionEphemeralIdentity.
         * @memberof CompanionReg
         * @classdesc Represents a CompanionEphemeralIdentity.
         * @constructor
         * @param {CompanionReg.CompanionEphemeralIdentity.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        var CompanionEphemeralIdentity = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * CompanionEphemeralIdentity publicKey.
         * @member {Uint8Array|null|undefined} publicKey
         * @memberof CompanionReg.CompanionEphemeralIdentity
         * @instance
         */
        CompanionEphemeralIdentity.prototype.publicKey = null;

        /**
         * CompanionEphemeralIdentity deviceType.
         * @member {CompanionReg.DeviceProps.PlatformType|null|undefined} deviceType
         * @memberof CompanionReg.CompanionEphemeralIdentity
         * @instance
         */
        CompanionEphemeralIdentity.prototype.deviceType = null;

        /**
         * CompanionEphemeralIdentity ref.
         * @member {string|null|undefined} ref
         * @memberof CompanionReg.CompanionEphemeralIdentity
         * @instance
         */
        CompanionEphemeralIdentity.prototype.ref = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(CompanionEphemeralIdentity.prototype, "_publicKey", {
            get: $util.oneOfGetter($oneOfFields = ["publicKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(CompanionEphemeralIdentity.prototype, "_deviceType", {
            get: $util.oneOfGetter($oneOfFields = ["deviceType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(CompanionEphemeralIdentity.prototype, "_ref", {
            get: $util.oneOfGetter($oneOfFields = ["ref"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CompanionEphemeralIdentity instance using the specified properties.
         * @function create
         * @memberof CompanionReg.CompanionEphemeralIdentity
         * @static
         * @param {CompanionReg.CompanionEphemeralIdentity.$Properties=} [properties] Properties to set
         * @returns {CompanionReg.CompanionEphemeralIdentity} CompanionEphemeralIdentity instance
         * @type {{
         *   (properties: CompanionReg.CompanionEphemeralIdentity.$Shape): CompanionReg.CompanionEphemeralIdentity & CompanionReg.CompanionEphemeralIdentity.$Shape;
         *   (properties?: CompanionReg.CompanionEphemeralIdentity.$Properties): CompanionReg.CompanionEphemeralIdentity;
         * }}
         */
        CompanionEphemeralIdentity.create = function(properties) {
            return new CompanionEphemeralIdentity(properties);
        };

        /**
         * Encodes the specified CompanionEphemeralIdentity message. Does not implicitly {@link CompanionReg.CompanionEphemeralIdentity.verify|verify} messages.
         * @function encode
         * @memberof CompanionReg.CompanionEphemeralIdentity
         * @static
         * @param {CompanionReg.CompanionEphemeralIdentity.$Properties} message CompanionEphemeralIdentity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CompanionEphemeralIdentity.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.publicKey != null && $Object.hasOwnProperty.call(message, "publicKey"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.publicKey);
            if (message.deviceType != null && $Object.hasOwnProperty.call(message, "deviceType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.deviceType);
            if (message.ref != null && $Object.hasOwnProperty.call(message, "ref"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.ref);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified CompanionEphemeralIdentity message, length delimited. Does not implicitly {@link CompanionReg.CompanionEphemeralIdentity.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CompanionReg.CompanionEphemeralIdentity
         * @static
         * @param {CompanionReg.CompanionEphemeralIdentity.$Properties} message CompanionEphemeralIdentity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CompanionEphemeralIdentity.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a CompanionEphemeralIdentity message from the specified reader or buffer.
         * @function decode
         * @memberof CompanionReg.CompanionEphemeralIdentity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CompanionReg.CompanionEphemeralIdentity & CompanionReg.CompanionEphemeralIdentity.$Shape} CompanionEphemeralIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CompanionEphemeralIdentity.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.CompanionReg.CompanionEphemeralIdentity();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        message.publicKey = reader.bytes();
                        message._publicKey = "publicKey";
                        continue;
                    }
                case 2: {
                        if (wireType !== 0)
                            break;
                        message.deviceType = reader.int32();
                        message._deviceType = "deviceType";
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        message.ref = reader.string();
                        message._ref = "ref";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a CompanionEphemeralIdentity message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CompanionReg.CompanionEphemeralIdentity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CompanionReg.CompanionEphemeralIdentity & CompanionReg.CompanionEphemeralIdentity.$Shape} CompanionEphemeralIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CompanionEphemeralIdentity.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CompanionEphemeralIdentity message.
         * @function verify
         * @memberof CompanionReg.CompanionEphemeralIdentity
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CompanionEphemeralIdentity.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.publicKey != null && $Object.hasOwnProperty.call(message, "publicKey")) {
                properties._publicKey = 1;
                if (!(message.publicKey && typeof message.publicKey.length === "number" || $util.isString(message.publicKey)))
                    return "publicKey: buffer expected";
            }
            if (message.deviceType != null && $Object.hasOwnProperty.call(message, "deviceType")) {
                properties._deviceType = 1;
                switch (message.deviceType) {
                default:
                    return "deviceType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                    break;
                }
            }
            if (message.ref != null && $Object.hasOwnProperty.call(message, "ref")) {
                properties._ref = 1;
                if (!$util.isString(message.ref))
                    return "ref: string expected";
            }
            return null;
        };

        /**
         * Creates a CompanionEphemeralIdentity message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CompanionReg.CompanionEphemeralIdentity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CompanionReg.CompanionEphemeralIdentity} CompanionEphemeralIdentity
         */
        CompanionEphemeralIdentity.fromObject = function (object, _depth) {
            if (object instanceof $root.CompanionReg.CompanionEphemeralIdentity)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".CompanionReg.CompanionEphemeralIdentity: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.CompanionReg.CompanionEphemeralIdentity();
            if (object.publicKey != null)
                if (typeof object.publicKey === "string")
                    $util.base64.decode(object.publicKey, message.publicKey = $util.newBuffer($util.base64.length(object.publicKey)), 0);
                else if (object.publicKey.length >= 0)
                    message.publicKey = object.publicKey;
            switch (object.deviceType) {
            default:
                if (typeof object.deviceType === "number") {
                    message.deviceType = object.deviceType;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                message.deviceType = 0;
                break;
            case "CHROME":
            case 1:
                message.deviceType = 1;
                break;
            case "FIREFOX":
            case 2:
                message.deviceType = 2;
                break;
            case "IE":
            case 3:
                message.deviceType = 3;
                break;
            case "OPERA":
            case 4:
                message.deviceType = 4;
                break;
            case "SAFARI":
            case 5:
                message.deviceType = 5;
                break;
            case "EDGE":
            case 6:
                message.deviceType = 6;
                break;
            case "DESKTOP":
            case 7:
                message.deviceType = 7;
                break;
            case "IPAD":
            case 8:
                message.deviceType = 8;
                break;
            case "ANDROID_TABLET":
            case 9:
                message.deviceType = 9;
                break;
            case "OHANA":
            case 10:
                message.deviceType = 10;
                break;
            case "ALOHA":
            case 11:
                message.deviceType = 11;
                break;
            case "CATALINA":
            case 12:
                message.deviceType = 12;
                break;
            case "TCL_TV":
            case 13:
                message.deviceType = 13;
                break;
            case "IOS_PHONE":
            case 14:
                message.deviceType = 14;
                break;
            case "IOS_CATALYST":
            case 15:
                message.deviceType = 15;
                break;
            case "ANDROID_PHONE":
            case 16:
                message.deviceType = 16;
                break;
            case "ANDROID_AMBIGUOUS":
            case 17:
                message.deviceType = 17;
                break;
            case "WEAR_OS":
            case 18:
                message.deviceType = 18;
                break;
            case "AR_WRIST":
            case 19:
                message.deviceType = 19;
                break;
            case "AR_DEVICE":
            case 20:
                message.deviceType = 20;
                break;
            case "UWP":
            case 21:
                message.deviceType = 21;
                break;
            case "VR":
            case 22:
                message.deviceType = 22;
                break;
            case "CLOUD_API":
            case 23:
                message.deviceType = 23;
                break;
            case "SMARTGLASSES":
            case 24:
                message.deviceType = 24;
                break;
            }
            if (object.ref != null)
                message.ref = $String(object.ref);
            return message;
        };

        /**
         * Creates a plain object from a CompanionEphemeralIdentity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CompanionReg.CompanionEphemeralIdentity
         * @static
         * @param {CompanionReg.CompanionEphemeralIdentity} message CompanionEphemeralIdentity
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CompanionEphemeralIdentity.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.publicKey != null && $Object.hasOwnProperty.call(message, "publicKey"))
                object.publicKey = options.bytes === $String ? $util.base64.encode(message.publicKey, 0, message.publicKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.publicKey) : message.publicKey;
            if (message.deviceType != null && $Object.hasOwnProperty.call(message, "deviceType"))
                object.deviceType = options.enums === $String ? $root.CompanionReg.DeviceProps.PlatformType[message.deviceType] === $undefined ? message.deviceType : $root.CompanionReg.DeviceProps.PlatformType[message.deviceType] : message.deviceType;
            if (message.ref != null && $Object.hasOwnProperty.call(message, "ref"))
                object.ref = message.ref;
            return object;
        };

        /**
         * Converts this CompanionEphemeralIdentity to JSON.
         * @function toJSON
         * @memberof CompanionReg.CompanionEphemeralIdentity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CompanionEphemeralIdentity.prototype.toJSON = function() {
            return CompanionEphemeralIdentity.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for CompanionEphemeralIdentity
         * @function getTypeUrl
         * @memberof CompanionReg.CompanionEphemeralIdentity
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        CompanionEphemeralIdentity.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/CompanionReg.CompanionEphemeralIdentity";
        };

        return CompanionEphemeralIdentity;
    })();

    CompanionReg.DeviceProps = (function() {

        /**
         * Properties of a DeviceProps.
         * @typedef {Object} CompanionReg.DeviceProps.$Properties
         * @property {string|null} [os] DeviceProps os
         * @property {CompanionReg.DeviceProps.AppVersion.$Properties|null} [version] DeviceProps version
         * @property {CompanionReg.DeviceProps.PlatformType|null} [platformType] DeviceProps platformType
         * @property {boolean|null} [requireFullSync] DeviceProps requireFullSync
         * @property {CompanionReg.DeviceProps.HistorySyncConfig.$Properties|null} [historySyncConfig] DeviceProps historySyncConfig
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a DeviceProps.
         * @memberof CompanionReg
         * @interface IDeviceProps
         * @augments CompanionReg.DeviceProps.$Properties
         * @deprecated Use CompanionReg.DeviceProps.$Properties instead.
         */

        /**
         * Shape of a DeviceProps.
         * @typedef {CompanionReg.DeviceProps.$Properties} CompanionReg.DeviceProps.$Shape
         */

        /**
         * Constructs a new DeviceProps.
         * @memberof CompanionReg
         * @classdesc Represents a DeviceProps.
         * @constructor
         * @param {CompanionReg.DeviceProps.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        var DeviceProps = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * DeviceProps os.
         * @member {string|null|undefined} os
         * @memberof CompanionReg.DeviceProps
         * @instance
         */
        DeviceProps.prototype.os = null;

        /**
         * DeviceProps version.
         * @member {CompanionReg.DeviceProps.AppVersion.$Properties|null|undefined} version
         * @memberof CompanionReg.DeviceProps
         * @instance
         */
        DeviceProps.prototype.version = null;

        /**
         * DeviceProps platformType.
         * @member {CompanionReg.DeviceProps.PlatformType|null|undefined} platformType
         * @memberof CompanionReg.DeviceProps
         * @instance
         */
        DeviceProps.prototype.platformType = null;

        /**
         * DeviceProps requireFullSync.
         * @member {boolean|null|undefined} requireFullSync
         * @memberof CompanionReg.DeviceProps
         * @instance
         */
        DeviceProps.prototype.requireFullSync = null;

        /**
         * DeviceProps historySyncConfig.
         * @member {CompanionReg.DeviceProps.HistorySyncConfig.$Properties|null|undefined} historySyncConfig
         * @memberof CompanionReg.DeviceProps
         * @instance
         */
        DeviceProps.prototype.historySyncConfig = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(DeviceProps.prototype, "_os", {
            get: $util.oneOfGetter($oneOfFields = ["os"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(DeviceProps.prototype, "_version", {
            get: $util.oneOfGetter($oneOfFields = ["version"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(DeviceProps.prototype, "_platformType", {
            get: $util.oneOfGetter($oneOfFields = ["platformType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(DeviceProps.prototype, "_requireFullSync", {
            get: $util.oneOfGetter($oneOfFields = ["requireFullSync"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(DeviceProps.prototype, "_historySyncConfig", {
            get: $util.oneOfGetter($oneOfFields = ["historySyncConfig"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new DeviceProps instance using the specified properties.
         * @function create
         * @memberof CompanionReg.DeviceProps
         * @static
         * @param {CompanionReg.DeviceProps.$Properties=} [properties] Properties to set
         * @returns {CompanionReg.DeviceProps} DeviceProps instance
         * @type {{
         *   (properties: CompanionReg.DeviceProps.$Shape): CompanionReg.DeviceProps & CompanionReg.DeviceProps.$Shape;
         *   (properties?: CompanionReg.DeviceProps.$Properties): CompanionReg.DeviceProps;
         * }}
         */
        DeviceProps.create = function(properties) {
            return new DeviceProps(properties);
        };

        /**
         * Encodes the specified DeviceProps message. Does not implicitly {@link CompanionReg.DeviceProps.verify|verify} messages.
         * @function encode
         * @memberof CompanionReg.DeviceProps
         * @static
         * @param {CompanionReg.DeviceProps.$Properties} message DeviceProps message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceProps.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.os != null && $Object.hasOwnProperty.call(message, "os"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.os);
            if (message.version != null && $Object.hasOwnProperty.call(message, "version"))
                $root.CompanionReg.DeviceProps.AppVersion.encode(message.version, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
            if (message.platformType != null && $Object.hasOwnProperty.call(message, "platformType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.platformType);
            if (message.requireFullSync != null && $Object.hasOwnProperty.call(message, "requireFullSync"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.requireFullSync);
            if (message.historySyncConfig != null && $Object.hasOwnProperty.call(message, "historySyncConfig"))
                $root.CompanionReg.DeviceProps.HistorySyncConfig.encode(message.historySyncConfig, writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified DeviceProps message, length delimited. Does not implicitly {@link CompanionReg.DeviceProps.verify|verify} messages.
         * @function encodeDelimited
         * @memberof CompanionReg.DeviceProps
         * @static
         * @param {CompanionReg.DeviceProps.$Properties} message DeviceProps message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceProps.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a DeviceProps message from the specified reader or buffer.
         * @function decode
         * @memberof CompanionReg.DeviceProps
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {CompanionReg.DeviceProps & CompanionReg.DeviceProps.$Shape} DeviceProps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceProps.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.CompanionReg.DeviceProps();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        message.os = reader.string();
                        message._os = "os";
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.version = $root.CompanionReg.DeviceProps.AppVersion.decode(reader, reader.uint32(), $undefined, _depth + 1, message.version);
                        message._version = "version";
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        message.platformType = reader.int32();
                        message._platformType = "platformType";
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        message.requireFullSync = reader.bool();
                        message._requireFullSync = "requireFullSync";
                        continue;
                    }
                case 5: {
                        if (wireType !== 2)
                            break;
                        message.historySyncConfig = $root.CompanionReg.DeviceProps.HistorySyncConfig.decode(reader, reader.uint32(), $undefined, _depth + 1, message.historySyncConfig);
                        message._historySyncConfig = "historySyncConfig";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a DeviceProps message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof CompanionReg.DeviceProps
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {CompanionReg.DeviceProps & CompanionReg.DeviceProps.$Shape} DeviceProps
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceProps.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeviceProps message.
         * @function verify
         * @memberof CompanionReg.DeviceProps
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeviceProps.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.os != null && $Object.hasOwnProperty.call(message, "os")) {
                properties._os = 1;
                if (!$util.isString(message.os))
                    return "os: string expected";
            }
            if (message.version != null && $Object.hasOwnProperty.call(message, "version")) {
                properties._version = 1;
                {
                    var error = $root.CompanionReg.DeviceProps.AppVersion.verify(message.version, _depth + 1);
                    if (error)
                        return "version." + error;
                }
            }
            if (message.platformType != null && $Object.hasOwnProperty.call(message, "platformType")) {
                properties._platformType = 1;
                switch (message.platformType) {
                default:
                    return "platformType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                case 24:
                    break;
                }
            }
            if (message.requireFullSync != null && $Object.hasOwnProperty.call(message, "requireFullSync")) {
                properties._requireFullSync = 1;
                if (typeof message.requireFullSync !== "boolean")
                    return "requireFullSync: boolean expected";
            }
            if (message.historySyncConfig != null && $Object.hasOwnProperty.call(message, "historySyncConfig")) {
                properties._historySyncConfig = 1;
                {
                    var error = $root.CompanionReg.DeviceProps.HistorySyncConfig.verify(message.historySyncConfig, _depth + 1);
                    if (error)
                        return "historySyncConfig." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DeviceProps message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof CompanionReg.DeviceProps
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {CompanionReg.DeviceProps} DeviceProps
         */
        DeviceProps.fromObject = function (object, _depth) {
            if (object instanceof $root.CompanionReg.DeviceProps)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".CompanionReg.DeviceProps: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.CompanionReg.DeviceProps();
            if (object.os != null)
                message.os = $String(object.os);
            if (object.version != null) {
                if (!$util.isObject(object.version))
                    throw $TypeError(".CompanionReg.DeviceProps.version: object expected");
                message.version = $root.CompanionReg.DeviceProps.AppVersion.fromObject(object.version, _depth + 1);
            }
            switch (object.platformType) {
            default:
                if (typeof object.platformType === "number") {
                    message.platformType = object.platformType;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                message.platformType = 0;
                break;
            case "CHROME":
            case 1:
                message.platformType = 1;
                break;
            case "FIREFOX":
            case 2:
                message.platformType = 2;
                break;
            case "IE":
            case 3:
                message.platformType = 3;
                break;
            case "OPERA":
            case 4:
                message.platformType = 4;
                break;
            case "SAFARI":
            case 5:
                message.platformType = 5;
                break;
            case "EDGE":
            case 6:
                message.platformType = 6;
                break;
            case "DESKTOP":
            case 7:
                message.platformType = 7;
                break;
            case "IPAD":
            case 8:
                message.platformType = 8;
                break;
            case "ANDROID_TABLET":
            case 9:
                message.platformType = 9;
                break;
            case "OHANA":
            case 10:
                message.platformType = 10;
                break;
            case "ALOHA":
            case 11:
                message.platformType = 11;
                break;
            case "CATALINA":
            case 12:
                message.platformType = 12;
                break;
            case "TCL_TV":
            case 13:
                message.platformType = 13;
                break;
            case "IOS_PHONE":
            case 14:
                message.platformType = 14;
                break;
            case "IOS_CATALYST":
            case 15:
                message.platformType = 15;
                break;
            case "ANDROID_PHONE":
            case 16:
                message.platformType = 16;
                break;
            case "ANDROID_AMBIGUOUS":
            case 17:
                message.platformType = 17;
                break;
            case "WEAR_OS":
            case 18:
                message.platformType = 18;
                break;
            case "AR_WRIST":
            case 19:
                message.platformType = 19;
                break;
            case "AR_DEVICE":
            case 20:
                message.platformType = 20;
                break;
            case "UWP":
            case 21:
                message.platformType = 21;
                break;
            case "VR":
            case 22:
                message.platformType = 22;
                break;
            case "CLOUD_API":
            case 23:
                message.platformType = 23;
                break;
            case "SMARTGLASSES":
            case 24:
                message.platformType = 24;
                break;
            }
            if (object.requireFullSync != null)
                message.requireFullSync = $Boolean(object.requireFullSync);
            if (object.historySyncConfig != null) {
                if (!$util.isObject(object.historySyncConfig))
                    throw $TypeError(".CompanionReg.DeviceProps.historySyncConfig: object expected");
                message.historySyncConfig = $root.CompanionReg.DeviceProps.HistorySyncConfig.fromObject(object.historySyncConfig, _depth + 1);
            }
            return message;
        };

        /**
         * Creates a plain object from a DeviceProps message. Also converts values to other types if specified.
         * @function toObject
         * @memberof CompanionReg.DeviceProps
         * @static
         * @param {CompanionReg.DeviceProps} message DeviceProps
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeviceProps.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.os != null && $Object.hasOwnProperty.call(message, "os"))
                object.os = message.os;
            if (message.version != null && $Object.hasOwnProperty.call(message, "version"))
                object.version = $root.CompanionReg.DeviceProps.AppVersion.toObject(message.version, options, _depth + 1);
            if (message.platformType != null && $Object.hasOwnProperty.call(message, "platformType"))
                object.platformType = options.enums === $String ? $root.CompanionReg.DeviceProps.PlatformType[message.platformType] === $undefined ? message.platformType : $root.CompanionReg.DeviceProps.PlatformType[message.platformType] : message.platformType;
            if (message.requireFullSync != null && $Object.hasOwnProperty.call(message, "requireFullSync"))
                object.requireFullSync = message.requireFullSync;
            if (message.historySyncConfig != null && $Object.hasOwnProperty.call(message, "historySyncConfig"))
                object.historySyncConfig = $root.CompanionReg.DeviceProps.HistorySyncConfig.toObject(message.historySyncConfig, options, _depth + 1);
            return object;
        };

        /**
         * Converts this DeviceProps to JSON.
         * @function toJSON
         * @memberof CompanionReg.DeviceProps
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeviceProps.prototype.toJSON = function() {
            return DeviceProps.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for DeviceProps
         * @function getTypeUrl
         * @memberof CompanionReg.DeviceProps
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        DeviceProps.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/CompanionReg.DeviceProps";
        };

        DeviceProps.AppVersion = (function() {

            /**
             * Properties of an AppVersion.
             * @typedef {Object} CompanionReg.DeviceProps.AppVersion.$Properties
             * @property {number|null} [primary] AppVersion primary
             * @property {number|null} [secondary] AppVersion secondary
             * @property {number|null} [tertiary] AppVersion tertiary
             * @property {number|null} [quaternary] AppVersion quaternary
             * @property {number|null} [quinary] AppVersion quinary
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of an AppVersion.
             * @memberof CompanionReg.DeviceProps
             * @interface IAppVersion
             * @augments CompanionReg.DeviceProps.AppVersion.$Properties
             * @deprecated Use CompanionReg.DeviceProps.AppVersion.$Properties instead.
             */

            /**
             * Shape of an AppVersion.
             * @typedef {CompanionReg.DeviceProps.AppVersion.$Properties} CompanionReg.DeviceProps.AppVersion.$Shape
             */

            /**
             * Constructs a new AppVersion.
             * @memberof CompanionReg.DeviceProps
             * @classdesc Represents an AppVersion.
             * @constructor
             * @param {CompanionReg.DeviceProps.AppVersion.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            var AppVersion = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * AppVersion primary.
             * @member {number|null|undefined} primary
             * @memberof CompanionReg.DeviceProps.AppVersion
             * @instance
             */
            AppVersion.prototype.primary = null;

            /**
             * AppVersion secondary.
             * @member {number|null|undefined} secondary
             * @memberof CompanionReg.DeviceProps.AppVersion
             * @instance
             */
            AppVersion.prototype.secondary = null;

            /**
             * AppVersion tertiary.
             * @member {number|null|undefined} tertiary
             * @memberof CompanionReg.DeviceProps.AppVersion
             * @instance
             */
            AppVersion.prototype.tertiary = null;

            /**
             * AppVersion quaternary.
             * @member {number|null|undefined} quaternary
             * @memberof CompanionReg.DeviceProps.AppVersion
             * @instance
             */
            AppVersion.prototype.quaternary = null;

            /**
             * AppVersion quinary.
             * @member {number|null|undefined} quinary
             * @memberof CompanionReg.DeviceProps.AppVersion
             * @instance
             */
            AppVersion.prototype.quinary = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(AppVersion.prototype, "_primary", {
                get: $util.oneOfGetter($oneOfFields = ["primary"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(AppVersion.prototype, "_secondary", {
                get: $util.oneOfGetter($oneOfFields = ["secondary"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(AppVersion.prototype, "_tertiary", {
                get: $util.oneOfGetter($oneOfFields = ["tertiary"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(AppVersion.prototype, "_quaternary", {
                get: $util.oneOfGetter($oneOfFields = ["quaternary"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(AppVersion.prototype, "_quinary", {
                get: $util.oneOfGetter($oneOfFields = ["quinary"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new AppVersion instance using the specified properties.
             * @function create
             * @memberof CompanionReg.DeviceProps.AppVersion
             * @static
             * @param {CompanionReg.DeviceProps.AppVersion.$Properties=} [properties] Properties to set
             * @returns {CompanionReg.DeviceProps.AppVersion} AppVersion instance
             * @type {{
             *   (properties: CompanionReg.DeviceProps.AppVersion.$Shape): CompanionReg.DeviceProps.AppVersion & CompanionReg.DeviceProps.AppVersion.$Shape;
             *   (properties?: CompanionReg.DeviceProps.AppVersion.$Properties): CompanionReg.DeviceProps.AppVersion;
             * }}
             */
            AppVersion.create = function(properties) {
                return new AppVersion(properties);
            };

            /**
             * Encodes the specified AppVersion message. Does not implicitly {@link CompanionReg.DeviceProps.AppVersion.verify|verify} messages.
             * @function encode
             * @memberof CompanionReg.DeviceProps.AppVersion
             * @static
             * @param {CompanionReg.DeviceProps.AppVersion.$Properties} message AppVersion message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AppVersion.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.primary != null && $Object.hasOwnProperty.call(message, "primary"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.primary);
                if (message.secondary != null && $Object.hasOwnProperty.call(message, "secondary"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.secondary);
                if (message.tertiary != null && $Object.hasOwnProperty.call(message, "tertiary"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.tertiary);
                if (message.quaternary != null && $Object.hasOwnProperty.call(message, "quaternary"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.quaternary);
                if (message.quinary != null && $Object.hasOwnProperty.call(message, "quinary"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.quinary);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified AppVersion message, length delimited. Does not implicitly {@link CompanionReg.DeviceProps.AppVersion.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CompanionReg.DeviceProps.AppVersion
             * @static
             * @param {CompanionReg.DeviceProps.AppVersion.$Properties} message AppVersion message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AppVersion.encodeDelimited = function(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes an AppVersion message from the specified reader or buffer.
             * @function decode
             * @memberof CompanionReg.DeviceProps.AppVersion
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CompanionReg.DeviceProps.AppVersion & CompanionReg.DeviceProps.AppVersion.$Shape} AppVersion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AppVersion.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.CompanionReg.DeviceProps.AppVersion();
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            message.primary = reader.uint32();
                            message._primary = "primary";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            message.secondary = reader.uint32();
                            message._secondary = "secondary";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            message.tertiary = reader.uint32();
                            message._tertiary = "tertiary";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 0)
                                break;
                            message.quaternary = reader.uint32();
                            message._quaternary = "quaternary";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 0)
                                break;
                            message.quinary = reader.uint32();
                            message._quinary = "quinary";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes an AppVersion message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CompanionReg.DeviceProps.AppVersion
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CompanionReg.DeviceProps.AppVersion & CompanionReg.DeviceProps.AppVersion.$Shape} AppVersion
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AppVersion.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AppVersion message.
             * @function verify
             * @memberof CompanionReg.DeviceProps.AppVersion
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AppVersion.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.primary != null && $Object.hasOwnProperty.call(message, "primary")) {
                    properties._primary = 1;
                    if (!$util.isInteger(message.primary))
                        return "primary: integer expected";
                }
                if (message.secondary != null && $Object.hasOwnProperty.call(message, "secondary")) {
                    properties._secondary = 1;
                    if (!$util.isInteger(message.secondary))
                        return "secondary: integer expected";
                }
                if (message.tertiary != null && $Object.hasOwnProperty.call(message, "tertiary")) {
                    properties._tertiary = 1;
                    if (!$util.isInteger(message.tertiary))
                        return "tertiary: integer expected";
                }
                if (message.quaternary != null && $Object.hasOwnProperty.call(message, "quaternary")) {
                    properties._quaternary = 1;
                    if (!$util.isInteger(message.quaternary))
                        return "quaternary: integer expected";
                }
                if (message.quinary != null && $Object.hasOwnProperty.call(message, "quinary")) {
                    properties._quinary = 1;
                    if (!$util.isInteger(message.quinary))
                        return "quinary: integer expected";
                }
                return null;
            };

            /**
             * Creates an AppVersion message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CompanionReg.DeviceProps.AppVersion
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CompanionReg.DeviceProps.AppVersion} AppVersion
             */
            AppVersion.fromObject = function (object, _depth) {
                if (object instanceof $root.CompanionReg.DeviceProps.AppVersion)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".CompanionReg.DeviceProps.AppVersion: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.CompanionReg.DeviceProps.AppVersion();
                if (object.primary != null)
                    message.primary = object.primary >>> 0;
                if (object.secondary != null)
                    message.secondary = object.secondary >>> 0;
                if (object.tertiary != null)
                    message.tertiary = object.tertiary >>> 0;
                if (object.quaternary != null)
                    message.quaternary = object.quaternary >>> 0;
                if (object.quinary != null)
                    message.quinary = object.quinary >>> 0;
                return message;
            };

            /**
             * Creates a plain object from an AppVersion message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CompanionReg.DeviceProps.AppVersion
             * @static
             * @param {CompanionReg.DeviceProps.AppVersion} message AppVersion
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AppVersion.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (message.primary != null && $Object.hasOwnProperty.call(message, "primary"))
                    object.primary = message.primary;
                if (message.secondary != null && $Object.hasOwnProperty.call(message, "secondary"))
                    object.secondary = message.secondary;
                if (message.tertiary != null && $Object.hasOwnProperty.call(message, "tertiary"))
                    object.tertiary = message.tertiary;
                if (message.quaternary != null && $Object.hasOwnProperty.call(message, "quaternary"))
                    object.quaternary = message.quaternary;
                if (message.quinary != null && $Object.hasOwnProperty.call(message, "quinary"))
                    object.quinary = message.quinary;
                return object;
            };

            /**
             * Converts this AppVersion to JSON.
             * @function toJSON
             * @memberof CompanionReg.DeviceProps.AppVersion
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AppVersion.prototype.toJSON = function() {
                return AppVersion.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for AppVersion
             * @function getTypeUrl
             * @memberof CompanionReg.DeviceProps.AppVersion
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            AppVersion.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/CompanionReg.DeviceProps.AppVersion";
            };

            return AppVersion;
        })();

        DeviceProps.HistorySyncConfig = (function() {

            /**
             * Properties of a HistorySyncConfig.
             * @typedef {Object} CompanionReg.DeviceProps.HistorySyncConfig.$Properties
             * @property {number|null} [fullSyncDaysLimit] HistorySyncConfig fullSyncDaysLimit
             * @property {number|null} [fullSyncSizeMbLimit] HistorySyncConfig fullSyncSizeMbLimit
             * @property {number|null} [storageQuotaMb] HistorySyncConfig storageQuotaMb
             * @property {boolean|null} [inlineInitialPayloadInE2EeMsg] HistorySyncConfig inlineInitialPayloadInE2EeMsg
             * @property {number|null} [recentSyncDaysLimit] HistorySyncConfig recentSyncDaysLimit
             * @property {boolean|null} [supportCallLogHistory] HistorySyncConfig supportCallLogHistory
             * @property {boolean|null} [supportBotUserAgentChatHistory] HistorySyncConfig supportBotUserAgentChatHistory
             * @property {boolean|null} [supportCagReactionsAndPolls] HistorySyncConfig supportCagReactionsAndPolls
             * @property {boolean|null} [supportBizHostedMsg] HistorySyncConfig supportBizHostedMsg
             * @property {boolean|null} [supportRecentSyncChunkMessageCountTuning] HistorySyncConfig supportRecentSyncChunkMessageCountTuning
             * @property {boolean|null} [supportHostedGroupMsg] HistorySyncConfig supportHostedGroupMsg
             * @property {boolean|null} [supportFbidBotChatHistory] HistorySyncConfig supportFbidBotChatHistory
             * @property {boolean|null} [supportAddOnHistorySyncMigration] HistorySyncConfig supportAddOnHistorySyncMigration
             * @property {boolean|null} [supportMessageAssociation] HistorySyncConfig supportMessageAssociation
             * @property {boolean|null} [supportGroupHistory] HistorySyncConfig supportGroupHistory
             * @property {boolean|null} [onDemandReady] HistorySyncConfig onDemandReady
             * @property {boolean|null} [supportGuestChat] HistorySyncConfig supportGuestChat
             * @property {boolean|null} [completeOnDemandReady] HistorySyncConfig completeOnDemandReady
             * @property {number|null} [thumbnailSyncDaysLimit] HistorySyncConfig thumbnailSyncDaysLimit
             * @property {number|null} [initialSyncMaxMessagesPerChat] HistorySyncConfig initialSyncMaxMessagesPerChat
             * @property {boolean|null} [supportManusHistory] HistorySyncConfig supportManusHistory
             * @property {boolean|null} [supportHatchHistory] HistorySyncConfig supportHatchHistory
             * @property {Array.<string>|null} [supportedBotChannelFbids] HistorySyncConfig supportedBotChannelFbids
             * @property {boolean|null} [supportInlineContacts] HistorySyncConfig supportInlineContacts
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */

            /**
             * Properties of a HistorySyncConfig.
             * @memberof CompanionReg.DeviceProps
             * @interface IHistorySyncConfig
             * @augments CompanionReg.DeviceProps.HistorySyncConfig.$Properties
             * @deprecated Use CompanionReg.DeviceProps.HistorySyncConfig.$Properties instead.
             */

            /**
             * Shape of a HistorySyncConfig.
             * @typedef {CompanionReg.DeviceProps.HistorySyncConfig.$Properties} CompanionReg.DeviceProps.HistorySyncConfig.$Shape
             */

            /**
             * Constructs a new HistorySyncConfig.
             * @memberof CompanionReg.DeviceProps
             * @classdesc Represents a HistorySyncConfig.
             * @constructor
             * @param {CompanionReg.DeviceProps.HistorySyncConfig.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
             */
            var HistorySyncConfig = function (properties) {
                this.supportedBotChannelFbids = [];
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * HistorySyncConfig fullSyncDaysLimit.
             * @member {number|null|undefined} fullSyncDaysLimit
             * @memberof CompanionReg.DeviceProps.HistorySyncConfig
             * @instance
             */
            HistorySyncConfig.prototype.fullSyncDaysLimit = null;

            /**
             * HistorySyncConfig fullSyncSizeMbLimit.
             * @member {number|null|undefined} fullSyncSizeMbLimit
             * @memberof CompanionReg.DeviceProps.HistorySyncConfig
             * @instance
             */
            HistorySyncConfig.prototype.fullSyncSizeMbLimit = null;

            /**
             * HistorySyncConfig storageQuotaMb.
             * @member {number|null|undefined} storageQuotaMb
             * @memberof CompanionReg.DeviceProps.HistorySyncConfig
             * @instance
             */
            HistorySyncConfig.prototype.storageQuotaMb = null;

            /**
             * HistorySyncConfig inlineInitialPayloadInE2EeMsg.
             * @member {boolean|null|undefined} inlineInitialPayloadInE2EeMsg
             * @memberof CompanionReg.DeviceProps.HistorySyncConfig
             * @instance
             */
            HistorySyncConfig.prototype.inlineInitialPayloadInE2EeMsg = null;

            /**
             * HistorySyncConfig recentSyncDaysLimit.
             * @member {number|null|undefined} recentSyncDaysLimit
             * @memberof CompanionReg.DeviceProps.HistorySyncConfig
             * @instance
             */
            HistorySyncConfig.prototype.recentSyncDaysLimit = null;

            /**
             * HistorySyncConfig supportCallLogHistory.
             * @member {boolean|null|undefined} supportCallLogHistory
             * @memberof CompanionReg.DeviceProps.HistorySyncConfig
             * @instance
             */
            HistorySyncConfig.prototype.supportCallLogHistory = null;

            /**
             * HistorySyncConfig supportBotUserAgentChatHistory.
             * @member {boolean|null|undefined} supportBotUserAgentChatHistory
             * @memberof CompanionReg.DeviceProps.HistorySyncConfig
             * @instance
             */
            HistorySyncConfig.prototype.supportBotUserAgentChatHistory = null;

            /**
             * HistorySyncConfig supportCagReactionsAndPolls.
             * @member {boolean|null|undefined} supportCagReactionsAndPolls
             * @memberof CompanionReg.DeviceProps.HistorySyncConfig
             * @instance
             */
            HistorySyncConfig.prototype.supportCagReactionsAndPolls = null;

            /**
             * HistorySyncConfig supportBizHostedMsg.
             * @member {boolean|null|undefined} supportBizHostedMsg
             * @memberof CompanionReg.DeviceProps.HistorySyncConfig
             * @instance
             */
            HistorySyncConfig.prototype.supportBizHostedMsg = null;

            /**
             * HistorySyncConfig supportRecentSyncChunkMessageCountTuning.
             * @member {boolean|null|undefined} supportRecentSyncChunkMessageCountTuning
             * @memberof CompanionReg.DeviceProps.HistorySyncConfig
             * @instance
             */
            HistorySyncConfig.prototype.supportRecentSyncChunkMessageCountTuning = null;

            /**
             * HistorySyncConfig supportHostedGroupMsg.
             * @member {boolean|null|undefined} supportHostedGroupMsg
             * @memberof CompanionReg.DeviceProps.HistorySyncConfig
             * @instance
             */
            HistorySyncConfig.prototype.supportHostedGroupMsg = null;

            /**
             * HistorySyncConfig supportFbidBotChatHistory.
             * @member {boolean|null|undefined} supportFbidBotChatHistory
             * @memberof CompanionReg.DeviceProps.HistorySyncConfig
             * @instance
             */
            HistorySyncConfig.prototype.supportFbidBotChatHistory = null;

            /**
             * HistorySyncConfig supportAddOnHistorySyncMigration.
             * @member {boolean|null|undefined} supportAddOnHistorySyncMigration
             * @memberof CompanionReg.DeviceProps.HistorySyncConfig
             * @instance
             */
            HistorySyncConfig.prototype.supportAddOnHistorySyncMigration = null;

            /**
             * HistorySyncConfig supportMessageAssociation.
             * @member {boolean|null|undefined} supportMessageAssociation
             * @memberof CompanionReg.DeviceProps.HistorySyncConfig
             * @instance
             */
            HistorySyncConfig.prototype.supportMessageAssociation = null;

            /**
             * HistorySyncConfig supportGroupHistory.
             * @member {boolean|null|undefined} supportGroupHistory
             * @memberof CompanionReg.DeviceProps.HistorySyncConfig
             * @instance
             */
            HistorySyncConfig.prototype.supportGroupHistory = null;

            /**
             * HistorySyncConfig onDemandReady.
             * @member {boolean|null|undefined} onDemandReady
             * @memberof CompanionReg.DeviceProps.HistorySyncConfig
             * @instance
             */
            HistorySyncConfig.prototype.onDemandReady = null;

            /**
             * HistorySyncConfig supportGuestChat.
             * @member {boolean|null|undefined} supportGuestChat
             * @memberof CompanionReg.DeviceProps.HistorySyncConfig
             * @instance
             */
            HistorySyncConfig.prototype.supportGuestChat = null;

            /**
             * HistorySyncConfig completeOnDemandReady.
             * @member {boolean|null|undefined} completeOnDemandReady
             * @memberof CompanionReg.DeviceProps.HistorySyncConfig
             * @instance
             */
            HistorySyncConfig.prototype.completeOnDemandReady = null;

            /**
             * HistorySyncConfig thumbnailSyncDaysLimit.
             * @member {number|null|undefined} thumbnailSyncDaysLimit
             * @memberof CompanionReg.DeviceProps.HistorySyncConfig
             * @instance
             */
            HistorySyncConfig.prototype.thumbnailSyncDaysLimit = null;

            /**
             * HistorySyncConfig initialSyncMaxMessagesPerChat.
             * @member {number|null|undefined} initialSyncMaxMessagesPerChat
             * @memberof CompanionReg.DeviceProps.HistorySyncConfig
             * @instance
             */
            HistorySyncConfig.prototype.initialSyncMaxMessagesPerChat = null;

            /**
             * HistorySyncConfig supportManusHistory.
             * @member {boolean|null|undefined} supportManusHistory
             * @memberof CompanionReg.DeviceProps.HistorySyncConfig
             * @instance
             */
            HistorySyncConfig.prototype.supportManusHistory = null;

            /**
             * HistorySyncConfig supportHatchHistory.
             * @member {boolean|null|undefined} supportHatchHistory
             * @memberof CompanionReg.DeviceProps.HistorySyncConfig
             * @instance
             */
            HistorySyncConfig.prototype.supportHatchHistory = null;

            /**
             * HistorySyncConfig supportedBotChannelFbids.
             * @member {Array.<string>} supportedBotChannelFbids
             * @memberof CompanionReg.DeviceProps.HistorySyncConfig
             * @instance
             */
            HistorySyncConfig.prototype.supportedBotChannelFbids = $util.emptyArray;

            /**
             * HistorySyncConfig supportInlineContacts.
             * @member {boolean|null|undefined} supportInlineContacts
             * @memberof CompanionReg.DeviceProps.HistorySyncConfig
             * @instance
             */
            HistorySyncConfig.prototype.supportInlineContacts = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(HistorySyncConfig.prototype, "_fullSyncDaysLimit", {
                get: $util.oneOfGetter($oneOfFields = ["fullSyncDaysLimit"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(HistorySyncConfig.prototype, "_fullSyncSizeMbLimit", {
                get: $util.oneOfGetter($oneOfFields = ["fullSyncSizeMbLimit"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(HistorySyncConfig.prototype, "_storageQuotaMb", {
                get: $util.oneOfGetter($oneOfFields = ["storageQuotaMb"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(HistorySyncConfig.prototype, "_inlineInitialPayloadInE2EeMsg", {
                get: $util.oneOfGetter($oneOfFields = ["inlineInitialPayloadInE2EeMsg"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(HistorySyncConfig.prototype, "_recentSyncDaysLimit", {
                get: $util.oneOfGetter($oneOfFields = ["recentSyncDaysLimit"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(HistorySyncConfig.prototype, "_supportCallLogHistory", {
                get: $util.oneOfGetter($oneOfFields = ["supportCallLogHistory"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(HistorySyncConfig.prototype, "_supportBotUserAgentChatHistory", {
                get: $util.oneOfGetter($oneOfFields = ["supportBotUserAgentChatHistory"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(HistorySyncConfig.prototype, "_supportCagReactionsAndPolls", {
                get: $util.oneOfGetter($oneOfFields = ["supportCagReactionsAndPolls"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(HistorySyncConfig.prototype, "_supportBizHostedMsg", {
                get: $util.oneOfGetter($oneOfFields = ["supportBizHostedMsg"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(HistorySyncConfig.prototype, "_supportRecentSyncChunkMessageCountTuning", {
                get: $util.oneOfGetter($oneOfFields = ["supportRecentSyncChunkMessageCountTuning"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(HistorySyncConfig.prototype, "_supportHostedGroupMsg", {
                get: $util.oneOfGetter($oneOfFields = ["supportHostedGroupMsg"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(HistorySyncConfig.prototype, "_supportFbidBotChatHistory", {
                get: $util.oneOfGetter($oneOfFields = ["supportFbidBotChatHistory"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(HistorySyncConfig.prototype, "_supportAddOnHistorySyncMigration", {
                get: $util.oneOfGetter($oneOfFields = ["supportAddOnHistorySyncMigration"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(HistorySyncConfig.prototype, "_supportMessageAssociation", {
                get: $util.oneOfGetter($oneOfFields = ["supportMessageAssociation"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(HistorySyncConfig.prototype, "_supportGroupHistory", {
                get: $util.oneOfGetter($oneOfFields = ["supportGroupHistory"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(HistorySyncConfig.prototype, "_onDemandReady", {
                get: $util.oneOfGetter($oneOfFields = ["onDemandReady"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(HistorySyncConfig.prototype, "_supportGuestChat", {
                get: $util.oneOfGetter($oneOfFields = ["supportGuestChat"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(HistorySyncConfig.prototype, "_completeOnDemandReady", {
                get: $util.oneOfGetter($oneOfFields = ["completeOnDemandReady"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(HistorySyncConfig.prototype, "_thumbnailSyncDaysLimit", {
                get: $util.oneOfGetter($oneOfFields = ["thumbnailSyncDaysLimit"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(HistorySyncConfig.prototype, "_initialSyncMaxMessagesPerChat", {
                get: $util.oneOfGetter($oneOfFields = ["initialSyncMaxMessagesPerChat"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(HistorySyncConfig.prototype, "_supportManusHistory", {
                get: $util.oneOfGetter($oneOfFields = ["supportManusHistory"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(HistorySyncConfig.prototype, "_supportHatchHistory", {
                get: $util.oneOfGetter($oneOfFields = ["supportHatchHistory"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(HistorySyncConfig.prototype, "_supportInlineContacts", {
                get: $util.oneOfGetter($oneOfFields = ["supportInlineContacts"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new HistorySyncConfig instance using the specified properties.
             * @function create
             * @memberof CompanionReg.DeviceProps.HistorySyncConfig
             * @static
             * @param {CompanionReg.DeviceProps.HistorySyncConfig.$Properties=} [properties] Properties to set
             * @returns {CompanionReg.DeviceProps.HistorySyncConfig} HistorySyncConfig instance
             * @type {{
             *   (properties: CompanionReg.DeviceProps.HistorySyncConfig.$Shape): CompanionReg.DeviceProps.HistorySyncConfig & CompanionReg.DeviceProps.HistorySyncConfig.$Shape;
             *   (properties?: CompanionReg.DeviceProps.HistorySyncConfig.$Properties): CompanionReg.DeviceProps.HistorySyncConfig;
             * }}
             */
            HistorySyncConfig.create = function(properties) {
                return new HistorySyncConfig(properties);
            };

            /**
             * Encodes the specified HistorySyncConfig message. Does not implicitly {@link CompanionReg.DeviceProps.HistorySyncConfig.verify|verify} messages.
             * @function encode
             * @memberof CompanionReg.DeviceProps.HistorySyncConfig
             * @static
             * @param {CompanionReg.DeviceProps.HistorySyncConfig.$Properties} message HistorySyncConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HistorySyncConfig.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.fullSyncDaysLimit != null && $Object.hasOwnProperty.call(message, "fullSyncDaysLimit"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.fullSyncDaysLimit);
                if (message.fullSyncSizeMbLimit != null && $Object.hasOwnProperty.call(message, "fullSyncSizeMbLimit"))
                    writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.fullSyncSizeMbLimit);
                if (message.storageQuotaMb != null && $Object.hasOwnProperty.call(message, "storageQuotaMb"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.storageQuotaMb);
                if (message.inlineInitialPayloadInE2EeMsg != null && $Object.hasOwnProperty.call(message, "inlineInitialPayloadInE2EeMsg"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.inlineInitialPayloadInE2EeMsg);
                if (message.recentSyncDaysLimit != null && $Object.hasOwnProperty.call(message, "recentSyncDaysLimit"))
                    writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.recentSyncDaysLimit);
                if (message.supportCallLogHistory != null && $Object.hasOwnProperty.call(message, "supportCallLogHistory"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.supportCallLogHistory);
                if (message.supportBotUserAgentChatHistory != null && $Object.hasOwnProperty.call(message, "supportBotUserAgentChatHistory"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.supportBotUserAgentChatHistory);
                if (message.supportCagReactionsAndPolls != null && $Object.hasOwnProperty.call(message, "supportCagReactionsAndPolls"))
                    writer.uint32(/* id 8, wireType 0 =*/64).bool(message.supportCagReactionsAndPolls);
                if (message.supportBizHostedMsg != null && $Object.hasOwnProperty.call(message, "supportBizHostedMsg"))
                    writer.uint32(/* id 9, wireType 0 =*/72).bool(message.supportBizHostedMsg);
                if (message.supportRecentSyncChunkMessageCountTuning != null && $Object.hasOwnProperty.call(message, "supportRecentSyncChunkMessageCountTuning"))
                    writer.uint32(/* id 10, wireType 0 =*/80).bool(message.supportRecentSyncChunkMessageCountTuning);
                if (message.supportHostedGroupMsg != null && $Object.hasOwnProperty.call(message, "supportHostedGroupMsg"))
                    writer.uint32(/* id 11, wireType 0 =*/88).bool(message.supportHostedGroupMsg);
                if (message.supportFbidBotChatHistory != null && $Object.hasOwnProperty.call(message, "supportFbidBotChatHistory"))
                    writer.uint32(/* id 12, wireType 0 =*/96).bool(message.supportFbidBotChatHistory);
                if (message.supportAddOnHistorySyncMigration != null && $Object.hasOwnProperty.call(message, "supportAddOnHistorySyncMigration"))
                    writer.uint32(/* id 13, wireType 0 =*/104).bool(message.supportAddOnHistorySyncMigration);
                if (message.supportMessageAssociation != null && $Object.hasOwnProperty.call(message, "supportMessageAssociation"))
                    writer.uint32(/* id 14, wireType 0 =*/112).bool(message.supportMessageAssociation);
                if (message.supportGroupHistory != null && $Object.hasOwnProperty.call(message, "supportGroupHistory"))
                    writer.uint32(/* id 15, wireType 0 =*/120).bool(message.supportGroupHistory);
                if (message.onDemandReady != null && $Object.hasOwnProperty.call(message, "onDemandReady"))
                    writer.uint32(/* id 16, wireType 0 =*/128).bool(message.onDemandReady);
                if (message.supportGuestChat != null && $Object.hasOwnProperty.call(message, "supportGuestChat"))
                    writer.uint32(/* id 17, wireType 0 =*/136).bool(message.supportGuestChat);
                if (message.completeOnDemandReady != null && $Object.hasOwnProperty.call(message, "completeOnDemandReady"))
                    writer.uint32(/* id 18, wireType 0 =*/144).bool(message.completeOnDemandReady);
                if (message.thumbnailSyncDaysLimit != null && $Object.hasOwnProperty.call(message, "thumbnailSyncDaysLimit"))
                    writer.uint32(/* id 19, wireType 0 =*/152).uint32(message.thumbnailSyncDaysLimit);
                if (message.initialSyncMaxMessagesPerChat != null && $Object.hasOwnProperty.call(message, "initialSyncMaxMessagesPerChat"))
                    writer.uint32(/* id 20, wireType 0 =*/160).uint32(message.initialSyncMaxMessagesPerChat);
                if (message.supportManusHistory != null && $Object.hasOwnProperty.call(message, "supportManusHistory"))
                    writer.uint32(/* id 21, wireType 0 =*/168).bool(message.supportManusHistory);
                if (message.supportHatchHistory != null && $Object.hasOwnProperty.call(message, "supportHatchHistory"))
                    writer.uint32(/* id 22, wireType 0 =*/176).bool(message.supportHatchHistory);
                if (message.supportedBotChannelFbids != null && message.supportedBotChannelFbids.length)
                    for (var i = 0; i < message.supportedBotChannelFbids.length; ++i)
                        writer.uint32(/* id 23, wireType 2 =*/186).string(message.supportedBotChannelFbids[i]);
                if (message.supportInlineContacts != null && $Object.hasOwnProperty.call(message, "supportInlineContacts"))
                    writer.uint32(/* id 24, wireType 0 =*/192).bool(message.supportInlineContacts);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified HistorySyncConfig message, length delimited. Does not implicitly {@link CompanionReg.DeviceProps.HistorySyncConfig.verify|verify} messages.
             * @function encodeDelimited
             * @memberof CompanionReg.DeviceProps.HistorySyncConfig
             * @static
             * @param {CompanionReg.DeviceProps.HistorySyncConfig.$Properties} message HistorySyncConfig message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            HistorySyncConfig.encodeDelimited = function(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a HistorySyncConfig message from the specified reader or buffer.
             * @function decode
             * @memberof CompanionReg.DeviceProps.HistorySyncConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {CompanionReg.DeviceProps.HistorySyncConfig & CompanionReg.DeviceProps.HistorySyncConfig.$Shape} HistorySyncConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HistorySyncConfig.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.CompanionReg.DeviceProps.HistorySyncConfig();
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 1: {
                            if (wireType !== 0)
                                break;
                            message.fullSyncDaysLimit = reader.uint32();
                            message._fullSyncDaysLimit = "fullSyncDaysLimit";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            message.fullSyncSizeMbLimit = reader.uint32();
                            message._fullSyncSizeMbLimit = "fullSyncSizeMbLimit";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            message.storageQuotaMb = reader.uint32();
                            message._storageQuotaMb = "storageQuotaMb";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 0)
                                break;
                            message.inlineInitialPayloadInE2EeMsg = reader.bool();
                            message._inlineInitialPayloadInE2EeMsg = "inlineInitialPayloadInE2EeMsg";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 0)
                                break;
                            message.recentSyncDaysLimit = reader.uint32();
                            message._recentSyncDaysLimit = "recentSyncDaysLimit";
                            continue;
                        }
                    case 6: {
                            if (wireType !== 0)
                                break;
                            message.supportCallLogHistory = reader.bool();
                            message._supportCallLogHistory = "supportCallLogHistory";
                            continue;
                        }
                    case 7: {
                            if (wireType !== 0)
                                break;
                            message.supportBotUserAgentChatHistory = reader.bool();
                            message._supportBotUserAgentChatHistory = "supportBotUserAgentChatHistory";
                            continue;
                        }
                    case 8: {
                            if (wireType !== 0)
                                break;
                            message.supportCagReactionsAndPolls = reader.bool();
                            message._supportCagReactionsAndPolls = "supportCagReactionsAndPolls";
                            continue;
                        }
                    case 9: {
                            if (wireType !== 0)
                                break;
                            message.supportBizHostedMsg = reader.bool();
                            message._supportBizHostedMsg = "supportBizHostedMsg";
                            continue;
                        }
                    case 10: {
                            if (wireType !== 0)
                                break;
                            message.supportRecentSyncChunkMessageCountTuning = reader.bool();
                            message._supportRecentSyncChunkMessageCountTuning = "supportRecentSyncChunkMessageCountTuning";
                            continue;
                        }
                    case 11: {
                            if (wireType !== 0)
                                break;
                            message.supportHostedGroupMsg = reader.bool();
                            message._supportHostedGroupMsg = "supportHostedGroupMsg";
                            continue;
                        }
                    case 12: {
                            if (wireType !== 0)
                                break;
                            message.supportFbidBotChatHistory = reader.bool();
                            message._supportFbidBotChatHistory = "supportFbidBotChatHistory";
                            continue;
                        }
                    case 13: {
                            if (wireType !== 0)
                                break;
                            message.supportAddOnHistorySyncMigration = reader.bool();
                            message._supportAddOnHistorySyncMigration = "supportAddOnHistorySyncMigration";
                            continue;
                        }
                    case 14: {
                            if (wireType !== 0)
                                break;
                            message.supportMessageAssociation = reader.bool();
                            message._supportMessageAssociation = "supportMessageAssociation";
                            continue;
                        }
                    case 15: {
                            if (wireType !== 0)
                                break;
                            message.supportGroupHistory = reader.bool();
                            message._supportGroupHistory = "supportGroupHistory";
                            continue;
                        }
                    case 16: {
                            if (wireType !== 0)
                                break;
                            message.onDemandReady = reader.bool();
                            message._onDemandReady = "onDemandReady";
                            continue;
                        }
                    case 17: {
                            if (wireType !== 0)
                                break;
                            message.supportGuestChat = reader.bool();
                            message._supportGuestChat = "supportGuestChat";
                            continue;
                        }
                    case 18: {
                            if (wireType !== 0)
                                break;
                            message.completeOnDemandReady = reader.bool();
                            message._completeOnDemandReady = "completeOnDemandReady";
                            continue;
                        }
                    case 19: {
                            if (wireType !== 0)
                                break;
                            message.thumbnailSyncDaysLimit = reader.uint32();
                            message._thumbnailSyncDaysLimit = "thumbnailSyncDaysLimit";
                            continue;
                        }
                    case 20: {
                            if (wireType !== 0)
                                break;
                            message.initialSyncMaxMessagesPerChat = reader.uint32();
                            message._initialSyncMaxMessagesPerChat = "initialSyncMaxMessagesPerChat";
                            continue;
                        }
                    case 21: {
                            if (wireType !== 0)
                                break;
                            message.supportManusHistory = reader.bool();
                            message._supportManusHistory = "supportManusHistory";
                            continue;
                        }
                    case 22: {
                            if (wireType !== 0)
                                break;
                            message.supportHatchHistory = reader.bool();
                            message._supportHatchHistory = "supportHatchHistory";
                            continue;
                        }
                    case 23: {
                            if (wireType !== 2)
                                break;
                            if (!(message.supportedBotChannelFbids && message.supportedBotChannelFbids.length))
                                message.supportedBotChannelFbids = [];
                            message.supportedBotChannelFbids.push(reader.string());
                            continue;
                        }
                    case 24: {
                            if (wireType !== 0)
                                break;
                            message.supportInlineContacts = reader.bool();
                            message._supportInlineContacts = "supportInlineContacts";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a HistorySyncConfig message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof CompanionReg.DeviceProps.HistorySyncConfig
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {CompanionReg.DeviceProps.HistorySyncConfig & CompanionReg.DeviceProps.HistorySyncConfig.$Shape} HistorySyncConfig
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            HistorySyncConfig.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a HistorySyncConfig message.
             * @function verify
             * @memberof CompanionReg.DeviceProps.HistorySyncConfig
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            HistorySyncConfig.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.fullSyncDaysLimit != null && $Object.hasOwnProperty.call(message, "fullSyncDaysLimit")) {
                    properties._fullSyncDaysLimit = 1;
                    if (!$util.isInteger(message.fullSyncDaysLimit))
                        return "fullSyncDaysLimit: integer expected";
                }
                if (message.fullSyncSizeMbLimit != null && $Object.hasOwnProperty.call(message, "fullSyncSizeMbLimit")) {
                    properties._fullSyncSizeMbLimit = 1;
                    if (!$util.isInteger(message.fullSyncSizeMbLimit))
                        return "fullSyncSizeMbLimit: integer expected";
                }
                if (message.storageQuotaMb != null && $Object.hasOwnProperty.call(message, "storageQuotaMb")) {
                    properties._storageQuotaMb = 1;
                    if (!$util.isInteger(message.storageQuotaMb))
                        return "storageQuotaMb: integer expected";
                }
                if (message.inlineInitialPayloadInE2EeMsg != null && $Object.hasOwnProperty.call(message, "inlineInitialPayloadInE2EeMsg")) {
                    properties._inlineInitialPayloadInE2EeMsg = 1;
                    if (typeof message.inlineInitialPayloadInE2EeMsg !== "boolean")
                        return "inlineInitialPayloadInE2EeMsg: boolean expected";
                }
                if (message.recentSyncDaysLimit != null && $Object.hasOwnProperty.call(message, "recentSyncDaysLimit")) {
                    properties._recentSyncDaysLimit = 1;
                    if (!$util.isInteger(message.recentSyncDaysLimit))
                        return "recentSyncDaysLimit: integer expected";
                }
                if (message.supportCallLogHistory != null && $Object.hasOwnProperty.call(message, "supportCallLogHistory")) {
                    properties._supportCallLogHistory = 1;
                    if (typeof message.supportCallLogHistory !== "boolean")
                        return "supportCallLogHistory: boolean expected";
                }
                if (message.supportBotUserAgentChatHistory != null && $Object.hasOwnProperty.call(message, "supportBotUserAgentChatHistory")) {
                    properties._supportBotUserAgentChatHistory = 1;
                    if (typeof message.supportBotUserAgentChatHistory !== "boolean")
                        return "supportBotUserAgentChatHistory: boolean expected";
                }
                if (message.supportCagReactionsAndPolls != null && $Object.hasOwnProperty.call(message, "supportCagReactionsAndPolls")) {
                    properties._supportCagReactionsAndPolls = 1;
                    if (typeof message.supportCagReactionsAndPolls !== "boolean")
                        return "supportCagReactionsAndPolls: boolean expected";
                }
                if (message.supportBizHostedMsg != null && $Object.hasOwnProperty.call(message, "supportBizHostedMsg")) {
                    properties._supportBizHostedMsg = 1;
                    if (typeof message.supportBizHostedMsg !== "boolean")
                        return "supportBizHostedMsg: boolean expected";
                }
                if (message.supportRecentSyncChunkMessageCountTuning != null && $Object.hasOwnProperty.call(message, "supportRecentSyncChunkMessageCountTuning")) {
                    properties._supportRecentSyncChunkMessageCountTuning = 1;
                    if (typeof message.supportRecentSyncChunkMessageCountTuning !== "boolean")
                        return "supportRecentSyncChunkMessageCountTuning: boolean expected";
                }
                if (message.supportHostedGroupMsg != null && $Object.hasOwnProperty.call(message, "supportHostedGroupMsg")) {
                    properties._supportHostedGroupMsg = 1;
                    if (typeof message.supportHostedGroupMsg !== "boolean")
                        return "supportHostedGroupMsg: boolean expected";
                }
                if (message.supportFbidBotChatHistory != null && $Object.hasOwnProperty.call(message, "supportFbidBotChatHistory")) {
                    properties._supportFbidBotChatHistory = 1;
                    if (typeof message.supportFbidBotChatHistory !== "boolean")
                        return "supportFbidBotChatHistory: boolean expected";
                }
                if (message.supportAddOnHistorySyncMigration != null && $Object.hasOwnProperty.call(message, "supportAddOnHistorySyncMigration")) {
                    properties._supportAddOnHistorySyncMigration = 1;
                    if (typeof message.supportAddOnHistorySyncMigration !== "boolean")
                        return "supportAddOnHistorySyncMigration: boolean expected";
                }
                if (message.supportMessageAssociation != null && $Object.hasOwnProperty.call(message, "supportMessageAssociation")) {
                    properties._supportMessageAssociation = 1;
                    if (typeof message.supportMessageAssociation !== "boolean")
                        return "supportMessageAssociation: boolean expected";
                }
                if (message.supportGroupHistory != null && $Object.hasOwnProperty.call(message, "supportGroupHistory")) {
                    properties._supportGroupHistory = 1;
                    if (typeof message.supportGroupHistory !== "boolean")
                        return "supportGroupHistory: boolean expected";
                }
                if (message.onDemandReady != null && $Object.hasOwnProperty.call(message, "onDemandReady")) {
                    properties._onDemandReady = 1;
                    if (typeof message.onDemandReady !== "boolean")
                        return "onDemandReady: boolean expected";
                }
                if (message.supportGuestChat != null && $Object.hasOwnProperty.call(message, "supportGuestChat")) {
                    properties._supportGuestChat = 1;
                    if (typeof message.supportGuestChat !== "boolean")
                        return "supportGuestChat: boolean expected";
                }
                if (message.completeOnDemandReady != null && $Object.hasOwnProperty.call(message, "completeOnDemandReady")) {
                    properties._completeOnDemandReady = 1;
                    if (typeof message.completeOnDemandReady !== "boolean")
                        return "completeOnDemandReady: boolean expected";
                }
                if (message.thumbnailSyncDaysLimit != null && $Object.hasOwnProperty.call(message, "thumbnailSyncDaysLimit")) {
                    properties._thumbnailSyncDaysLimit = 1;
                    if (!$util.isInteger(message.thumbnailSyncDaysLimit))
                        return "thumbnailSyncDaysLimit: integer expected";
                }
                if (message.initialSyncMaxMessagesPerChat != null && $Object.hasOwnProperty.call(message, "initialSyncMaxMessagesPerChat")) {
                    properties._initialSyncMaxMessagesPerChat = 1;
                    if (!$util.isInteger(message.initialSyncMaxMessagesPerChat))
                        return "initialSyncMaxMessagesPerChat: integer expected";
                }
                if (message.supportManusHistory != null && $Object.hasOwnProperty.call(message, "supportManusHistory")) {
                    properties._supportManusHistory = 1;
                    if (typeof message.supportManusHistory !== "boolean")
                        return "supportManusHistory: boolean expected";
                }
                if (message.supportHatchHistory != null && $Object.hasOwnProperty.call(message, "supportHatchHistory")) {
                    properties._supportHatchHistory = 1;
                    if (typeof message.supportHatchHistory !== "boolean")
                        return "supportHatchHistory: boolean expected";
                }
                if (message.supportedBotChannelFbids != null && $Object.hasOwnProperty.call(message, "supportedBotChannelFbids")) {
                    if (!$Array.isArray(message.supportedBotChannelFbids))
                        return "supportedBotChannelFbids: array expected";
                    for (var i = 0; i < message.supportedBotChannelFbids.length; ++i)
                        if (!$util.isString(message.supportedBotChannelFbids[i]))
                            return "supportedBotChannelFbids: string[] expected";
                }
                if (message.supportInlineContacts != null && $Object.hasOwnProperty.call(message, "supportInlineContacts")) {
                    properties._supportInlineContacts = 1;
                    if (typeof message.supportInlineContacts !== "boolean")
                        return "supportInlineContacts: boolean expected";
                }
                return null;
            };

            /**
             * Creates a HistorySyncConfig message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof CompanionReg.DeviceProps.HistorySyncConfig
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {CompanionReg.DeviceProps.HistorySyncConfig} HistorySyncConfig
             */
            HistorySyncConfig.fromObject = function (object, _depth) {
                if (object instanceof $root.CompanionReg.DeviceProps.HistorySyncConfig)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".CompanionReg.DeviceProps.HistorySyncConfig: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.CompanionReg.DeviceProps.HistorySyncConfig();
                if (object.fullSyncDaysLimit != null)
                    message.fullSyncDaysLimit = object.fullSyncDaysLimit >>> 0;
                if (object.fullSyncSizeMbLimit != null)
                    message.fullSyncSizeMbLimit = object.fullSyncSizeMbLimit >>> 0;
                if (object.storageQuotaMb != null)
                    message.storageQuotaMb = object.storageQuotaMb >>> 0;
                if (object.inlineInitialPayloadInE2EeMsg != null)
                    message.inlineInitialPayloadInE2EeMsg = $Boolean(object.inlineInitialPayloadInE2EeMsg);
                if (object.recentSyncDaysLimit != null)
                    message.recentSyncDaysLimit = object.recentSyncDaysLimit >>> 0;
                if (object.supportCallLogHistory != null)
                    message.supportCallLogHistory = $Boolean(object.supportCallLogHistory);
                if (object.supportBotUserAgentChatHistory != null)
                    message.supportBotUserAgentChatHistory = $Boolean(object.supportBotUserAgentChatHistory);
                if (object.supportCagReactionsAndPolls != null)
                    message.supportCagReactionsAndPolls = $Boolean(object.supportCagReactionsAndPolls);
                if (object.supportBizHostedMsg != null)
                    message.supportBizHostedMsg = $Boolean(object.supportBizHostedMsg);
                if (object.supportRecentSyncChunkMessageCountTuning != null)
                    message.supportRecentSyncChunkMessageCountTuning = $Boolean(object.supportRecentSyncChunkMessageCountTuning);
                if (object.supportHostedGroupMsg != null)
                    message.supportHostedGroupMsg = $Boolean(object.supportHostedGroupMsg);
                if (object.supportFbidBotChatHistory != null)
                    message.supportFbidBotChatHistory = $Boolean(object.supportFbidBotChatHistory);
                if (object.supportAddOnHistorySyncMigration != null)
                    message.supportAddOnHistorySyncMigration = $Boolean(object.supportAddOnHistorySyncMigration);
                if (object.supportMessageAssociation != null)
                    message.supportMessageAssociation = $Boolean(object.supportMessageAssociation);
                if (object.supportGroupHistory != null)
                    message.supportGroupHistory = $Boolean(object.supportGroupHistory);
                if (object.onDemandReady != null)
                    message.onDemandReady = $Boolean(object.onDemandReady);
                if (object.supportGuestChat != null)
                    message.supportGuestChat = $Boolean(object.supportGuestChat);
                if (object.completeOnDemandReady != null)
                    message.completeOnDemandReady = $Boolean(object.completeOnDemandReady);
                if (object.thumbnailSyncDaysLimit != null)
                    message.thumbnailSyncDaysLimit = object.thumbnailSyncDaysLimit >>> 0;
                if (object.initialSyncMaxMessagesPerChat != null)
                    message.initialSyncMaxMessagesPerChat = object.initialSyncMaxMessagesPerChat >>> 0;
                if (object.supportManusHistory != null)
                    message.supportManusHistory = $Boolean(object.supportManusHistory);
                if (object.supportHatchHistory != null)
                    message.supportHatchHistory = $Boolean(object.supportHatchHistory);
                if (object.supportedBotChannelFbids) {
                    if (!$Array.isArray(object.supportedBotChannelFbids))
                        throw $TypeError(".CompanionReg.DeviceProps.HistorySyncConfig.supportedBotChannelFbids: array expected");
                    message.supportedBotChannelFbids = $Array(object.supportedBotChannelFbids.length);
                    for (var i = 0; i < object.supportedBotChannelFbids.length; ++i)
                        message.supportedBotChannelFbids[i] = $String(object.supportedBotChannelFbids[i]);
                }
                if (object.supportInlineContacts != null)
                    message.supportInlineContacts = $Boolean(object.supportInlineContacts);
                return message;
            };

            /**
             * Creates a plain object from a HistorySyncConfig message. Also converts values to other types if specified.
             * @function toObject
             * @memberof CompanionReg.DeviceProps.HistorySyncConfig
             * @static
             * @param {CompanionReg.DeviceProps.HistorySyncConfig} message HistorySyncConfig
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            HistorySyncConfig.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.arrays || options.defaults)
                    object.supportedBotChannelFbids = [];
                if (message.fullSyncDaysLimit != null && $Object.hasOwnProperty.call(message, "fullSyncDaysLimit"))
                    object.fullSyncDaysLimit = message.fullSyncDaysLimit;
                if (message.fullSyncSizeMbLimit != null && $Object.hasOwnProperty.call(message, "fullSyncSizeMbLimit"))
                    object.fullSyncSizeMbLimit = message.fullSyncSizeMbLimit;
                if (message.storageQuotaMb != null && $Object.hasOwnProperty.call(message, "storageQuotaMb"))
                    object.storageQuotaMb = message.storageQuotaMb;
                if (message.inlineInitialPayloadInE2EeMsg != null && $Object.hasOwnProperty.call(message, "inlineInitialPayloadInE2EeMsg"))
                    object.inlineInitialPayloadInE2EeMsg = message.inlineInitialPayloadInE2EeMsg;
                if (message.recentSyncDaysLimit != null && $Object.hasOwnProperty.call(message, "recentSyncDaysLimit"))
                    object.recentSyncDaysLimit = message.recentSyncDaysLimit;
                if (message.supportCallLogHistory != null && $Object.hasOwnProperty.call(message, "supportCallLogHistory"))
                    object.supportCallLogHistory = message.supportCallLogHistory;
                if (message.supportBotUserAgentChatHistory != null && $Object.hasOwnProperty.call(message, "supportBotUserAgentChatHistory"))
                    object.supportBotUserAgentChatHistory = message.supportBotUserAgentChatHistory;
                if (message.supportCagReactionsAndPolls != null && $Object.hasOwnProperty.call(message, "supportCagReactionsAndPolls"))
                    object.supportCagReactionsAndPolls = message.supportCagReactionsAndPolls;
                if (message.supportBizHostedMsg != null && $Object.hasOwnProperty.call(message, "supportBizHostedMsg"))
                    object.supportBizHostedMsg = message.supportBizHostedMsg;
                if (message.supportRecentSyncChunkMessageCountTuning != null && $Object.hasOwnProperty.call(message, "supportRecentSyncChunkMessageCountTuning"))
                    object.supportRecentSyncChunkMessageCountTuning = message.supportRecentSyncChunkMessageCountTuning;
                if (message.supportHostedGroupMsg != null && $Object.hasOwnProperty.call(message, "supportHostedGroupMsg"))
                    object.supportHostedGroupMsg = message.supportHostedGroupMsg;
                if (message.supportFbidBotChatHistory != null && $Object.hasOwnProperty.call(message, "supportFbidBotChatHistory"))
                    object.supportFbidBotChatHistory = message.supportFbidBotChatHistory;
                if (message.supportAddOnHistorySyncMigration != null && $Object.hasOwnProperty.call(message, "supportAddOnHistorySyncMigration"))
                    object.supportAddOnHistorySyncMigration = message.supportAddOnHistorySyncMigration;
                if (message.supportMessageAssociation != null && $Object.hasOwnProperty.call(message, "supportMessageAssociation"))
                    object.supportMessageAssociation = message.supportMessageAssociation;
                if (message.supportGroupHistory != null && $Object.hasOwnProperty.call(message, "supportGroupHistory"))
                    object.supportGroupHistory = message.supportGroupHistory;
                if (message.onDemandReady != null && $Object.hasOwnProperty.call(message, "onDemandReady"))
                    object.onDemandReady = message.onDemandReady;
                if (message.supportGuestChat != null && $Object.hasOwnProperty.call(message, "supportGuestChat"))
                    object.supportGuestChat = message.supportGuestChat;
                if (message.completeOnDemandReady != null && $Object.hasOwnProperty.call(message, "completeOnDemandReady"))
                    object.completeOnDemandReady = message.completeOnDemandReady;
                if (message.thumbnailSyncDaysLimit != null && $Object.hasOwnProperty.call(message, "thumbnailSyncDaysLimit"))
                    object.thumbnailSyncDaysLimit = message.thumbnailSyncDaysLimit;
                if (message.initialSyncMaxMessagesPerChat != null && $Object.hasOwnProperty.call(message, "initialSyncMaxMessagesPerChat"))
                    object.initialSyncMaxMessagesPerChat = message.initialSyncMaxMessagesPerChat;
                if (message.supportManusHistory != null && $Object.hasOwnProperty.call(message, "supportManusHistory"))
                    object.supportManusHistory = message.supportManusHistory;
                if (message.supportHatchHistory != null && $Object.hasOwnProperty.call(message, "supportHatchHistory"))
                    object.supportHatchHistory = message.supportHatchHistory;
                if (message.supportedBotChannelFbids && message.supportedBotChannelFbids.length) {
                    object.supportedBotChannelFbids = $Array(message.supportedBotChannelFbids.length);
                    for (var j = 0; j < message.supportedBotChannelFbids.length; ++j)
                        object.supportedBotChannelFbids[j] = message.supportedBotChannelFbids[j];
                }
                if (message.supportInlineContacts != null && $Object.hasOwnProperty.call(message, "supportInlineContacts"))
                    object.supportInlineContacts = message.supportInlineContacts;
                return object;
            };

            /**
             * Converts this HistorySyncConfig to JSON.
             * @function toJSON
             * @memberof CompanionReg.DeviceProps.HistorySyncConfig
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            HistorySyncConfig.prototype.toJSON = function() {
                return HistorySyncConfig.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for HistorySyncConfig
             * @function getTypeUrl
             * @memberof CompanionReg.DeviceProps.HistorySyncConfig
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            HistorySyncConfig.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/CompanionReg.DeviceProps.HistorySyncConfig";
            };

            return HistorySyncConfig;
        })();

        /**
         * PlatformType enum.
         * @name CompanionReg.DeviceProps.PlatformType
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} CHROME=1 CHROME value
         * @property {number} FIREFOX=2 FIREFOX value
         * @property {number} IE=3 IE value
         * @property {number} OPERA=4 OPERA value
         * @property {number} SAFARI=5 SAFARI value
         * @property {number} EDGE=6 EDGE value
         * @property {number} DESKTOP=7 DESKTOP value
         * @property {number} IPAD=8 IPAD value
         * @property {number} ANDROID_TABLET=9 ANDROID_TABLET value
         * @property {number} OHANA=10 OHANA value
         * @property {number} ALOHA=11 ALOHA value
         * @property {number} CATALINA=12 CATALINA value
         * @property {number} TCL_TV=13 TCL_TV value
         * @property {number} IOS_PHONE=14 IOS_PHONE value
         * @property {number} IOS_CATALYST=15 IOS_CATALYST value
         * @property {number} ANDROID_PHONE=16 ANDROID_PHONE value
         * @property {number} ANDROID_AMBIGUOUS=17 ANDROID_AMBIGUOUS value
         * @property {number} WEAR_OS=18 WEAR_OS value
         * @property {number} AR_WRIST=19 AR_WRIST value
         * @property {number} AR_DEVICE=20 AR_DEVICE value
         * @property {number} UWP=21 UWP value
         * @property {number} VR=22 VR value
         * @property {number} CLOUD_API=23 CLOUD_API value
         * @property {number} SMARTGLASSES=24 SMARTGLASSES value
         */
        DeviceProps.PlatformType = (function() {
            var valuesById = {}, values = $Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "CHROME"] = 1;
            values[valuesById[2] = "FIREFOX"] = 2;
            values[valuesById[3] = "IE"] = 3;
            values[valuesById[4] = "OPERA"] = 4;
            values[valuesById[5] = "SAFARI"] = 5;
            values[valuesById[6] = "EDGE"] = 6;
            values[valuesById[7] = "DESKTOP"] = 7;
            values[valuesById[8] = "IPAD"] = 8;
            values[valuesById[9] = "ANDROID_TABLET"] = 9;
            values[valuesById[10] = "OHANA"] = 10;
            values[valuesById[11] = "ALOHA"] = 11;
            values[valuesById[12] = "CATALINA"] = 12;
            values[valuesById[13] = "TCL_TV"] = 13;
            values[valuesById[14] = "IOS_PHONE"] = 14;
            values[valuesById[15] = "IOS_CATALYST"] = 15;
            values[valuesById[16] = "ANDROID_PHONE"] = 16;
            values[valuesById[17] = "ANDROID_AMBIGUOUS"] = 17;
            values[valuesById[18] = "WEAR_OS"] = 18;
            values[valuesById[19] = "AR_WRIST"] = 19;
            values[valuesById[20] = "AR_DEVICE"] = 20;
            values[valuesById[21] = "UWP"] = 21;
            values[valuesById[22] = "VR"] = 22;
            values[valuesById[23] = "CLOUD_API"] = 23;
            values[valuesById[24] = "SMARTGLASSES"] = 24;
            return values;
        })();

        return DeviceProps;
    })();

    return CompanionReg;
})();

module.exports = $root;
