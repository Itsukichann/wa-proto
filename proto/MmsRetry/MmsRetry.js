/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.MmsRetry = (function() {

    /**
     * Namespace MmsRetry.
     * @exports MmsRetry
     * @namespace
     */
    var MmsRetry = {};

    MmsRetry.ServerErrorReceipt = (function() {

        /**
         * Properties of a ServerErrorReceipt.
         * @typedef {Object} MmsRetry.ServerErrorReceipt.$Properties
         * @property {string|null} [stanzaId] ServerErrorReceipt stanzaId
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a ServerErrorReceipt.
         * @memberof MmsRetry
         * @interface IServerErrorReceipt
         * @augments MmsRetry.ServerErrorReceipt.$Properties
         * @deprecated Use MmsRetry.ServerErrorReceipt.$Properties instead.
         */

        /**
         * Shape of a ServerErrorReceipt.
         * @typedef {MmsRetry.ServerErrorReceipt.$Properties} MmsRetry.ServerErrorReceipt.$Shape
         */

        /**
         * Constructs a new ServerErrorReceipt.
         * @memberof MmsRetry
         * @classdesc Represents a ServerErrorReceipt.
         * @constructor
         * @param {MmsRetry.ServerErrorReceipt.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function ServerErrorReceipt(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerErrorReceipt stanzaId.
         * @member {string|null|undefined} stanzaId
         * @memberof MmsRetry.ServerErrorReceipt
         * @instance
         */
        ServerErrorReceipt.prototype.stanzaId = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ServerErrorReceipt.prototype, "_stanzaId", {
            get: $util.oneOfGetter($oneOfFields = ["stanzaId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ServerErrorReceipt instance using the specified properties.
         * @function create
         * @memberof MmsRetry.ServerErrorReceipt
         * @static
         * @param {MmsRetry.ServerErrorReceipt.$Properties=} [properties] Properties to set
         * @returns {MmsRetry.ServerErrorReceipt} ServerErrorReceipt instance
         * @type {{
         *   (properties: MmsRetry.ServerErrorReceipt.$Shape): MmsRetry.ServerErrorReceipt & MmsRetry.ServerErrorReceipt.$Shape;
         *   (properties?: MmsRetry.ServerErrorReceipt.$Properties): MmsRetry.ServerErrorReceipt;
         * }}
         */
        ServerErrorReceipt.create = function create(properties) {
            return new ServerErrorReceipt(properties);
        };

        /**
         * Encodes the specified ServerErrorReceipt message. Does not implicitly {@link MmsRetry.ServerErrorReceipt.verify|verify} messages.
         * @function encode
         * @memberof MmsRetry.ServerErrorReceipt
         * @static
         * @param {MmsRetry.ServerErrorReceipt.$Properties} message ServerErrorReceipt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerErrorReceipt.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.stanzaId != null && Object.hasOwnProperty.call(message, "stanzaId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.stanzaId);
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified ServerErrorReceipt message, length delimited. Does not implicitly {@link MmsRetry.ServerErrorReceipt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MmsRetry.ServerErrorReceipt
         * @static
         * @param {MmsRetry.ServerErrorReceipt.$Properties} message ServerErrorReceipt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerErrorReceipt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a ServerErrorReceipt message from the specified reader or buffer.
         * @function decode
         * @memberof MmsRetry.ServerErrorReceipt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MmsRetry.ServerErrorReceipt & MmsRetry.ServerErrorReceipt.$Shape} ServerErrorReceipt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerErrorReceipt.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            var end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.MmsRetry.ServerErrorReceipt();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        message.stanzaId = reader.string();
                        message._stanzaId = "stanzaId";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== undefined)
                throw Error("missing end group");
            return message;
        };

        /**
         * Decodes a ServerErrorReceipt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MmsRetry.ServerErrorReceipt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MmsRetry.ServerErrorReceipt & MmsRetry.ServerErrorReceipt.$Shape} ServerErrorReceipt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerErrorReceipt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServerErrorReceipt message.
         * @function verify
         * @memberof MmsRetry.ServerErrorReceipt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServerErrorReceipt.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.stanzaId != null && message.hasOwnProperty("stanzaId")) {
                properties._stanzaId = 1;
                if (!$util.isString(message.stanzaId))
                    return "stanzaId: string expected";
            }
            return null;
        };

        /**
         * Creates a ServerErrorReceipt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MmsRetry.ServerErrorReceipt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MmsRetry.ServerErrorReceipt} ServerErrorReceipt
         */
        ServerErrorReceipt.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.MmsRetry.ServerErrorReceipt)
                return object;
            if (!$util.isObject(object))
                throw TypeError(".MmsRetry.ServerErrorReceipt: object expected");
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            var message = new $root.MmsRetry.ServerErrorReceipt();
            if (object.stanzaId != null)
                message.stanzaId = String(object.stanzaId);
            return message;
        };

        /**
         * Creates a plain object from a ServerErrorReceipt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MmsRetry.ServerErrorReceipt
         * @static
         * @param {MmsRetry.ServerErrorReceipt} message ServerErrorReceipt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerErrorReceipt.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            var object = {};
            if (message.stanzaId != null && message.hasOwnProperty("stanzaId"))
                object.stanzaId = message.stanzaId;
            return object;
        };

        /**
         * Converts this ServerErrorReceipt to JSON.
         * @function toJSON
         * @memberof MmsRetry.ServerErrorReceipt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerErrorReceipt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for ServerErrorReceipt
         * @function getTypeUrl
         * @memberof MmsRetry.ServerErrorReceipt
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        ServerErrorReceipt.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/MmsRetry.ServerErrorReceipt";
        };

        return ServerErrorReceipt;
    })();

    MmsRetry.MediaRetryNotification = (function() {

        /**
         * Properties of a MediaRetryNotification.
         * @typedef {Object} MmsRetry.MediaRetryNotification.$Properties
         * @property {string|null} [stanzaId] MediaRetryNotification stanzaId
         * @property {string|null} [directPath] MediaRetryNotification directPath
         * @property {MmsRetry.MediaRetryNotification.ResultType|null} [result] MediaRetryNotification result
         * @property {Uint8Array|null} [messageSecret] MediaRetryNotification messageSecret
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of a MediaRetryNotification.
         * @memberof MmsRetry
         * @interface IMediaRetryNotification
         * @augments MmsRetry.MediaRetryNotification.$Properties
         * @deprecated Use MmsRetry.MediaRetryNotification.$Properties instead.
         */

        /**
         * Shape of a MediaRetryNotification.
         * @typedef {MmsRetry.MediaRetryNotification.$Properties} MmsRetry.MediaRetryNotification.$Shape
         */

        /**
         * Constructs a new MediaRetryNotification.
         * @memberof MmsRetry
         * @classdesc Represents a MediaRetryNotification.
         * @constructor
         * @param {MmsRetry.MediaRetryNotification.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function MediaRetryNotification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MediaRetryNotification stanzaId.
         * @member {string|null|undefined} stanzaId
         * @memberof MmsRetry.MediaRetryNotification
         * @instance
         */
        MediaRetryNotification.prototype.stanzaId = null;

        /**
         * MediaRetryNotification directPath.
         * @member {string|null|undefined} directPath
         * @memberof MmsRetry.MediaRetryNotification
         * @instance
         */
        MediaRetryNotification.prototype.directPath = null;

        /**
         * MediaRetryNotification result.
         * @member {MmsRetry.MediaRetryNotification.ResultType|null|undefined} result
         * @memberof MmsRetry.MediaRetryNotification
         * @instance
         */
        MediaRetryNotification.prototype.result = null;

        /**
         * MediaRetryNotification messageSecret.
         * @member {Uint8Array|null|undefined} messageSecret
         * @memberof MmsRetry.MediaRetryNotification
         * @instance
         */
        MediaRetryNotification.prototype.messageSecret = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MediaRetryNotification.prototype, "_stanzaId", {
            get: $util.oneOfGetter($oneOfFields = ["stanzaId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MediaRetryNotification.prototype, "_directPath", {
            get: $util.oneOfGetter($oneOfFields = ["directPath"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MediaRetryNotification.prototype, "_result", {
            get: $util.oneOfGetter($oneOfFields = ["result"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MediaRetryNotification.prototype, "_messageSecret", {
            get: $util.oneOfGetter($oneOfFields = ["messageSecret"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new MediaRetryNotification instance using the specified properties.
         * @function create
         * @memberof MmsRetry.MediaRetryNotification
         * @static
         * @param {MmsRetry.MediaRetryNotification.$Properties=} [properties] Properties to set
         * @returns {MmsRetry.MediaRetryNotification} MediaRetryNotification instance
         * @type {{
         *   (properties: MmsRetry.MediaRetryNotification.$Shape): MmsRetry.MediaRetryNotification & MmsRetry.MediaRetryNotification.$Shape;
         *   (properties?: MmsRetry.MediaRetryNotification.$Properties): MmsRetry.MediaRetryNotification;
         * }}
         */
        MediaRetryNotification.create = function create(properties) {
            return new MediaRetryNotification(properties);
        };

        /**
         * Encodes the specified MediaRetryNotification message. Does not implicitly {@link MmsRetry.MediaRetryNotification.verify|verify} messages.
         * @function encode
         * @memberof MmsRetry.MediaRetryNotification
         * @static
         * @param {MmsRetry.MediaRetryNotification.$Properties} message MediaRetryNotification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MediaRetryNotification.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.stanzaId != null && Object.hasOwnProperty.call(message, "stanzaId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.stanzaId);
            if (message.directPath != null && Object.hasOwnProperty.call(message, "directPath"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.directPath);
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.result);
            if (message.messageSecret != null && Object.hasOwnProperty.call(message, "messageSecret"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.messageSecret);
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified MediaRetryNotification message, length delimited. Does not implicitly {@link MmsRetry.MediaRetryNotification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MmsRetry.MediaRetryNotification
         * @static
         * @param {MmsRetry.MediaRetryNotification.$Properties} message MediaRetryNotification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MediaRetryNotification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a MediaRetryNotification message from the specified reader or buffer.
         * @function decode
         * @memberof MmsRetry.MediaRetryNotification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MmsRetry.MediaRetryNotification & MmsRetry.MediaRetryNotification.$Shape} MediaRetryNotification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MediaRetryNotification.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            var end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.MmsRetry.MediaRetryNotification();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 1: {
                        if (wireType !== 2)
                            break;
                        message.stanzaId = reader.string();
                        message._stanzaId = "stanzaId";
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.directPath = reader.string();
                        message._directPath = "directPath";
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        message.result = reader.int32();
                        message._result = "result";
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        message.messageSecret = reader.bytes();
                        message._messageSecret = "messageSecret";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (_end !== undefined)
                throw Error("missing end group");
            return message;
        };

        /**
         * Decodes a MediaRetryNotification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MmsRetry.MediaRetryNotification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MmsRetry.MediaRetryNotification & MmsRetry.MediaRetryNotification.$Shape} MediaRetryNotification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MediaRetryNotification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MediaRetryNotification message.
         * @function verify
         * @memberof MmsRetry.MediaRetryNotification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MediaRetryNotification.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.stanzaId != null && message.hasOwnProperty("stanzaId")) {
                properties._stanzaId = 1;
                if (!$util.isString(message.stanzaId))
                    return "stanzaId: string expected";
            }
            if (message.directPath != null && message.hasOwnProperty("directPath")) {
                properties._directPath = 1;
                if (!$util.isString(message.directPath))
                    return "directPath: string expected";
            }
            if (message.result != null && message.hasOwnProperty("result")) {
                properties._result = 1;
                switch (message.result) {
                default:
                    return "result: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            }
            if (message.messageSecret != null && message.hasOwnProperty("messageSecret")) {
                properties._messageSecret = 1;
                if (!(message.messageSecret && typeof message.messageSecret.length === "number" || $util.isString(message.messageSecret)))
                    return "messageSecret: buffer expected";
            }
            return null;
        };

        /**
         * Creates a MediaRetryNotification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MmsRetry.MediaRetryNotification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MmsRetry.MediaRetryNotification} MediaRetryNotification
         */
        MediaRetryNotification.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.MmsRetry.MediaRetryNotification)
                return object;
            if (!$util.isObject(object))
                throw TypeError(".MmsRetry.MediaRetryNotification: object expected");
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            var message = new $root.MmsRetry.MediaRetryNotification();
            if (object.stanzaId != null)
                message.stanzaId = String(object.stanzaId);
            if (object.directPath != null)
                message.directPath = String(object.directPath);
            switch (object.result) {
            default:
                if (typeof object.result === "number") {
                    message.result = object.result;
                    break;
                }
                break;
            case "GENERAL_ERROR":
            case 0:
                message.result = 0;
                break;
            case "SUCCESS":
            case 1:
                message.result = 1;
                break;
            case "NOT_FOUND":
            case 2:
                message.result = 2;
                break;
            case "DECRYPTION_ERROR":
            case 3:
                message.result = 3;
                break;
            }
            if (object.messageSecret != null)
                if (typeof object.messageSecret === "string")
                    $util.base64.decode(object.messageSecret, message.messageSecret = $util.newBuffer($util.base64.length(object.messageSecret)), 0);
                else if (object.messageSecret.length >= 0)
                    message.messageSecret = object.messageSecret;
            return message;
        };

        /**
         * Creates a plain object from a MediaRetryNotification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MmsRetry.MediaRetryNotification
         * @static
         * @param {MmsRetry.MediaRetryNotification} message MediaRetryNotification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MediaRetryNotification.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            var object = {};
            if (message.stanzaId != null && message.hasOwnProperty("stanzaId"))
                object.stanzaId = message.stanzaId;
            if (message.directPath != null && message.hasOwnProperty("directPath"))
                object.directPath = message.directPath;
            if (message.result != null && message.hasOwnProperty("result"))
                object.result = options.enums === String ? $root.MmsRetry.MediaRetryNotification.ResultType[message.result] === undefined ? message.result : $root.MmsRetry.MediaRetryNotification.ResultType[message.result] : message.result;
            if (message.messageSecret != null && message.hasOwnProperty("messageSecret"))
                object.messageSecret = options.bytes === String ? $util.base64.encode(message.messageSecret, 0, message.messageSecret.length) : options.bytes === Array ? Array.prototype.slice.call(message.messageSecret) : message.messageSecret;
            return object;
        };

        /**
         * Converts this MediaRetryNotification to JSON.
         * @function toJSON
         * @memberof MmsRetry.MediaRetryNotification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MediaRetryNotification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for MediaRetryNotification
         * @function getTypeUrl
         * @memberof MmsRetry.MediaRetryNotification
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        MediaRetryNotification.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/MmsRetry.MediaRetryNotification";
        };

        /**
         * ResultType enum.
         * @name MmsRetry.MediaRetryNotification.ResultType
         * @enum {number}
         * @property {number} GENERAL_ERROR=0 GENERAL_ERROR value
         * @property {number} SUCCESS=1 SUCCESS value
         * @property {number} NOT_FOUND=2 NOT_FOUND value
         * @property {number} DECRYPTION_ERROR=3 DECRYPTION_ERROR value
         */
        MediaRetryNotification.ResultType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "GENERAL_ERROR"] = 0;
            values[valuesById[1] = "SUCCESS"] = 1;
            values[valuesById[2] = "NOT_FOUND"] = 2;
            values[valuesById[3] = "DECRYPTION_ERROR"] = 3;
            return values;
        })();

        return MediaRetryNotification;
    })();

    return MmsRetry;
})();

module.exports = $root;
