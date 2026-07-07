/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
var $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $Array = $util.global.Array, $TypeError = $util.global.TypeError, $String = $util.global.String, $parseInt = $util.global.parseInt, $BigInt = $util.global.BigInt, $Number = $util.global.Number, $Boolean = $util.global.Boolean;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.SignalLocalStorageProtocol = (function() {

    /**
     * Namespace SignalLocalStorageProtocol.
     * @exports SignalLocalStorageProtocol
     * @namespace
     */
    var SignalLocalStorageProtocol = {};

    SignalLocalStorageProtocol.SenderKeyRecordStructure = (function() {

        /**
         * Properties of a SenderKeyRecordStructure.
         * @typedef {Object} SignalLocalStorageProtocol.SenderKeyRecordStructure.$Properties
         * @property {Array.<SignalLocalStorageProtocol.SenderKeyStateStructure.$Properties>|null} [senderKeyStates] SenderKeyRecordStructure senderKeyStates
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a SenderKeyRecordStructure.
         * @memberof SignalLocalStorageProtocol
         * @interface ISenderKeyRecordStructure
         * @augments SignalLocalStorageProtocol.SenderKeyRecordStructure.$Properties
         * @deprecated Use SignalLocalStorageProtocol.SenderKeyRecordStructure.$Properties instead.
         */

        /**
         * Shape of a SenderKeyRecordStructure.
         * @typedef {SignalLocalStorageProtocol.SenderKeyRecordStructure.$Properties} SignalLocalStorageProtocol.SenderKeyRecordStructure.$Shape
         */

        /**
         * Constructs a new SenderKeyRecordStructure.
         * @memberof SignalLocalStorageProtocol
         * @classdesc Represents a SenderKeyRecordStructure.
         * @constructor
         * @param {SignalLocalStorageProtocol.SenderKeyRecordStructure.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var SenderKeyRecordStructure = function (properties) {
            this.senderKeyStates = [];
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * SenderKeyRecordStructure senderKeyStates.
         * @member {Array.<SignalLocalStorageProtocol.SenderKeyStateStructure.$Properties>} senderKeyStates
         * @memberof SignalLocalStorageProtocol.SenderKeyRecordStructure
         * @instance
         */
        SenderKeyRecordStructure.prototype.senderKeyStates = $util.emptyArray;

        /**
         * Creates a new SenderKeyRecordStructure instance using the specified properties.
         * @function create
         * @memberof SignalLocalStorageProtocol.SenderKeyRecordStructure
         * @static
         * @param {SignalLocalStorageProtocol.SenderKeyRecordStructure.$Properties=} [properties] Properties to set
         * @returns {SignalLocalStorageProtocol.SenderKeyRecordStructure} SenderKeyRecordStructure instance
         * @type {{
         *   (properties: SignalLocalStorageProtocol.SenderKeyRecordStructure.$Shape): SignalLocalStorageProtocol.SenderKeyRecordStructure & SignalLocalStorageProtocol.SenderKeyRecordStructure.$Shape;
         *   (properties?: SignalLocalStorageProtocol.SenderKeyRecordStructure.$Properties): SignalLocalStorageProtocol.SenderKeyRecordStructure;
         * }}
         */
        SenderKeyRecordStructure.create = function(properties) {
            return new SenderKeyRecordStructure(properties);
        };

        /**
         * Encodes the specified SenderKeyRecordStructure message. Does not implicitly {@link SignalLocalStorageProtocol.SenderKeyRecordStructure.verify|verify} messages.
         * @function encode
         * @memberof SignalLocalStorageProtocol.SenderKeyRecordStructure
         * @static
         * @param {SignalLocalStorageProtocol.SenderKeyRecordStructure.$Properties} message SenderKeyRecordStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderKeyRecordStructure.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.senderKeyStates != null && message.senderKeyStates.length)
                for (var i = 0; i < message.senderKeyStates.length; ++i)
                    $root.SignalLocalStorageProtocol.SenderKeyStateStructure.encode(message.senderKeyStates[i], writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified SenderKeyRecordStructure message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.SenderKeyRecordStructure.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SignalLocalStorageProtocol.SenderKeyRecordStructure
         * @static
         * @param {SignalLocalStorageProtocol.SenderKeyRecordStructure.$Properties} message SenderKeyRecordStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderKeyRecordStructure.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a SenderKeyRecordStructure message from the specified reader or buffer.
         * @function decode
         * @memberof SignalLocalStorageProtocol.SenderKeyRecordStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SignalLocalStorageProtocol.SenderKeyRecordStructure & SignalLocalStorageProtocol.SenderKeyRecordStructure.$Shape} SenderKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderKeyRecordStructure.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.SignalLocalStorageProtocol.SenderKeyRecordStructure();
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
                        if (!(message.senderKeyStates && message.senderKeyStates.length))
                            message.senderKeyStates = [];
                        message.senderKeyStates.push($root.SignalLocalStorageProtocol.SenderKeyStateStructure.decode(reader, reader.uint32(), $undefined, _depth + 1));
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
         * Decodes a SenderKeyRecordStructure message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SignalLocalStorageProtocol.SenderKeyRecordStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SignalLocalStorageProtocol.SenderKeyRecordStructure & SignalLocalStorageProtocol.SenderKeyRecordStructure.$Shape} SenderKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderKeyRecordStructure.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SenderKeyRecordStructure message.
         * @function verify
         * @memberof SignalLocalStorageProtocol.SenderKeyRecordStructure
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SenderKeyRecordStructure.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            if (message.senderKeyStates != null && $Object.hasOwnProperty.call(message, "senderKeyStates")) {
                if (!$Array.isArray(message.senderKeyStates))
                    return "senderKeyStates: array expected";
                for (var i = 0; i < message.senderKeyStates.length; ++i) {
                    var error = $root.SignalLocalStorageProtocol.SenderKeyStateStructure.verify(message.senderKeyStates[i], _depth + 1);
                    if (error)
                        return "senderKeyStates." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SenderKeyRecordStructure message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SignalLocalStorageProtocol.SenderKeyRecordStructure
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SignalLocalStorageProtocol.SenderKeyRecordStructure} SenderKeyRecordStructure
         */
        SenderKeyRecordStructure.fromObject = function (object, _depth) {
            if (object instanceof $root.SignalLocalStorageProtocol.SenderKeyRecordStructure)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".SignalLocalStorageProtocol.SenderKeyRecordStructure: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.SignalLocalStorageProtocol.SenderKeyRecordStructure();
            if (object.senderKeyStates) {
                if (!$Array.isArray(object.senderKeyStates))
                    throw $TypeError(".SignalLocalStorageProtocol.SenderKeyRecordStructure.senderKeyStates: array expected");
                message.senderKeyStates = $Array(object.senderKeyStates.length);
                for (var i = 0; i < object.senderKeyStates.length; ++i) {
                    if (!$util.isObject(object.senderKeyStates[i]))
                        throw $TypeError(".SignalLocalStorageProtocol.SenderKeyRecordStructure.senderKeyStates: object expected");
                    message.senderKeyStates[i] = $root.SignalLocalStorageProtocol.SenderKeyStateStructure.fromObject(object.senderKeyStates[i], _depth + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SenderKeyRecordStructure message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SignalLocalStorageProtocol.SenderKeyRecordStructure
         * @static
         * @param {SignalLocalStorageProtocol.SenderKeyRecordStructure} message SenderKeyRecordStructure
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SenderKeyRecordStructure.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.arrays || options.defaults)
                object.senderKeyStates = [];
            if (message.senderKeyStates && message.senderKeyStates.length) {
                object.senderKeyStates = $Array(message.senderKeyStates.length);
                for (var j = 0; j < message.senderKeyStates.length; ++j)
                    object.senderKeyStates[j] = $root.SignalLocalStorageProtocol.SenderKeyStateStructure.toObject(message.senderKeyStates[j], options, _depth + 1);
            }
            return object;
        };

        /**
         * Converts this SenderKeyRecordStructure to JSON.
         * @function toJSON
         * @memberof SignalLocalStorageProtocol.SenderKeyRecordStructure
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SenderKeyRecordStructure.prototype.toJSON = function() {
            return SenderKeyRecordStructure.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for SenderKeyRecordStructure
         * @function getTypeUrl
         * @memberof SignalLocalStorageProtocol.SenderKeyRecordStructure
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        SenderKeyRecordStructure.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/SignalLocalStorageProtocol.SenderKeyRecordStructure";
        };

        return SenderKeyRecordStructure;
    })();

    SignalLocalStorageProtocol.SenderKeyStateStructure = (function() {

        /**
         * Properties of a SenderKeyStateStructure.
         * @typedef {Object} SignalLocalStorageProtocol.SenderKeyStateStructure.$Properties
         * @property {number|null} [senderKeyId] SenderKeyStateStructure senderKeyId
         * @property {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.$Properties|null} [senderChainKey] SenderKeyStateStructure senderChainKey
         * @property {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.$Properties|null} [senderSigningKey] SenderKeyStateStructure senderSigningKey
         * @property {Array.<SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.$Properties>|null} [senderMessageKeys] SenderKeyStateStructure senderMessageKeys
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a SenderKeyStateStructure.
         * @memberof SignalLocalStorageProtocol
         * @interface ISenderKeyStateStructure
         * @augments SignalLocalStorageProtocol.SenderKeyStateStructure.$Properties
         * @deprecated Use SignalLocalStorageProtocol.SenderKeyStateStructure.$Properties instead.
         */

        /**
         * Shape of a SenderKeyStateStructure.
         * @typedef {SignalLocalStorageProtocol.SenderKeyStateStructure.$Properties} SignalLocalStorageProtocol.SenderKeyStateStructure.$Shape
         */

        /**
         * Constructs a new SenderKeyStateStructure.
         * @memberof SignalLocalStorageProtocol
         * @classdesc Represents a SenderKeyStateStructure.
         * @constructor
         * @param {SignalLocalStorageProtocol.SenderKeyStateStructure.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var SenderKeyStateStructure = function (properties) {
            this.senderMessageKeys = [];
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * SenderKeyStateStructure senderKeyId.
         * @member {number|null|undefined} senderKeyId
         * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure
         * @instance
         */
        SenderKeyStateStructure.prototype.senderKeyId = null;

        /**
         * SenderKeyStateStructure senderChainKey.
         * @member {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.$Properties|null|undefined} senderChainKey
         * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure
         * @instance
         */
        SenderKeyStateStructure.prototype.senderChainKey = null;

        /**
         * SenderKeyStateStructure senderSigningKey.
         * @member {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.$Properties|null|undefined} senderSigningKey
         * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure
         * @instance
         */
        SenderKeyStateStructure.prototype.senderSigningKey = null;

        /**
         * SenderKeyStateStructure senderMessageKeys.
         * @member {Array.<SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.$Properties>} senderMessageKeys
         * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure
         * @instance
         */
        SenderKeyStateStructure.prototype.senderMessageKeys = $util.emptyArray;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(SenderKeyStateStructure.prototype, "_senderKeyId", {
            get: $util.oneOfGetter($oneOfFields = ["senderKeyId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(SenderKeyStateStructure.prototype, "_senderChainKey", {
            get: $util.oneOfGetter($oneOfFields = ["senderChainKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(SenderKeyStateStructure.prototype, "_senderSigningKey", {
            get: $util.oneOfGetter($oneOfFields = ["senderSigningKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SenderKeyStateStructure instance using the specified properties.
         * @function create
         * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure
         * @static
         * @param {SignalLocalStorageProtocol.SenderKeyStateStructure.$Properties=} [properties] Properties to set
         * @returns {SignalLocalStorageProtocol.SenderKeyStateStructure} SenderKeyStateStructure instance
         * @type {{
         *   (properties: SignalLocalStorageProtocol.SenderKeyStateStructure.$Shape): SignalLocalStorageProtocol.SenderKeyStateStructure & SignalLocalStorageProtocol.SenderKeyStateStructure.$Shape;
         *   (properties?: SignalLocalStorageProtocol.SenderKeyStateStructure.$Properties): SignalLocalStorageProtocol.SenderKeyStateStructure;
         * }}
         */
        SenderKeyStateStructure.create = function(properties) {
            return new SenderKeyStateStructure(properties);
        };

        /**
         * Encodes the specified SenderKeyStateStructure message. Does not implicitly {@link SignalLocalStorageProtocol.SenderKeyStateStructure.verify|verify} messages.
         * @function encode
         * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure
         * @static
         * @param {SignalLocalStorageProtocol.SenderKeyStateStructure.$Properties} message SenderKeyStateStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderKeyStateStructure.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.senderKeyId != null && $Object.hasOwnProperty.call(message, "senderKeyId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.senderKeyId);
            if (message.senderChainKey != null && $Object.hasOwnProperty.call(message, "senderChainKey"))
                $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.encode(message.senderChainKey, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
            if (message.senderSigningKey != null && $Object.hasOwnProperty.call(message, "senderSigningKey"))
                $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.encode(message.senderSigningKey, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
            if (message.senderMessageKeys != null && message.senderMessageKeys.length)
                for (var i = 0; i < message.senderMessageKeys.length; ++i)
                    $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.encode(message.senderMessageKeys[i], writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified SenderKeyStateStructure message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.SenderKeyStateStructure.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure
         * @static
         * @param {SignalLocalStorageProtocol.SenderKeyStateStructure.$Properties} message SenderKeyStateStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderKeyStateStructure.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a SenderKeyStateStructure message from the specified reader or buffer.
         * @function decode
         * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SignalLocalStorageProtocol.SenderKeyStateStructure & SignalLocalStorageProtocol.SenderKeyStateStructure.$Shape} SenderKeyStateStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderKeyStateStructure.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.SignalLocalStorageProtocol.SenderKeyStateStructure();
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
                        message.senderKeyId = reader.uint32();
                        message._senderKeyId = "senderKeyId";
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.senderChainKey = $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.decode(reader, reader.uint32(), $undefined, _depth + 1, message.senderChainKey);
                        message._senderChainKey = "senderChainKey";
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        message.senderSigningKey = $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.decode(reader, reader.uint32(), $undefined, _depth + 1, message.senderSigningKey);
                        message._senderSigningKey = "senderSigningKey";
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        if (!(message.senderMessageKeys && message.senderMessageKeys.length))
                            message.senderMessageKeys = [];
                        message.senderMessageKeys.push($root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.decode(reader, reader.uint32(), $undefined, _depth + 1));
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
         * Decodes a SenderKeyStateStructure message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SignalLocalStorageProtocol.SenderKeyStateStructure & SignalLocalStorageProtocol.SenderKeyStateStructure.$Shape} SenderKeyStateStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderKeyStateStructure.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SenderKeyStateStructure message.
         * @function verify
         * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SenderKeyStateStructure.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.senderKeyId != null && $Object.hasOwnProperty.call(message, "senderKeyId")) {
                properties._senderKeyId = 1;
                if (!$util.isInteger(message.senderKeyId))
                    return "senderKeyId: integer expected";
            }
            if (message.senderChainKey != null && $Object.hasOwnProperty.call(message, "senderChainKey")) {
                properties._senderChainKey = 1;
                {
                    var error = $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.verify(message.senderChainKey, _depth + 1);
                    if (error)
                        return "senderChainKey." + error;
                }
            }
            if (message.senderSigningKey != null && $Object.hasOwnProperty.call(message, "senderSigningKey")) {
                properties._senderSigningKey = 1;
                {
                    var error = $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.verify(message.senderSigningKey, _depth + 1);
                    if (error)
                        return "senderSigningKey." + error;
                }
            }
            if (message.senderMessageKeys != null && $Object.hasOwnProperty.call(message, "senderMessageKeys")) {
                if (!$Array.isArray(message.senderMessageKeys))
                    return "senderMessageKeys: array expected";
                for (var i = 0; i < message.senderMessageKeys.length; ++i) {
                    var error = $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.verify(message.senderMessageKeys[i], _depth + 1);
                    if (error)
                        return "senderMessageKeys." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SenderKeyStateStructure message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SignalLocalStorageProtocol.SenderKeyStateStructure} SenderKeyStateStructure
         */
        SenderKeyStateStructure.fromObject = function (object, _depth) {
            if (object instanceof $root.SignalLocalStorageProtocol.SenderKeyStateStructure)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".SignalLocalStorageProtocol.SenderKeyStateStructure: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.SignalLocalStorageProtocol.SenderKeyStateStructure();
            if (object.senderKeyId != null)
                message.senderKeyId = object.senderKeyId >>> 0;
            if (object.senderChainKey != null) {
                if (!$util.isObject(object.senderChainKey))
                    throw $TypeError(".SignalLocalStorageProtocol.SenderKeyStateStructure.senderChainKey: object expected");
                message.senderChainKey = $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.fromObject(object.senderChainKey, _depth + 1);
            }
            if (object.senderSigningKey != null) {
                if (!$util.isObject(object.senderSigningKey))
                    throw $TypeError(".SignalLocalStorageProtocol.SenderKeyStateStructure.senderSigningKey: object expected");
                message.senderSigningKey = $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.fromObject(object.senderSigningKey, _depth + 1);
            }
            if (object.senderMessageKeys) {
                if (!$Array.isArray(object.senderMessageKeys))
                    throw $TypeError(".SignalLocalStorageProtocol.SenderKeyStateStructure.senderMessageKeys: array expected");
                message.senderMessageKeys = $Array(object.senderMessageKeys.length);
                for (var i = 0; i < object.senderMessageKeys.length; ++i) {
                    if (!$util.isObject(object.senderMessageKeys[i]))
                        throw $TypeError(".SignalLocalStorageProtocol.SenderKeyStateStructure.senderMessageKeys: object expected");
                    message.senderMessageKeys[i] = $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.fromObject(object.senderMessageKeys[i], _depth + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SenderKeyStateStructure message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure
         * @static
         * @param {SignalLocalStorageProtocol.SenderKeyStateStructure} message SenderKeyStateStructure
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SenderKeyStateStructure.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.arrays || options.defaults)
                object.senderMessageKeys = [];
            if (message.senderKeyId != null && $Object.hasOwnProperty.call(message, "senderKeyId"))
                object.senderKeyId = message.senderKeyId;
            if (message.senderChainKey != null && $Object.hasOwnProperty.call(message, "senderChainKey"))
                object.senderChainKey = $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.toObject(message.senderChainKey, options, _depth + 1);
            if (message.senderSigningKey != null && $Object.hasOwnProperty.call(message, "senderSigningKey"))
                object.senderSigningKey = $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.toObject(message.senderSigningKey, options, _depth + 1);
            if (message.senderMessageKeys && message.senderMessageKeys.length) {
                object.senderMessageKeys = $Array(message.senderMessageKeys.length);
                for (var j = 0; j < message.senderMessageKeys.length; ++j)
                    object.senderMessageKeys[j] = $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.toObject(message.senderMessageKeys[j], options, _depth + 1);
            }
            return object;
        };

        /**
         * Converts this SenderKeyStateStructure to JSON.
         * @function toJSON
         * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SenderKeyStateStructure.prototype.toJSON = function() {
            return SenderKeyStateStructure.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for SenderKeyStateStructure
         * @function getTypeUrl
         * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        SenderKeyStateStructure.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/SignalLocalStorageProtocol.SenderKeyStateStructure";
        };

        SenderKeyStateStructure.SenderChainKey = (function() {

            /**
             * Properties of a SenderChainKey.
             * @typedef {Object} SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.$Properties
             * @property {number|null} [iteration] SenderChainKey iteration
             * @property {Uint8Array|null} [seed] SenderChainKey seed
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a SenderChainKey.
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure
             * @interface ISenderChainKey
             * @augments SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.$Properties
             * @deprecated Use SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.$Properties instead.
             */

            /**
             * Shape of a SenderChainKey.
             * @typedef {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.$Properties} SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.$Shape
             */

            /**
             * Constructs a new SenderChainKey.
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure
             * @classdesc Represents a SenderChainKey.
             * @constructor
             * @param {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var SenderChainKey = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * SenderChainKey iteration.
             * @member {number|null|undefined} iteration
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey
             * @instance
             */
            SenderChainKey.prototype.iteration = null;

            /**
             * SenderChainKey seed.
             * @member {Uint8Array|null|undefined} seed
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey
             * @instance
             */
            SenderChainKey.prototype.seed = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(SenderChainKey.prototype, "_iteration", {
                get: $util.oneOfGetter($oneOfFields = ["iteration"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(SenderChainKey.prototype, "_seed", {
                get: $util.oneOfGetter($oneOfFields = ["seed"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new SenderChainKey instance using the specified properties.
             * @function create
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey
             * @static
             * @param {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.$Properties=} [properties] Properties to set
             * @returns {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey} SenderChainKey instance
             * @type {{
             *   (properties: SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.$Shape): SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey & SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.$Shape;
             *   (properties?: SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.$Properties): SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey;
             * }}
             */
            SenderChainKey.create = function(properties) {
                return new SenderChainKey(properties);
            };

            /**
             * Encodes the specified SenderChainKey message. Does not implicitly {@link SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.verify|verify} messages.
             * @function encode
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey
             * @static
             * @param {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.$Properties} message SenderChainKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SenderChainKey.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.iteration != null && $Object.hasOwnProperty.call(message, "iteration"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.iteration);
                if (message.seed != null && $Object.hasOwnProperty.call(message, "seed"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.seed);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified SenderChainKey message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.verify|verify} messages.
             * @function encodeDelimited
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey
             * @static
             * @param {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.$Properties} message SenderChainKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SenderChainKey.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a SenderChainKey message from the specified reader or buffer.
             * @function decode
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey & SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.$Shape} SenderChainKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SenderChainKey.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey();
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
                            message.iteration = reader.uint32();
                            message._iteration = "iteration";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.seed = reader.bytes();
                            message._seed = "seed";
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
             * Decodes a SenderChainKey message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey & SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey.$Shape} SenderChainKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SenderChainKey.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SenderChainKey message.
             * @function verify
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SenderChainKey.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.iteration != null && $Object.hasOwnProperty.call(message, "iteration")) {
                    properties._iteration = 1;
                    if (!$util.isInteger(message.iteration))
                        return "iteration: integer expected";
                }
                if (message.seed != null && $Object.hasOwnProperty.call(message, "seed")) {
                    properties._seed = 1;
                    if (!(message.seed && typeof message.seed.length === "number" || $util.isString(message.seed)))
                        return "seed: buffer expected";
                }
                return null;
            };

            /**
             * Creates a SenderChainKey message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey} SenderChainKey
             */
            SenderChainKey.fromObject = function (object, _depth) {
                if (object instanceof $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey();
                if (object.iteration != null)
                    message.iteration = object.iteration >>> 0;
                if (object.seed != null)
                    if (typeof object.seed === "string")
                        $util.base64.decode(object.seed, message.seed = $util.newBuffer($util.base64.length(object.seed)), 0);
                    else if (object.seed.length >= 0)
                        message.seed = object.seed;
                return message;
            };

            /**
             * Creates a plain object from a SenderChainKey message. Also converts values to other types if specified.
             * @function toObject
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey
             * @static
             * @param {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey} message SenderChainKey
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SenderChainKey.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (message.iteration != null && $Object.hasOwnProperty.call(message, "iteration"))
                    object.iteration = message.iteration;
                if (message.seed != null && $Object.hasOwnProperty.call(message, "seed"))
                    object.seed = options.bytes === $String ? $util.base64.encode(message.seed, 0, message.seed.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.seed) : message.seed;
                return object;
            };

            /**
             * Converts this SenderChainKey to JSON.
             * @function toJSON
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SenderChainKey.prototype.toJSON = function() {
                return SenderChainKey.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for SenderChainKey
             * @function getTypeUrl
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            SenderChainKey.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/SignalLocalStorageProtocol.SenderKeyStateStructure.SenderChainKey";
            };

            return SenderChainKey;
        })();

        SenderKeyStateStructure.SenderMessageKey = (function() {

            /**
             * Properties of a SenderMessageKey.
             * @typedef {Object} SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.$Properties
             * @property {number|null} [iteration] SenderMessageKey iteration
             * @property {Uint8Array|null} [seed] SenderMessageKey seed
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a SenderMessageKey.
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure
             * @interface ISenderMessageKey
             * @augments SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.$Properties
             * @deprecated Use SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.$Properties instead.
             */

            /**
             * Shape of a SenderMessageKey.
             * @typedef {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.$Properties} SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.$Shape
             */

            /**
             * Constructs a new SenderMessageKey.
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure
             * @classdesc Represents a SenderMessageKey.
             * @constructor
             * @param {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var SenderMessageKey = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * SenderMessageKey iteration.
             * @member {number|null|undefined} iteration
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey
             * @instance
             */
            SenderMessageKey.prototype.iteration = null;

            /**
             * SenderMessageKey seed.
             * @member {Uint8Array|null|undefined} seed
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey
             * @instance
             */
            SenderMessageKey.prototype.seed = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(SenderMessageKey.prototype, "_iteration", {
                get: $util.oneOfGetter($oneOfFields = ["iteration"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(SenderMessageKey.prototype, "_seed", {
                get: $util.oneOfGetter($oneOfFields = ["seed"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new SenderMessageKey instance using the specified properties.
             * @function create
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey
             * @static
             * @param {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.$Properties=} [properties] Properties to set
             * @returns {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey} SenderMessageKey instance
             * @type {{
             *   (properties: SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.$Shape): SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey & SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.$Shape;
             *   (properties?: SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.$Properties): SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey;
             * }}
             */
            SenderMessageKey.create = function(properties) {
                return new SenderMessageKey(properties);
            };

            /**
             * Encodes the specified SenderMessageKey message. Does not implicitly {@link SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.verify|verify} messages.
             * @function encode
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey
             * @static
             * @param {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.$Properties} message SenderMessageKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SenderMessageKey.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.iteration != null && $Object.hasOwnProperty.call(message, "iteration"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.iteration);
                if (message.seed != null && $Object.hasOwnProperty.call(message, "seed"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.seed);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified SenderMessageKey message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.verify|verify} messages.
             * @function encodeDelimited
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey
             * @static
             * @param {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.$Properties} message SenderMessageKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SenderMessageKey.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a SenderMessageKey message from the specified reader or buffer.
             * @function decode
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey & SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.$Shape} SenderMessageKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SenderMessageKey.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey();
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
                            message.iteration = reader.uint32();
                            message._iteration = "iteration";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.seed = reader.bytes();
                            message._seed = "seed";
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
             * Decodes a SenderMessageKey message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey & SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey.$Shape} SenderMessageKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SenderMessageKey.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SenderMessageKey message.
             * @function verify
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SenderMessageKey.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.iteration != null && $Object.hasOwnProperty.call(message, "iteration")) {
                    properties._iteration = 1;
                    if (!$util.isInteger(message.iteration))
                        return "iteration: integer expected";
                }
                if (message.seed != null && $Object.hasOwnProperty.call(message, "seed")) {
                    properties._seed = 1;
                    if (!(message.seed && typeof message.seed.length === "number" || $util.isString(message.seed)))
                        return "seed: buffer expected";
                }
                return null;
            };

            /**
             * Creates a SenderMessageKey message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey} SenderMessageKey
             */
            SenderMessageKey.fromObject = function (object, _depth) {
                if (object instanceof $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey();
                if (object.iteration != null)
                    message.iteration = object.iteration >>> 0;
                if (object.seed != null)
                    if (typeof object.seed === "string")
                        $util.base64.decode(object.seed, message.seed = $util.newBuffer($util.base64.length(object.seed)), 0);
                    else if (object.seed.length >= 0)
                        message.seed = object.seed;
                return message;
            };

            /**
             * Creates a plain object from a SenderMessageKey message. Also converts values to other types if specified.
             * @function toObject
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey
             * @static
             * @param {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey} message SenderMessageKey
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SenderMessageKey.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (message.iteration != null && $Object.hasOwnProperty.call(message, "iteration"))
                    object.iteration = message.iteration;
                if (message.seed != null && $Object.hasOwnProperty.call(message, "seed"))
                    object.seed = options.bytes === $String ? $util.base64.encode(message.seed, 0, message.seed.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.seed) : message.seed;
                return object;
            };

            /**
             * Converts this SenderMessageKey to JSON.
             * @function toJSON
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SenderMessageKey.prototype.toJSON = function() {
                return SenderMessageKey.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for SenderMessageKey
             * @function getTypeUrl
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            SenderMessageKey.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/SignalLocalStorageProtocol.SenderKeyStateStructure.SenderMessageKey";
            };

            return SenderMessageKey;
        })();

        SenderKeyStateStructure.SenderSigningKey = (function() {

            /**
             * Properties of a SenderSigningKey.
             * @typedef {Object} SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.$Properties
             * @property {Uint8Array|null} ["public"] SenderSigningKey public
             * @property {Uint8Array|null} ["private"] SenderSigningKey private
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a SenderSigningKey.
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure
             * @interface ISenderSigningKey
             * @augments SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.$Properties
             * @deprecated Use SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.$Properties instead.
             */

            /**
             * Shape of a SenderSigningKey.
             * @typedef {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.$Properties} SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.$Shape
             */

            /**
             * Constructs a new SenderSigningKey.
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure
             * @classdesc Represents a SenderSigningKey.
             * @constructor
             * @param {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var SenderSigningKey = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * SenderSigningKey public.
             * @member {Uint8Array|null|undefined} public
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey
             * @instance
             */
            SenderSigningKey.prototype["public"] = null;

            /**
             * SenderSigningKey private.
             * @member {Uint8Array|null|undefined} private
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey
             * @instance
             */
            SenderSigningKey.prototype["private"] = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(SenderSigningKey.prototype, "_public", {
                get: $util.oneOfGetter($oneOfFields = ["public"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(SenderSigningKey.prototype, "_private", {
                get: $util.oneOfGetter($oneOfFields = ["private"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new SenderSigningKey instance using the specified properties.
             * @function create
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey
             * @static
             * @param {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.$Properties=} [properties] Properties to set
             * @returns {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey} SenderSigningKey instance
             * @type {{
             *   (properties: SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.$Shape): SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey & SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.$Shape;
             *   (properties?: SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.$Properties): SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey;
             * }}
             */
            SenderSigningKey.create = function(properties) {
                return new SenderSigningKey(properties);
            };

            /**
             * Encodes the specified SenderSigningKey message. Does not implicitly {@link SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.verify|verify} messages.
             * @function encode
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey
             * @static
             * @param {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.$Properties} message SenderSigningKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SenderSigningKey.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message["public"] != null && $Object.hasOwnProperty.call(message, "public"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message["public"]);
                if (message["private"] != null && $Object.hasOwnProperty.call(message, "private"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message["private"]);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified SenderSigningKey message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.verify|verify} messages.
             * @function encodeDelimited
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey
             * @static
             * @param {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.$Properties} message SenderSigningKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            SenderSigningKey.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a SenderSigningKey message from the specified reader or buffer.
             * @function decode
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey & SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.$Shape} SenderSigningKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SenderSigningKey.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey();
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
                            message["public"] = reader.bytes();
                            message._public = "public";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message["private"] = reader.bytes();
                            message._private = "private";
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
             * Decodes a SenderSigningKey message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey & SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey.$Shape} SenderSigningKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            SenderSigningKey.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a SenderSigningKey message.
             * @function verify
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            SenderSigningKey.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message["public"] != null && $Object.hasOwnProperty.call(message, "public")) {
                    properties._public = 1;
                    if (!(message["public"] && typeof message["public"].length === "number" || $util.isString(message["public"])))
                        return "public: buffer expected";
                }
                if (message["private"] != null && $Object.hasOwnProperty.call(message, "private")) {
                    properties._private = 1;
                    if (!(message["private"] && typeof message["private"].length === "number" || $util.isString(message["private"])))
                        return "private: buffer expected";
                }
                return null;
            };

            /**
             * Creates a SenderSigningKey message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey} SenderSigningKey
             */
            SenderSigningKey.fromObject = function (object, _depth) {
                if (object instanceof $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey();
                if (object["public"] != null)
                    if (typeof object["public"] === "string")
                        $util.base64.decode(object["public"], message["public"] = $util.newBuffer($util.base64.length(object["public"])), 0);
                    else if (object["public"].length >= 0)
                        message["public"] = object["public"];
                if (object["private"] != null)
                    if (typeof object["private"] === "string")
                        $util.base64.decode(object["private"], message["private"] = $util.newBuffer($util.base64.length(object["private"])), 0);
                    else if (object["private"].length >= 0)
                        message["private"] = object["private"];
                return message;
            };

            /**
             * Creates a plain object from a SenderSigningKey message. Also converts values to other types if specified.
             * @function toObject
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey
             * @static
             * @param {SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey} message SenderSigningKey
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            SenderSigningKey.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (message["public"] != null && $Object.hasOwnProperty.call(message, "public"))
                    object["public"] = options.bytes === $String ? $util.base64.encode(message["public"], 0, message["public"].length) : options.bytes === $Array ? $Array.prototype.slice.call(message["public"]) : message["public"];
                if (message["private"] != null && $Object.hasOwnProperty.call(message, "private"))
                    object["private"] = options.bytes === $String ? $util.base64.encode(message["private"], 0, message["private"].length) : options.bytes === $Array ? $Array.prototype.slice.call(message["private"]) : message["private"];
                return object;
            };

            /**
             * Converts this SenderSigningKey to JSON.
             * @function toJSON
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            SenderSigningKey.prototype.toJSON = function() {
                return SenderSigningKey.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for SenderSigningKey
             * @function getTypeUrl
             * @memberof SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            SenderSigningKey.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/SignalLocalStorageProtocol.SenderKeyStateStructure.SenderSigningKey";
            };

            return SenderSigningKey;
        })();

        return SenderKeyStateStructure;
    })();

    SignalLocalStorageProtocol.IdentityKeyPairStructure = (function() {

        /**
         * Properties of an IdentityKeyPairStructure.
         * @typedef {Object} SignalLocalStorageProtocol.IdentityKeyPairStructure.$Properties
         * @property {Uint8Array|null} [publicKey] IdentityKeyPairStructure publicKey
         * @property {Uint8Array|null} [privateKey] IdentityKeyPairStructure privateKey
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of an IdentityKeyPairStructure.
         * @memberof SignalLocalStorageProtocol
         * @interface IIdentityKeyPairStructure
         * @augments SignalLocalStorageProtocol.IdentityKeyPairStructure.$Properties
         * @deprecated Use SignalLocalStorageProtocol.IdentityKeyPairStructure.$Properties instead.
         */

        /**
         * Shape of an IdentityKeyPairStructure.
         * @typedef {SignalLocalStorageProtocol.IdentityKeyPairStructure.$Properties} SignalLocalStorageProtocol.IdentityKeyPairStructure.$Shape
         */

        /**
         * Constructs a new IdentityKeyPairStructure.
         * @memberof SignalLocalStorageProtocol
         * @classdesc Represents an IdentityKeyPairStructure.
         * @constructor
         * @param {SignalLocalStorageProtocol.IdentityKeyPairStructure.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var IdentityKeyPairStructure = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * IdentityKeyPairStructure publicKey.
         * @member {Uint8Array|null|undefined} publicKey
         * @memberof SignalLocalStorageProtocol.IdentityKeyPairStructure
         * @instance
         */
        IdentityKeyPairStructure.prototype.publicKey = null;

        /**
         * IdentityKeyPairStructure privateKey.
         * @member {Uint8Array|null|undefined} privateKey
         * @memberof SignalLocalStorageProtocol.IdentityKeyPairStructure
         * @instance
         */
        IdentityKeyPairStructure.prototype.privateKey = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(IdentityKeyPairStructure.prototype, "_publicKey", {
            get: $util.oneOfGetter($oneOfFields = ["publicKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(IdentityKeyPairStructure.prototype, "_privateKey", {
            get: $util.oneOfGetter($oneOfFields = ["privateKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new IdentityKeyPairStructure instance using the specified properties.
         * @function create
         * @memberof SignalLocalStorageProtocol.IdentityKeyPairStructure
         * @static
         * @param {SignalLocalStorageProtocol.IdentityKeyPairStructure.$Properties=} [properties] Properties to set
         * @returns {SignalLocalStorageProtocol.IdentityKeyPairStructure} IdentityKeyPairStructure instance
         * @type {{
         *   (properties: SignalLocalStorageProtocol.IdentityKeyPairStructure.$Shape): SignalLocalStorageProtocol.IdentityKeyPairStructure & SignalLocalStorageProtocol.IdentityKeyPairStructure.$Shape;
         *   (properties?: SignalLocalStorageProtocol.IdentityKeyPairStructure.$Properties): SignalLocalStorageProtocol.IdentityKeyPairStructure;
         * }}
         */
        IdentityKeyPairStructure.create = function(properties) {
            return new IdentityKeyPairStructure(properties);
        };

        /**
         * Encodes the specified IdentityKeyPairStructure message. Does not implicitly {@link SignalLocalStorageProtocol.IdentityKeyPairStructure.verify|verify} messages.
         * @function encode
         * @memberof SignalLocalStorageProtocol.IdentityKeyPairStructure
         * @static
         * @param {SignalLocalStorageProtocol.IdentityKeyPairStructure.$Properties} message IdentityKeyPairStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IdentityKeyPairStructure.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.publicKey != null && $Object.hasOwnProperty.call(message, "publicKey"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.publicKey);
            if (message.privateKey != null && $Object.hasOwnProperty.call(message, "privateKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.privateKey);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified IdentityKeyPairStructure message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.IdentityKeyPairStructure.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SignalLocalStorageProtocol.IdentityKeyPairStructure
         * @static
         * @param {SignalLocalStorageProtocol.IdentityKeyPairStructure.$Properties} message IdentityKeyPairStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IdentityKeyPairStructure.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes an IdentityKeyPairStructure message from the specified reader or buffer.
         * @function decode
         * @memberof SignalLocalStorageProtocol.IdentityKeyPairStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SignalLocalStorageProtocol.IdentityKeyPairStructure & SignalLocalStorageProtocol.IdentityKeyPairStructure.$Shape} IdentityKeyPairStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IdentityKeyPairStructure.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.SignalLocalStorageProtocol.IdentityKeyPairStructure();
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
                        message.privateKey = reader.bytes();
                        message._privateKey = "privateKey";
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
         * Decodes an IdentityKeyPairStructure message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SignalLocalStorageProtocol.IdentityKeyPairStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SignalLocalStorageProtocol.IdentityKeyPairStructure & SignalLocalStorageProtocol.IdentityKeyPairStructure.$Shape} IdentityKeyPairStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IdentityKeyPairStructure.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an IdentityKeyPairStructure message.
         * @function verify
         * @memberof SignalLocalStorageProtocol.IdentityKeyPairStructure
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IdentityKeyPairStructure.verify = function (message, _depth) {
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
            if (message.privateKey != null && $Object.hasOwnProperty.call(message, "privateKey")) {
                properties._privateKey = 1;
                if (!(message.privateKey && typeof message.privateKey.length === "number" || $util.isString(message.privateKey)))
                    return "privateKey: buffer expected";
            }
            return null;
        };

        /**
         * Creates an IdentityKeyPairStructure message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SignalLocalStorageProtocol.IdentityKeyPairStructure
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SignalLocalStorageProtocol.IdentityKeyPairStructure} IdentityKeyPairStructure
         */
        IdentityKeyPairStructure.fromObject = function (object, _depth) {
            if (object instanceof $root.SignalLocalStorageProtocol.IdentityKeyPairStructure)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".SignalLocalStorageProtocol.IdentityKeyPairStructure: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.SignalLocalStorageProtocol.IdentityKeyPairStructure();
            if (object.publicKey != null)
                if (typeof object.publicKey === "string")
                    $util.base64.decode(object.publicKey, message.publicKey = $util.newBuffer($util.base64.length(object.publicKey)), 0);
                else if (object.publicKey.length >= 0)
                    message.publicKey = object.publicKey;
            if (object.privateKey != null)
                if (typeof object.privateKey === "string")
                    $util.base64.decode(object.privateKey, message.privateKey = $util.newBuffer($util.base64.length(object.privateKey)), 0);
                else if (object.privateKey.length >= 0)
                    message.privateKey = object.privateKey;
            return message;
        };

        /**
         * Creates a plain object from an IdentityKeyPairStructure message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SignalLocalStorageProtocol.IdentityKeyPairStructure
         * @static
         * @param {SignalLocalStorageProtocol.IdentityKeyPairStructure} message IdentityKeyPairStructure
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IdentityKeyPairStructure.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.publicKey != null && $Object.hasOwnProperty.call(message, "publicKey"))
                object.publicKey = options.bytes === $String ? $util.base64.encode(message.publicKey, 0, message.publicKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.publicKey) : message.publicKey;
            if (message.privateKey != null && $Object.hasOwnProperty.call(message, "privateKey"))
                object.privateKey = options.bytes === $String ? $util.base64.encode(message.privateKey, 0, message.privateKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.privateKey) : message.privateKey;
            return object;
        };

        /**
         * Converts this IdentityKeyPairStructure to JSON.
         * @function toJSON
         * @memberof SignalLocalStorageProtocol.IdentityKeyPairStructure
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IdentityKeyPairStructure.prototype.toJSON = function() {
            return IdentityKeyPairStructure.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for IdentityKeyPairStructure
         * @function getTypeUrl
         * @memberof SignalLocalStorageProtocol.IdentityKeyPairStructure
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        IdentityKeyPairStructure.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/SignalLocalStorageProtocol.IdentityKeyPairStructure";
        };

        return IdentityKeyPairStructure;
    })();

    SignalLocalStorageProtocol.SignedPreKeyRecordStructure = (function() {

        /**
         * Properties of a SignedPreKeyRecordStructure.
         * @typedef {Object} SignalLocalStorageProtocol.SignedPreKeyRecordStructure.$Properties
         * @property {number|null} [id] SignedPreKeyRecordStructure id
         * @property {Uint8Array|null} [publicKey] SignedPreKeyRecordStructure publicKey
         * @property {Uint8Array|null} [privateKey] SignedPreKeyRecordStructure privateKey
         * @property {Uint8Array|null} [signature] SignedPreKeyRecordStructure signature
         * @property {number|Long|null} [timestamp] SignedPreKeyRecordStructure timestamp
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a SignedPreKeyRecordStructure.
         * @memberof SignalLocalStorageProtocol
         * @interface ISignedPreKeyRecordStructure
         * @augments SignalLocalStorageProtocol.SignedPreKeyRecordStructure.$Properties
         * @deprecated Use SignalLocalStorageProtocol.SignedPreKeyRecordStructure.$Properties instead.
         */

        /**
         * Shape of a SignedPreKeyRecordStructure.
         * @typedef {SignalLocalStorageProtocol.SignedPreKeyRecordStructure.$Properties} SignalLocalStorageProtocol.SignedPreKeyRecordStructure.$Shape
         */

        /**
         * Constructs a new SignedPreKeyRecordStructure.
         * @memberof SignalLocalStorageProtocol
         * @classdesc Represents a SignedPreKeyRecordStructure.
         * @constructor
         * @param {SignalLocalStorageProtocol.SignedPreKeyRecordStructure.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var SignedPreKeyRecordStructure = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * SignedPreKeyRecordStructure id.
         * @member {number|null|undefined} id
         * @memberof SignalLocalStorageProtocol.SignedPreKeyRecordStructure
         * @instance
         */
        SignedPreKeyRecordStructure.prototype.id = null;

        /**
         * SignedPreKeyRecordStructure publicKey.
         * @member {Uint8Array|null|undefined} publicKey
         * @memberof SignalLocalStorageProtocol.SignedPreKeyRecordStructure
         * @instance
         */
        SignedPreKeyRecordStructure.prototype.publicKey = null;

        /**
         * SignedPreKeyRecordStructure privateKey.
         * @member {Uint8Array|null|undefined} privateKey
         * @memberof SignalLocalStorageProtocol.SignedPreKeyRecordStructure
         * @instance
         */
        SignedPreKeyRecordStructure.prototype.privateKey = null;

        /**
         * SignedPreKeyRecordStructure signature.
         * @member {Uint8Array|null|undefined} signature
         * @memberof SignalLocalStorageProtocol.SignedPreKeyRecordStructure
         * @instance
         */
        SignedPreKeyRecordStructure.prototype.signature = null;

        /**
         * SignedPreKeyRecordStructure timestamp.
         * @member {number|Long|null|undefined} timestamp
         * @memberof SignalLocalStorageProtocol.SignedPreKeyRecordStructure
         * @instance
         */
        SignedPreKeyRecordStructure.prototype.timestamp = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(SignedPreKeyRecordStructure.prototype, "_id", {
            get: $util.oneOfGetter($oneOfFields = ["id"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(SignedPreKeyRecordStructure.prototype, "_publicKey", {
            get: $util.oneOfGetter($oneOfFields = ["publicKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(SignedPreKeyRecordStructure.prototype, "_privateKey", {
            get: $util.oneOfGetter($oneOfFields = ["privateKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(SignedPreKeyRecordStructure.prototype, "_signature", {
            get: $util.oneOfGetter($oneOfFields = ["signature"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(SignedPreKeyRecordStructure.prototype, "_timestamp", {
            get: $util.oneOfGetter($oneOfFields = ["timestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SignedPreKeyRecordStructure instance using the specified properties.
         * @function create
         * @memberof SignalLocalStorageProtocol.SignedPreKeyRecordStructure
         * @static
         * @param {SignalLocalStorageProtocol.SignedPreKeyRecordStructure.$Properties=} [properties] Properties to set
         * @returns {SignalLocalStorageProtocol.SignedPreKeyRecordStructure} SignedPreKeyRecordStructure instance
         * @type {{
         *   (properties: SignalLocalStorageProtocol.SignedPreKeyRecordStructure.$Shape): SignalLocalStorageProtocol.SignedPreKeyRecordStructure & SignalLocalStorageProtocol.SignedPreKeyRecordStructure.$Shape;
         *   (properties?: SignalLocalStorageProtocol.SignedPreKeyRecordStructure.$Properties): SignalLocalStorageProtocol.SignedPreKeyRecordStructure;
         * }}
         */
        SignedPreKeyRecordStructure.create = function(properties) {
            return new SignedPreKeyRecordStructure(properties);
        };

        /**
         * Encodes the specified SignedPreKeyRecordStructure message. Does not implicitly {@link SignalLocalStorageProtocol.SignedPreKeyRecordStructure.verify|verify} messages.
         * @function encode
         * @memberof SignalLocalStorageProtocol.SignedPreKeyRecordStructure
         * @static
         * @param {SignalLocalStorageProtocol.SignedPreKeyRecordStructure.$Properties} message SignedPreKeyRecordStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignedPreKeyRecordStructure.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.publicKey != null && $Object.hasOwnProperty.call(message, "publicKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.publicKey);
            if (message.privateKey != null && $Object.hasOwnProperty.call(message, "privateKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.privateKey);
            if (message.signature != null && $Object.hasOwnProperty.call(message, "signature"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.signature);
            if (message.timestamp != null && $Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 5, wireType 1 =*/41).fixed64(message.timestamp);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified SignedPreKeyRecordStructure message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.SignedPreKeyRecordStructure.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SignalLocalStorageProtocol.SignedPreKeyRecordStructure
         * @static
         * @param {SignalLocalStorageProtocol.SignedPreKeyRecordStructure.$Properties} message SignedPreKeyRecordStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignedPreKeyRecordStructure.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a SignedPreKeyRecordStructure message from the specified reader or buffer.
         * @function decode
         * @memberof SignalLocalStorageProtocol.SignedPreKeyRecordStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SignalLocalStorageProtocol.SignedPreKeyRecordStructure & SignalLocalStorageProtocol.SignedPreKeyRecordStructure.$Shape} SignedPreKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignedPreKeyRecordStructure.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.SignalLocalStorageProtocol.SignedPreKeyRecordStructure();
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
                        message.id = reader.uint32();
                        message._id = "id";
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.publicKey = reader.bytes();
                        message._publicKey = "publicKey";
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        message.privateKey = reader.bytes();
                        message._privateKey = "privateKey";
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        message.signature = reader.bytes();
                        message._signature = "signature";
                        continue;
                    }
                case 5: {
                        if (wireType !== 1)
                            break;
                        message.timestamp = reader.fixed64();
                        message._timestamp = "timestamp";
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
         * Decodes a SignedPreKeyRecordStructure message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SignalLocalStorageProtocol.SignedPreKeyRecordStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SignalLocalStorageProtocol.SignedPreKeyRecordStructure & SignalLocalStorageProtocol.SignedPreKeyRecordStructure.$Shape} SignedPreKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignedPreKeyRecordStructure.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SignedPreKeyRecordStructure message.
         * @function verify
         * @memberof SignalLocalStorageProtocol.SignedPreKeyRecordStructure
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SignedPreKeyRecordStructure.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.id != null && $Object.hasOwnProperty.call(message, "id")) {
                properties._id = 1;
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            }
            if (message.publicKey != null && $Object.hasOwnProperty.call(message, "publicKey")) {
                properties._publicKey = 1;
                if (!(message.publicKey && typeof message.publicKey.length === "number" || $util.isString(message.publicKey)))
                    return "publicKey: buffer expected";
            }
            if (message.privateKey != null && $Object.hasOwnProperty.call(message, "privateKey")) {
                properties._privateKey = 1;
                if (!(message.privateKey && typeof message.privateKey.length === "number" || $util.isString(message.privateKey)))
                    return "privateKey: buffer expected";
            }
            if (message.signature != null && $Object.hasOwnProperty.call(message, "signature")) {
                properties._signature = 1;
                if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                    return "signature: buffer expected";
            }
            if (message.timestamp != null && $Object.hasOwnProperty.call(message, "timestamp")) {
                properties._timestamp = 1;
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            }
            return null;
        };

        /**
         * Creates a SignedPreKeyRecordStructure message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SignalLocalStorageProtocol.SignedPreKeyRecordStructure
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SignalLocalStorageProtocol.SignedPreKeyRecordStructure} SignedPreKeyRecordStructure
         */
        SignedPreKeyRecordStructure.fromObject = function (object, _depth) {
            if (object instanceof $root.SignalLocalStorageProtocol.SignedPreKeyRecordStructure)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".SignalLocalStorageProtocol.SignedPreKeyRecordStructure: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.SignalLocalStorageProtocol.SignedPreKeyRecordStructure();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.publicKey != null)
                if (typeof object.publicKey === "string")
                    $util.base64.decode(object.publicKey, message.publicKey = $util.newBuffer($util.base64.length(object.publicKey)), 0);
                else if (object.publicKey.length >= 0)
                    message.publicKey = object.publicKey;
            if (object.privateKey != null)
                if (typeof object.privateKey === "string")
                    $util.base64.decode(object.privateKey, message.privateKey = $util.newBuffer($util.base64.length(object.privateKey)), 0);
                else if (object.privateKey.length >= 0)
                    message.privateKey = object.privateKey;
            if (object.signature != null)
                if (typeof object.signature === "string")
                    $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                else if (object.signature.length >= 0)
                    message.signature = object.signature;
            if (object.timestamp != null)
                if ($util.Long)
                    message.timestamp = $util.Long.fromValue(object.timestamp, true);
                else if (typeof object.timestamp === "string")
                    message.timestamp = $parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a SignedPreKeyRecordStructure message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SignalLocalStorageProtocol.SignedPreKeyRecordStructure
         * @static
         * @param {SignalLocalStorageProtocol.SignedPreKeyRecordStructure} message SignedPreKeyRecordStructure
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SignedPreKeyRecordStructure.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                object.id = message.id;
            if (message.publicKey != null && $Object.hasOwnProperty.call(message, "publicKey"))
                object.publicKey = options.bytes === $String ? $util.base64.encode(message.publicKey, 0, message.publicKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.publicKey) : message.publicKey;
            if (message.privateKey != null && $Object.hasOwnProperty.call(message, "privateKey"))
                object.privateKey = options.bytes === $String ? $util.base64.encode(message.privateKey, 0, message.privateKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.privateKey) : message.privateKey;
            if (message.signature != null && $Object.hasOwnProperty.call(message, "signature"))
                object.signature = options.bytes === $String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.signature) : message.signature;
            if (message.timestamp != null && $Object.hasOwnProperty.call(message, "timestamp"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.timestamp = typeof message.timestamp === "number" ? $BigInt(message.timestamp) : $util.Long.fromBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0, true).toBigInt();
                else if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === $String ? $String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === $String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === $Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
            return object;
        };

        /**
         * Converts this SignedPreKeyRecordStructure to JSON.
         * @function toJSON
         * @memberof SignalLocalStorageProtocol.SignedPreKeyRecordStructure
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SignedPreKeyRecordStructure.prototype.toJSON = function() {
            return SignedPreKeyRecordStructure.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for SignedPreKeyRecordStructure
         * @function getTypeUrl
         * @memberof SignalLocalStorageProtocol.SignedPreKeyRecordStructure
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        SignedPreKeyRecordStructure.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/SignalLocalStorageProtocol.SignedPreKeyRecordStructure";
        };

        return SignedPreKeyRecordStructure;
    })();

    SignalLocalStorageProtocol.PreKeyRecordStructure = (function() {

        /**
         * Properties of a PreKeyRecordStructure.
         * @typedef {Object} SignalLocalStorageProtocol.PreKeyRecordStructure.$Properties
         * @property {number|null} [id] PreKeyRecordStructure id
         * @property {Uint8Array|null} [publicKey] PreKeyRecordStructure publicKey
         * @property {Uint8Array|null} [privateKey] PreKeyRecordStructure privateKey
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a PreKeyRecordStructure.
         * @memberof SignalLocalStorageProtocol
         * @interface IPreKeyRecordStructure
         * @augments SignalLocalStorageProtocol.PreKeyRecordStructure.$Properties
         * @deprecated Use SignalLocalStorageProtocol.PreKeyRecordStructure.$Properties instead.
         */

        /**
         * Shape of a PreKeyRecordStructure.
         * @typedef {SignalLocalStorageProtocol.PreKeyRecordStructure.$Properties} SignalLocalStorageProtocol.PreKeyRecordStructure.$Shape
         */

        /**
         * Constructs a new PreKeyRecordStructure.
         * @memberof SignalLocalStorageProtocol
         * @classdesc Represents a PreKeyRecordStructure.
         * @constructor
         * @param {SignalLocalStorageProtocol.PreKeyRecordStructure.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var PreKeyRecordStructure = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * PreKeyRecordStructure id.
         * @member {number|null|undefined} id
         * @memberof SignalLocalStorageProtocol.PreKeyRecordStructure
         * @instance
         */
        PreKeyRecordStructure.prototype.id = null;

        /**
         * PreKeyRecordStructure publicKey.
         * @member {Uint8Array|null|undefined} publicKey
         * @memberof SignalLocalStorageProtocol.PreKeyRecordStructure
         * @instance
         */
        PreKeyRecordStructure.prototype.publicKey = null;

        /**
         * PreKeyRecordStructure privateKey.
         * @member {Uint8Array|null|undefined} privateKey
         * @memberof SignalLocalStorageProtocol.PreKeyRecordStructure
         * @instance
         */
        PreKeyRecordStructure.prototype.privateKey = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(PreKeyRecordStructure.prototype, "_id", {
            get: $util.oneOfGetter($oneOfFields = ["id"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(PreKeyRecordStructure.prototype, "_publicKey", {
            get: $util.oneOfGetter($oneOfFields = ["publicKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(PreKeyRecordStructure.prototype, "_privateKey", {
            get: $util.oneOfGetter($oneOfFields = ["privateKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new PreKeyRecordStructure instance using the specified properties.
         * @function create
         * @memberof SignalLocalStorageProtocol.PreKeyRecordStructure
         * @static
         * @param {SignalLocalStorageProtocol.PreKeyRecordStructure.$Properties=} [properties] Properties to set
         * @returns {SignalLocalStorageProtocol.PreKeyRecordStructure} PreKeyRecordStructure instance
         * @type {{
         *   (properties: SignalLocalStorageProtocol.PreKeyRecordStructure.$Shape): SignalLocalStorageProtocol.PreKeyRecordStructure & SignalLocalStorageProtocol.PreKeyRecordStructure.$Shape;
         *   (properties?: SignalLocalStorageProtocol.PreKeyRecordStructure.$Properties): SignalLocalStorageProtocol.PreKeyRecordStructure;
         * }}
         */
        PreKeyRecordStructure.create = function(properties) {
            return new PreKeyRecordStructure(properties);
        };

        /**
         * Encodes the specified PreKeyRecordStructure message. Does not implicitly {@link SignalLocalStorageProtocol.PreKeyRecordStructure.verify|verify} messages.
         * @function encode
         * @memberof SignalLocalStorageProtocol.PreKeyRecordStructure
         * @static
         * @param {SignalLocalStorageProtocol.PreKeyRecordStructure.$Properties} message PreKeyRecordStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PreKeyRecordStructure.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.publicKey != null && $Object.hasOwnProperty.call(message, "publicKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.publicKey);
            if (message.privateKey != null && $Object.hasOwnProperty.call(message, "privateKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.privateKey);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified PreKeyRecordStructure message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.PreKeyRecordStructure.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SignalLocalStorageProtocol.PreKeyRecordStructure
         * @static
         * @param {SignalLocalStorageProtocol.PreKeyRecordStructure.$Properties} message PreKeyRecordStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PreKeyRecordStructure.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a PreKeyRecordStructure message from the specified reader or buffer.
         * @function decode
         * @memberof SignalLocalStorageProtocol.PreKeyRecordStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SignalLocalStorageProtocol.PreKeyRecordStructure & SignalLocalStorageProtocol.PreKeyRecordStructure.$Shape} PreKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PreKeyRecordStructure.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.SignalLocalStorageProtocol.PreKeyRecordStructure();
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
                        message.id = reader.uint32();
                        message._id = "id";
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.publicKey = reader.bytes();
                        message._publicKey = "publicKey";
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        message.privateKey = reader.bytes();
                        message._privateKey = "privateKey";
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
         * Decodes a PreKeyRecordStructure message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SignalLocalStorageProtocol.PreKeyRecordStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SignalLocalStorageProtocol.PreKeyRecordStructure & SignalLocalStorageProtocol.PreKeyRecordStructure.$Shape} PreKeyRecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PreKeyRecordStructure.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PreKeyRecordStructure message.
         * @function verify
         * @memberof SignalLocalStorageProtocol.PreKeyRecordStructure
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PreKeyRecordStructure.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.id != null && $Object.hasOwnProperty.call(message, "id")) {
                properties._id = 1;
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            }
            if (message.publicKey != null && $Object.hasOwnProperty.call(message, "publicKey")) {
                properties._publicKey = 1;
                if (!(message.publicKey && typeof message.publicKey.length === "number" || $util.isString(message.publicKey)))
                    return "publicKey: buffer expected";
            }
            if (message.privateKey != null && $Object.hasOwnProperty.call(message, "privateKey")) {
                properties._privateKey = 1;
                if (!(message.privateKey && typeof message.privateKey.length === "number" || $util.isString(message.privateKey)))
                    return "privateKey: buffer expected";
            }
            return null;
        };

        /**
         * Creates a PreKeyRecordStructure message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SignalLocalStorageProtocol.PreKeyRecordStructure
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SignalLocalStorageProtocol.PreKeyRecordStructure} PreKeyRecordStructure
         */
        PreKeyRecordStructure.fromObject = function (object, _depth) {
            if (object instanceof $root.SignalLocalStorageProtocol.PreKeyRecordStructure)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".SignalLocalStorageProtocol.PreKeyRecordStructure: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.SignalLocalStorageProtocol.PreKeyRecordStructure();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.publicKey != null)
                if (typeof object.publicKey === "string")
                    $util.base64.decode(object.publicKey, message.publicKey = $util.newBuffer($util.base64.length(object.publicKey)), 0);
                else if (object.publicKey.length >= 0)
                    message.publicKey = object.publicKey;
            if (object.privateKey != null)
                if (typeof object.privateKey === "string")
                    $util.base64.decode(object.privateKey, message.privateKey = $util.newBuffer($util.base64.length(object.privateKey)), 0);
                else if (object.privateKey.length >= 0)
                    message.privateKey = object.privateKey;
            return message;
        };

        /**
         * Creates a plain object from a PreKeyRecordStructure message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SignalLocalStorageProtocol.PreKeyRecordStructure
         * @static
         * @param {SignalLocalStorageProtocol.PreKeyRecordStructure} message PreKeyRecordStructure
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PreKeyRecordStructure.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.id != null && $Object.hasOwnProperty.call(message, "id"))
                object.id = message.id;
            if (message.publicKey != null && $Object.hasOwnProperty.call(message, "publicKey"))
                object.publicKey = options.bytes === $String ? $util.base64.encode(message.publicKey, 0, message.publicKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.publicKey) : message.publicKey;
            if (message.privateKey != null && $Object.hasOwnProperty.call(message, "privateKey"))
                object.privateKey = options.bytes === $String ? $util.base64.encode(message.privateKey, 0, message.privateKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.privateKey) : message.privateKey;
            return object;
        };

        /**
         * Converts this PreKeyRecordStructure to JSON.
         * @function toJSON
         * @memberof SignalLocalStorageProtocol.PreKeyRecordStructure
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PreKeyRecordStructure.prototype.toJSON = function() {
            return PreKeyRecordStructure.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for PreKeyRecordStructure
         * @function getTypeUrl
         * @memberof SignalLocalStorageProtocol.PreKeyRecordStructure
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        PreKeyRecordStructure.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/SignalLocalStorageProtocol.PreKeyRecordStructure";
        };

        return PreKeyRecordStructure;
    })();

    SignalLocalStorageProtocol.RecordStructure = (function() {

        /**
         * Properties of a RecordStructure.
         * @typedef {Object} SignalLocalStorageProtocol.RecordStructure.$Properties
         * @property {SignalLocalStorageProtocol.SessionStructure.$Properties|null} [currentSession] RecordStructure currentSession
         * @property {Array.<SignalLocalStorageProtocol.SessionStructure.$Properties>|null} [previousSessions] RecordStructure previousSessions
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a RecordStructure.
         * @memberof SignalLocalStorageProtocol
         * @interface IRecordStructure
         * @augments SignalLocalStorageProtocol.RecordStructure.$Properties
         * @deprecated Use SignalLocalStorageProtocol.RecordStructure.$Properties instead.
         */

        /**
         * Shape of a RecordStructure.
         * @typedef {SignalLocalStorageProtocol.RecordStructure.$Properties} SignalLocalStorageProtocol.RecordStructure.$Shape
         */

        /**
         * Constructs a new RecordStructure.
         * @memberof SignalLocalStorageProtocol
         * @classdesc Represents a RecordStructure.
         * @constructor
         * @param {SignalLocalStorageProtocol.RecordStructure.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var RecordStructure = function (properties) {
            this.previousSessions = [];
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * RecordStructure currentSession.
         * @member {SignalLocalStorageProtocol.SessionStructure.$Properties|null|undefined} currentSession
         * @memberof SignalLocalStorageProtocol.RecordStructure
         * @instance
         */
        RecordStructure.prototype.currentSession = null;

        /**
         * RecordStructure previousSessions.
         * @member {Array.<SignalLocalStorageProtocol.SessionStructure.$Properties>} previousSessions
         * @memberof SignalLocalStorageProtocol.RecordStructure
         * @instance
         */
        RecordStructure.prototype.previousSessions = $util.emptyArray;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(RecordStructure.prototype, "_currentSession", {
            get: $util.oneOfGetter($oneOfFields = ["currentSession"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new RecordStructure instance using the specified properties.
         * @function create
         * @memberof SignalLocalStorageProtocol.RecordStructure
         * @static
         * @param {SignalLocalStorageProtocol.RecordStructure.$Properties=} [properties] Properties to set
         * @returns {SignalLocalStorageProtocol.RecordStructure} RecordStructure instance
         * @type {{
         *   (properties: SignalLocalStorageProtocol.RecordStructure.$Shape): SignalLocalStorageProtocol.RecordStructure & SignalLocalStorageProtocol.RecordStructure.$Shape;
         *   (properties?: SignalLocalStorageProtocol.RecordStructure.$Properties): SignalLocalStorageProtocol.RecordStructure;
         * }}
         */
        RecordStructure.create = function(properties) {
            return new RecordStructure(properties);
        };

        /**
         * Encodes the specified RecordStructure message. Does not implicitly {@link SignalLocalStorageProtocol.RecordStructure.verify|verify} messages.
         * @function encode
         * @memberof SignalLocalStorageProtocol.RecordStructure
         * @static
         * @param {SignalLocalStorageProtocol.RecordStructure.$Properties} message RecordStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RecordStructure.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.currentSession != null && $Object.hasOwnProperty.call(message, "currentSession"))
                $root.SignalLocalStorageProtocol.SessionStructure.encode(message.currentSession, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.previousSessions != null && message.previousSessions.length)
                for (var i = 0; i < message.previousSessions.length; ++i)
                    $root.SignalLocalStorageProtocol.SessionStructure.encode(message.previousSessions[i], writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified RecordStructure message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.RecordStructure.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SignalLocalStorageProtocol.RecordStructure
         * @static
         * @param {SignalLocalStorageProtocol.RecordStructure.$Properties} message RecordStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RecordStructure.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a RecordStructure message from the specified reader or buffer.
         * @function decode
         * @memberof SignalLocalStorageProtocol.RecordStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SignalLocalStorageProtocol.RecordStructure & SignalLocalStorageProtocol.RecordStructure.$Shape} RecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RecordStructure.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.SignalLocalStorageProtocol.RecordStructure();
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
                        message.currentSession = $root.SignalLocalStorageProtocol.SessionStructure.decode(reader, reader.uint32(), $undefined, _depth + 1, message.currentSession);
                        message._currentSession = "currentSession";
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        if (!(message.previousSessions && message.previousSessions.length))
                            message.previousSessions = [];
                        message.previousSessions.push($root.SignalLocalStorageProtocol.SessionStructure.decode(reader, reader.uint32(), $undefined, _depth + 1));
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
         * Decodes a RecordStructure message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SignalLocalStorageProtocol.RecordStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SignalLocalStorageProtocol.RecordStructure & SignalLocalStorageProtocol.RecordStructure.$Shape} RecordStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RecordStructure.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RecordStructure message.
         * @function verify
         * @memberof SignalLocalStorageProtocol.RecordStructure
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RecordStructure.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.currentSession != null && $Object.hasOwnProperty.call(message, "currentSession")) {
                properties._currentSession = 1;
                {
                    var error = $root.SignalLocalStorageProtocol.SessionStructure.verify(message.currentSession, _depth + 1);
                    if (error)
                        return "currentSession." + error;
                }
            }
            if (message.previousSessions != null && $Object.hasOwnProperty.call(message, "previousSessions")) {
                if (!$Array.isArray(message.previousSessions))
                    return "previousSessions: array expected";
                for (var i = 0; i < message.previousSessions.length; ++i) {
                    var error = $root.SignalLocalStorageProtocol.SessionStructure.verify(message.previousSessions[i], _depth + 1);
                    if (error)
                        return "previousSessions." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RecordStructure message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SignalLocalStorageProtocol.RecordStructure
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SignalLocalStorageProtocol.RecordStructure} RecordStructure
         */
        RecordStructure.fromObject = function (object, _depth) {
            if (object instanceof $root.SignalLocalStorageProtocol.RecordStructure)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".SignalLocalStorageProtocol.RecordStructure: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.SignalLocalStorageProtocol.RecordStructure();
            if (object.currentSession != null) {
                if (!$util.isObject(object.currentSession))
                    throw $TypeError(".SignalLocalStorageProtocol.RecordStructure.currentSession: object expected");
                message.currentSession = $root.SignalLocalStorageProtocol.SessionStructure.fromObject(object.currentSession, _depth + 1);
            }
            if (object.previousSessions) {
                if (!$Array.isArray(object.previousSessions))
                    throw $TypeError(".SignalLocalStorageProtocol.RecordStructure.previousSessions: array expected");
                message.previousSessions = $Array(object.previousSessions.length);
                for (var i = 0; i < object.previousSessions.length; ++i) {
                    if (!$util.isObject(object.previousSessions[i]))
                        throw $TypeError(".SignalLocalStorageProtocol.RecordStructure.previousSessions: object expected");
                    message.previousSessions[i] = $root.SignalLocalStorageProtocol.SessionStructure.fromObject(object.previousSessions[i], _depth + 1);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RecordStructure message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SignalLocalStorageProtocol.RecordStructure
         * @static
         * @param {SignalLocalStorageProtocol.RecordStructure} message RecordStructure
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RecordStructure.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.arrays || options.defaults)
                object.previousSessions = [];
            if (message.currentSession != null && $Object.hasOwnProperty.call(message, "currentSession"))
                object.currentSession = $root.SignalLocalStorageProtocol.SessionStructure.toObject(message.currentSession, options, _depth + 1);
            if (message.previousSessions && message.previousSessions.length) {
                object.previousSessions = $Array(message.previousSessions.length);
                for (var j = 0; j < message.previousSessions.length; ++j)
                    object.previousSessions[j] = $root.SignalLocalStorageProtocol.SessionStructure.toObject(message.previousSessions[j], options, _depth + 1);
            }
            return object;
        };

        /**
         * Converts this RecordStructure to JSON.
         * @function toJSON
         * @memberof SignalLocalStorageProtocol.RecordStructure
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RecordStructure.prototype.toJSON = function() {
            return RecordStructure.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for RecordStructure
         * @function getTypeUrl
         * @memberof SignalLocalStorageProtocol.RecordStructure
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        RecordStructure.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/SignalLocalStorageProtocol.RecordStructure";
        };

        return RecordStructure;
    })();

    SignalLocalStorageProtocol.SessionStructure = (function() {

        /**
         * Properties of a SessionStructure.
         * @typedef {Object} SignalLocalStorageProtocol.SessionStructure.$Properties
         * @property {number|null} [sessionVersion] SessionStructure sessionVersion
         * @property {Uint8Array|null} [localIdentityPublic] SessionStructure localIdentityPublic
         * @property {Uint8Array|null} [remoteIdentityPublic] SessionStructure remoteIdentityPublic
         * @property {Uint8Array|null} [rootKey] SessionStructure rootKey
         * @property {number|null} [previousCounter] SessionStructure previousCounter
         * @property {SignalLocalStorageProtocol.SessionStructure.Chain.$Properties|null} [senderChain] SessionStructure senderChain
         * @property {Array.<SignalLocalStorageProtocol.SessionStructure.Chain.$Properties>|null} [receiverChains] SessionStructure receiverChains
         * @property {SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.$Properties|null} [pendingKeyExchange] SessionStructure pendingKeyExchange
         * @property {SignalLocalStorageProtocol.SessionStructure.PendingPreKey.$Properties|null} [pendingPreKey] SessionStructure pendingPreKey
         * @property {number|null} [remoteRegistrationId] SessionStructure remoteRegistrationId
         * @property {number|null} [localRegistrationId] SessionStructure localRegistrationId
         * @property {boolean|null} [needsRefresh] SessionStructure needsRefresh
         * @property {Uint8Array|null} [aliceBaseKey] SessionStructure aliceBaseKey
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a SessionStructure.
         * @memberof SignalLocalStorageProtocol
         * @interface ISessionStructure
         * @augments SignalLocalStorageProtocol.SessionStructure.$Properties
         * @deprecated Use SignalLocalStorageProtocol.SessionStructure.$Properties instead.
         */

        /**
         * Shape of a SessionStructure.
         * @typedef {SignalLocalStorageProtocol.SessionStructure.$Properties} SignalLocalStorageProtocol.SessionStructure.$Shape
         */

        /**
         * Constructs a new SessionStructure.
         * @memberof SignalLocalStorageProtocol
         * @classdesc Represents a SessionStructure.
         * @constructor
         * @param {SignalLocalStorageProtocol.SessionStructure.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var SessionStructure = function (properties) {
            this.receiverChains = [];
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * SessionStructure sessionVersion.
         * @member {number|null|undefined} sessionVersion
         * @memberof SignalLocalStorageProtocol.SessionStructure
         * @instance
         */
        SessionStructure.prototype.sessionVersion = null;

        /**
         * SessionStructure localIdentityPublic.
         * @member {Uint8Array|null|undefined} localIdentityPublic
         * @memberof SignalLocalStorageProtocol.SessionStructure
         * @instance
         */
        SessionStructure.prototype.localIdentityPublic = null;

        /**
         * SessionStructure remoteIdentityPublic.
         * @member {Uint8Array|null|undefined} remoteIdentityPublic
         * @memberof SignalLocalStorageProtocol.SessionStructure
         * @instance
         */
        SessionStructure.prototype.remoteIdentityPublic = null;

        /**
         * SessionStructure rootKey.
         * @member {Uint8Array|null|undefined} rootKey
         * @memberof SignalLocalStorageProtocol.SessionStructure
         * @instance
         */
        SessionStructure.prototype.rootKey = null;

        /**
         * SessionStructure previousCounter.
         * @member {number|null|undefined} previousCounter
         * @memberof SignalLocalStorageProtocol.SessionStructure
         * @instance
         */
        SessionStructure.prototype.previousCounter = null;

        /**
         * SessionStructure senderChain.
         * @member {SignalLocalStorageProtocol.SessionStructure.Chain.$Properties|null|undefined} senderChain
         * @memberof SignalLocalStorageProtocol.SessionStructure
         * @instance
         */
        SessionStructure.prototype.senderChain = null;

        /**
         * SessionStructure receiverChains.
         * @member {Array.<SignalLocalStorageProtocol.SessionStructure.Chain.$Properties>} receiverChains
         * @memberof SignalLocalStorageProtocol.SessionStructure
         * @instance
         */
        SessionStructure.prototype.receiverChains = $util.emptyArray;

        /**
         * SessionStructure pendingKeyExchange.
         * @member {SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.$Properties|null|undefined} pendingKeyExchange
         * @memberof SignalLocalStorageProtocol.SessionStructure
         * @instance
         */
        SessionStructure.prototype.pendingKeyExchange = null;

        /**
         * SessionStructure pendingPreKey.
         * @member {SignalLocalStorageProtocol.SessionStructure.PendingPreKey.$Properties|null|undefined} pendingPreKey
         * @memberof SignalLocalStorageProtocol.SessionStructure
         * @instance
         */
        SessionStructure.prototype.pendingPreKey = null;

        /**
         * SessionStructure remoteRegistrationId.
         * @member {number|null|undefined} remoteRegistrationId
         * @memberof SignalLocalStorageProtocol.SessionStructure
         * @instance
         */
        SessionStructure.prototype.remoteRegistrationId = null;

        /**
         * SessionStructure localRegistrationId.
         * @member {number|null|undefined} localRegistrationId
         * @memberof SignalLocalStorageProtocol.SessionStructure
         * @instance
         */
        SessionStructure.prototype.localRegistrationId = null;

        /**
         * SessionStructure needsRefresh.
         * @member {boolean|null|undefined} needsRefresh
         * @memberof SignalLocalStorageProtocol.SessionStructure
         * @instance
         */
        SessionStructure.prototype.needsRefresh = null;

        /**
         * SessionStructure aliceBaseKey.
         * @member {Uint8Array|null|undefined} aliceBaseKey
         * @memberof SignalLocalStorageProtocol.SessionStructure
         * @instance
         */
        SessionStructure.prototype.aliceBaseKey = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(SessionStructure.prototype, "_sessionVersion", {
            get: $util.oneOfGetter($oneOfFields = ["sessionVersion"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(SessionStructure.prototype, "_localIdentityPublic", {
            get: $util.oneOfGetter($oneOfFields = ["localIdentityPublic"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(SessionStructure.prototype, "_remoteIdentityPublic", {
            get: $util.oneOfGetter($oneOfFields = ["remoteIdentityPublic"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(SessionStructure.prototype, "_rootKey", {
            get: $util.oneOfGetter($oneOfFields = ["rootKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(SessionStructure.prototype, "_previousCounter", {
            get: $util.oneOfGetter($oneOfFields = ["previousCounter"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(SessionStructure.prototype, "_senderChain", {
            get: $util.oneOfGetter($oneOfFields = ["senderChain"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(SessionStructure.prototype, "_pendingKeyExchange", {
            get: $util.oneOfGetter($oneOfFields = ["pendingKeyExchange"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(SessionStructure.prototype, "_pendingPreKey", {
            get: $util.oneOfGetter($oneOfFields = ["pendingPreKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(SessionStructure.prototype, "_remoteRegistrationId", {
            get: $util.oneOfGetter($oneOfFields = ["remoteRegistrationId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(SessionStructure.prototype, "_localRegistrationId", {
            get: $util.oneOfGetter($oneOfFields = ["localRegistrationId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(SessionStructure.prototype, "_needsRefresh", {
            get: $util.oneOfGetter($oneOfFields = ["needsRefresh"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(SessionStructure.prototype, "_aliceBaseKey", {
            get: $util.oneOfGetter($oneOfFields = ["aliceBaseKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SessionStructure instance using the specified properties.
         * @function create
         * @memberof SignalLocalStorageProtocol.SessionStructure
         * @static
         * @param {SignalLocalStorageProtocol.SessionStructure.$Properties=} [properties] Properties to set
         * @returns {SignalLocalStorageProtocol.SessionStructure} SessionStructure instance
         * @type {{
         *   (properties: SignalLocalStorageProtocol.SessionStructure.$Shape): SignalLocalStorageProtocol.SessionStructure & SignalLocalStorageProtocol.SessionStructure.$Shape;
         *   (properties?: SignalLocalStorageProtocol.SessionStructure.$Properties): SignalLocalStorageProtocol.SessionStructure;
         * }}
         */
        SessionStructure.create = function(properties) {
            return new SessionStructure(properties);
        };

        /**
         * Encodes the specified SessionStructure message. Does not implicitly {@link SignalLocalStorageProtocol.SessionStructure.verify|verify} messages.
         * @function encode
         * @memberof SignalLocalStorageProtocol.SessionStructure
         * @static
         * @param {SignalLocalStorageProtocol.SessionStructure.$Properties} message SessionStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SessionStructure.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.sessionVersion != null && $Object.hasOwnProperty.call(message, "sessionVersion"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.sessionVersion);
            if (message.localIdentityPublic != null && $Object.hasOwnProperty.call(message, "localIdentityPublic"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.localIdentityPublic);
            if (message.remoteIdentityPublic != null && $Object.hasOwnProperty.call(message, "remoteIdentityPublic"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.remoteIdentityPublic);
            if (message.rootKey != null && $Object.hasOwnProperty.call(message, "rootKey"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.rootKey);
            if (message.previousCounter != null && $Object.hasOwnProperty.call(message, "previousCounter"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.previousCounter);
            if (message.senderChain != null && $Object.hasOwnProperty.call(message, "senderChain"))
                $root.SignalLocalStorageProtocol.SessionStructure.Chain.encode(message.senderChain, writer.uint32(/* id 6, wireType 2 =*/50).fork(), _depth + 1).ldelim();
            if (message.receiverChains != null && message.receiverChains.length)
                for (var i = 0; i < message.receiverChains.length; ++i)
                    $root.SignalLocalStorageProtocol.SessionStructure.Chain.encode(message.receiverChains[i], writer.uint32(/* id 7, wireType 2 =*/58).fork(), _depth + 1).ldelim();
            if (message.pendingKeyExchange != null && $Object.hasOwnProperty.call(message, "pendingKeyExchange"))
                $root.SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.encode(message.pendingKeyExchange, writer.uint32(/* id 8, wireType 2 =*/66).fork(), _depth + 1).ldelim();
            if (message.pendingPreKey != null && $Object.hasOwnProperty.call(message, "pendingPreKey"))
                $root.SignalLocalStorageProtocol.SessionStructure.PendingPreKey.encode(message.pendingPreKey, writer.uint32(/* id 9, wireType 2 =*/74).fork(), _depth + 1).ldelim();
            if (message.remoteRegistrationId != null && $Object.hasOwnProperty.call(message, "remoteRegistrationId"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.remoteRegistrationId);
            if (message.localRegistrationId != null && $Object.hasOwnProperty.call(message, "localRegistrationId"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.localRegistrationId);
            if (message.needsRefresh != null && $Object.hasOwnProperty.call(message, "needsRefresh"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.needsRefresh);
            if (message.aliceBaseKey != null && $Object.hasOwnProperty.call(message, "aliceBaseKey"))
                writer.uint32(/* id 13, wireType 2 =*/106).bytes(message.aliceBaseKey);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified SessionStructure message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.SessionStructure.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SignalLocalStorageProtocol.SessionStructure
         * @static
         * @param {SignalLocalStorageProtocol.SessionStructure.$Properties} message SessionStructure message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SessionStructure.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a SessionStructure message from the specified reader or buffer.
         * @function decode
         * @memberof SignalLocalStorageProtocol.SessionStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SignalLocalStorageProtocol.SessionStructure & SignalLocalStorageProtocol.SessionStructure.$Shape} SessionStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SessionStructure.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.SignalLocalStorageProtocol.SessionStructure();
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
                        message.sessionVersion = reader.uint32();
                        message._sessionVersion = "sessionVersion";
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.localIdentityPublic = reader.bytes();
                        message._localIdentityPublic = "localIdentityPublic";
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        message.remoteIdentityPublic = reader.bytes();
                        message._remoteIdentityPublic = "remoteIdentityPublic";
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        message.rootKey = reader.bytes();
                        message._rootKey = "rootKey";
                        continue;
                    }
                case 5: {
                        if (wireType !== 0)
                            break;
                        message.previousCounter = reader.uint32();
                        message._previousCounter = "previousCounter";
                        continue;
                    }
                case 6: {
                        if (wireType !== 2)
                            break;
                        message.senderChain = $root.SignalLocalStorageProtocol.SessionStructure.Chain.decode(reader, reader.uint32(), $undefined, _depth + 1, message.senderChain);
                        message._senderChain = "senderChain";
                        continue;
                    }
                case 7: {
                        if (wireType !== 2)
                            break;
                        if (!(message.receiverChains && message.receiverChains.length))
                            message.receiverChains = [];
                        message.receiverChains.push($root.SignalLocalStorageProtocol.SessionStructure.Chain.decode(reader, reader.uint32(), $undefined, _depth + 1));
                        continue;
                    }
                case 8: {
                        if (wireType !== 2)
                            break;
                        message.pendingKeyExchange = $root.SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.decode(reader, reader.uint32(), $undefined, _depth + 1, message.pendingKeyExchange);
                        message._pendingKeyExchange = "pendingKeyExchange";
                        continue;
                    }
                case 9: {
                        if (wireType !== 2)
                            break;
                        message.pendingPreKey = $root.SignalLocalStorageProtocol.SessionStructure.PendingPreKey.decode(reader, reader.uint32(), $undefined, _depth + 1, message.pendingPreKey);
                        message._pendingPreKey = "pendingPreKey";
                        continue;
                    }
                case 10: {
                        if (wireType !== 0)
                            break;
                        message.remoteRegistrationId = reader.uint32();
                        message._remoteRegistrationId = "remoteRegistrationId";
                        continue;
                    }
                case 11: {
                        if (wireType !== 0)
                            break;
                        message.localRegistrationId = reader.uint32();
                        message._localRegistrationId = "localRegistrationId";
                        continue;
                    }
                case 12: {
                        if (wireType !== 0)
                            break;
                        message.needsRefresh = reader.bool();
                        message._needsRefresh = "needsRefresh";
                        continue;
                    }
                case 13: {
                        if (wireType !== 2)
                            break;
                        message.aliceBaseKey = reader.bytes();
                        message._aliceBaseKey = "aliceBaseKey";
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
         * Decodes a SessionStructure message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SignalLocalStorageProtocol.SessionStructure
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SignalLocalStorageProtocol.SessionStructure & SignalLocalStorageProtocol.SessionStructure.$Shape} SessionStructure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SessionStructure.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SessionStructure message.
         * @function verify
         * @memberof SignalLocalStorageProtocol.SessionStructure
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SessionStructure.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.sessionVersion != null && $Object.hasOwnProperty.call(message, "sessionVersion")) {
                properties._sessionVersion = 1;
                if (!$util.isInteger(message.sessionVersion))
                    return "sessionVersion: integer expected";
            }
            if (message.localIdentityPublic != null && $Object.hasOwnProperty.call(message, "localIdentityPublic")) {
                properties._localIdentityPublic = 1;
                if (!(message.localIdentityPublic && typeof message.localIdentityPublic.length === "number" || $util.isString(message.localIdentityPublic)))
                    return "localIdentityPublic: buffer expected";
            }
            if (message.remoteIdentityPublic != null && $Object.hasOwnProperty.call(message, "remoteIdentityPublic")) {
                properties._remoteIdentityPublic = 1;
                if (!(message.remoteIdentityPublic && typeof message.remoteIdentityPublic.length === "number" || $util.isString(message.remoteIdentityPublic)))
                    return "remoteIdentityPublic: buffer expected";
            }
            if (message.rootKey != null && $Object.hasOwnProperty.call(message, "rootKey")) {
                properties._rootKey = 1;
                if (!(message.rootKey && typeof message.rootKey.length === "number" || $util.isString(message.rootKey)))
                    return "rootKey: buffer expected";
            }
            if (message.previousCounter != null && $Object.hasOwnProperty.call(message, "previousCounter")) {
                properties._previousCounter = 1;
                if (!$util.isInteger(message.previousCounter))
                    return "previousCounter: integer expected";
            }
            if (message.senderChain != null && $Object.hasOwnProperty.call(message, "senderChain")) {
                properties._senderChain = 1;
                {
                    var error = $root.SignalLocalStorageProtocol.SessionStructure.Chain.verify(message.senderChain, _depth + 1);
                    if (error)
                        return "senderChain." + error;
                }
            }
            if (message.receiverChains != null && $Object.hasOwnProperty.call(message, "receiverChains")) {
                if (!$Array.isArray(message.receiverChains))
                    return "receiverChains: array expected";
                for (var i = 0; i < message.receiverChains.length; ++i) {
                    var error = $root.SignalLocalStorageProtocol.SessionStructure.Chain.verify(message.receiverChains[i], _depth + 1);
                    if (error)
                        return "receiverChains." + error;
                }
            }
            if (message.pendingKeyExchange != null && $Object.hasOwnProperty.call(message, "pendingKeyExchange")) {
                properties._pendingKeyExchange = 1;
                {
                    var error = $root.SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.verify(message.pendingKeyExchange, _depth + 1);
                    if (error)
                        return "pendingKeyExchange." + error;
                }
            }
            if (message.pendingPreKey != null && $Object.hasOwnProperty.call(message, "pendingPreKey")) {
                properties._pendingPreKey = 1;
                {
                    var error = $root.SignalLocalStorageProtocol.SessionStructure.PendingPreKey.verify(message.pendingPreKey, _depth + 1);
                    if (error)
                        return "pendingPreKey." + error;
                }
            }
            if (message.remoteRegistrationId != null && $Object.hasOwnProperty.call(message, "remoteRegistrationId")) {
                properties._remoteRegistrationId = 1;
                if (!$util.isInteger(message.remoteRegistrationId))
                    return "remoteRegistrationId: integer expected";
            }
            if (message.localRegistrationId != null && $Object.hasOwnProperty.call(message, "localRegistrationId")) {
                properties._localRegistrationId = 1;
                if (!$util.isInteger(message.localRegistrationId))
                    return "localRegistrationId: integer expected";
            }
            if (message.needsRefresh != null && $Object.hasOwnProperty.call(message, "needsRefresh")) {
                properties._needsRefresh = 1;
                if (typeof message.needsRefresh !== "boolean")
                    return "needsRefresh: boolean expected";
            }
            if (message.aliceBaseKey != null && $Object.hasOwnProperty.call(message, "aliceBaseKey")) {
                properties._aliceBaseKey = 1;
                if (!(message.aliceBaseKey && typeof message.aliceBaseKey.length === "number" || $util.isString(message.aliceBaseKey)))
                    return "aliceBaseKey: buffer expected";
            }
            return null;
        };

        /**
         * Creates a SessionStructure message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SignalLocalStorageProtocol.SessionStructure
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SignalLocalStorageProtocol.SessionStructure} SessionStructure
         */
        SessionStructure.fromObject = function (object, _depth) {
            if (object instanceof $root.SignalLocalStorageProtocol.SessionStructure)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".SignalLocalStorageProtocol.SessionStructure: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.SignalLocalStorageProtocol.SessionStructure();
            if (object.sessionVersion != null)
                message.sessionVersion = object.sessionVersion >>> 0;
            if (object.localIdentityPublic != null)
                if (typeof object.localIdentityPublic === "string")
                    $util.base64.decode(object.localIdentityPublic, message.localIdentityPublic = $util.newBuffer($util.base64.length(object.localIdentityPublic)), 0);
                else if (object.localIdentityPublic.length >= 0)
                    message.localIdentityPublic = object.localIdentityPublic;
            if (object.remoteIdentityPublic != null)
                if (typeof object.remoteIdentityPublic === "string")
                    $util.base64.decode(object.remoteIdentityPublic, message.remoteIdentityPublic = $util.newBuffer($util.base64.length(object.remoteIdentityPublic)), 0);
                else if (object.remoteIdentityPublic.length >= 0)
                    message.remoteIdentityPublic = object.remoteIdentityPublic;
            if (object.rootKey != null)
                if (typeof object.rootKey === "string")
                    $util.base64.decode(object.rootKey, message.rootKey = $util.newBuffer($util.base64.length(object.rootKey)), 0);
                else if (object.rootKey.length >= 0)
                    message.rootKey = object.rootKey;
            if (object.previousCounter != null)
                message.previousCounter = object.previousCounter >>> 0;
            if (object.senderChain != null) {
                if (!$util.isObject(object.senderChain))
                    throw $TypeError(".SignalLocalStorageProtocol.SessionStructure.senderChain: object expected");
                message.senderChain = $root.SignalLocalStorageProtocol.SessionStructure.Chain.fromObject(object.senderChain, _depth + 1);
            }
            if (object.receiverChains) {
                if (!$Array.isArray(object.receiverChains))
                    throw $TypeError(".SignalLocalStorageProtocol.SessionStructure.receiverChains: array expected");
                message.receiverChains = $Array(object.receiverChains.length);
                for (var i = 0; i < object.receiverChains.length; ++i) {
                    if (!$util.isObject(object.receiverChains[i]))
                        throw $TypeError(".SignalLocalStorageProtocol.SessionStructure.receiverChains: object expected");
                    message.receiverChains[i] = $root.SignalLocalStorageProtocol.SessionStructure.Chain.fromObject(object.receiverChains[i], _depth + 1);
                }
            }
            if (object.pendingKeyExchange != null) {
                if (!$util.isObject(object.pendingKeyExchange))
                    throw $TypeError(".SignalLocalStorageProtocol.SessionStructure.pendingKeyExchange: object expected");
                message.pendingKeyExchange = $root.SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.fromObject(object.pendingKeyExchange, _depth + 1);
            }
            if (object.pendingPreKey != null) {
                if (!$util.isObject(object.pendingPreKey))
                    throw $TypeError(".SignalLocalStorageProtocol.SessionStructure.pendingPreKey: object expected");
                message.pendingPreKey = $root.SignalLocalStorageProtocol.SessionStructure.PendingPreKey.fromObject(object.pendingPreKey, _depth + 1);
            }
            if (object.remoteRegistrationId != null)
                message.remoteRegistrationId = object.remoteRegistrationId >>> 0;
            if (object.localRegistrationId != null)
                message.localRegistrationId = object.localRegistrationId >>> 0;
            if (object.needsRefresh != null)
                message.needsRefresh = $Boolean(object.needsRefresh);
            if (object.aliceBaseKey != null)
                if (typeof object.aliceBaseKey === "string")
                    $util.base64.decode(object.aliceBaseKey, message.aliceBaseKey = $util.newBuffer($util.base64.length(object.aliceBaseKey)), 0);
                else if (object.aliceBaseKey.length >= 0)
                    message.aliceBaseKey = object.aliceBaseKey;
            return message;
        };

        /**
         * Creates a plain object from a SessionStructure message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SignalLocalStorageProtocol.SessionStructure
         * @static
         * @param {SignalLocalStorageProtocol.SessionStructure} message SessionStructure
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SessionStructure.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.arrays || options.defaults)
                object.receiverChains = [];
            if (message.sessionVersion != null && $Object.hasOwnProperty.call(message, "sessionVersion"))
                object.sessionVersion = message.sessionVersion;
            if (message.localIdentityPublic != null && $Object.hasOwnProperty.call(message, "localIdentityPublic"))
                object.localIdentityPublic = options.bytes === $String ? $util.base64.encode(message.localIdentityPublic, 0, message.localIdentityPublic.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.localIdentityPublic) : message.localIdentityPublic;
            if (message.remoteIdentityPublic != null && $Object.hasOwnProperty.call(message, "remoteIdentityPublic"))
                object.remoteIdentityPublic = options.bytes === $String ? $util.base64.encode(message.remoteIdentityPublic, 0, message.remoteIdentityPublic.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.remoteIdentityPublic) : message.remoteIdentityPublic;
            if (message.rootKey != null && $Object.hasOwnProperty.call(message, "rootKey"))
                object.rootKey = options.bytes === $String ? $util.base64.encode(message.rootKey, 0, message.rootKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.rootKey) : message.rootKey;
            if (message.previousCounter != null && $Object.hasOwnProperty.call(message, "previousCounter"))
                object.previousCounter = message.previousCounter;
            if (message.senderChain != null && $Object.hasOwnProperty.call(message, "senderChain"))
                object.senderChain = $root.SignalLocalStorageProtocol.SessionStructure.Chain.toObject(message.senderChain, options, _depth + 1);
            if (message.receiverChains && message.receiverChains.length) {
                object.receiverChains = $Array(message.receiverChains.length);
                for (var j = 0; j < message.receiverChains.length; ++j)
                    object.receiverChains[j] = $root.SignalLocalStorageProtocol.SessionStructure.Chain.toObject(message.receiverChains[j], options, _depth + 1);
            }
            if (message.pendingKeyExchange != null && $Object.hasOwnProperty.call(message, "pendingKeyExchange"))
                object.pendingKeyExchange = $root.SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.toObject(message.pendingKeyExchange, options, _depth + 1);
            if (message.pendingPreKey != null && $Object.hasOwnProperty.call(message, "pendingPreKey"))
                object.pendingPreKey = $root.SignalLocalStorageProtocol.SessionStructure.PendingPreKey.toObject(message.pendingPreKey, options, _depth + 1);
            if (message.remoteRegistrationId != null && $Object.hasOwnProperty.call(message, "remoteRegistrationId"))
                object.remoteRegistrationId = message.remoteRegistrationId;
            if (message.localRegistrationId != null && $Object.hasOwnProperty.call(message, "localRegistrationId"))
                object.localRegistrationId = message.localRegistrationId;
            if (message.needsRefresh != null && $Object.hasOwnProperty.call(message, "needsRefresh"))
                object.needsRefresh = message.needsRefresh;
            if (message.aliceBaseKey != null && $Object.hasOwnProperty.call(message, "aliceBaseKey"))
                object.aliceBaseKey = options.bytes === $String ? $util.base64.encode(message.aliceBaseKey, 0, message.aliceBaseKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.aliceBaseKey) : message.aliceBaseKey;
            return object;
        };

        /**
         * Converts this SessionStructure to JSON.
         * @function toJSON
         * @memberof SignalLocalStorageProtocol.SessionStructure
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SessionStructure.prototype.toJSON = function() {
            return SessionStructure.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for SessionStructure
         * @function getTypeUrl
         * @memberof SignalLocalStorageProtocol.SessionStructure
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        SessionStructure.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/SignalLocalStorageProtocol.SessionStructure";
        };

        SessionStructure.Chain = (function() {

            /**
             * Properties of a Chain.
             * @typedef {Object} SignalLocalStorageProtocol.SessionStructure.Chain.$Properties
             * @property {Uint8Array|null} [senderRatchetKey] Chain senderRatchetKey
             * @property {Uint8Array|null} [senderRatchetKeyPrivate] Chain senderRatchetKeyPrivate
             * @property {SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.$Properties|null} [chainKey] Chain chainKey
             * @property {Array.<SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.$Properties>|null} [messageKeys] Chain messageKeys
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Chain.
             * @memberof SignalLocalStorageProtocol.SessionStructure
             * @interface IChain
             * @augments SignalLocalStorageProtocol.SessionStructure.Chain.$Properties
             * @deprecated Use SignalLocalStorageProtocol.SessionStructure.Chain.$Properties instead.
             */

            /**
             * Shape of a Chain.
             * @typedef {SignalLocalStorageProtocol.SessionStructure.Chain.$Properties} SignalLocalStorageProtocol.SessionStructure.Chain.$Shape
             */

            /**
             * Constructs a new Chain.
             * @memberof SignalLocalStorageProtocol.SessionStructure
             * @classdesc Represents a Chain.
             * @constructor
             * @param {SignalLocalStorageProtocol.SessionStructure.Chain.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var Chain = function (properties) {
                this.messageKeys = [];
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Chain senderRatchetKey.
             * @member {Uint8Array|null|undefined} senderRatchetKey
             * @memberof SignalLocalStorageProtocol.SessionStructure.Chain
             * @instance
             */
            Chain.prototype.senderRatchetKey = null;

            /**
             * Chain senderRatchetKeyPrivate.
             * @member {Uint8Array|null|undefined} senderRatchetKeyPrivate
             * @memberof SignalLocalStorageProtocol.SessionStructure.Chain
             * @instance
             */
            Chain.prototype.senderRatchetKeyPrivate = null;

            /**
             * Chain chainKey.
             * @member {SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.$Properties|null|undefined} chainKey
             * @memberof SignalLocalStorageProtocol.SessionStructure.Chain
             * @instance
             */
            Chain.prototype.chainKey = null;

            /**
             * Chain messageKeys.
             * @member {Array.<SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.$Properties>} messageKeys
             * @memberof SignalLocalStorageProtocol.SessionStructure.Chain
             * @instance
             */
            Chain.prototype.messageKeys = $util.emptyArray;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Chain.prototype, "_senderRatchetKey", {
                get: $util.oneOfGetter($oneOfFields = ["senderRatchetKey"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Chain.prototype, "_senderRatchetKeyPrivate", {
                get: $util.oneOfGetter($oneOfFields = ["senderRatchetKeyPrivate"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Chain.prototype, "_chainKey", {
                get: $util.oneOfGetter($oneOfFields = ["chainKey"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Chain instance using the specified properties.
             * @function create
             * @memberof SignalLocalStorageProtocol.SessionStructure.Chain
             * @static
             * @param {SignalLocalStorageProtocol.SessionStructure.Chain.$Properties=} [properties] Properties to set
             * @returns {SignalLocalStorageProtocol.SessionStructure.Chain} Chain instance
             * @type {{
             *   (properties: SignalLocalStorageProtocol.SessionStructure.Chain.$Shape): SignalLocalStorageProtocol.SessionStructure.Chain & SignalLocalStorageProtocol.SessionStructure.Chain.$Shape;
             *   (properties?: SignalLocalStorageProtocol.SessionStructure.Chain.$Properties): SignalLocalStorageProtocol.SessionStructure.Chain;
             * }}
             */
            Chain.create = function(properties) {
                return new Chain(properties);
            };

            /**
             * Encodes the specified Chain message. Does not implicitly {@link SignalLocalStorageProtocol.SessionStructure.Chain.verify|verify} messages.
             * @function encode
             * @memberof SignalLocalStorageProtocol.SessionStructure.Chain
             * @static
             * @param {SignalLocalStorageProtocol.SessionStructure.Chain.$Properties} message Chain message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Chain.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.senderRatchetKey != null && $Object.hasOwnProperty.call(message, "senderRatchetKey"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.senderRatchetKey);
                if (message.senderRatchetKeyPrivate != null && $Object.hasOwnProperty.call(message, "senderRatchetKeyPrivate"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.senderRatchetKeyPrivate);
                if (message.chainKey != null && $Object.hasOwnProperty.call(message, "chainKey"))
                    $root.SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.encode(message.chainKey, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                if (message.messageKeys != null && message.messageKeys.length)
                    for (var i = 0; i < message.messageKeys.length; ++i)
                        $root.SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.encode(message.messageKeys[i], writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Chain message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.SessionStructure.Chain.verify|verify} messages.
             * @function encodeDelimited
             * @memberof SignalLocalStorageProtocol.SessionStructure.Chain
             * @static
             * @param {SignalLocalStorageProtocol.SessionStructure.Chain.$Properties} message Chain message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Chain.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a Chain message from the specified reader or buffer.
             * @function decode
             * @memberof SignalLocalStorageProtocol.SessionStructure.Chain
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {SignalLocalStorageProtocol.SessionStructure.Chain & SignalLocalStorageProtocol.SessionStructure.Chain.$Shape} Chain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Chain.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.SignalLocalStorageProtocol.SessionStructure.Chain();
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
                            message.senderRatchetKey = reader.bytes();
                            message._senderRatchetKey = "senderRatchetKey";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.senderRatchetKeyPrivate = reader.bytes();
                            message._senderRatchetKeyPrivate = "senderRatchetKeyPrivate";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.chainKey = $root.SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.decode(reader, reader.uint32(), $undefined, _depth + 1, message.chainKey);
                            message._chainKey = "chainKey";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            if (!(message.messageKeys && message.messageKeys.length))
                                message.messageKeys = [];
                            message.messageKeys.push($root.SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.decode(reader, reader.uint32(), $undefined, _depth + 1));
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
             * Decodes a Chain message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof SignalLocalStorageProtocol.SessionStructure.Chain
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {SignalLocalStorageProtocol.SessionStructure.Chain & SignalLocalStorageProtocol.SessionStructure.Chain.$Shape} Chain
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Chain.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Chain message.
             * @function verify
             * @memberof SignalLocalStorageProtocol.SessionStructure.Chain
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Chain.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.senderRatchetKey != null && $Object.hasOwnProperty.call(message, "senderRatchetKey")) {
                    properties._senderRatchetKey = 1;
                    if (!(message.senderRatchetKey && typeof message.senderRatchetKey.length === "number" || $util.isString(message.senderRatchetKey)))
                        return "senderRatchetKey: buffer expected";
                }
                if (message.senderRatchetKeyPrivate != null && $Object.hasOwnProperty.call(message, "senderRatchetKeyPrivate")) {
                    properties._senderRatchetKeyPrivate = 1;
                    if (!(message.senderRatchetKeyPrivate && typeof message.senderRatchetKeyPrivate.length === "number" || $util.isString(message.senderRatchetKeyPrivate)))
                        return "senderRatchetKeyPrivate: buffer expected";
                }
                if (message.chainKey != null && $Object.hasOwnProperty.call(message, "chainKey")) {
                    properties._chainKey = 1;
                    {
                        var error = $root.SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.verify(message.chainKey, _depth + 1);
                        if (error)
                            return "chainKey." + error;
                    }
                }
                if (message.messageKeys != null && $Object.hasOwnProperty.call(message, "messageKeys")) {
                    if (!$Array.isArray(message.messageKeys))
                        return "messageKeys: array expected";
                    for (var i = 0; i < message.messageKeys.length; ++i) {
                        var error = $root.SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.verify(message.messageKeys[i], _depth + 1);
                        if (error)
                            return "messageKeys." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a Chain message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof SignalLocalStorageProtocol.SessionStructure.Chain
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {SignalLocalStorageProtocol.SessionStructure.Chain} Chain
             */
            Chain.fromObject = function (object, _depth) {
                if (object instanceof $root.SignalLocalStorageProtocol.SessionStructure.Chain)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".SignalLocalStorageProtocol.SessionStructure.Chain: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.SignalLocalStorageProtocol.SessionStructure.Chain();
                if (object.senderRatchetKey != null)
                    if (typeof object.senderRatchetKey === "string")
                        $util.base64.decode(object.senderRatchetKey, message.senderRatchetKey = $util.newBuffer($util.base64.length(object.senderRatchetKey)), 0);
                    else if (object.senderRatchetKey.length >= 0)
                        message.senderRatchetKey = object.senderRatchetKey;
                if (object.senderRatchetKeyPrivate != null)
                    if (typeof object.senderRatchetKeyPrivate === "string")
                        $util.base64.decode(object.senderRatchetKeyPrivate, message.senderRatchetKeyPrivate = $util.newBuffer($util.base64.length(object.senderRatchetKeyPrivate)), 0);
                    else if (object.senderRatchetKeyPrivate.length >= 0)
                        message.senderRatchetKeyPrivate = object.senderRatchetKeyPrivate;
                if (object.chainKey != null) {
                    if (!$util.isObject(object.chainKey))
                        throw $TypeError(".SignalLocalStorageProtocol.SessionStructure.Chain.chainKey: object expected");
                    message.chainKey = $root.SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.fromObject(object.chainKey, _depth + 1);
                }
                if (object.messageKeys) {
                    if (!$Array.isArray(object.messageKeys))
                        throw $TypeError(".SignalLocalStorageProtocol.SessionStructure.Chain.messageKeys: array expected");
                    message.messageKeys = $Array(object.messageKeys.length);
                    for (var i = 0; i < object.messageKeys.length; ++i) {
                        if (!$util.isObject(object.messageKeys[i]))
                            throw $TypeError(".SignalLocalStorageProtocol.SessionStructure.Chain.messageKeys: object expected");
                        message.messageKeys[i] = $root.SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.fromObject(object.messageKeys[i], _depth + 1);
                    }
                }
                return message;
            };

            /**
             * Creates a plain object from a Chain message. Also converts values to other types if specified.
             * @function toObject
             * @memberof SignalLocalStorageProtocol.SessionStructure.Chain
             * @static
             * @param {SignalLocalStorageProtocol.SessionStructure.Chain} message Chain
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Chain.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (options.arrays || options.defaults)
                    object.messageKeys = [];
                if (message.senderRatchetKey != null && $Object.hasOwnProperty.call(message, "senderRatchetKey"))
                    object.senderRatchetKey = options.bytes === $String ? $util.base64.encode(message.senderRatchetKey, 0, message.senderRatchetKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.senderRatchetKey) : message.senderRatchetKey;
                if (message.senderRatchetKeyPrivate != null && $Object.hasOwnProperty.call(message, "senderRatchetKeyPrivate"))
                    object.senderRatchetKeyPrivate = options.bytes === $String ? $util.base64.encode(message.senderRatchetKeyPrivate, 0, message.senderRatchetKeyPrivate.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.senderRatchetKeyPrivate) : message.senderRatchetKeyPrivate;
                if (message.chainKey != null && $Object.hasOwnProperty.call(message, "chainKey"))
                    object.chainKey = $root.SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.toObject(message.chainKey, options, _depth + 1);
                if (message.messageKeys && message.messageKeys.length) {
                    object.messageKeys = $Array(message.messageKeys.length);
                    for (var j = 0; j < message.messageKeys.length; ++j)
                        object.messageKeys[j] = $root.SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.toObject(message.messageKeys[j], options, _depth + 1);
                }
                return object;
            };

            /**
             * Converts this Chain to JSON.
             * @function toJSON
             * @memberof SignalLocalStorageProtocol.SessionStructure.Chain
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Chain.prototype.toJSON = function() {
                return Chain.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Chain
             * @function getTypeUrl
             * @memberof SignalLocalStorageProtocol.SessionStructure.Chain
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Chain.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/SignalLocalStorageProtocol.SessionStructure.Chain";
            };

            Chain.ChainKey = (function() {

                /**
                 * Properties of a ChainKey.
                 * @typedef {Object} SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.$Properties
                 * @property {number|null} [index] ChainKey index
                 * @property {Uint8Array|null} [key] ChainKey key
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a ChainKey.
                 * @memberof SignalLocalStorageProtocol.SessionStructure.Chain
                 * @interface IChainKey
                 * @augments SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.$Properties
                 * @deprecated Use SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.$Properties instead.
                 */

                /**
                 * Shape of a ChainKey.
                 * @typedef {SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.$Properties} SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.$Shape
                 */

                /**
                 * Constructs a new ChainKey.
                 * @memberof SignalLocalStorageProtocol.SessionStructure.Chain
                 * @classdesc Represents a ChainKey.
                 * @constructor
                 * @param {SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var ChainKey = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * ChainKey index.
                 * @member {number|null|undefined} index
                 * @memberof SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey
                 * @instance
                 */
                ChainKey.prototype.index = null;

                /**
                 * ChainKey key.
                 * @member {Uint8Array|null|undefined} key
                 * @memberof SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey
                 * @instance
                 */
                ChainKey.prototype.key = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                // Virtual OneOf for proto3 optional field
                $Object.defineProperty(ChainKey.prototype, "_index", {
                    get: $util.oneOfGetter($oneOfFields = ["index"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                $Object.defineProperty(ChainKey.prototype, "_key", {
                    get: $util.oneOfGetter($oneOfFields = ["key"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new ChainKey instance using the specified properties.
                 * @function create
                 * @memberof SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey
                 * @static
                 * @param {SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.$Properties=} [properties] Properties to set
                 * @returns {SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey} ChainKey instance
                 * @type {{
                 *   (properties: SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.$Shape): SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey & SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.$Shape;
                 *   (properties?: SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.$Properties): SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey;
                 * }}
                 */
                ChainKey.create = function(properties) {
                    return new ChainKey(properties);
                };

                /**
                 * Encodes the specified ChainKey message. Does not implicitly {@link SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.verify|verify} messages.
                 * @function encode
                 * @memberof SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey
                 * @static
                 * @param {SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.$Properties} message ChainKey message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ChainKey.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.index != null && $Object.hasOwnProperty.call(message, "index"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.index);
                    if (message.key != null && $Object.hasOwnProperty.call(message, "key"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.key);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified ChainKey message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey
                 * @static
                 * @param {SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.$Properties} message ChainKey message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ChainKey.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };

                /**
                 * Decodes a ChainKey message from the specified reader or buffer.
                 * @function decode
                 * @memberof SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey & SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.$Shape} ChainKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ChainKey.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey();
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
                                message.index = reader.uint32();
                                message._index = "index";
                                continue;
                            }
                        case 2: {
                                if (wireType !== 2)
                                    break;
                                message.key = reader.bytes();
                                message._key = "key";
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
                 * Decodes a ChainKey message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey & SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey.$Shape} ChainKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ChainKey.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ChainKey message.
                 * @function verify
                 * @memberof SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ChainKey.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    var properties = {};
                    if (message.index != null && $Object.hasOwnProperty.call(message, "index")) {
                        properties._index = 1;
                        if (!$util.isInteger(message.index))
                            return "index: integer expected";
                    }
                    if (message.key != null && $Object.hasOwnProperty.call(message, "key")) {
                        properties._key = 1;
                        if (!(message.key && typeof message.key.length === "number" || $util.isString(message.key)))
                            return "key: buffer expected";
                    }
                    return null;
                };

                /**
                 * Creates a ChainKey message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey} ChainKey
                 */
                ChainKey.fromObject = function (object, _depth) {
                    if (object instanceof $root.SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey();
                    if (object.index != null)
                        message.index = object.index >>> 0;
                    if (object.key != null)
                        if (typeof object.key === "string")
                            $util.base64.decode(object.key, message.key = $util.newBuffer($util.base64.length(object.key)), 0);
                        else if (object.key.length >= 0)
                            message.key = object.key;
                    return message;
                };

                /**
                 * Creates a plain object from a ChainKey message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey
                 * @static
                 * @param {SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey} message ChainKey
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ChainKey.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (message.index != null && $Object.hasOwnProperty.call(message, "index"))
                        object.index = message.index;
                    if (message.key != null && $Object.hasOwnProperty.call(message, "key"))
                        object.key = options.bytes === $String ? $util.base64.encode(message.key, 0, message.key.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.key) : message.key;
                    return object;
                };

                /**
                 * Converts this ChainKey to JSON.
                 * @function toJSON
                 * @memberof SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ChainKey.prototype.toJSON = function() {
                    return ChainKey.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for ChainKey
                 * @function getTypeUrl
                 * @memberof SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                ChainKey.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/SignalLocalStorageProtocol.SessionStructure.Chain.ChainKey";
                };

                return ChainKey;
            })();

            Chain.MessageKey = (function() {

                /**
                 * Properties of a MessageKey.
                 * @typedef {Object} SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.$Properties
                 * @property {number|null} [index] MessageKey index
                 * @property {Uint8Array|null} [cipherKey] MessageKey cipherKey
                 * @property {Uint8Array|null} [macKey] MessageKey macKey
                 * @property {Uint8Array|null} [iv] MessageKey iv
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a MessageKey.
                 * @memberof SignalLocalStorageProtocol.SessionStructure.Chain
                 * @interface IMessageKey
                 * @augments SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.$Properties
                 * @deprecated Use SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.$Properties instead.
                 */

                /**
                 * Shape of a MessageKey.
                 * @typedef {SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.$Properties} SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.$Shape
                 */

                /**
                 * Constructs a new MessageKey.
                 * @memberof SignalLocalStorageProtocol.SessionStructure.Chain
                 * @classdesc Represents a MessageKey.
                 * @constructor
                 * @param {SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var MessageKey = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * MessageKey index.
                 * @member {number|null|undefined} index
                 * @memberof SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey
                 * @instance
                 */
                MessageKey.prototype.index = null;

                /**
                 * MessageKey cipherKey.
                 * @member {Uint8Array|null|undefined} cipherKey
                 * @memberof SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey
                 * @instance
                 */
                MessageKey.prototype.cipherKey = null;

                /**
                 * MessageKey macKey.
                 * @member {Uint8Array|null|undefined} macKey
                 * @memberof SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey
                 * @instance
                 */
                MessageKey.prototype.macKey = null;

                /**
                 * MessageKey iv.
                 * @member {Uint8Array|null|undefined} iv
                 * @memberof SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey
                 * @instance
                 */
                MessageKey.prototype.iv = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                // Virtual OneOf for proto3 optional field
                $Object.defineProperty(MessageKey.prototype, "_index", {
                    get: $util.oneOfGetter($oneOfFields = ["index"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                $Object.defineProperty(MessageKey.prototype, "_cipherKey", {
                    get: $util.oneOfGetter($oneOfFields = ["cipherKey"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                $Object.defineProperty(MessageKey.prototype, "_macKey", {
                    get: $util.oneOfGetter($oneOfFields = ["macKey"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                $Object.defineProperty(MessageKey.prototype, "_iv", {
                    get: $util.oneOfGetter($oneOfFields = ["iv"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new MessageKey instance using the specified properties.
                 * @function create
                 * @memberof SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey
                 * @static
                 * @param {SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.$Properties=} [properties] Properties to set
                 * @returns {SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey} MessageKey instance
                 * @type {{
                 *   (properties: SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.$Shape): SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey & SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.$Shape;
                 *   (properties?: SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.$Properties): SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey;
                 * }}
                 */
                MessageKey.create = function(properties) {
                    return new MessageKey(properties);
                };

                /**
                 * Encodes the specified MessageKey message. Does not implicitly {@link SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.verify|verify} messages.
                 * @function encode
                 * @memberof SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey
                 * @static
                 * @param {SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.$Properties} message MessageKey message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageKey.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.index != null && $Object.hasOwnProperty.call(message, "index"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.index);
                    if (message.cipherKey != null && $Object.hasOwnProperty.call(message, "cipherKey"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.cipherKey);
                    if (message.macKey != null && $Object.hasOwnProperty.call(message, "macKey"))
                        writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.macKey);
                    if (message.iv != null && $Object.hasOwnProperty.call(message, "iv"))
                        writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.iv);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified MessageKey message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey
                 * @static
                 * @param {SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.$Properties} message MessageKey message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageKey.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };

                /**
                 * Decodes a MessageKey message from the specified reader or buffer.
                 * @function decode
                 * @memberof SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey & SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.$Shape} MessageKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageKey.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey();
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
                                message.index = reader.uint32();
                                message._index = "index";
                                continue;
                            }
                        case 2: {
                                if (wireType !== 2)
                                    break;
                                message.cipherKey = reader.bytes();
                                message._cipherKey = "cipherKey";
                                continue;
                            }
                        case 3: {
                                if (wireType !== 2)
                                    break;
                                message.macKey = reader.bytes();
                                message._macKey = "macKey";
                                continue;
                            }
                        case 4: {
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
                 * Decodes a MessageKey message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey & SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey.$Shape} MessageKey
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageKey.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a MessageKey message.
                 * @function verify
                 * @memberof SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MessageKey.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    var properties = {};
                    if (message.index != null && $Object.hasOwnProperty.call(message, "index")) {
                        properties._index = 1;
                        if (!$util.isInteger(message.index))
                            return "index: integer expected";
                    }
                    if (message.cipherKey != null && $Object.hasOwnProperty.call(message, "cipherKey")) {
                        properties._cipherKey = 1;
                        if (!(message.cipherKey && typeof message.cipherKey.length === "number" || $util.isString(message.cipherKey)))
                            return "cipherKey: buffer expected";
                    }
                    if (message.macKey != null && $Object.hasOwnProperty.call(message, "macKey")) {
                        properties._macKey = 1;
                        if (!(message.macKey && typeof message.macKey.length === "number" || $util.isString(message.macKey)))
                            return "macKey: buffer expected";
                    }
                    if (message.iv != null && $Object.hasOwnProperty.call(message, "iv")) {
                        properties._iv = 1;
                        if (!(message.iv && typeof message.iv.length === "number" || $util.isString(message.iv)))
                            return "iv: buffer expected";
                    }
                    return null;
                };

                /**
                 * Creates a MessageKey message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey} MessageKey
                 */
                MessageKey.fromObject = function (object, _depth) {
                    if (object instanceof $root.SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey();
                    if (object.index != null)
                        message.index = object.index >>> 0;
                    if (object.cipherKey != null)
                        if (typeof object.cipherKey === "string")
                            $util.base64.decode(object.cipherKey, message.cipherKey = $util.newBuffer($util.base64.length(object.cipherKey)), 0);
                        else if (object.cipherKey.length >= 0)
                            message.cipherKey = object.cipherKey;
                    if (object.macKey != null)
                        if (typeof object.macKey === "string")
                            $util.base64.decode(object.macKey, message.macKey = $util.newBuffer($util.base64.length(object.macKey)), 0);
                        else if (object.macKey.length >= 0)
                            message.macKey = object.macKey;
                    if (object.iv != null)
                        if (typeof object.iv === "string")
                            $util.base64.decode(object.iv, message.iv = $util.newBuffer($util.base64.length(object.iv)), 0);
                        else if (object.iv.length >= 0)
                            message.iv = object.iv;
                    return message;
                };

                /**
                 * Creates a plain object from a MessageKey message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey
                 * @static
                 * @param {SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey} message MessageKey
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MessageKey.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (message.index != null && $Object.hasOwnProperty.call(message, "index"))
                        object.index = message.index;
                    if (message.cipherKey != null && $Object.hasOwnProperty.call(message, "cipherKey"))
                        object.cipherKey = options.bytes === $String ? $util.base64.encode(message.cipherKey, 0, message.cipherKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.cipherKey) : message.cipherKey;
                    if (message.macKey != null && $Object.hasOwnProperty.call(message, "macKey"))
                        object.macKey = options.bytes === $String ? $util.base64.encode(message.macKey, 0, message.macKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.macKey) : message.macKey;
                    if (message.iv != null && $Object.hasOwnProperty.call(message, "iv"))
                        object.iv = options.bytes === $String ? $util.base64.encode(message.iv, 0, message.iv.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.iv) : message.iv;
                    return object;
                };

                /**
                 * Converts this MessageKey to JSON.
                 * @function toJSON
                 * @memberof SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MessageKey.prototype.toJSON = function() {
                    return MessageKey.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for MessageKey
                 * @function getTypeUrl
                 * @memberof SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                MessageKey.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/SignalLocalStorageProtocol.SessionStructure.Chain.MessageKey";
                };

                return MessageKey;
            })();

            return Chain;
        })();

        SessionStructure.PendingKeyExchange = (function() {

            /**
             * Properties of a PendingKeyExchange.
             * @typedef {Object} SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.$Properties
             * @property {number|null} [sequence] PendingKeyExchange sequence
             * @property {Uint8Array|null} [localBaseKey] PendingKeyExchange localBaseKey
             * @property {Uint8Array|null} [localBaseKeyPrivate] PendingKeyExchange localBaseKeyPrivate
             * @property {Uint8Array|null} [localRatchetKey] PendingKeyExchange localRatchetKey
             * @property {Uint8Array|null} [localRatchetKeyPrivate] PendingKeyExchange localRatchetKeyPrivate
             * @property {Uint8Array|null} [localIdentityKey] PendingKeyExchange localIdentityKey
             * @property {Uint8Array|null} [localIdentityKeyPrivate] PendingKeyExchange localIdentityKeyPrivate
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a PendingKeyExchange.
             * @memberof SignalLocalStorageProtocol.SessionStructure
             * @interface IPendingKeyExchange
             * @augments SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.$Properties
             * @deprecated Use SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.$Properties instead.
             */

            /**
             * Shape of a PendingKeyExchange.
             * @typedef {SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.$Properties} SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.$Shape
             */

            /**
             * Constructs a new PendingKeyExchange.
             * @memberof SignalLocalStorageProtocol.SessionStructure
             * @classdesc Represents a PendingKeyExchange.
             * @constructor
             * @param {SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var PendingKeyExchange = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * PendingKeyExchange sequence.
             * @member {number|null|undefined} sequence
             * @memberof SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange
             * @instance
             */
            PendingKeyExchange.prototype.sequence = null;

            /**
             * PendingKeyExchange localBaseKey.
             * @member {Uint8Array|null|undefined} localBaseKey
             * @memberof SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange
             * @instance
             */
            PendingKeyExchange.prototype.localBaseKey = null;

            /**
             * PendingKeyExchange localBaseKeyPrivate.
             * @member {Uint8Array|null|undefined} localBaseKeyPrivate
             * @memberof SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange
             * @instance
             */
            PendingKeyExchange.prototype.localBaseKeyPrivate = null;

            /**
             * PendingKeyExchange localRatchetKey.
             * @member {Uint8Array|null|undefined} localRatchetKey
             * @memberof SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange
             * @instance
             */
            PendingKeyExchange.prototype.localRatchetKey = null;

            /**
             * PendingKeyExchange localRatchetKeyPrivate.
             * @member {Uint8Array|null|undefined} localRatchetKeyPrivate
             * @memberof SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange
             * @instance
             */
            PendingKeyExchange.prototype.localRatchetKeyPrivate = null;

            /**
             * PendingKeyExchange localIdentityKey.
             * @member {Uint8Array|null|undefined} localIdentityKey
             * @memberof SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange
             * @instance
             */
            PendingKeyExchange.prototype.localIdentityKey = null;

            /**
             * PendingKeyExchange localIdentityKeyPrivate.
             * @member {Uint8Array|null|undefined} localIdentityKeyPrivate
             * @memberof SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange
             * @instance
             */
            PendingKeyExchange.prototype.localIdentityKeyPrivate = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(PendingKeyExchange.prototype, "_sequence", {
                get: $util.oneOfGetter($oneOfFields = ["sequence"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(PendingKeyExchange.prototype, "_localBaseKey", {
                get: $util.oneOfGetter($oneOfFields = ["localBaseKey"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(PendingKeyExchange.prototype, "_localBaseKeyPrivate", {
                get: $util.oneOfGetter($oneOfFields = ["localBaseKeyPrivate"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(PendingKeyExchange.prototype, "_localRatchetKey", {
                get: $util.oneOfGetter($oneOfFields = ["localRatchetKey"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(PendingKeyExchange.prototype, "_localRatchetKeyPrivate", {
                get: $util.oneOfGetter($oneOfFields = ["localRatchetKeyPrivate"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(PendingKeyExchange.prototype, "_localIdentityKey", {
                get: $util.oneOfGetter($oneOfFields = ["localIdentityKey"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(PendingKeyExchange.prototype, "_localIdentityKeyPrivate", {
                get: $util.oneOfGetter($oneOfFields = ["localIdentityKeyPrivate"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new PendingKeyExchange instance using the specified properties.
             * @function create
             * @memberof SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange
             * @static
             * @param {SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.$Properties=} [properties] Properties to set
             * @returns {SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange} PendingKeyExchange instance
             * @type {{
             *   (properties: SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.$Shape): SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange & SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.$Shape;
             *   (properties?: SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.$Properties): SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange;
             * }}
             */
            PendingKeyExchange.create = function(properties) {
                return new PendingKeyExchange(properties);
            };

            /**
             * Encodes the specified PendingKeyExchange message. Does not implicitly {@link SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.verify|verify} messages.
             * @function encode
             * @memberof SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange
             * @static
             * @param {SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.$Properties} message PendingKeyExchange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PendingKeyExchange.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.sequence != null && $Object.hasOwnProperty.call(message, "sequence"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.sequence);
                if (message.localBaseKey != null && $Object.hasOwnProperty.call(message, "localBaseKey"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.localBaseKey);
                if (message.localBaseKeyPrivate != null && $Object.hasOwnProperty.call(message, "localBaseKeyPrivate"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.localBaseKeyPrivate);
                if (message.localRatchetKey != null && $Object.hasOwnProperty.call(message, "localRatchetKey"))
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.localRatchetKey);
                if (message.localRatchetKeyPrivate != null && $Object.hasOwnProperty.call(message, "localRatchetKeyPrivate"))
                    writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.localRatchetKeyPrivate);
                if (message.localIdentityKey != null && $Object.hasOwnProperty.call(message, "localIdentityKey"))
                    writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.localIdentityKey);
                if (message.localIdentityKeyPrivate != null && $Object.hasOwnProperty.call(message, "localIdentityKeyPrivate"))
                    writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.localIdentityKeyPrivate);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified PendingKeyExchange message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.verify|verify} messages.
             * @function encodeDelimited
             * @memberof SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange
             * @static
             * @param {SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.$Properties} message PendingKeyExchange message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PendingKeyExchange.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a PendingKeyExchange message from the specified reader or buffer.
             * @function decode
             * @memberof SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange & SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.$Shape} PendingKeyExchange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PendingKeyExchange.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange();
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
                            message.sequence = reader.uint32();
                            message._sequence = "sequence";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.localBaseKey = reader.bytes();
                            message._localBaseKey = "localBaseKey";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.localBaseKeyPrivate = reader.bytes();
                            message._localBaseKeyPrivate = "localBaseKeyPrivate";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            message.localRatchetKey = reader.bytes();
                            message._localRatchetKey = "localRatchetKey";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 2)
                                break;
                            message.localRatchetKeyPrivate = reader.bytes();
                            message._localRatchetKeyPrivate = "localRatchetKeyPrivate";
                            continue;
                        }
                    case 7: {
                            if (wireType !== 2)
                                break;
                            message.localIdentityKey = reader.bytes();
                            message._localIdentityKey = "localIdentityKey";
                            continue;
                        }
                    case 8: {
                            if (wireType !== 2)
                                break;
                            message.localIdentityKeyPrivate = reader.bytes();
                            message._localIdentityKeyPrivate = "localIdentityKeyPrivate";
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
             * Decodes a PendingKeyExchange message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange & SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange.$Shape} PendingKeyExchange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PendingKeyExchange.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PendingKeyExchange message.
             * @function verify
             * @memberof SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PendingKeyExchange.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.sequence != null && $Object.hasOwnProperty.call(message, "sequence")) {
                    properties._sequence = 1;
                    if (!$util.isInteger(message.sequence))
                        return "sequence: integer expected";
                }
                if (message.localBaseKey != null && $Object.hasOwnProperty.call(message, "localBaseKey")) {
                    properties._localBaseKey = 1;
                    if (!(message.localBaseKey && typeof message.localBaseKey.length === "number" || $util.isString(message.localBaseKey)))
                        return "localBaseKey: buffer expected";
                }
                if (message.localBaseKeyPrivate != null && $Object.hasOwnProperty.call(message, "localBaseKeyPrivate")) {
                    properties._localBaseKeyPrivate = 1;
                    if (!(message.localBaseKeyPrivate && typeof message.localBaseKeyPrivate.length === "number" || $util.isString(message.localBaseKeyPrivate)))
                        return "localBaseKeyPrivate: buffer expected";
                }
                if (message.localRatchetKey != null && $Object.hasOwnProperty.call(message, "localRatchetKey")) {
                    properties._localRatchetKey = 1;
                    if (!(message.localRatchetKey && typeof message.localRatchetKey.length === "number" || $util.isString(message.localRatchetKey)))
                        return "localRatchetKey: buffer expected";
                }
                if (message.localRatchetKeyPrivate != null && $Object.hasOwnProperty.call(message, "localRatchetKeyPrivate")) {
                    properties._localRatchetKeyPrivate = 1;
                    if (!(message.localRatchetKeyPrivate && typeof message.localRatchetKeyPrivate.length === "number" || $util.isString(message.localRatchetKeyPrivate)))
                        return "localRatchetKeyPrivate: buffer expected";
                }
                if (message.localIdentityKey != null && $Object.hasOwnProperty.call(message, "localIdentityKey")) {
                    properties._localIdentityKey = 1;
                    if (!(message.localIdentityKey && typeof message.localIdentityKey.length === "number" || $util.isString(message.localIdentityKey)))
                        return "localIdentityKey: buffer expected";
                }
                if (message.localIdentityKeyPrivate != null && $Object.hasOwnProperty.call(message, "localIdentityKeyPrivate")) {
                    properties._localIdentityKeyPrivate = 1;
                    if (!(message.localIdentityKeyPrivate && typeof message.localIdentityKeyPrivate.length === "number" || $util.isString(message.localIdentityKeyPrivate)))
                        return "localIdentityKeyPrivate: buffer expected";
                }
                return null;
            };

            /**
             * Creates a PendingKeyExchange message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange} PendingKeyExchange
             */
            PendingKeyExchange.fromObject = function (object, _depth) {
                if (object instanceof $root.SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange();
                if (object.sequence != null)
                    message.sequence = object.sequence >>> 0;
                if (object.localBaseKey != null)
                    if (typeof object.localBaseKey === "string")
                        $util.base64.decode(object.localBaseKey, message.localBaseKey = $util.newBuffer($util.base64.length(object.localBaseKey)), 0);
                    else if (object.localBaseKey.length >= 0)
                        message.localBaseKey = object.localBaseKey;
                if (object.localBaseKeyPrivate != null)
                    if (typeof object.localBaseKeyPrivate === "string")
                        $util.base64.decode(object.localBaseKeyPrivate, message.localBaseKeyPrivate = $util.newBuffer($util.base64.length(object.localBaseKeyPrivate)), 0);
                    else if (object.localBaseKeyPrivate.length >= 0)
                        message.localBaseKeyPrivate = object.localBaseKeyPrivate;
                if (object.localRatchetKey != null)
                    if (typeof object.localRatchetKey === "string")
                        $util.base64.decode(object.localRatchetKey, message.localRatchetKey = $util.newBuffer($util.base64.length(object.localRatchetKey)), 0);
                    else if (object.localRatchetKey.length >= 0)
                        message.localRatchetKey = object.localRatchetKey;
                if (object.localRatchetKeyPrivate != null)
                    if (typeof object.localRatchetKeyPrivate === "string")
                        $util.base64.decode(object.localRatchetKeyPrivate, message.localRatchetKeyPrivate = $util.newBuffer($util.base64.length(object.localRatchetKeyPrivate)), 0);
                    else if (object.localRatchetKeyPrivate.length >= 0)
                        message.localRatchetKeyPrivate = object.localRatchetKeyPrivate;
                if (object.localIdentityKey != null)
                    if (typeof object.localIdentityKey === "string")
                        $util.base64.decode(object.localIdentityKey, message.localIdentityKey = $util.newBuffer($util.base64.length(object.localIdentityKey)), 0);
                    else if (object.localIdentityKey.length >= 0)
                        message.localIdentityKey = object.localIdentityKey;
                if (object.localIdentityKeyPrivate != null)
                    if (typeof object.localIdentityKeyPrivate === "string")
                        $util.base64.decode(object.localIdentityKeyPrivate, message.localIdentityKeyPrivate = $util.newBuffer($util.base64.length(object.localIdentityKeyPrivate)), 0);
                    else if (object.localIdentityKeyPrivate.length >= 0)
                        message.localIdentityKeyPrivate = object.localIdentityKeyPrivate;
                return message;
            };

            /**
             * Creates a plain object from a PendingKeyExchange message. Also converts values to other types if specified.
             * @function toObject
             * @memberof SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange
             * @static
             * @param {SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange} message PendingKeyExchange
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PendingKeyExchange.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (message.sequence != null && $Object.hasOwnProperty.call(message, "sequence"))
                    object.sequence = message.sequence;
                if (message.localBaseKey != null && $Object.hasOwnProperty.call(message, "localBaseKey"))
                    object.localBaseKey = options.bytes === $String ? $util.base64.encode(message.localBaseKey, 0, message.localBaseKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.localBaseKey) : message.localBaseKey;
                if (message.localBaseKeyPrivate != null && $Object.hasOwnProperty.call(message, "localBaseKeyPrivate"))
                    object.localBaseKeyPrivate = options.bytes === $String ? $util.base64.encode(message.localBaseKeyPrivate, 0, message.localBaseKeyPrivate.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.localBaseKeyPrivate) : message.localBaseKeyPrivate;
                if (message.localRatchetKey != null && $Object.hasOwnProperty.call(message, "localRatchetKey"))
                    object.localRatchetKey = options.bytes === $String ? $util.base64.encode(message.localRatchetKey, 0, message.localRatchetKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.localRatchetKey) : message.localRatchetKey;
                if (message.localRatchetKeyPrivate != null && $Object.hasOwnProperty.call(message, "localRatchetKeyPrivate"))
                    object.localRatchetKeyPrivate = options.bytes === $String ? $util.base64.encode(message.localRatchetKeyPrivate, 0, message.localRatchetKeyPrivate.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.localRatchetKeyPrivate) : message.localRatchetKeyPrivate;
                if (message.localIdentityKey != null && $Object.hasOwnProperty.call(message, "localIdentityKey"))
                    object.localIdentityKey = options.bytes === $String ? $util.base64.encode(message.localIdentityKey, 0, message.localIdentityKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.localIdentityKey) : message.localIdentityKey;
                if (message.localIdentityKeyPrivate != null && $Object.hasOwnProperty.call(message, "localIdentityKeyPrivate"))
                    object.localIdentityKeyPrivate = options.bytes === $String ? $util.base64.encode(message.localIdentityKeyPrivate, 0, message.localIdentityKeyPrivate.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.localIdentityKeyPrivate) : message.localIdentityKeyPrivate;
                return object;
            };

            /**
             * Converts this PendingKeyExchange to JSON.
             * @function toJSON
             * @memberof SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PendingKeyExchange.prototype.toJSON = function() {
                return PendingKeyExchange.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for PendingKeyExchange
             * @function getTypeUrl
             * @memberof SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            PendingKeyExchange.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/SignalLocalStorageProtocol.SessionStructure.PendingKeyExchange";
            };

            return PendingKeyExchange;
        })();

        SessionStructure.PendingPreKey = (function() {

            /**
             * Properties of a PendingPreKey.
             * @typedef {Object} SignalLocalStorageProtocol.SessionStructure.PendingPreKey.$Properties
             * @property {number|null} [preKeyId] PendingPreKey preKeyId
             * @property {number|null} [signedPreKeyId] PendingPreKey signedPreKeyId
             * @property {Uint8Array|null} [baseKey] PendingPreKey baseKey
             * @property {number|null} [kyberPreKeyId] PendingPreKey kyberPreKeyId
             * @property {Uint8Array|null} [kyberCiphertext] PendingPreKey kyberCiphertext
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a PendingPreKey.
             * @memberof SignalLocalStorageProtocol.SessionStructure
             * @interface IPendingPreKey
             * @augments SignalLocalStorageProtocol.SessionStructure.PendingPreKey.$Properties
             * @deprecated Use SignalLocalStorageProtocol.SessionStructure.PendingPreKey.$Properties instead.
             */

            /**
             * Shape of a PendingPreKey.
             * @typedef {SignalLocalStorageProtocol.SessionStructure.PendingPreKey.$Properties} SignalLocalStorageProtocol.SessionStructure.PendingPreKey.$Shape
             */

            /**
             * Constructs a new PendingPreKey.
             * @memberof SignalLocalStorageProtocol.SessionStructure
             * @classdesc Represents a PendingPreKey.
             * @constructor
             * @param {SignalLocalStorageProtocol.SessionStructure.PendingPreKey.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var PendingPreKey = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * PendingPreKey preKeyId.
             * @member {number|null|undefined} preKeyId
             * @memberof SignalLocalStorageProtocol.SessionStructure.PendingPreKey
             * @instance
             */
            PendingPreKey.prototype.preKeyId = null;

            /**
             * PendingPreKey signedPreKeyId.
             * @member {number|null|undefined} signedPreKeyId
             * @memberof SignalLocalStorageProtocol.SessionStructure.PendingPreKey
             * @instance
             */
            PendingPreKey.prototype.signedPreKeyId = null;

            /**
             * PendingPreKey baseKey.
             * @member {Uint8Array|null|undefined} baseKey
             * @memberof SignalLocalStorageProtocol.SessionStructure.PendingPreKey
             * @instance
             */
            PendingPreKey.prototype.baseKey = null;

            /**
             * PendingPreKey kyberPreKeyId.
             * @member {number|null|undefined} kyberPreKeyId
             * @memberof SignalLocalStorageProtocol.SessionStructure.PendingPreKey
             * @instance
             */
            PendingPreKey.prototype.kyberPreKeyId = null;

            /**
             * PendingPreKey kyberCiphertext.
             * @member {Uint8Array|null|undefined} kyberCiphertext
             * @memberof SignalLocalStorageProtocol.SessionStructure.PendingPreKey
             * @instance
             */
            PendingPreKey.prototype.kyberCiphertext = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(PendingPreKey.prototype, "_preKeyId", {
                get: $util.oneOfGetter($oneOfFields = ["preKeyId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(PendingPreKey.prototype, "_signedPreKeyId", {
                get: $util.oneOfGetter($oneOfFields = ["signedPreKeyId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(PendingPreKey.prototype, "_baseKey", {
                get: $util.oneOfGetter($oneOfFields = ["baseKey"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(PendingPreKey.prototype, "_kyberPreKeyId", {
                get: $util.oneOfGetter($oneOfFields = ["kyberPreKeyId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(PendingPreKey.prototype, "_kyberCiphertext", {
                get: $util.oneOfGetter($oneOfFields = ["kyberCiphertext"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new PendingPreKey instance using the specified properties.
             * @function create
             * @memberof SignalLocalStorageProtocol.SessionStructure.PendingPreKey
             * @static
             * @param {SignalLocalStorageProtocol.SessionStructure.PendingPreKey.$Properties=} [properties] Properties to set
             * @returns {SignalLocalStorageProtocol.SessionStructure.PendingPreKey} PendingPreKey instance
             * @type {{
             *   (properties: SignalLocalStorageProtocol.SessionStructure.PendingPreKey.$Shape): SignalLocalStorageProtocol.SessionStructure.PendingPreKey & SignalLocalStorageProtocol.SessionStructure.PendingPreKey.$Shape;
             *   (properties?: SignalLocalStorageProtocol.SessionStructure.PendingPreKey.$Properties): SignalLocalStorageProtocol.SessionStructure.PendingPreKey;
             * }}
             */
            PendingPreKey.create = function(properties) {
                return new PendingPreKey(properties);
            };

            /**
             * Encodes the specified PendingPreKey message. Does not implicitly {@link SignalLocalStorageProtocol.SessionStructure.PendingPreKey.verify|verify} messages.
             * @function encode
             * @memberof SignalLocalStorageProtocol.SessionStructure.PendingPreKey
             * @static
             * @param {SignalLocalStorageProtocol.SessionStructure.PendingPreKey.$Properties} message PendingPreKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PendingPreKey.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.preKeyId != null && $Object.hasOwnProperty.call(message, "preKeyId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.preKeyId);
                if (message.baseKey != null && $Object.hasOwnProperty.call(message, "baseKey"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.baseKey);
                if (message.signedPreKeyId != null && $Object.hasOwnProperty.call(message, "signedPreKeyId"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.signedPreKeyId);
                if (message.kyberPreKeyId != null && $Object.hasOwnProperty.call(message, "kyberPreKeyId"))
                    writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.kyberPreKeyId);
                if (message.kyberCiphertext != null && $Object.hasOwnProperty.call(message, "kyberCiphertext"))
                    writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.kyberCiphertext);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified PendingPreKey message, length delimited. Does not implicitly {@link SignalLocalStorageProtocol.SessionStructure.PendingPreKey.verify|verify} messages.
             * @function encodeDelimited
             * @memberof SignalLocalStorageProtocol.SessionStructure.PendingPreKey
             * @static
             * @param {SignalLocalStorageProtocol.SessionStructure.PendingPreKey.$Properties} message PendingPreKey message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PendingPreKey.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a PendingPreKey message from the specified reader or buffer.
             * @function decode
             * @memberof SignalLocalStorageProtocol.SessionStructure.PendingPreKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {SignalLocalStorageProtocol.SessionStructure.PendingPreKey & SignalLocalStorageProtocol.SessionStructure.PendingPreKey.$Shape} PendingPreKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PendingPreKey.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.SignalLocalStorageProtocol.SessionStructure.PendingPreKey();
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
                            message.preKeyId = reader.uint32();
                            message._preKeyId = "preKeyId";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            message.signedPreKeyId = reader.int32();
                            message._signedPreKeyId = "signedPreKeyId";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.baseKey = reader.bytes();
                            message._baseKey = "baseKey";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 0)
                                break;
                            message.kyberPreKeyId = reader.uint32();
                            message._kyberPreKeyId = "kyberPreKeyId";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 2)
                                break;
                            message.kyberCiphertext = reader.bytes();
                            message._kyberCiphertext = "kyberCiphertext";
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
             * Decodes a PendingPreKey message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof SignalLocalStorageProtocol.SessionStructure.PendingPreKey
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {SignalLocalStorageProtocol.SessionStructure.PendingPreKey & SignalLocalStorageProtocol.SessionStructure.PendingPreKey.$Shape} PendingPreKey
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PendingPreKey.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PendingPreKey message.
             * @function verify
             * @memberof SignalLocalStorageProtocol.SessionStructure.PendingPreKey
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PendingPreKey.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.preKeyId != null && $Object.hasOwnProperty.call(message, "preKeyId")) {
                    properties._preKeyId = 1;
                    if (!$util.isInteger(message.preKeyId))
                        return "preKeyId: integer expected";
                }
                if (message.signedPreKeyId != null && $Object.hasOwnProperty.call(message, "signedPreKeyId")) {
                    properties._signedPreKeyId = 1;
                    if (!$util.isInteger(message.signedPreKeyId))
                        return "signedPreKeyId: integer expected";
                }
                if (message.baseKey != null && $Object.hasOwnProperty.call(message, "baseKey")) {
                    properties._baseKey = 1;
                    if (!(message.baseKey && typeof message.baseKey.length === "number" || $util.isString(message.baseKey)))
                        return "baseKey: buffer expected";
                }
                if (message.kyberPreKeyId != null && $Object.hasOwnProperty.call(message, "kyberPreKeyId")) {
                    properties._kyberPreKeyId = 1;
                    if (!$util.isInteger(message.kyberPreKeyId))
                        return "kyberPreKeyId: integer expected";
                }
                if (message.kyberCiphertext != null && $Object.hasOwnProperty.call(message, "kyberCiphertext")) {
                    properties._kyberCiphertext = 1;
                    if (!(message.kyberCiphertext && typeof message.kyberCiphertext.length === "number" || $util.isString(message.kyberCiphertext)))
                        return "kyberCiphertext: buffer expected";
                }
                return null;
            };

            /**
             * Creates a PendingPreKey message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof SignalLocalStorageProtocol.SessionStructure.PendingPreKey
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {SignalLocalStorageProtocol.SessionStructure.PendingPreKey} PendingPreKey
             */
            PendingPreKey.fromObject = function (object, _depth) {
                if (object instanceof $root.SignalLocalStorageProtocol.SessionStructure.PendingPreKey)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".SignalLocalStorageProtocol.SessionStructure.PendingPreKey: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.SignalLocalStorageProtocol.SessionStructure.PendingPreKey();
                if (object.preKeyId != null)
                    message.preKeyId = object.preKeyId >>> 0;
                if (object.signedPreKeyId != null)
                    message.signedPreKeyId = object.signedPreKeyId | 0;
                if (object.baseKey != null)
                    if (typeof object.baseKey === "string")
                        $util.base64.decode(object.baseKey, message.baseKey = $util.newBuffer($util.base64.length(object.baseKey)), 0);
                    else if (object.baseKey.length >= 0)
                        message.baseKey = object.baseKey;
                if (object.kyberPreKeyId != null)
                    message.kyberPreKeyId = object.kyberPreKeyId >>> 0;
                if (object.kyberCiphertext != null)
                    if (typeof object.kyberCiphertext === "string")
                        $util.base64.decode(object.kyberCiphertext, message.kyberCiphertext = $util.newBuffer($util.base64.length(object.kyberCiphertext)), 0);
                    else if (object.kyberCiphertext.length >= 0)
                        message.kyberCiphertext = object.kyberCiphertext;
                return message;
            };

            /**
             * Creates a plain object from a PendingPreKey message. Also converts values to other types if specified.
             * @function toObject
             * @memberof SignalLocalStorageProtocol.SessionStructure.PendingPreKey
             * @static
             * @param {SignalLocalStorageProtocol.SessionStructure.PendingPreKey} message PendingPreKey
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PendingPreKey.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (message.preKeyId != null && $Object.hasOwnProperty.call(message, "preKeyId"))
                    object.preKeyId = message.preKeyId;
                if (message.baseKey != null && $Object.hasOwnProperty.call(message, "baseKey"))
                    object.baseKey = options.bytes === $String ? $util.base64.encode(message.baseKey, 0, message.baseKey.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.baseKey) : message.baseKey;
                if (message.signedPreKeyId != null && $Object.hasOwnProperty.call(message, "signedPreKeyId"))
                    object.signedPreKeyId = message.signedPreKeyId;
                if (message.kyberPreKeyId != null && $Object.hasOwnProperty.call(message, "kyberPreKeyId"))
                    object.kyberPreKeyId = message.kyberPreKeyId;
                if (message.kyberCiphertext != null && $Object.hasOwnProperty.call(message, "kyberCiphertext"))
                    object.kyberCiphertext = options.bytes === $String ? $util.base64.encode(message.kyberCiphertext, 0, message.kyberCiphertext.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.kyberCiphertext) : message.kyberCiphertext;
                return object;
            };

            /**
             * Converts this PendingPreKey to JSON.
             * @function toJSON
             * @memberof SignalLocalStorageProtocol.SessionStructure.PendingPreKey
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PendingPreKey.prototype.toJSON = function() {
                return PendingPreKey.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for PendingPreKey
             * @function getTypeUrl
             * @memberof SignalLocalStorageProtocol.SessionStructure.PendingPreKey
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            PendingPreKey.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/SignalLocalStorageProtocol.SessionStructure.PendingPreKey";
            };

            return PendingPreKey;
        })();

        return SessionStructure;
    })();

    return SignalLocalStorageProtocol;
})();

module.exports = $root;
