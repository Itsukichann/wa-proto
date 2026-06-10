/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
var $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $TypeError = $util.global.TypeError, $String = $util.global.String, $Array = $util.global.Array, $parseInt = $util.global.parseInt, $BigInt = $util.global.BigInt, $Number = $util.global.Number;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Cert = (function() {

    /**
     * Namespace Cert.
     * @exports Cert
     * @namespace
     */
    var Cert = {};

    Cert.CertChain = (function() {

        /**
         * Properties of a CertChain.
         * @typedef {Object} Cert.CertChain.$Properties
         * @property {Cert.CertChain.NoiseCertificate.$Properties|null} [leaf] CertChain leaf
         * @property {Cert.CertChain.NoiseCertificate.$Properties|null} [intermediate] CertChain intermediate
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a CertChain.
         * @memberof Cert
         * @interface ICertChain
         * @augments Cert.CertChain.$Properties
         * @deprecated Use Cert.CertChain.$Properties instead.
         */

        /**
         * Shape of a CertChain.
         * @typedef {Cert.CertChain.$Properties} Cert.CertChain.$Shape
         */

        /**
         * Constructs a new CertChain.
         * @memberof Cert
         * @classdesc Represents a CertChain.
         * @constructor
         * @param {Cert.CertChain.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var CertChain = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * CertChain leaf.
         * @member {Cert.CertChain.NoiseCertificate.$Properties|null|undefined} leaf
         * @memberof Cert.CertChain
         * @instance
         */
        CertChain.prototype.leaf = null;

        /**
         * CertChain intermediate.
         * @member {Cert.CertChain.NoiseCertificate.$Properties|null|undefined} intermediate
         * @memberof Cert.CertChain
         * @instance
         */
        CertChain.prototype.intermediate = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(CertChain.prototype, "_leaf", {
            get: $util.oneOfGetter($oneOfFields = ["leaf"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(CertChain.prototype, "_intermediate", {
            get: $util.oneOfGetter($oneOfFields = ["intermediate"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CertChain instance using the specified properties.
         * @function create
         * @memberof Cert.CertChain
         * @static
         * @param {Cert.CertChain.$Properties=} [properties] Properties to set
         * @returns {Cert.CertChain} CertChain instance
         * @type {{
         *   (properties: Cert.CertChain.$Shape): Cert.CertChain & Cert.CertChain.$Shape;
         *   (properties?: Cert.CertChain.$Properties): Cert.CertChain;
         * }}
         */
        CertChain.create = function(properties) {
            return new CertChain(properties);
        };

        /**
         * Encodes the specified CertChain message. Does not implicitly {@link Cert.CertChain.verify|verify} messages.
         * @function encode
         * @memberof Cert.CertChain
         * @static
         * @param {Cert.CertChain.$Properties} message CertChain message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CertChain.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.leaf != null && $Object.hasOwnProperty.call(message, "leaf"))
                $root.Cert.CertChain.NoiseCertificate.encode(message.leaf, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.intermediate != null && $Object.hasOwnProperty.call(message, "intermediate"))
                $root.Cert.CertChain.NoiseCertificate.encode(message.intermediate, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified CertChain message, length delimited. Does not implicitly {@link Cert.CertChain.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Cert.CertChain
         * @static
         * @param {Cert.CertChain.$Properties} message CertChain message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CertChain.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a CertChain message from the specified reader or buffer.
         * @function decode
         * @memberof Cert.CertChain
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Cert.CertChain & Cert.CertChain.$Shape} CertChain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CertChain.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Cert.CertChain();
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
                        message.leaf = $root.Cert.CertChain.NoiseCertificate.decode(reader, reader.uint32(), $undefined, _depth + 1, message.leaf);
                        message._leaf = "leaf";
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.intermediate = $root.Cert.CertChain.NoiseCertificate.decode(reader, reader.uint32(), $undefined, _depth + 1, message.intermediate);
                        message._intermediate = "intermediate";
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
         * Decodes a CertChain message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Cert.CertChain
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Cert.CertChain & Cert.CertChain.$Shape} CertChain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CertChain.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CertChain message.
         * @function verify
         * @memberof Cert.CertChain
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CertChain.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.leaf != null && $Object.hasOwnProperty.call(message, "leaf")) {
                properties._leaf = 1;
                {
                    var error = $root.Cert.CertChain.NoiseCertificate.verify(message.leaf, _depth + 1);
                    if (error)
                        return "leaf." + error;
                }
            }
            if (message.intermediate != null && $Object.hasOwnProperty.call(message, "intermediate")) {
                properties._intermediate = 1;
                {
                    var error = $root.Cert.CertChain.NoiseCertificate.verify(message.intermediate, _depth + 1);
                    if (error)
                        return "intermediate." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CertChain message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Cert.CertChain
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Cert.CertChain} CertChain
         */
        CertChain.fromObject = function (object, _depth) {
            if (object instanceof $root.Cert.CertChain)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".Cert.CertChain: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.Cert.CertChain();
            if (object.leaf != null) {
                if (!$util.isObject(object.leaf))
                    throw $TypeError(".Cert.CertChain.leaf: object expected");
                message.leaf = $root.Cert.CertChain.NoiseCertificate.fromObject(object.leaf, _depth + 1);
            }
            if (object.intermediate != null) {
                if (!$util.isObject(object.intermediate))
                    throw $TypeError(".Cert.CertChain.intermediate: object expected");
                message.intermediate = $root.Cert.CertChain.NoiseCertificate.fromObject(object.intermediate, _depth + 1);
            }
            return message;
        };

        /**
         * Creates a plain object from a CertChain message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Cert.CertChain
         * @static
         * @param {Cert.CertChain} message CertChain
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CertChain.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.leaf != null && $Object.hasOwnProperty.call(message, "leaf"))
                object.leaf = $root.Cert.CertChain.NoiseCertificate.toObject(message.leaf, options, _depth + 1);
            if (message.intermediate != null && $Object.hasOwnProperty.call(message, "intermediate"))
                object.intermediate = $root.Cert.CertChain.NoiseCertificate.toObject(message.intermediate, options, _depth + 1);
            return object;
        };

        /**
         * Converts this CertChain to JSON.
         * @function toJSON
         * @memberof Cert.CertChain
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CertChain.prototype.toJSON = function() {
            return CertChain.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for CertChain
         * @function getTypeUrl
         * @memberof Cert.CertChain
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        CertChain.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/Cert.CertChain";
        };

        CertChain.NoiseCertificate = (function() {

            /**
             * Properties of a NoiseCertificate.
             * @typedef {Object} Cert.CertChain.NoiseCertificate.$Properties
             * @property {Uint8Array|null} [details] NoiseCertificate details
             * @property {Uint8Array|null} [signature] NoiseCertificate signature
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a NoiseCertificate.
             * @memberof Cert.CertChain
             * @interface INoiseCertificate
             * @augments Cert.CertChain.NoiseCertificate.$Properties
             * @deprecated Use Cert.CertChain.NoiseCertificate.$Properties instead.
             */

            /**
             * Shape of a NoiseCertificate.
             * @typedef {Cert.CertChain.NoiseCertificate.$Properties} Cert.CertChain.NoiseCertificate.$Shape
             */

            /**
             * Constructs a new NoiseCertificate.
             * @memberof Cert.CertChain
             * @classdesc Represents a NoiseCertificate.
             * @constructor
             * @param {Cert.CertChain.NoiseCertificate.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var NoiseCertificate = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * NoiseCertificate details.
             * @member {Uint8Array|null|undefined} details
             * @memberof Cert.CertChain.NoiseCertificate
             * @instance
             */
            NoiseCertificate.prototype.details = null;

            /**
             * NoiseCertificate signature.
             * @member {Uint8Array|null|undefined} signature
             * @memberof Cert.CertChain.NoiseCertificate
             * @instance
             */
            NoiseCertificate.prototype.signature = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(NoiseCertificate.prototype, "_details", {
                get: $util.oneOfGetter($oneOfFields = ["details"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(NoiseCertificate.prototype, "_signature", {
                get: $util.oneOfGetter($oneOfFields = ["signature"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new NoiseCertificate instance using the specified properties.
             * @function create
             * @memberof Cert.CertChain.NoiseCertificate
             * @static
             * @param {Cert.CertChain.NoiseCertificate.$Properties=} [properties] Properties to set
             * @returns {Cert.CertChain.NoiseCertificate} NoiseCertificate instance
             * @type {{
             *   (properties: Cert.CertChain.NoiseCertificate.$Shape): Cert.CertChain.NoiseCertificate & Cert.CertChain.NoiseCertificate.$Shape;
             *   (properties?: Cert.CertChain.NoiseCertificate.$Properties): Cert.CertChain.NoiseCertificate;
             * }}
             */
            NoiseCertificate.create = function(properties) {
                return new NoiseCertificate(properties);
            };

            /**
             * Encodes the specified NoiseCertificate message. Does not implicitly {@link Cert.CertChain.NoiseCertificate.verify|verify} messages.
             * @function encode
             * @memberof Cert.CertChain.NoiseCertificate
             * @static
             * @param {Cert.CertChain.NoiseCertificate.$Properties} message NoiseCertificate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NoiseCertificate.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.details != null && $Object.hasOwnProperty.call(message, "details"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.details);
                if (message.signature != null && $Object.hasOwnProperty.call(message, "signature"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.signature);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified NoiseCertificate message, length delimited. Does not implicitly {@link Cert.CertChain.NoiseCertificate.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Cert.CertChain.NoiseCertificate
             * @static
             * @param {Cert.CertChain.NoiseCertificate.$Properties} message NoiseCertificate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NoiseCertificate.encodeDelimited = function(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a NoiseCertificate message from the specified reader or buffer.
             * @function decode
             * @memberof Cert.CertChain.NoiseCertificate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Cert.CertChain.NoiseCertificate & Cert.CertChain.NoiseCertificate.$Shape} NoiseCertificate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NoiseCertificate.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Cert.CertChain.NoiseCertificate();
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
                            message.details = reader.bytes();
                            message._details = "details";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.signature = reader.bytes();
                            message._signature = "signature";
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
             * Decodes a NoiseCertificate message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Cert.CertChain.NoiseCertificate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Cert.CertChain.NoiseCertificate & Cert.CertChain.NoiseCertificate.$Shape} NoiseCertificate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NoiseCertificate.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a NoiseCertificate message.
             * @function verify
             * @memberof Cert.CertChain.NoiseCertificate
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NoiseCertificate.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.details != null && $Object.hasOwnProperty.call(message, "details")) {
                    properties._details = 1;
                    if (!(message.details && typeof message.details.length === "number" || $util.isString(message.details)))
                        return "details: buffer expected";
                }
                if (message.signature != null && $Object.hasOwnProperty.call(message, "signature")) {
                    properties._signature = 1;
                    if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                        return "signature: buffer expected";
                }
                return null;
            };

            /**
             * Creates a NoiseCertificate message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Cert.CertChain.NoiseCertificate
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Cert.CertChain.NoiseCertificate} NoiseCertificate
             */
            NoiseCertificate.fromObject = function (object, _depth) {
                if (object instanceof $root.Cert.CertChain.NoiseCertificate)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".Cert.CertChain.NoiseCertificate: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.Cert.CertChain.NoiseCertificate();
                if (object.details != null)
                    if (typeof object.details === "string")
                        $util.base64.decode(object.details, message.details = $util.newBuffer($util.base64.length(object.details)), 0);
                    else if (object.details.length >= 0)
                        message.details = object.details;
                if (object.signature != null)
                    if (typeof object.signature === "string")
                        $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                    else if (object.signature.length >= 0)
                        message.signature = object.signature;
                return message;
            };

            /**
             * Creates a plain object from a NoiseCertificate message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Cert.CertChain.NoiseCertificate
             * @static
             * @param {Cert.CertChain.NoiseCertificate} message NoiseCertificate
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NoiseCertificate.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (message.details != null && $Object.hasOwnProperty.call(message, "details"))
                    object.details = options.bytes === $String ? $util.base64.encode(message.details, 0, message.details.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.details) : message.details;
                if (message.signature != null && $Object.hasOwnProperty.call(message, "signature"))
                    object.signature = options.bytes === $String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.signature) : message.signature;
                return object;
            };

            /**
             * Converts this NoiseCertificate to JSON.
             * @function toJSON
             * @memberof Cert.CertChain.NoiseCertificate
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NoiseCertificate.prototype.toJSON = function() {
                return NoiseCertificate.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for NoiseCertificate
             * @function getTypeUrl
             * @memberof Cert.CertChain.NoiseCertificate
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            NoiseCertificate.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/Cert.CertChain.NoiseCertificate";
            };

            NoiseCertificate.Details = (function() {

                /**
                 * Properties of a Details.
                 * @typedef {Object} Cert.CertChain.NoiseCertificate.Details.$Properties
                 * @property {number|null} [serial] Details serial
                 * @property {number|null} [issuerSerial] Details issuerSerial
                 * @property {Uint8Array|null} [key] Details key
                 * @property {number|Long|null} [notBefore] Details notBefore
                 * @property {number|Long|null} [notAfter] Details notAfter
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a Details.
                 * @memberof Cert.CertChain.NoiseCertificate
                 * @interface IDetails
                 * @augments Cert.CertChain.NoiseCertificate.Details.$Properties
                 * @deprecated Use Cert.CertChain.NoiseCertificate.Details.$Properties instead.
                 */

                /**
                 * Shape of a Details.
                 * @typedef {Cert.CertChain.NoiseCertificate.Details.$Properties} Cert.CertChain.NoiseCertificate.Details.$Shape
                 */

                /**
                 * Constructs a new Details.
                 * @memberof Cert.CertChain.NoiseCertificate
                 * @classdesc Represents a Details.
                 * @constructor
                 * @param {Cert.CertChain.NoiseCertificate.Details.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var Details = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * Details serial.
                 * @member {number|null|undefined} serial
                 * @memberof Cert.CertChain.NoiseCertificate.Details
                 * @instance
                 */
                Details.prototype.serial = null;

                /**
                 * Details issuerSerial.
                 * @member {number|null|undefined} issuerSerial
                 * @memberof Cert.CertChain.NoiseCertificate.Details
                 * @instance
                 */
                Details.prototype.issuerSerial = null;

                /**
                 * Details key.
                 * @member {Uint8Array|null|undefined} key
                 * @memberof Cert.CertChain.NoiseCertificate.Details
                 * @instance
                 */
                Details.prototype.key = null;

                /**
                 * Details notBefore.
                 * @member {number|Long|null|undefined} notBefore
                 * @memberof Cert.CertChain.NoiseCertificate.Details
                 * @instance
                 */
                Details.prototype.notBefore = null;

                /**
                 * Details notAfter.
                 * @member {number|Long|null|undefined} notAfter
                 * @memberof Cert.CertChain.NoiseCertificate.Details
                 * @instance
                 */
                Details.prototype.notAfter = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                // Virtual OneOf for proto3 optional field
                $Object.defineProperty(Details.prototype, "_serial", {
                    get: $util.oneOfGetter($oneOfFields = ["serial"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                $Object.defineProperty(Details.prototype, "_issuerSerial", {
                    get: $util.oneOfGetter($oneOfFields = ["issuerSerial"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                $Object.defineProperty(Details.prototype, "_key", {
                    get: $util.oneOfGetter($oneOfFields = ["key"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                $Object.defineProperty(Details.prototype, "_notBefore", {
                    get: $util.oneOfGetter($oneOfFields = ["notBefore"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                $Object.defineProperty(Details.prototype, "_notAfter", {
                    get: $util.oneOfGetter($oneOfFields = ["notAfter"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new Details instance using the specified properties.
                 * @function create
                 * @memberof Cert.CertChain.NoiseCertificate.Details
                 * @static
                 * @param {Cert.CertChain.NoiseCertificate.Details.$Properties=} [properties] Properties to set
                 * @returns {Cert.CertChain.NoiseCertificate.Details} Details instance
                 * @type {{
                 *   (properties: Cert.CertChain.NoiseCertificate.Details.$Shape): Cert.CertChain.NoiseCertificate.Details & Cert.CertChain.NoiseCertificate.Details.$Shape;
                 *   (properties?: Cert.CertChain.NoiseCertificate.Details.$Properties): Cert.CertChain.NoiseCertificate.Details;
                 * }}
                 */
                Details.create = function(properties) {
                    return new Details(properties);
                };

                /**
                 * Encodes the specified Details message. Does not implicitly {@link Cert.CertChain.NoiseCertificate.Details.verify|verify} messages.
                 * @function encode
                 * @memberof Cert.CertChain.NoiseCertificate.Details
                 * @static
                 * @param {Cert.CertChain.NoiseCertificate.Details.$Properties} message Details message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Details.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.serial != null && $Object.hasOwnProperty.call(message, "serial"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.serial);
                    if (message.issuerSerial != null && $Object.hasOwnProperty.call(message, "issuerSerial"))
                        writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.issuerSerial);
                    if (message.key != null && $Object.hasOwnProperty.call(message, "key"))
                        writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.key);
                    if (message.notBefore != null && $Object.hasOwnProperty.call(message, "notBefore"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.notBefore);
                    if (message.notAfter != null && $Object.hasOwnProperty.call(message, "notAfter"))
                        writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.notAfter);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified Details message, length delimited. Does not implicitly {@link Cert.CertChain.NoiseCertificate.Details.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Cert.CertChain.NoiseCertificate.Details
                 * @static
                 * @param {Cert.CertChain.NoiseCertificate.Details.$Properties} message Details message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Details.encodeDelimited = function(message, writer) {
                    return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
                };

                /**
                 * Decodes a Details message from the specified reader or buffer.
                 * @function decode
                 * @memberof Cert.CertChain.NoiseCertificate.Details
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Cert.CertChain.NoiseCertificate.Details & Cert.CertChain.NoiseCertificate.Details.$Shape} Details
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Details.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Cert.CertChain.NoiseCertificate.Details();
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
                                message.serial = reader.uint32();
                                message._serial = "serial";
                                continue;
                            }
                        case 2: {
                                if (wireType !== 0)
                                    break;
                                message.issuerSerial = reader.uint32();
                                message._issuerSerial = "issuerSerial";
                                continue;
                            }
                        case 3: {
                                if (wireType !== 2)
                                    break;
                                message.key = reader.bytes();
                                message._key = "key";
                                continue;
                            }
                        case 4: {
                                if (wireType !== 0)
                                    break;
                                message.notBefore = reader.uint64();
                                message._notBefore = "notBefore";
                                continue;
                            }
                        case 5: {
                                if (wireType !== 0)
                                    break;
                                message.notAfter = reader.uint64();
                                message._notAfter = "notAfter";
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
                 * Decodes a Details message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Cert.CertChain.NoiseCertificate.Details
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Cert.CertChain.NoiseCertificate.Details & Cert.CertChain.NoiseCertificate.Details.$Shape} Details
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Details.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Details message.
                 * @function verify
                 * @memberof Cert.CertChain.NoiseCertificate.Details
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Details.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    var properties = {};
                    if (message.serial != null && $Object.hasOwnProperty.call(message, "serial")) {
                        properties._serial = 1;
                        if (!$util.isInteger(message.serial))
                            return "serial: integer expected";
                    }
                    if (message.issuerSerial != null && $Object.hasOwnProperty.call(message, "issuerSerial")) {
                        properties._issuerSerial = 1;
                        if (!$util.isInteger(message.issuerSerial))
                            return "issuerSerial: integer expected";
                    }
                    if (message.key != null && $Object.hasOwnProperty.call(message, "key")) {
                        properties._key = 1;
                        if (!(message.key && typeof message.key.length === "number" || $util.isString(message.key)))
                            return "key: buffer expected";
                    }
                    if (message.notBefore != null && $Object.hasOwnProperty.call(message, "notBefore")) {
                        properties._notBefore = 1;
                        if (!$util.isInteger(message.notBefore) && !(message.notBefore && $util.isInteger(message.notBefore.low) && $util.isInteger(message.notBefore.high)))
                            return "notBefore: integer|Long expected";
                    }
                    if (message.notAfter != null && $Object.hasOwnProperty.call(message, "notAfter")) {
                        properties._notAfter = 1;
                        if (!$util.isInteger(message.notAfter) && !(message.notAfter && $util.isInteger(message.notAfter.low) && $util.isInteger(message.notAfter.high)))
                            return "notAfter: integer|Long expected";
                    }
                    return null;
                };

                /**
                 * Creates a Details message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Cert.CertChain.NoiseCertificate.Details
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Cert.CertChain.NoiseCertificate.Details} Details
                 */
                Details.fromObject = function (object, _depth) {
                    if (object instanceof $root.Cert.CertChain.NoiseCertificate.Details)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".Cert.CertChain.NoiseCertificate.Details: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.Cert.CertChain.NoiseCertificate.Details();
                    if (object.serial != null)
                        message.serial = object.serial >>> 0;
                    if (object.issuerSerial != null)
                        message.issuerSerial = object.issuerSerial >>> 0;
                    if (object.key != null)
                        if (typeof object.key === "string")
                            $util.base64.decode(object.key, message.key = $util.newBuffer($util.base64.length(object.key)), 0);
                        else if (object.key.length >= 0)
                            message.key = object.key;
                    if (object.notBefore != null)
                        if ($util.Long)
                            message.notBefore = $util.Long.fromValue(object.notBefore, true);
                        else if (typeof object.notBefore === "string")
                            message.notBefore = $parseInt(object.notBefore, 10);
                        else if (typeof object.notBefore === "number")
                            message.notBefore = object.notBefore;
                        else if (typeof object.notBefore === "object")
                            message.notBefore = new $util.LongBits(object.notBefore.low >>> 0, object.notBefore.high >>> 0).toNumber(true);
                    if (object.notAfter != null)
                        if ($util.Long)
                            message.notAfter = $util.Long.fromValue(object.notAfter, true);
                        else if (typeof object.notAfter === "string")
                            message.notAfter = $parseInt(object.notAfter, 10);
                        else if (typeof object.notAfter === "number")
                            message.notAfter = object.notAfter;
                        else if (typeof object.notAfter === "object")
                            message.notAfter = new $util.LongBits(object.notAfter.low >>> 0, object.notAfter.high >>> 0).toNumber(true);
                    return message;
                };

                /**
                 * Creates a plain object from a Details message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Cert.CertChain.NoiseCertificate.Details
                 * @static
                 * @param {Cert.CertChain.NoiseCertificate.Details} message Details
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Details.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (message.serial != null && $Object.hasOwnProperty.call(message, "serial"))
                        object.serial = message.serial;
                    if (message.issuerSerial != null && $Object.hasOwnProperty.call(message, "issuerSerial"))
                        object.issuerSerial = message.issuerSerial;
                    if (message.key != null && $Object.hasOwnProperty.call(message, "key"))
                        object.key = options.bytes === $String ? $util.base64.encode(message.key, 0, message.key.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.key) : message.key;
                    if (message.notBefore != null && $Object.hasOwnProperty.call(message, "notBefore"))
                        if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                            object.notBefore = typeof message.notBefore === "number" ? $BigInt(message.notBefore) : $util.Long.fromBits(message.notBefore.low >>> 0, message.notBefore.high >>> 0, true).toBigInt();
                        else if (typeof message.notBefore === "number")
                            object.notBefore = options.longs === $String ? $String(message.notBefore) : message.notBefore;
                        else
                            object.notBefore = options.longs === $String ? $util.Long.prototype.toString.call(message.notBefore) : options.longs === $Number ? new $util.LongBits(message.notBefore.low >>> 0, message.notBefore.high >>> 0).toNumber(true) : message.notBefore;
                    if (message.notAfter != null && $Object.hasOwnProperty.call(message, "notAfter"))
                        if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                            object.notAfter = typeof message.notAfter === "number" ? $BigInt(message.notAfter) : $util.Long.fromBits(message.notAfter.low >>> 0, message.notAfter.high >>> 0, true).toBigInt();
                        else if (typeof message.notAfter === "number")
                            object.notAfter = options.longs === $String ? $String(message.notAfter) : message.notAfter;
                        else
                            object.notAfter = options.longs === $String ? $util.Long.prototype.toString.call(message.notAfter) : options.longs === $Number ? new $util.LongBits(message.notAfter.low >>> 0, message.notAfter.high >>> 0).toNumber(true) : message.notAfter;
                    return object;
                };

                /**
                 * Converts this Details to JSON.
                 * @function toJSON
                 * @memberof Cert.CertChain.NoiseCertificate.Details
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Details.prototype.toJSON = function() {
                    return Details.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for Details
                 * @function getTypeUrl
                 * @memberof Cert.CertChain.NoiseCertificate.Details
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                Details.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/Cert.CertChain.NoiseCertificate.Details";
                };

                return Details;
            })();

            return NoiseCertificate;
        })();

        return CertChain;
    })();

    Cert.NoiseCertificate = (function() {

        /**
         * Properties of a NoiseCertificate.
         * @typedef {Object} Cert.NoiseCertificate.$Properties
         * @property {Uint8Array|null} [details] NoiseCertificate details
         * @property {Uint8Array|null} [signature] NoiseCertificate signature
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a NoiseCertificate.
         * @memberof Cert
         * @interface INoiseCertificate
         * @augments Cert.NoiseCertificate.$Properties
         * @deprecated Use Cert.NoiseCertificate.$Properties instead.
         */

        /**
         * Shape of a NoiseCertificate.
         * @typedef {Cert.NoiseCertificate.$Properties} Cert.NoiseCertificate.$Shape
         */

        /**
         * Constructs a new NoiseCertificate.
         * @memberof Cert
         * @classdesc Represents a NoiseCertificate.
         * @constructor
         * @param {Cert.NoiseCertificate.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var NoiseCertificate = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * NoiseCertificate details.
         * @member {Uint8Array|null|undefined} details
         * @memberof Cert.NoiseCertificate
         * @instance
         */
        NoiseCertificate.prototype.details = null;

        /**
         * NoiseCertificate signature.
         * @member {Uint8Array|null|undefined} signature
         * @memberof Cert.NoiseCertificate
         * @instance
         */
        NoiseCertificate.prototype.signature = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(NoiseCertificate.prototype, "_details", {
            get: $util.oneOfGetter($oneOfFields = ["details"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(NoiseCertificate.prototype, "_signature", {
            get: $util.oneOfGetter($oneOfFields = ["signature"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new NoiseCertificate instance using the specified properties.
         * @function create
         * @memberof Cert.NoiseCertificate
         * @static
         * @param {Cert.NoiseCertificate.$Properties=} [properties] Properties to set
         * @returns {Cert.NoiseCertificate} NoiseCertificate instance
         * @type {{
         *   (properties: Cert.NoiseCertificate.$Shape): Cert.NoiseCertificate & Cert.NoiseCertificate.$Shape;
         *   (properties?: Cert.NoiseCertificate.$Properties): Cert.NoiseCertificate;
         * }}
         */
        NoiseCertificate.create = function(properties) {
            return new NoiseCertificate(properties);
        };

        /**
         * Encodes the specified NoiseCertificate message. Does not implicitly {@link Cert.NoiseCertificate.verify|verify} messages.
         * @function encode
         * @memberof Cert.NoiseCertificate
         * @static
         * @param {Cert.NoiseCertificate.$Properties} message NoiseCertificate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NoiseCertificate.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.details != null && $Object.hasOwnProperty.call(message, "details"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.details);
            if (message.signature != null && $Object.hasOwnProperty.call(message, "signature"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.signature);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified NoiseCertificate message, length delimited. Does not implicitly {@link Cert.NoiseCertificate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Cert.NoiseCertificate
         * @static
         * @param {Cert.NoiseCertificate.$Properties} message NoiseCertificate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NoiseCertificate.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a NoiseCertificate message from the specified reader or buffer.
         * @function decode
         * @memberof Cert.NoiseCertificate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Cert.NoiseCertificate & Cert.NoiseCertificate.$Shape} NoiseCertificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NoiseCertificate.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Cert.NoiseCertificate();
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
                        message.details = reader.bytes();
                        message._details = "details";
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.signature = reader.bytes();
                        message._signature = "signature";
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
         * Decodes a NoiseCertificate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Cert.NoiseCertificate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Cert.NoiseCertificate & Cert.NoiseCertificate.$Shape} NoiseCertificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NoiseCertificate.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NoiseCertificate message.
         * @function verify
         * @memberof Cert.NoiseCertificate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NoiseCertificate.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.details != null && $Object.hasOwnProperty.call(message, "details")) {
                properties._details = 1;
                if (!(message.details && typeof message.details.length === "number" || $util.isString(message.details)))
                    return "details: buffer expected";
            }
            if (message.signature != null && $Object.hasOwnProperty.call(message, "signature")) {
                properties._signature = 1;
                if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                    return "signature: buffer expected";
            }
            return null;
        };

        /**
         * Creates a NoiseCertificate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Cert.NoiseCertificate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Cert.NoiseCertificate} NoiseCertificate
         */
        NoiseCertificate.fromObject = function (object, _depth) {
            if (object instanceof $root.Cert.NoiseCertificate)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".Cert.NoiseCertificate: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.Cert.NoiseCertificate();
            if (object.details != null)
                if (typeof object.details === "string")
                    $util.base64.decode(object.details, message.details = $util.newBuffer($util.base64.length(object.details)), 0);
                else if (object.details.length >= 0)
                    message.details = object.details;
            if (object.signature != null)
                if (typeof object.signature === "string")
                    $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                else if (object.signature.length >= 0)
                    message.signature = object.signature;
            return message;
        };

        /**
         * Creates a plain object from a NoiseCertificate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Cert.NoiseCertificate
         * @static
         * @param {Cert.NoiseCertificate} message NoiseCertificate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NoiseCertificate.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.details != null && $Object.hasOwnProperty.call(message, "details"))
                object.details = options.bytes === $String ? $util.base64.encode(message.details, 0, message.details.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.details) : message.details;
            if (message.signature != null && $Object.hasOwnProperty.call(message, "signature"))
                object.signature = options.bytes === $String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.signature) : message.signature;
            return object;
        };

        /**
         * Converts this NoiseCertificate to JSON.
         * @function toJSON
         * @memberof Cert.NoiseCertificate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NoiseCertificate.prototype.toJSON = function() {
            return NoiseCertificate.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for NoiseCertificate
         * @function getTypeUrl
         * @memberof Cert.NoiseCertificate
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        NoiseCertificate.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/Cert.NoiseCertificate";
        };

        NoiseCertificate.Details = (function() {

            /**
             * Properties of a Details.
             * @typedef {Object} Cert.NoiseCertificate.Details.$Properties
             * @property {number|null} [serial] Details serial
             * @property {string|null} [issuer] Details issuer
             * @property {number|Long|null} [expires] Details expires
             * @property {string|null} [subject] Details subject
             * @property {Uint8Array|null} [key] Details key
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Details.
             * @memberof Cert.NoiseCertificate
             * @interface IDetails
             * @augments Cert.NoiseCertificate.Details.$Properties
             * @deprecated Use Cert.NoiseCertificate.Details.$Properties instead.
             */

            /**
             * Shape of a Details.
             * @typedef {Cert.NoiseCertificate.Details.$Properties} Cert.NoiseCertificate.Details.$Shape
             */

            /**
             * Constructs a new Details.
             * @memberof Cert.NoiseCertificate
             * @classdesc Represents a Details.
             * @constructor
             * @param {Cert.NoiseCertificate.Details.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var Details = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Details serial.
             * @member {number|null|undefined} serial
             * @memberof Cert.NoiseCertificate.Details
             * @instance
             */
            Details.prototype.serial = null;

            /**
             * Details issuer.
             * @member {string|null|undefined} issuer
             * @memberof Cert.NoiseCertificate.Details
             * @instance
             */
            Details.prototype.issuer = null;

            /**
             * Details expires.
             * @member {number|Long|null|undefined} expires
             * @memberof Cert.NoiseCertificate.Details
             * @instance
             */
            Details.prototype.expires = null;

            /**
             * Details subject.
             * @member {string|null|undefined} subject
             * @memberof Cert.NoiseCertificate.Details
             * @instance
             */
            Details.prototype.subject = null;

            /**
             * Details key.
             * @member {Uint8Array|null|undefined} key
             * @memberof Cert.NoiseCertificate.Details
             * @instance
             */
            Details.prototype.key = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Details.prototype, "_serial", {
                get: $util.oneOfGetter($oneOfFields = ["serial"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Details.prototype, "_issuer", {
                get: $util.oneOfGetter($oneOfFields = ["issuer"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Details.prototype, "_expires", {
                get: $util.oneOfGetter($oneOfFields = ["expires"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Details.prototype, "_subject", {
                get: $util.oneOfGetter($oneOfFields = ["subject"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Details.prototype, "_key", {
                get: $util.oneOfGetter($oneOfFields = ["key"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Details instance using the specified properties.
             * @function create
             * @memberof Cert.NoiseCertificate.Details
             * @static
             * @param {Cert.NoiseCertificate.Details.$Properties=} [properties] Properties to set
             * @returns {Cert.NoiseCertificate.Details} Details instance
             * @type {{
             *   (properties: Cert.NoiseCertificate.Details.$Shape): Cert.NoiseCertificate.Details & Cert.NoiseCertificate.Details.$Shape;
             *   (properties?: Cert.NoiseCertificate.Details.$Properties): Cert.NoiseCertificate.Details;
             * }}
             */
            Details.create = function(properties) {
                return new Details(properties);
            };

            /**
             * Encodes the specified Details message. Does not implicitly {@link Cert.NoiseCertificate.Details.verify|verify} messages.
             * @function encode
             * @memberof Cert.NoiseCertificate.Details
             * @static
             * @param {Cert.NoiseCertificate.Details.$Properties} message Details message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Details.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.serial != null && $Object.hasOwnProperty.call(message, "serial"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.serial);
                if (message.issuer != null && $Object.hasOwnProperty.call(message, "issuer"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.issuer);
                if (message.expires != null && $Object.hasOwnProperty.call(message, "expires"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.expires);
                if (message.subject != null && $Object.hasOwnProperty.call(message, "subject"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.subject);
                if (message.key != null && $Object.hasOwnProperty.call(message, "key"))
                    writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.key);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Details message, length delimited. Does not implicitly {@link Cert.NoiseCertificate.Details.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Cert.NoiseCertificate.Details
             * @static
             * @param {Cert.NoiseCertificate.Details.$Properties} message Details message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Details.encodeDelimited = function(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a Details message from the specified reader or buffer.
             * @function decode
             * @memberof Cert.NoiseCertificate.Details
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Cert.NoiseCertificate.Details & Cert.NoiseCertificate.Details.$Shape} Details
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Details.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Cert.NoiseCertificate.Details();
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
                            message.serial = reader.uint32();
                            message._serial = "serial";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.issuer = reader.string();
                            message._issuer = "issuer";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            message.expires = reader.uint64();
                            message._expires = "expires";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            message.subject = reader.string();
                            message._subject = "subject";
                            continue;
                        }
                    case 5: {
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
             * Decodes a Details message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Cert.NoiseCertificate.Details
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Cert.NoiseCertificate.Details & Cert.NoiseCertificate.Details.$Shape} Details
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Details.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Details message.
             * @function verify
             * @memberof Cert.NoiseCertificate.Details
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Details.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.serial != null && $Object.hasOwnProperty.call(message, "serial")) {
                    properties._serial = 1;
                    if (!$util.isInteger(message.serial))
                        return "serial: integer expected";
                }
                if (message.issuer != null && $Object.hasOwnProperty.call(message, "issuer")) {
                    properties._issuer = 1;
                    if (!$util.isString(message.issuer))
                        return "issuer: string expected";
                }
                if (message.expires != null && $Object.hasOwnProperty.call(message, "expires")) {
                    properties._expires = 1;
                    if (!$util.isInteger(message.expires) && !(message.expires && $util.isInteger(message.expires.low) && $util.isInteger(message.expires.high)))
                        return "expires: integer|Long expected";
                }
                if (message.subject != null && $Object.hasOwnProperty.call(message, "subject")) {
                    properties._subject = 1;
                    if (!$util.isString(message.subject))
                        return "subject: string expected";
                }
                if (message.key != null && $Object.hasOwnProperty.call(message, "key")) {
                    properties._key = 1;
                    if (!(message.key && typeof message.key.length === "number" || $util.isString(message.key)))
                        return "key: buffer expected";
                }
                return null;
            };

            /**
             * Creates a Details message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Cert.NoiseCertificate.Details
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Cert.NoiseCertificate.Details} Details
             */
            Details.fromObject = function (object, _depth) {
                if (object instanceof $root.Cert.NoiseCertificate.Details)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".Cert.NoiseCertificate.Details: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.Cert.NoiseCertificate.Details();
                if (object.serial != null)
                    message.serial = object.serial >>> 0;
                if (object.issuer != null)
                    message.issuer = $String(object.issuer);
                if (object.expires != null)
                    if ($util.Long)
                        message.expires = $util.Long.fromValue(object.expires, true);
                    else if (typeof object.expires === "string")
                        message.expires = $parseInt(object.expires, 10);
                    else if (typeof object.expires === "number")
                        message.expires = object.expires;
                    else if (typeof object.expires === "object")
                        message.expires = new $util.LongBits(object.expires.low >>> 0, object.expires.high >>> 0).toNumber(true);
                if (object.subject != null)
                    message.subject = $String(object.subject);
                if (object.key != null)
                    if (typeof object.key === "string")
                        $util.base64.decode(object.key, message.key = $util.newBuffer($util.base64.length(object.key)), 0);
                    else if (object.key.length >= 0)
                        message.key = object.key;
                return message;
            };

            /**
             * Creates a plain object from a Details message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Cert.NoiseCertificate.Details
             * @static
             * @param {Cert.NoiseCertificate.Details} message Details
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Details.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (message.serial != null && $Object.hasOwnProperty.call(message, "serial"))
                    object.serial = message.serial;
                if (message.issuer != null && $Object.hasOwnProperty.call(message, "issuer"))
                    object.issuer = message.issuer;
                if (message.expires != null && $Object.hasOwnProperty.call(message, "expires"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.expires = typeof message.expires === "number" ? $BigInt(message.expires) : $util.Long.fromBits(message.expires.low >>> 0, message.expires.high >>> 0, true).toBigInt();
                    else if (typeof message.expires === "number")
                        object.expires = options.longs === $String ? $String(message.expires) : message.expires;
                    else
                        object.expires = options.longs === $String ? $util.Long.prototype.toString.call(message.expires) : options.longs === $Number ? new $util.LongBits(message.expires.low >>> 0, message.expires.high >>> 0).toNumber(true) : message.expires;
                if (message.subject != null && $Object.hasOwnProperty.call(message, "subject"))
                    object.subject = message.subject;
                if (message.key != null && $Object.hasOwnProperty.call(message, "key"))
                    object.key = options.bytes === $String ? $util.base64.encode(message.key, 0, message.key.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.key) : message.key;
                return object;
            };

            /**
             * Converts this Details to JSON.
             * @function toJSON
             * @memberof Cert.NoiseCertificate.Details
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Details.prototype.toJSON = function() {
                return Details.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Details
             * @function getTypeUrl
             * @memberof Cert.NoiseCertificate.Details
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Details.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/Cert.NoiseCertificate.Details";
            };

            return Details;
        })();

        return NoiseCertificate;
    })();

    return Cert;
})();

module.exports = $root;
