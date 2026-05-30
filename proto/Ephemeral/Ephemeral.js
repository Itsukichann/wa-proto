/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Ephemeral = (function() {

    /**
     * Namespace Ephemeral.
     * @exports Ephemeral
     * @namespace
     */
    var Ephemeral = {};

    Ephemeral.EphemeralSetting = (function() {

        /**
         * Properties of an EphemeralSetting.
         * @typedef {Object} Ephemeral.EphemeralSetting.$Properties
         * @property {number|null} [duration] EphemeralSetting duration
         * @property {number|Long|null} [timestamp] EphemeralSetting timestamp
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */

        /**
         * Properties of an EphemeralSetting.
         * @memberof Ephemeral
         * @interface IEphemeralSetting
         * @augments Ephemeral.EphemeralSetting.$Properties
         * @deprecated Use Ephemeral.EphemeralSetting.$Properties instead.
         */

        /**
         * Shape of an EphemeralSetting.
         * @typedef {Ephemeral.EphemeralSetting.$Properties} Ephemeral.EphemeralSetting.$Shape
         */

        /**
         * Constructs a new EphemeralSetting.
         * @memberof Ephemeral
         * @classdesc Represents an EphemeralSetting.
         * @constructor
         * @param {Ephemeral.EphemeralSetting.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding
         */
        function EphemeralSetting(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EphemeralSetting duration.
         * @member {number|null|undefined} duration
         * @memberof Ephemeral.EphemeralSetting
         * @instance
         */
        EphemeralSetting.prototype.duration = null;

        /**
         * EphemeralSetting timestamp.
         * @member {number|Long|null|undefined} timestamp
         * @memberof Ephemeral.EphemeralSetting
         * @instance
         */
        EphemeralSetting.prototype.timestamp = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(EphemeralSetting.prototype, "_duration", {
            get: $util.oneOfGetter($oneOfFields = ["duration"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(EphemeralSetting.prototype, "_timestamp", {
            get: $util.oneOfGetter($oneOfFields = ["timestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new EphemeralSetting instance using the specified properties.
         * @function create
         * @memberof Ephemeral.EphemeralSetting
         * @static
         * @param {Ephemeral.EphemeralSetting.$Properties=} [properties] Properties to set
         * @returns {Ephemeral.EphemeralSetting} EphemeralSetting instance
         * @type {{
         *   (properties: Ephemeral.EphemeralSetting.$Shape): Ephemeral.EphemeralSetting & Ephemeral.EphemeralSetting.$Shape;
         *   (properties?: Ephemeral.EphemeralSetting.$Properties): Ephemeral.EphemeralSetting;
         * }}
         */
        EphemeralSetting.create = function create(properties) {
            return new EphemeralSetting(properties);
        };

        /**
         * Encodes the specified EphemeralSetting message. Does not implicitly {@link Ephemeral.EphemeralSetting.verify|verify} messages.
         * @function encode
         * @memberof Ephemeral.EphemeralSetting
         * @static
         * @param {Ephemeral.EphemeralSetting.$Properties} message EphemeralSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EphemeralSetting.encode = function encode(message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            if (message.duration != null && Object.hasOwnProperty.call(message, "duration"))
                writer.uint32(/* id 1, wireType 5 =*/13).sfixed32(message.duration);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 2, wireType 1 =*/17).sfixed64(message.timestamp);
            if (message.$unknowns != null && Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified EphemeralSetting message, length delimited. Does not implicitly {@link Ephemeral.EphemeralSetting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Ephemeral.EphemeralSetting
         * @static
         * @param {Ephemeral.EphemeralSetting.$Properties} message EphemeralSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EphemeralSetting.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes an EphemeralSetting message from the specified reader or buffer.
         * @function decode
         * @memberof Ephemeral.EphemeralSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Ephemeral.EphemeralSetting & Ephemeral.EphemeralSetting.$Shape} EphemeralSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EphemeralSetting.decode = function decode(reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw Error("max depth exceeded");
            var end = length === undefined ? reader.len : reader.pos + length, message = _target || new $root.Ephemeral.EphemeralSetting();
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
                        if (wireType !== 5)
                            break;
                        message.duration = reader.sfixed32();
                        message._duration = "duration";
                        continue;
                    }
                case 2: {
                        if (wireType !== 1)
                            break;
                        message.timestamp = reader.sfixed64();
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
            if (_end !== undefined)
                throw Error("missing end group");
            return message;
        };

        /**
         * Decodes an EphemeralSetting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Ephemeral.EphemeralSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Ephemeral.EphemeralSetting & Ephemeral.EphemeralSetting.$Shape} EphemeralSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EphemeralSetting.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EphemeralSetting message.
         * @function verify
         * @memberof Ephemeral.EphemeralSetting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EphemeralSetting.verify = function verify(message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.duration != null && message.hasOwnProperty("duration")) {
                properties._duration = 1;
                if (!$util.isInteger(message.duration))
                    return "duration: integer expected";
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                properties._timestamp = 1;
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            }
            return null;
        };

        /**
         * Creates an EphemeralSetting message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Ephemeral.EphemeralSetting
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Ephemeral.EphemeralSetting} EphemeralSetting
         */
        EphemeralSetting.fromObject = function fromObject(object, _depth) {
            if (object instanceof $root.Ephemeral.EphemeralSetting)
                return object;
            if (!$util.isObject(object))
                throw TypeError(".Ephemeral.EphemeralSetting: object expected");
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            var message = new $root.Ephemeral.EphemeralSetting();
            if (object.duration != null)
                message.duration = object.duration | 0;
            if (object.timestamp != null)
                if ($util.Long)
                    message.timestamp = $util.Long.fromValue(object.timestamp, false);
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an EphemeralSetting message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Ephemeral.EphemeralSetting
         * @static
         * @param {Ephemeral.EphemeralSetting} message EphemeralSetting
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EphemeralSetting.toObject = function toObject(message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw Error("max depth exceeded");
            var object = {};
            if (message.duration != null && message.hasOwnProperty("duration"))
                object.duration = message.duration;
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (typeof BigInt !== "undefined" && options.longs === BigInt)
                    object.timestamp = typeof message.timestamp === "number" ? BigInt(message.timestamp) : $util.Long.fromBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0, false).toBigInt();
                else if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            return object;
        };

        /**
         * Converts this EphemeralSetting to JSON.
         * @function toJSON
         * @memberof Ephemeral.EphemeralSetting
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EphemeralSetting.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for EphemeralSetting
         * @function getTypeUrl
         * @memberof Ephemeral.EphemeralSetting
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        EphemeralSetting.getTypeUrl = function getTypeUrl(prefix) {
            if (prefix === undefined)
                prefix = "type.googleapis.com";
            return prefix + "/Ephemeral.EphemeralSetting";
        };

        return EphemeralSetting;
    })();

    return Ephemeral;
})();

module.exports = $root;
