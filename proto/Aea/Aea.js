/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
var $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $TypeError = $util.global.TypeError, $String = $util.global.String;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Aea = (function() {

    /**
     * Namespace Aea.
     * @exports Aea
     * @namespace
     */
    var Aea = {};

    Aea.NonE2EEAttestation = (function() {

        /**
         * Properties of a NonE2EEAttestation.
         * @typedef {Object} Aea.NonE2EEAttestation.$Properties
         * @property {Aea.NonE2EEAttestation.AccountType|null} [accountType] NonE2EEAttestation accountType
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a NonE2EEAttestation.
         * @memberof Aea
         * @interface INonE2EEAttestation
         * @augments Aea.NonE2EEAttestation.$Properties
         * @deprecated Use Aea.NonE2EEAttestation.$Properties instead.
         */

        /**
         * Shape of a NonE2EEAttestation.
         * @typedef {Aea.NonE2EEAttestation.$Properties} Aea.NonE2EEAttestation.$Shape
         */

        /**
         * Constructs a new NonE2EEAttestation.
         * @memberof Aea
         * @classdesc Represents a NonE2EEAttestation.
         * @constructor
         * @param {Aea.NonE2EEAttestation.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var NonE2EEAttestation = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * NonE2EEAttestation accountType.
         * @member {Aea.NonE2EEAttestation.AccountType|null|undefined} accountType
         * @memberof Aea.NonE2EEAttestation
         * @instance
         */
        NonE2EEAttestation.prototype.accountType = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(NonE2EEAttestation.prototype, "_accountType", {
            get: $util.oneOfGetter($oneOfFields = ["accountType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new NonE2EEAttestation instance using the specified properties.
         * @function create
         * @memberof Aea.NonE2EEAttestation
         * @static
         * @param {Aea.NonE2EEAttestation.$Properties=} [properties] Properties to set
         * @returns {Aea.NonE2EEAttestation} NonE2EEAttestation instance
         * @type {{
         *   (properties: Aea.NonE2EEAttestation.$Shape): Aea.NonE2EEAttestation & Aea.NonE2EEAttestation.$Shape;
         *   (properties?: Aea.NonE2EEAttestation.$Properties): Aea.NonE2EEAttestation;
         * }}
         */
        NonE2EEAttestation.create = function(properties) {
            return new NonE2EEAttestation(properties);
        };

        /**
         * Encodes the specified NonE2EEAttestation message. Does not implicitly {@link Aea.NonE2EEAttestation.verify|verify} messages.
         * @function encode
         * @memberof Aea.NonE2EEAttestation
         * @static
         * @param {Aea.NonE2EEAttestation.$Properties} message NonE2EEAttestation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NonE2EEAttestation.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.accountType != null && $Object.hasOwnProperty.call(message, "accountType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.accountType);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified NonE2EEAttestation message, length delimited. Does not implicitly {@link Aea.NonE2EEAttestation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Aea.NonE2EEAttestation
         * @static
         * @param {Aea.NonE2EEAttestation.$Properties} message NonE2EEAttestation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NonE2EEAttestation.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a NonE2EEAttestation message from the specified reader or buffer.
         * @function decode
         * @memberof Aea.NonE2EEAttestation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Aea.NonE2EEAttestation & Aea.NonE2EEAttestation.$Shape} NonE2EEAttestation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NonE2EEAttestation.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Aea.NonE2EEAttestation(), value;
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
                        message.accountType = reader.int32();
                        message._accountType = "accountType";
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
         * Decodes a NonE2EEAttestation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Aea.NonE2EEAttestation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Aea.NonE2EEAttestation & Aea.NonE2EEAttestation.$Shape} NonE2EEAttestation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NonE2EEAttestation.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NonE2EEAttestation message.
         * @function verify
         * @memberof Aea.NonE2EEAttestation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NonE2EEAttestation.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.accountType != null && $Object.hasOwnProperty.call(message, "accountType")) {
                properties._accountType = 1;
                if (typeof message.accountType !== "number" || (message.accountType | 0) !== message.accountType)
                    return "accountType: enum value expected";
            }
            return null;
        };

        /**
         * Creates a NonE2EEAttestation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Aea.NonE2EEAttestation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Aea.NonE2EEAttestation} NonE2EEAttestation
         */
        NonE2EEAttestation.fromObject = function (object, _depth) {
            if (object instanceof $root.Aea.NonE2EEAttestation)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".Aea.NonE2EEAttestation: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.Aea.NonE2EEAttestation();
            switch (object.accountType) {
            case "E2EE":
            case 0:
                message.accountType = 0;
                break;
            case "HYBRID_E2EE":
            case 1:
                message.accountType = 1;
                break;
            case "NON_E2EE":
            case 2:
                message.accountType = 2;
                break;
            default:
                if (typeof object.accountType === "number" && (object.accountType | 0) === object.accountType)
                    message.accountType = object.accountType;
            }
            return message;
        };

        /**
         * Creates a plain object from a NonE2EEAttestation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Aea.NonE2EEAttestation
         * @static
         * @param {Aea.NonE2EEAttestation} message NonE2EEAttestation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NonE2EEAttestation.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.accountType != null && $Object.hasOwnProperty.call(message, "accountType"))
                object.accountType = options.enums === $String ? $root.Aea.NonE2EEAttestation.AccountType[message.accountType] === $undefined ? message.accountType : $root.Aea.NonE2EEAttestation.AccountType[message.accountType] : message.accountType;
            return object;
        };

        /**
         * Converts this NonE2EEAttestation to JSON.
         * @function toJSON
         * @memberof Aea.NonE2EEAttestation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NonE2EEAttestation.prototype.toJSON = function() {
            return NonE2EEAttestation.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for NonE2EEAttestation
         * @function getTypeUrl
         * @memberof Aea.NonE2EEAttestation
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        NonE2EEAttestation.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/Aea.NonE2EEAttestation";
        };

        /**
         * AccountType enum.
         * @name Aea.NonE2EEAttestation.AccountType
         * @enum {number}
         * @property {number} E2EE=0 E2EE value
         * @property {number} HYBRID_E2EE=1 HYBRID_E2EE value
         * @property {number} NON_E2EE=2 NON_E2EE value
         */
        NonE2EEAttestation.AccountType = (function() {
            var valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "E2EE"] = 0;
            values[valuesById[1] = "HYBRID_E2EE"] = 1;
            values[valuesById[2] = "NON_E2EE"] = 2;
            return values;
        })();

        return NonE2EEAttestation;
    })();

    return Aea;
})();

module.exports = $root;
