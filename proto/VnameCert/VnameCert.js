/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
var $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $TypeError = $util.global.TypeError, $Boolean = $util.global.Boolean, $parseInt = $util.global.parseInt, $String = $util.global.String, $BigInt = $util.global.BigInt, $Number = $util.global.Number, $Array = $util.global.Array;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.VnameCert = (function() {

    /**
     * Namespace VnameCert.
     * @exports VnameCert
     * @namespace
     */
    var VnameCert = {};

    VnameCert.BizIdentityInfo = (function() {

        /**
         * Properties of a BizIdentityInfo.
         * @typedef {Object} VnameCert.BizIdentityInfo.$Properties
         * @property {VnameCert.BizIdentityInfo.VerifiedLevelValue|null} [vlevel] BizIdentityInfo vlevel
         * @property {VnameCert.VerifiedNameCertificate.$Properties|null} [vnameCert] BizIdentityInfo vnameCert
         * @property {boolean|null} [signed] BizIdentityInfo signed
         * @property {boolean|null} [revoked] BizIdentityInfo revoked
         * @property {VnameCert.BizIdentityInfo.HostStorageType|null} [hostStorage] BizIdentityInfo hostStorage
         * @property {VnameCert.BizIdentityInfo.ActualActorsType|null} [actualActors] BizIdentityInfo actualActors
         * @property {number|Long|null} [privacyModeTs] BizIdentityInfo privacyModeTs
         * @property {number|Long|null} [featureControls] BizIdentityInfo featureControls
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a BizIdentityInfo.
         * @memberof VnameCert
         * @interface IBizIdentityInfo
         * @augments VnameCert.BizIdentityInfo.$Properties
         * @deprecated Use VnameCert.BizIdentityInfo.$Properties instead.
         */

        /**
         * Shape of a BizIdentityInfo.
         * @typedef {VnameCert.BizIdentityInfo.$Properties} VnameCert.BizIdentityInfo.$Shape
         */

        /**
         * Constructs a new BizIdentityInfo.
         * @memberof VnameCert
         * @classdesc Represents a BizIdentityInfo.
         * @constructor
         * @param {VnameCert.BizIdentityInfo.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var BizIdentityInfo = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * BizIdentityInfo vlevel.
         * @member {VnameCert.BizIdentityInfo.VerifiedLevelValue|null|undefined} vlevel
         * @memberof VnameCert.BizIdentityInfo
         * @instance
         */
        BizIdentityInfo.prototype.vlevel = null;

        /**
         * BizIdentityInfo vnameCert.
         * @member {VnameCert.VerifiedNameCertificate.$Properties|null|undefined} vnameCert
         * @memberof VnameCert.BizIdentityInfo
         * @instance
         */
        BizIdentityInfo.prototype.vnameCert = null;

        /**
         * BizIdentityInfo signed.
         * @member {boolean|null|undefined} signed
         * @memberof VnameCert.BizIdentityInfo
         * @instance
         */
        BizIdentityInfo.prototype.signed = null;

        /**
         * BizIdentityInfo revoked.
         * @member {boolean|null|undefined} revoked
         * @memberof VnameCert.BizIdentityInfo
         * @instance
         */
        BizIdentityInfo.prototype.revoked = null;

        /**
         * BizIdentityInfo hostStorage.
         * @member {VnameCert.BizIdentityInfo.HostStorageType|null|undefined} hostStorage
         * @memberof VnameCert.BizIdentityInfo
         * @instance
         */
        BizIdentityInfo.prototype.hostStorage = null;

        /**
         * BizIdentityInfo actualActors.
         * @member {VnameCert.BizIdentityInfo.ActualActorsType|null|undefined} actualActors
         * @memberof VnameCert.BizIdentityInfo
         * @instance
         */
        BizIdentityInfo.prototype.actualActors = null;

        /**
         * BizIdentityInfo privacyModeTs.
         * @member {number|Long|null|undefined} privacyModeTs
         * @memberof VnameCert.BizIdentityInfo
         * @instance
         */
        BizIdentityInfo.prototype.privacyModeTs = null;

        /**
         * BizIdentityInfo featureControls.
         * @member {number|Long|null|undefined} featureControls
         * @memberof VnameCert.BizIdentityInfo
         * @instance
         */
        BizIdentityInfo.prototype.featureControls = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BizIdentityInfo.prototype, "_vlevel", {
            get: $util.oneOfGetter($oneOfFields = ["vlevel"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BizIdentityInfo.prototype, "_vnameCert", {
            get: $util.oneOfGetter($oneOfFields = ["vnameCert"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BizIdentityInfo.prototype, "_signed", {
            get: $util.oneOfGetter($oneOfFields = ["signed"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BizIdentityInfo.prototype, "_revoked", {
            get: $util.oneOfGetter($oneOfFields = ["revoked"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BizIdentityInfo.prototype, "_hostStorage", {
            get: $util.oneOfGetter($oneOfFields = ["hostStorage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BizIdentityInfo.prototype, "_actualActors", {
            get: $util.oneOfGetter($oneOfFields = ["actualActors"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BizIdentityInfo.prototype, "_privacyModeTs", {
            get: $util.oneOfGetter($oneOfFields = ["privacyModeTs"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BizIdentityInfo.prototype, "_featureControls", {
            get: $util.oneOfGetter($oneOfFields = ["featureControls"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BizIdentityInfo instance using the specified properties.
         * @function create
         * @memberof VnameCert.BizIdentityInfo
         * @static
         * @param {VnameCert.BizIdentityInfo.$Properties=} [properties] Properties to set
         * @returns {VnameCert.BizIdentityInfo} BizIdentityInfo instance
         * @type {{
         *   (properties: VnameCert.BizIdentityInfo.$Shape): VnameCert.BizIdentityInfo & VnameCert.BizIdentityInfo.$Shape;
         *   (properties?: VnameCert.BizIdentityInfo.$Properties): VnameCert.BizIdentityInfo;
         * }}
         */
        BizIdentityInfo.create = function(properties) {
            return new BizIdentityInfo(properties);
        };

        /**
         * Encodes the specified BizIdentityInfo message. Does not implicitly {@link VnameCert.BizIdentityInfo.verify|verify} messages.
         * @function encode
         * @memberof VnameCert.BizIdentityInfo
         * @static
         * @param {VnameCert.BizIdentityInfo.$Properties} message BizIdentityInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BizIdentityInfo.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.vlevel != null && $Object.hasOwnProperty.call(message, "vlevel"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.vlevel);
            if (message.vnameCert != null && $Object.hasOwnProperty.call(message, "vnameCert"))
                $root.VnameCert.VerifiedNameCertificate.encode(message.vnameCert, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
            if (message.signed != null && $Object.hasOwnProperty.call(message, "signed"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.signed);
            if (message.revoked != null && $Object.hasOwnProperty.call(message, "revoked"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.revoked);
            if (message.hostStorage != null && $Object.hasOwnProperty.call(message, "hostStorage"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.hostStorage);
            if (message.actualActors != null && $Object.hasOwnProperty.call(message, "actualActors"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.actualActors);
            if (message.privacyModeTs != null && $Object.hasOwnProperty.call(message, "privacyModeTs"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.privacyModeTs);
            if (message.featureControls != null && $Object.hasOwnProperty.call(message, "featureControls"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.featureControls);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified BizIdentityInfo message, length delimited. Does not implicitly {@link VnameCert.BizIdentityInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof VnameCert.BizIdentityInfo
         * @static
         * @param {VnameCert.BizIdentityInfo.$Properties} message BizIdentityInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BizIdentityInfo.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a BizIdentityInfo message from the specified reader or buffer.
         * @function decode
         * @memberof VnameCert.BizIdentityInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {VnameCert.BizIdentityInfo & VnameCert.BizIdentityInfo.$Shape} BizIdentityInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BizIdentityInfo.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.VnameCert.BizIdentityInfo();
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
                        message.vlevel = reader.int32();
                        message._vlevel = "vlevel";
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.vnameCert = $root.VnameCert.VerifiedNameCertificate.decode(reader, reader.uint32(), $undefined, _depth + 1, message.vnameCert);
                        message._vnameCert = "vnameCert";
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        message.signed = reader.bool();
                        message._signed = "signed";
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        message.revoked = reader.bool();
                        message._revoked = "revoked";
                        continue;
                    }
                case 5: {
                        if (wireType !== 0)
                            break;
                        message.hostStorage = reader.int32();
                        message._hostStorage = "hostStorage";
                        continue;
                    }
                case 6: {
                        if (wireType !== 0)
                            break;
                        message.actualActors = reader.int32();
                        message._actualActors = "actualActors";
                        continue;
                    }
                case 7: {
                        if (wireType !== 0)
                            break;
                        message.privacyModeTs = reader.uint64();
                        message._privacyModeTs = "privacyModeTs";
                        continue;
                    }
                case 8: {
                        if (wireType !== 0)
                            break;
                        message.featureControls = reader.uint64();
                        message._featureControls = "featureControls";
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
         * Decodes a BizIdentityInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof VnameCert.BizIdentityInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {VnameCert.BizIdentityInfo & VnameCert.BizIdentityInfo.$Shape} BizIdentityInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BizIdentityInfo.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BizIdentityInfo message.
         * @function verify
         * @memberof VnameCert.BizIdentityInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BizIdentityInfo.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.vlevel != null && $Object.hasOwnProperty.call(message, "vlevel")) {
                properties._vlevel = 1;
                switch (message.vlevel) {
                default:
                    return "vlevel: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            }
            if (message.vnameCert != null && $Object.hasOwnProperty.call(message, "vnameCert")) {
                properties._vnameCert = 1;
                {
                    var error = $root.VnameCert.VerifiedNameCertificate.verify(message.vnameCert, _depth + 1);
                    if (error)
                        return "vnameCert." + error;
                }
            }
            if (message.signed != null && $Object.hasOwnProperty.call(message, "signed")) {
                properties._signed = 1;
                if (typeof message.signed !== "boolean")
                    return "signed: boolean expected";
            }
            if (message.revoked != null && $Object.hasOwnProperty.call(message, "revoked")) {
                properties._revoked = 1;
                if (typeof message.revoked !== "boolean")
                    return "revoked: boolean expected";
            }
            if (message.hostStorage != null && $Object.hasOwnProperty.call(message, "hostStorage")) {
                properties._hostStorage = 1;
                switch (message.hostStorage) {
                default:
                    return "hostStorage: enum value expected";
                case 0:
                case 1:
                    break;
                }
            }
            if (message.actualActors != null && $Object.hasOwnProperty.call(message, "actualActors")) {
                properties._actualActors = 1;
                switch (message.actualActors) {
                default:
                    return "actualActors: enum value expected";
                case 0:
                case 1:
                    break;
                }
            }
            if (message.privacyModeTs != null && $Object.hasOwnProperty.call(message, "privacyModeTs")) {
                properties._privacyModeTs = 1;
                if (!$util.isInteger(message.privacyModeTs) && !(message.privacyModeTs && $util.isInteger(message.privacyModeTs.low) && $util.isInteger(message.privacyModeTs.high)))
                    return "privacyModeTs: integer|Long expected";
            }
            if (message.featureControls != null && $Object.hasOwnProperty.call(message, "featureControls")) {
                properties._featureControls = 1;
                if (!$util.isInteger(message.featureControls) && !(message.featureControls && $util.isInteger(message.featureControls.low) && $util.isInteger(message.featureControls.high)))
                    return "featureControls: integer|Long expected";
            }
            return null;
        };

        /**
         * Creates a BizIdentityInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof VnameCert.BizIdentityInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {VnameCert.BizIdentityInfo} BizIdentityInfo
         */
        BizIdentityInfo.fromObject = function (object, _depth) {
            if (object instanceof $root.VnameCert.BizIdentityInfo)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".VnameCert.BizIdentityInfo: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.VnameCert.BizIdentityInfo();
            switch (object.vlevel) {
            default:
                if (typeof object.vlevel === "number") {
                    message.vlevel = object.vlevel;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                message.vlevel = 0;
                break;
            case "LOW":
            case 1:
                message.vlevel = 1;
                break;
            case "HIGH":
            case 2:
                message.vlevel = 2;
                break;
            }
            if (object.vnameCert != null) {
                if (!$util.isObject(object.vnameCert))
                    throw $TypeError(".VnameCert.BizIdentityInfo.vnameCert: object expected");
                message.vnameCert = $root.VnameCert.VerifiedNameCertificate.fromObject(object.vnameCert, _depth + 1);
            }
            if (object.signed != null)
                message.signed = $Boolean(object.signed);
            if (object.revoked != null)
                message.revoked = $Boolean(object.revoked);
            switch (object.hostStorage) {
            default:
                if (typeof object.hostStorage === "number") {
                    message.hostStorage = object.hostStorage;
                    break;
                }
                break;
            case "ON_PREMISE":
            case 0:
                message.hostStorage = 0;
                break;
            case "FACEBOOK":
            case 1:
                message.hostStorage = 1;
                break;
            }
            switch (object.actualActors) {
            default:
                if (typeof object.actualActors === "number") {
                    message.actualActors = object.actualActors;
                    break;
                }
                break;
            case "SELF":
            case 0:
                message.actualActors = 0;
                break;
            case "BSP":
            case 1:
                message.actualActors = 1;
                break;
            }
            if (object.privacyModeTs != null)
                if ($util.Long)
                    message.privacyModeTs = $util.Long.fromValue(object.privacyModeTs, true);
                else if (typeof object.privacyModeTs === "string")
                    message.privacyModeTs = $parseInt(object.privacyModeTs, 10);
                else if (typeof object.privacyModeTs === "number")
                    message.privacyModeTs = object.privacyModeTs;
                else if (typeof object.privacyModeTs === "object")
                    message.privacyModeTs = new $util.LongBits(object.privacyModeTs.low >>> 0, object.privacyModeTs.high >>> 0).toNumber(true);
            if (object.featureControls != null)
                if ($util.Long)
                    message.featureControls = $util.Long.fromValue(object.featureControls, true);
                else if (typeof object.featureControls === "string")
                    message.featureControls = $parseInt(object.featureControls, 10);
                else if (typeof object.featureControls === "number")
                    message.featureControls = object.featureControls;
                else if (typeof object.featureControls === "object")
                    message.featureControls = new $util.LongBits(object.featureControls.low >>> 0, object.featureControls.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a BizIdentityInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof VnameCert.BizIdentityInfo
         * @static
         * @param {VnameCert.BizIdentityInfo} message BizIdentityInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BizIdentityInfo.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.vlevel != null && $Object.hasOwnProperty.call(message, "vlevel"))
                object.vlevel = options.enums === $String ? $root.VnameCert.BizIdentityInfo.VerifiedLevelValue[message.vlevel] === $undefined ? message.vlevel : $root.VnameCert.BizIdentityInfo.VerifiedLevelValue[message.vlevel] : message.vlevel;
            if (message.vnameCert != null && $Object.hasOwnProperty.call(message, "vnameCert"))
                object.vnameCert = $root.VnameCert.VerifiedNameCertificate.toObject(message.vnameCert, options, _depth + 1);
            if (message.signed != null && $Object.hasOwnProperty.call(message, "signed"))
                object.signed = message.signed;
            if (message.revoked != null && $Object.hasOwnProperty.call(message, "revoked"))
                object.revoked = message.revoked;
            if (message.hostStorage != null && $Object.hasOwnProperty.call(message, "hostStorage"))
                object.hostStorage = options.enums === $String ? $root.VnameCert.BizIdentityInfo.HostStorageType[message.hostStorage] === $undefined ? message.hostStorage : $root.VnameCert.BizIdentityInfo.HostStorageType[message.hostStorage] : message.hostStorage;
            if (message.actualActors != null && $Object.hasOwnProperty.call(message, "actualActors"))
                object.actualActors = options.enums === $String ? $root.VnameCert.BizIdentityInfo.ActualActorsType[message.actualActors] === $undefined ? message.actualActors : $root.VnameCert.BizIdentityInfo.ActualActorsType[message.actualActors] : message.actualActors;
            if (message.privacyModeTs != null && $Object.hasOwnProperty.call(message, "privacyModeTs"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.privacyModeTs = typeof message.privacyModeTs === "number" ? $BigInt(message.privacyModeTs) : $util.Long.fromBits(message.privacyModeTs.low >>> 0, message.privacyModeTs.high >>> 0, true).toBigInt();
                else if (typeof message.privacyModeTs === "number")
                    object.privacyModeTs = options.longs === $String ? $String(message.privacyModeTs) : message.privacyModeTs;
                else
                    object.privacyModeTs = options.longs === $String ? $util.Long.prototype.toString.call(message.privacyModeTs) : options.longs === $Number ? new $util.LongBits(message.privacyModeTs.low >>> 0, message.privacyModeTs.high >>> 0).toNumber(true) : message.privacyModeTs;
            if (message.featureControls != null && $Object.hasOwnProperty.call(message, "featureControls"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.featureControls = typeof message.featureControls === "number" ? $BigInt(message.featureControls) : $util.Long.fromBits(message.featureControls.low >>> 0, message.featureControls.high >>> 0, true).toBigInt();
                else if (typeof message.featureControls === "number")
                    object.featureControls = options.longs === $String ? $String(message.featureControls) : message.featureControls;
                else
                    object.featureControls = options.longs === $String ? $util.Long.prototype.toString.call(message.featureControls) : options.longs === $Number ? new $util.LongBits(message.featureControls.low >>> 0, message.featureControls.high >>> 0).toNumber(true) : message.featureControls;
            return object;
        };

        /**
         * Converts this BizIdentityInfo to JSON.
         * @function toJSON
         * @memberof VnameCert.BizIdentityInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BizIdentityInfo.prototype.toJSON = function() {
            return BizIdentityInfo.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for BizIdentityInfo
         * @function getTypeUrl
         * @memberof VnameCert.BizIdentityInfo
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        BizIdentityInfo.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/VnameCert.BizIdentityInfo";
        };

        /**
         * ActualActorsType enum.
         * @name VnameCert.BizIdentityInfo.ActualActorsType
         * @enum {number}
         * @property {number} SELF=0 SELF value
         * @property {number} BSP=1 BSP value
         */
        BizIdentityInfo.ActualActorsType = (function() {
            var valuesById = {}, values = $Object.create(valuesById);
            values[valuesById[0] = "SELF"] = 0;
            values[valuesById[1] = "BSP"] = 1;
            return values;
        })();

        /**
         * HostStorageType enum.
         * @name VnameCert.BizIdentityInfo.HostStorageType
         * @enum {number}
         * @property {number} ON_PREMISE=0 ON_PREMISE value
         * @property {number} FACEBOOK=1 FACEBOOK value
         */
        BizIdentityInfo.HostStorageType = (function() {
            var valuesById = {}, values = $Object.create(valuesById);
            values[valuesById[0] = "ON_PREMISE"] = 0;
            values[valuesById[1] = "FACEBOOK"] = 1;
            return values;
        })();

        /**
         * VerifiedLevelValue enum.
         * @name VnameCert.BizIdentityInfo.VerifiedLevelValue
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} LOW=1 LOW value
         * @property {number} HIGH=2 HIGH value
         */
        BizIdentityInfo.VerifiedLevelValue = (function() {
            var valuesById = {}, values = $Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "LOW"] = 1;
            values[valuesById[2] = "HIGH"] = 2;
            return values;
        })();

        return BizIdentityInfo;
    })();

    VnameCert.BizAccountLinkInfo = (function() {

        /**
         * Properties of a BizAccountLinkInfo.
         * @typedef {Object} VnameCert.BizAccountLinkInfo.$Properties
         * @property {number|Long|null} [whatsappBizAcctFbid] BizAccountLinkInfo whatsappBizAcctFbid
         * @property {string|null} [whatsappAcctNumber] BizAccountLinkInfo whatsappAcctNumber
         * @property {number|Long|null} [issueTime] BizAccountLinkInfo issueTime
         * @property {VnameCert.BizAccountLinkInfo.HostStorageType|null} [hostStorage] BizAccountLinkInfo hostStorage
         * @property {VnameCert.BizAccountLinkInfo.AccountType|null} [accountType] BizAccountLinkInfo accountType
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a BizAccountLinkInfo.
         * @memberof VnameCert
         * @interface IBizAccountLinkInfo
         * @augments VnameCert.BizAccountLinkInfo.$Properties
         * @deprecated Use VnameCert.BizAccountLinkInfo.$Properties instead.
         */

        /**
         * Shape of a BizAccountLinkInfo.
         * @typedef {VnameCert.BizAccountLinkInfo.$Properties} VnameCert.BizAccountLinkInfo.$Shape
         */

        /**
         * Constructs a new BizAccountLinkInfo.
         * @memberof VnameCert
         * @classdesc Represents a BizAccountLinkInfo.
         * @constructor
         * @param {VnameCert.BizAccountLinkInfo.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var BizAccountLinkInfo = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * BizAccountLinkInfo whatsappBizAcctFbid.
         * @member {number|Long|null|undefined} whatsappBizAcctFbid
         * @memberof VnameCert.BizAccountLinkInfo
         * @instance
         */
        BizAccountLinkInfo.prototype.whatsappBizAcctFbid = null;

        /**
         * BizAccountLinkInfo whatsappAcctNumber.
         * @member {string|null|undefined} whatsappAcctNumber
         * @memberof VnameCert.BizAccountLinkInfo
         * @instance
         */
        BizAccountLinkInfo.prototype.whatsappAcctNumber = null;

        /**
         * BizAccountLinkInfo issueTime.
         * @member {number|Long|null|undefined} issueTime
         * @memberof VnameCert.BizAccountLinkInfo
         * @instance
         */
        BizAccountLinkInfo.prototype.issueTime = null;

        /**
         * BizAccountLinkInfo hostStorage.
         * @member {VnameCert.BizAccountLinkInfo.HostStorageType|null|undefined} hostStorage
         * @memberof VnameCert.BizAccountLinkInfo
         * @instance
         */
        BizAccountLinkInfo.prototype.hostStorage = null;

        /**
         * BizAccountLinkInfo accountType.
         * @member {VnameCert.BizAccountLinkInfo.AccountType|null|undefined} accountType
         * @memberof VnameCert.BizAccountLinkInfo
         * @instance
         */
        BizAccountLinkInfo.prototype.accountType = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BizAccountLinkInfo.prototype, "_whatsappBizAcctFbid", {
            get: $util.oneOfGetter($oneOfFields = ["whatsappBizAcctFbid"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BizAccountLinkInfo.prototype, "_whatsappAcctNumber", {
            get: $util.oneOfGetter($oneOfFields = ["whatsappAcctNumber"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BizAccountLinkInfo.prototype, "_issueTime", {
            get: $util.oneOfGetter($oneOfFields = ["issueTime"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BizAccountLinkInfo.prototype, "_hostStorage", {
            get: $util.oneOfGetter($oneOfFields = ["hostStorage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BizAccountLinkInfo.prototype, "_accountType", {
            get: $util.oneOfGetter($oneOfFields = ["accountType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BizAccountLinkInfo instance using the specified properties.
         * @function create
         * @memberof VnameCert.BizAccountLinkInfo
         * @static
         * @param {VnameCert.BizAccountLinkInfo.$Properties=} [properties] Properties to set
         * @returns {VnameCert.BizAccountLinkInfo} BizAccountLinkInfo instance
         * @type {{
         *   (properties: VnameCert.BizAccountLinkInfo.$Shape): VnameCert.BizAccountLinkInfo & VnameCert.BizAccountLinkInfo.$Shape;
         *   (properties?: VnameCert.BizAccountLinkInfo.$Properties): VnameCert.BizAccountLinkInfo;
         * }}
         */
        BizAccountLinkInfo.create = function(properties) {
            return new BizAccountLinkInfo(properties);
        };

        /**
         * Encodes the specified BizAccountLinkInfo message. Does not implicitly {@link VnameCert.BizAccountLinkInfo.verify|verify} messages.
         * @function encode
         * @memberof VnameCert.BizAccountLinkInfo
         * @static
         * @param {VnameCert.BizAccountLinkInfo.$Properties} message BizAccountLinkInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BizAccountLinkInfo.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.whatsappBizAcctFbid != null && $Object.hasOwnProperty.call(message, "whatsappBizAcctFbid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.whatsappBizAcctFbid);
            if (message.whatsappAcctNumber != null && $Object.hasOwnProperty.call(message, "whatsappAcctNumber"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.whatsappAcctNumber);
            if (message.issueTime != null && $Object.hasOwnProperty.call(message, "issueTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.issueTime);
            if (message.hostStorage != null && $Object.hasOwnProperty.call(message, "hostStorage"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.hostStorage);
            if (message.accountType != null && $Object.hasOwnProperty.call(message, "accountType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.accountType);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified BizAccountLinkInfo message, length delimited. Does not implicitly {@link VnameCert.BizAccountLinkInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof VnameCert.BizAccountLinkInfo
         * @static
         * @param {VnameCert.BizAccountLinkInfo.$Properties} message BizAccountLinkInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BizAccountLinkInfo.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a BizAccountLinkInfo message from the specified reader or buffer.
         * @function decode
         * @memberof VnameCert.BizAccountLinkInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {VnameCert.BizAccountLinkInfo & VnameCert.BizAccountLinkInfo.$Shape} BizAccountLinkInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BizAccountLinkInfo.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.VnameCert.BizAccountLinkInfo();
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
                        message.whatsappBizAcctFbid = reader.uint64();
                        message._whatsappBizAcctFbid = "whatsappBizAcctFbid";
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.whatsappAcctNumber = reader.stringVerify();
                        message._whatsappAcctNumber = "whatsappAcctNumber";
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        message.issueTime = reader.uint64();
                        message._issueTime = "issueTime";
                        continue;
                    }
                case 4: {
                        if (wireType !== 0)
                            break;
                        message.hostStorage = reader.int32();
                        message._hostStorage = "hostStorage";
                        continue;
                    }
                case 5: {
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
         * Decodes a BizAccountLinkInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof VnameCert.BizAccountLinkInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {VnameCert.BizAccountLinkInfo & VnameCert.BizAccountLinkInfo.$Shape} BizAccountLinkInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BizAccountLinkInfo.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BizAccountLinkInfo message.
         * @function verify
         * @memberof VnameCert.BizAccountLinkInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BizAccountLinkInfo.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.whatsappBizAcctFbid != null && $Object.hasOwnProperty.call(message, "whatsappBizAcctFbid")) {
                properties._whatsappBizAcctFbid = 1;
                if (!$util.isInteger(message.whatsappBizAcctFbid) && !(message.whatsappBizAcctFbid && $util.isInteger(message.whatsappBizAcctFbid.low) && $util.isInteger(message.whatsappBizAcctFbid.high)))
                    return "whatsappBizAcctFbid: integer|Long expected";
            }
            if (message.whatsappAcctNumber != null && $Object.hasOwnProperty.call(message, "whatsappAcctNumber")) {
                properties._whatsappAcctNumber = 1;
                if (!$util.isString(message.whatsappAcctNumber))
                    return "whatsappAcctNumber: string expected";
            }
            if (message.issueTime != null && $Object.hasOwnProperty.call(message, "issueTime")) {
                properties._issueTime = 1;
                if (!$util.isInteger(message.issueTime) && !(message.issueTime && $util.isInteger(message.issueTime.low) && $util.isInteger(message.issueTime.high)))
                    return "issueTime: integer|Long expected";
            }
            if (message.hostStorage != null && $Object.hasOwnProperty.call(message, "hostStorage")) {
                properties._hostStorage = 1;
                switch (message.hostStorage) {
                default:
                    return "hostStorage: enum value expected";
                case 0:
                case 1:
                    break;
                }
            }
            if (message.accountType != null && $Object.hasOwnProperty.call(message, "accountType")) {
                properties._accountType = 1;
                switch (message.accountType) {
                default:
                    return "accountType: enum value expected";
                case 0:
                    break;
                }
            }
            return null;
        };

        /**
         * Creates a BizAccountLinkInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof VnameCert.BizAccountLinkInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {VnameCert.BizAccountLinkInfo} BizAccountLinkInfo
         */
        BizAccountLinkInfo.fromObject = function (object, _depth) {
            if (object instanceof $root.VnameCert.BizAccountLinkInfo)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".VnameCert.BizAccountLinkInfo: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.VnameCert.BizAccountLinkInfo();
            if (object.whatsappBizAcctFbid != null)
                if ($util.Long)
                    message.whatsappBizAcctFbid = $util.Long.fromValue(object.whatsappBizAcctFbid, true);
                else if (typeof object.whatsappBizAcctFbid === "string")
                    message.whatsappBizAcctFbid = $parseInt(object.whatsappBizAcctFbid, 10);
                else if (typeof object.whatsappBizAcctFbid === "number")
                    message.whatsappBizAcctFbid = object.whatsappBizAcctFbid;
                else if (typeof object.whatsappBizAcctFbid === "object")
                    message.whatsappBizAcctFbid = new $util.LongBits(object.whatsappBizAcctFbid.low >>> 0, object.whatsappBizAcctFbid.high >>> 0).toNumber(true);
            if (object.whatsappAcctNumber != null)
                message.whatsappAcctNumber = $String(object.whatsappAcctNumber);
            if (object.issueTime != null)
                if ($util.Long)
                    message.issueTime = $util.Long.fromValue(object.issueTime, true);
                else if (typeof object.issueTime === "string")
                    message.issueTime = $parseInt(object.issueTime, 10);
                else if (typeof object.issueTime === "number")
                    message.issueTime = object.issueTime;
                else if (typeof object.issueTime === "object")
                    message.issueTime = new $util.LongBits(object.issueTime.low >>> 0, object.issueTime.high >>> 0).toNumber(true);
            switch (object.hostStorage) {
            default:
                if (typeof object.hostStorage === "number") {
                    message.hostStorage = object.hostStorage;
                    break;
                }
                break;
            case "ON_PREMISE":
            case 0:
                message.hostStorage = 0;
                break;
            case "FACEBOOK":
            case 1:
                message.hostStorage = 1;
                break;
            }
            switch (object.accountType) {
            default:
                if (typeof object.accountType === "number") {
                    message.accountType = object.accountType;
                    break;
                }
                break;
            case "ENTERPRISE":
            case 0:
                message.accountType = 0;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a BizAccountLinkInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof VnameCert.BizAccountLinkInfo
         * @static
         * @param {VnameCert.BizAccountLinkInfo} message BizAccountLinkInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BizAccountLinkInfo.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.whatsappBizAcctFbid != null && $Object.hasOwnProperty.call(message, "whatsappBizAcctFbid"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.whatsappBizAcctFbid = typeof message.whatsappBizAcctFbid === "number" ? $BigInt(message.whatsappBizAcctFbid) : $util.Long.fromBits(message.whatsappBizAcctFbid.low >>> 0, message.whatsappBizAcctFbid.high >>> 0, true).toBigInt();
                else if (typeof message.whatsappBizAcctFbid === "number")
                    object.whatsappBizAcctFbid = options.longs === $String ? $String(message.whatsappBizAcctFbid) : message.whatsappBizAcctFbid;
                else
                    object.whatsappBizAcctFbid = options.longs === $String ? $util.Long.prototype.toString.call(message.whatsappBizAcctFbid) : options.longs === $Number ? new $util.LongBits(message.whatsappBizAcctFbid.low >>> 0, message.whatsappBizAcctFbid.high >>> 0).toNumber(true) : message.whatsappBizAcctFbid;
            if (message.whatsappAcctNumber != null && $Object.hasOwnProperty.call(message, "whatsappAcctNumber"))
                object.whatsappAcctNumber = message.whatsappAcctNumber;
            if (message.issueTime != null && $Object.hasOwnProperty.call(message, "issueTime"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.issueTime = typeof message.issueTime === "number" ? $BigInt(message.issueTime) : $util.Long.fromBits(message.issueTime.low >>> 0, message.issueTime.high >>> 0, true).toBigInt();
                else if (typeof message.issueTime === "number")
                    object.issueTime = options.longs === $String ? $String(message.issueTime) : message.issueTime;
                else
                    object.issueTime = options.longs === $String ? $util.Long.prototype.toString.call(message.issueTime) : options.longs === $Number ? new $util.LongBits(message.issueTime.low >>> 0, message.issueTime.high >>> 0).toNumber(true) : message.issueTime;
            if (message.hostStorage != null && $Object.hasOwnProperty.call(message, "hostStorage"))
                object.hostStorage = options.enums === $String ? $root.VnameCert.BizAccountLinkInfo.HostStorageType[message.hostStorage] === $undefined ? message.hostStorage : $root.VnameCert.BizAccountLinkInfo.HostStorageType[message.hostStorage] : message.hostStorage;
            if (message.accountType != null && $Object.hasOwnProperty.call(message, "accountType"))
                object.accountType = options.enums === $String ? $root.VnameCert.BizAccountLinkInfo.AccountType[message.accountType] === $undefined ? message.accountType : $root.VnameCert.BizAccountLinkInfo.AccountType[message.accountType] : message.accountType;
            return object;
        };

        /**
         * Converts this BizAccountLinkInfo to JSON.
         * @function toJSON
         * @memberof VnameCert.BizAccountLinkInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BizAccountLinkInfo.prototype.toJSON = function() {
            return BizAccountLinkInfo.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for BizAccountLinkInfo
         * @function getTypeUrl
         * @memberof VnameCert.BizAccountLinkInfo
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        BizAccountLinkInfo.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/VnameCert.BizAccountLinkInfo";
        };

        /**
         * AccountType enum.
         * @name VnameCert.BizAccountLinkInfo.AccountType
         * @enum {number}
         * @property {number} ENTERPRISE=0 ENTERPRISE value
         */
        BizAccountLinkInfo.AccountType = (function() {
            var valuesById = {}, values = $Object.create(valuesById);
            values[valuesById[0] = "ENTERPRISE"] = 0;
            return values;
        })();

        /**
         * HostStorageType enum.
         * @name VnameCert.BizAccountLinkInfo.HostStorageType
         * @enum {number}
         * @property {number} ON_PREMISE=0 ON_PREMISE value
         * @property {number} FACEBOOK=1 FACEBOOK value
         */
        BizAccountLinkInfo.HostStorageType = (function() {
            var valuesById = {}, values = $Object.create(valuesById);
            values[valuesById[0] = "ON_PREMISE"] = 0;
            values[valuesById[1] = "FACEBOOK"] = 1;
            return values;
        })();

        return BizAccountLinkInfo;
    })();

    VnameCert.BizAccountPayload = (function() {

        /**
         * Properties of a BizAccountPayload.
         * @typedef {Object} VnameCert.BizAccountPayload.$Properties
         * @property {VnameCert.VerifiedNameCertificate.$Properties|null} [vnameCert] BizAccountPayload vnameCert
         * @property {Uint8Array|null} [bizAcctLinkInfo] BizAccountPayload bizAcctLinkInfo
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a BizAccountPayload.
         * @memberof VnameCert
         * @interface IBizAccountPayload
         * @augments VnameCert.BizAccountPayload.$Properties
         * @deprecated Use VnameCert.BizAccountPayload.$Properties instead.
         */

        /**
         * Shape of a BizAccountPayload.
         * @typedef {VnameCert.BizAccountPayload.$Properties} VnameCert.BizAccountPayload.$Shape
         */

        /**
         * Constructs a new BizAccountPayload.
         * @memberof VnameCert
         * @classdesc Represents a BizAccountPayload.
         * @constructor
         * @param {VnameCert.BizAccountPayload.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var BizAccountPayload = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * BizAccountPayload vnameCert.
         * @member {VnameCert.VerifiedNameCertificate.$Properties|null|undefined} vnameCert
         * @memberof VnameCert.BizAccountPayload
         * @instance
         */
        BizAccountPayload.prototype.vnameCert = null;

        /**
         * BizAccountPayload bizAcctLinkInfo.
         * @member {Uint8Array|null|undefined} bizAcctLinkInfo
         * @memberof VnameCert.BizAccountPayload
         * @instance
         */
        BizAccountPayload.prototype.bizAcctLinkInfo = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BizAccountPayload.prototype, "_vnameCert", {
            get: $util.oneOfGetter($oneOfFields = ["vnameCert"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(BizAccountPayload.prototype, "_bizAcctLinkInfo", {
            get: $util.oneOfGetter($oneOfFields = ["bizAcctLinkInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BizAccountPayload instance using the specified properties.
         * @function create
         * @memberof VnameCert.BizAccountPayload
         * @static
         * @param {VnameCert.BizAccountPayload.$Properties=} [properties] Properties to set
         * @returns {VnameCert.BizAccountPayload} BizAccountPayload instance
         * @type {{
         *   (properties: VnameCert.BizAccountPayload.$Shape): VnameCert.BizAccountPayload & VnameCert.BizAccountPayload.$Shape;
         *   (properties?: VnameCert.BizAccountPayload.$Properties): VnameCert.BizAccountPayload;
         * }}
         */
        BizAccountPayload.create = function(properties) {
            return new BizAccountPayload(properties);
        };

        /**
         * Encodes the specified BizAccountPayload message. Does not implicitly {@link VnameCert.BizAccountPayload.verify|verify} messages.
         * @function encode
         * @memberof VnameCert.BizAccountPayload
         * @static
         * @param {VnameCert.BizAccountPayload.$Properties} message BizAccountPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BizAccountPayload.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.vnameCert != null && $Object.hasOwnProperty.call(message, "vnameCert"))
                $root.VnameCert.VerifiedNameCertificate.encode(message.vnameCert, writer.uint32(/* id 1, wireType 2 =*/10).fork(), _depth + 1).ldelim();
            if (message.bizAcctLinkInfo != null && $Object.hasOwnProperty.call(message, "bizAcctLinkInfo"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.bizAcctLinkInfo);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified BizAccountPayload message, length delimited. Does not implicitly {@link VnameCert.BizAccountPayload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof VnameCert.BizAccountPayload
         * @static
         * @param {VnameCert.BizAccountPayload.$Properties} message BizAccountPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BizAccountPayload.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a BizAccountPayload message from the specified reader or buffer.
         * @function decode
         * @memberof VnameCert.BizAccountPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {VnameCert.BizAccountPayload & VnameCert.BizAccountPayload.$Shape} BizAccountPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BizAccountPayload.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.VnameCert.BizAccountPayload();
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
                        message.vnameCert = $root.VnameCert.VerifiedNameCertificate.decode(reader, reader.uint32(), $undefined, _depth + 1, message.vnameCert);
                        message._vnameCert = "vnameCert";
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.bizAcctLinkInfo = reader.bytes();
                        message._bizAcctLinkInfo = "bizAcctLinkInfo";
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
         * Decodes a BizAccountPayload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof VnameCert.BizAccountPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {VnameCert.BizAccountPayload & VnameCert.BizAccountPayload.$Shape} BizAccountPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BizAccountPayload.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BizAccountPayload message.
         * @function verify
         * @memberof VnameCert.BizAccountPayload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BizAccountPayload.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.vnameCert != null && $Object.hasOwnProperty.call(message, "vnameCert")) {
                properties._vnameCert = 1;
                {
                    var error = $root.VnameCert.VerifiedNameCertificate.verify(message.vnameCert, _depth + 1);
                    if (error)
                        return "vnameCert." + error;
                }
            }
            if (message.bizAcctLinkInfo != null && $Object.hasOwnProperty.call(message, "bizAcctLinkInfo")) {
                properties._bizAcctLinkInfo = 1;
                if (!(message.bizAcctLinkInfo && typeof message.bizAcctLinkInfo.length === "number" || $util.isString(message.bizAcctLinkInfo)))
                    return "bizAcctLinkInfo: buffer expected";
            }
            return null;
        };

        /**
         * Creates a BizAccountPayload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof VnameCert.BizAccountPayload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {VnameCert.BizAccountPayload} BizAccountPayload
         */
        BizAccountPayload.fromObject = function (object, _depth) {
            if (object instanceof $root.VnameCert.BizAccountPayload)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".VnameCert.BizAccountPayload: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.VnameCert.BizAccountPayload();
            if (object.vnameCert != null) {
                if (!$util.isObject(object.vnameCert))
                    throw $TypeError(".VnameCert.BizAccountPayload.vnameCert: object expected");
                message.vnameCert = $root.VnameCert.VerifiedNameCertificate.fromObject(object.vnameCert, _depth + 1);
            }
            if (object.bizAcctLinkInfo != null)
                if (typeof object.bizAcctLinkInfo === "string")
                    $util.base64.decode(object.bizAcctLinkInfo, message.bizAcctLinkInfo = $util.newBuffer($util.base64.length(object.bizAcctLinkInfo)), 0);
                else if (object.bizAcctLinkInfo.length >= 0)
                    message.bizAcctLinkInfo = object.bizAcctLinkInfo;
            return message;
        };

        /**
         * Creates a plain object from a BizAccountPayload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof VnameCert.BizAccountPayload
         * @static
         * @param {VnameCert.BizAccountPayload} message BizAccountPayload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BizAccountPayload.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.vnameCert != null && $Object.hasOwnProperty.call(message, "vnameCert"))
                object.vnameCert = $root.VnameCert.VerifiedNameCertificate.toObject(message.vnameCert, options, _depth + 1);
            if (message.bizAcctLinkInfo != null && $Object.hasOwnProperty.call(message, "bizAcctLinkInfo"))
                object.bizAcctLinkInfo = options.bytes === $String ? $util.base64.encode(message.bizAcctLinkInfo, 0, message.bizAcctLinkInfo.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.bizAcctLinkInfo) : message.bizAcctLinkInfo;
            return object;
        };

        /**
         * Converts this BizAccountPayload to JSON.
         * @function toJSON
         * @memberof VnameCert.BizAccountPayload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BizAccountPayload.prototype.toJSON = function() {
            return BizAccountPayload.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for BizAccountPayload
         * @function getTypeUrl
         * @memberof VnameCert.BizAccountPayload
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        BizAccountPayload.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/VnameCert.BizAccountPayload";
        };

        return BizAccountPayload;
    })();

    VnameCert.VerifiedNameCertificate = (function() {

        /**
         * Properties of a VerifiedNameCertificate.
         * @typedef {Object} VnameCert.VerifiedNameCertificate.$Properties
         * @property {Uint8Array|null} [details] VerifiedNameCertificate details
         * @property {Uint8Array|null} [signature] VerifiedNameCertificate signature
         * @property {Uint8Array|null} [serverSignature] VerifiedNameCertificate serverSignature
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a VerifiedNameCertificate.
         * @memberof VnameCert
         * @interface IVerifiedNameCertificate
         * @augments VnameCert.VerifiedNameCertificate.$Properties
         * @deprecated Use VnameCert.VerifiedNameCertificate.$Properties instead.
         */

        /**
         * Shape of a VerifiedNameCertificate.
         * @typedef {VnameCert.VerifiedNameCertificate.$Properties} VnameCert.VerifiedNameCertificate.$Shape
         */

        /**
         * Constructs a new VerifiedNameCertificate.
         * @memberof VnameCert
         * @classdesc Represents a VerifiedNameCertificate.
         * @constructor
         * @param {VnameCert.VerifiedNameCertificate.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var VerifiedNameCertificate = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * VerifiedNameCertificate details.
         * @member {Uint8Array|null|undefined} details
         * @memberof VnameCert.VerifiedNameCertificate
         * @instance
         */
        VerifiedNameCertificate.prototype.details = null;

        /**
         * VerifiedNameCertificate signature.
         * @member {Uint8Array|null|undefined} signature
         * @memberof VnameCert.VerifiedNameCertificate
         * @instance
         */
        VerifiedNameCertificate.prototype.signature = null;

        /**
         * VerifiedNameCertificate serverSignature.
         * @member {Uint8Array|null|undefined} serverSignature
         * @memberof VnameCert.VerifiedNameCertificate
         * @instance
         */
        VerifiedNameCertificate.prototype.serverSignature = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(VerifiedNameCertificate.prototype, "_details", {
            get: $util.oneOfGetter($oneOfFields = ["details"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(VerifiedNameCertificate.prototype, "_signature", {
            get: $util.oneOfGetter($oneOfFields = ["signature"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(VerifiedNameCertificate.prototype, "_serverSignature", {
            get: $util.oneOfGetter($oneOfFields = ["serverSignature"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new VerifiedNameCertificate instance using the specified properties.
         * @function create
         * @memberof VnameCert.VerifiedNameCertificate
         * @static
         * @param {VnameCert.VerifiedNameCertificate.$Properties=} [properties] Properties to set
         * @returns {VnameCert.VerifiedNameCertificate} VerifiedNameCertificate instance
         * @type {{
         *   (properties: VnameCert.VerifiedNameCertificate.$Shape): VnameCert.VerifiedNameCertificate & VnameCert.VerifiedNameCertificate.$Shape;
         *   (properties?: VnameCert.VerifiedNameCertificate.$Properties): VnameCert.VerifiedNameCertificate;
         * }}
         */
        VerifiedNameCertificate.create = function(properties) {
            return new VerifiedNameCertificate(properties);
        };

        /**
         * Encodes the specified VerifiedNameCertificate message. Does not implicitly {@link VnameCert.VerifiedNameCertificate.verify|verify} messages.
         * @function encode
         * @memberof VnameCert.VerifiedNameCertificate
         * @static
         * @param {VnameCert.VerifiedNameCertificate.$Properties} message VerifiedNameCertificate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VerifiedNameCertificate.encode = function (message, writer, _depth) {
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
            if (message.serverSignature != null && $Object.hasOwnProperty.call(message, "serverSignature"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.serverSignature);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified VerifiedNameCertificate message, length delimited. Does not implicitly {@link VnameCert.VerifiedNameCertificate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof VnameCert.VerifiedNameCertificate
         * @static
         * @param {VnameCert.VerifiedNameCertificate.$Properties} message VerifiedNameCertificate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VerifiedNameCertificate.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a VerifiedNameCertificate message from the specified reader or buffer.
         * @function decode
         * @memberof VnameCert.VerifiedNameCertificate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {VnameCert.VerifiedNameCertificate & VnameCert.VerifiedNameCertificate.$Shape} VerifiedNameCertificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VerifiedNameCertificate.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.VnameCert.VerifiedNameCertificate();
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
                case 3: {
                        if (wireType !== 2)
                            break;
                        message.serverSignature = reader.bytes();
                        message._serverSignature = "serverSignature";
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
         * Decodes a VerifiedNameCertificate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof VnameCert.VerifiedNameCertificate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {VnameCert.VerifiedNameCertificate & VnameCert.VerifiedNameCertificate.$Shape} VerifiedNameCertificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VerifiedNameCertificate.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VerifiedNameCertificate message.
         * @function verify
         * @memberof VnameCert.VerifiedNameCertificate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VerifiedNameCertificate.verify = function (message, _depth) {
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
            if (message.serverSignature != null && $Object.hasOwnProperty.call(message, "serverSignature")) {
                properties._serverSignature = 1;
                if (!(message.serverSignature && typeof message.serverSignature.length === "number" || $util.isString(message.serverSignature)))
                    return "serverSignature: buffer expected";
            }
            return null;
        };

        /**
         * Creates a VerifiedNameCertificate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof VnameCert.VerifiedNameCertificate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {VnameCert.VerifiedNameCertificate} VerifiedNameCertificate
         */
        VerifiedNameCertificate.fromObject = function (object, _depth) {
            if (object instanceof $root.VnameCert.VerifiedNameCertificate)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".VnameCert.VerifiedNameCertificate: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.VnameCert.VerifiedNameCertificate();
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
            if (object.serverSignature != null)
                if (typeof object.serverSignature === "string")
                    $util.base64.decode(object.serverSignature, message.serverSignature = $util.newBuffer($util.base64.length(object.serverSignature)), 0);
                else if (object.serverSignature.length >= 0)
                    message.serverSignature = object.serverSignature;
            return message;
        };

        /**
         * Creates a plain object from a VerifiedNameCertificate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof VnameCert.VerifiedNameCertificate
         * @static
         * @param {VnameCert.VerifiedNameCertificate} message VerifiedNameCertificate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VerifiedNameCertificate.toObject = function (message, options, _depth) {
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
            if (message.serverSignature != null && $Object.hasOwnProperty.call(message, "serverSignature"))
                object.serverSignature = options.bytes === $String ? $util.base64.encode(message.serverSignature, 0, message.serverSignature.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.serverSignature) : message.serverSignature;
            return object;
        };

        /**
         * Converts this VerifiedNameCertificate to JSON.
         * @function toJSON
         * @memberof VnameCert.VerifiedNameCertificate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VerifiedNameCertificate.prototype.toJSON = function() {
            return VerifiedNameCertificate.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for VerifiedNameCertificate
         * @function getTypeUrl
         * @memberof VnameCert.VerifiedNameCertificate
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        VerifiedNameCertificate.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/VnameCert.VerifiedNameCertificate";
        };

        VerifiedNameCertificate.Details = (function() {

            /**
             * Properties of a Details.
             * @typedef {Object} VnameCert.VerifiedNameCertificate.Details.$Properties
             * @property {number|Long|null} [serial] Details serial
             * @property {string|null} [issuer] Details issuer
             * @property {string|null} [verifiedName] Details verifiedName
             * @property {Array.<VnameCert.LocalizedName.$Properties>|null} [localizedNames] Details localizedNames
             * @property {number|Long|null} [issueTime] Details issueTime
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Details.
             * @memberof VnameCert.VerifiedNameCertificate
             * @interface IDetails
             * @augments VnameCert.VerifiedNameCertificate.Details.$Properties
             * @deprecated Use VnameCert.VerifiedNameCertificate.Details.$Properties instead.
             */

            /**
             * Shape of a Details.
             * @typedef {VnameCert.VerifiedNameCertificate.Details.$Properties} VnameCert.VerifiedNameCertificate.Details.$Shape
             */

            /**
             * Constructs a new Details.
             * @memberof VnameCert.VerifiedNameCertificate
             * @classdesc Represents a Details.
             * @constructor
             * @param {VnameCert.VerifiedNameCertificate.Details.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var Details = function (properties) {
                this.localizedNames = [];
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Details serial.
             * @member {number|Long|null|undefined} serial
             * @memberof VnameCert.VerifiedNameCertificate.Details
             * @instance
             */
            Details.prototype.serial = null;

            /**
             * Details issuer.
             * @member {string|null|undefined} issuer
             * @memberof VnameCert.VerifiedNameCertificate.Details
             * @instance
             */
            Details.prototype.issuer = null;

            /**
             * Details verifiedName.
             * @member {string|null|undefined} verifiedName
             * @memberof VnameCert.VerifiedNameCertificate.Details
             * @instance
             */
            Details.prototype.verifiedName = null;

            /**
             * Details localizedNames.
             * @member {Array.<VnameCert.LocalizedName.$Properties>} localizedNames
             * @memberof VnameCert.VerifiedNameCertificate.Details
             * @instance
             */
            Details.prototype.localizedNames = $util.emptyArray;

            /**
             * Details issueTime.
             * @member {number|Long|null|undefined} issueTime
             * @memberof VnameCert.VerifiedNameCertificate.Details
             * @instance
             */
            Details.prototype.issueTime = null;

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
            $Object.defineProperty(Details.prototype, "_verifiedName", {
                get: $util.oneOfGetter($oneOfFields = ["verifiedName"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Details.prototype, "_issueTime", {
                get: $util.oneOfGetter($oneOfFields = ["issueTime"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Details instance using the specified properties.
             * @function create
             * @memberof VnameCert.VerifiedNameCertificate.Details
             * @static
             * @param {VnameCert.VerifiedNameCertificate.Details.$Properties=} [properties] Properties to set
             * @returns {VnameCert.VerifiedNameCertificate.Details} Details instance
             * @type {{
             *   (properties: VnameCert.VerifiedNameCertificate.Details.$Shape): VnameCert.VerifiedNameCertificate.Details & VnameCert.VerifiedNameCertificate.Details.$Shape;
             *   (properties?: VnameCert.VerifiedNameCertificate.Details.$Properties): VnameCert.VerifiedNameCertificate.Details;
             * }}
             */
            Details.create = function(properties) {
                return new Details(properties);
            };

            /**
             * Encodes the specified Details message. Does not implicitly {@link VnameCert.VerifiedNameCertificate.Details.verify|verify} messages.
             * @function encode
             * @memberof VnameCert.VerifiedNameCertificate.Details
             * @static
             * @param {VnameCert.VerifiedNameCertificate.Details.$Properties} message Details message or plain object to encode
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
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.serial);
                if (message.issuer != null && $Object.hasOwnProperty.call(message, "issuer"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.issuer);
                if (message.verifiedName != null && $Object.hasOwnProperty.call(message, "verifiedName"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.verifiedName);
                if (message.localizedNames != null && message.localizedNames.length)
                    for (var i = 0; i < message.localizedNames.length; ++i)
                        $root.VnameCert.LocalizedName.encode(message.localizedNames[i], writer.uint32(/* id 8, wireType 2 =*/66).fork(), _depth + 1).ldelim();
                if (message.issueTime != null && $Object.hasOwnProperty.call(message, "issueTime"))
                    writer.uint32(/* id 10, wireType 0 =*/80).uint64(message.issueTime);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Details message, length delimited. Does not implicitly {@link VnameCert.VerifiedNameCertificate.Details.verify|verify} messages.
             * @function encodeDelimited
             * @memberof VnameCert.VerifiedNameCertificate.Details
             * @static
             * @param {VnameCert.VerifiedNameCertificate.Details.$Properties} message Details message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Details.encodeDelimited = function(message, writer) {
                return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
            };

            /**
             * Decodes a Details message from the specified reader or buffer.
             * @function decode
             * @memberof VnameCert.VerifiedNameCertificate.Details
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {VnameCert.VerifiedNameCertificate.Details & VnameCert.VerifiedNameCertificate.Details.$Shape} Details
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
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.VnameCert.VerifiedNameCertificate.Details();
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
                            message.serial = reader.uint64();
                            message._serial = "serial";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.issuer = reader.stringVerify();
                            message._issuer = "issuer";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            message.verifiedName = reader.stringVerify();
                            message._verifiedName = "verifiedName";
                            continue;
                        }
                    case 8: {
                            if (wireType !== 2)
                                break;
                            if (!(message.localizedNames && message.localizedNames.length))
                                message.localizedNames = [];
                            message.localizedNames.push($root.VnameCert.LocalizedName.decode(reader, reader.uint32(), $undefined, _depth + 1));
                            continue;
                        }
                    case 10: {
                            if (wireType !== 0)
                                break;
                            message.issueTime = reader.uint64();
                            message._issueTime = "issueTime";
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
             * @memberof VnameCert.VerifiedNameCertificate.Details
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {VnameCert.VerifiedNameCertificate.Details & VnameCert.VerifiedNameCertificate.Details.$Shape} Details
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
             * @memberof VnameCert.VerifiedNameCertificate.Details
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
                    if (!$util.isInteger(message.serial) && !(message.serial && $util.isInteger(message.serial.low) && $util.isInteger(message.serial.high)))
                        return "serial: integer|Long expected";
                }
                if (message.issuer != null && $Object.hasOwnProperty.call(message, "issuer")) {
                    properties._issuer = 1;
                    if (!$util.isString(message.issuer))
                        return "issuer: string expected";
                }
                if (message.verifiedName != null && $Object.hasOwnProperty.call(message, "verifiedName")) {
                    properties._verifiedName = 1;
                    if (!$util.isString(message.verifiedName))
                        return "verifiedName: string expected";
                }
                if (message.localizedNames != null && $Object.hasOwnProperty.call(message, "localizedNames")) {
                    if (!$Array.isArray(message.localizedNames))
                        return "localizedNames: array expected";
                    for (var i = 0; i < message.localizedNames.length; ++i) {
                        var error = $root.VnameCert.LocalizedName.verify(message.localizedNames[i], _depth + 1);
                        if (error)
                            return "localizedNames." + error;
                    }
                }
                if (message.issueTime != null && $Object.hasOwnProperty.call(message, "issueTime")) {
                    properties._issueTime = 1;
                    if (!$util.isInteger(message.issueTime) && !(message.issueTime && $util.isInteger(message.issueTime.low) && $util.isInteger(message.issueTime.high)))
                        return "issueTime: integer|Long expected";
                }
                return null;
            };

            /**
             * Creates a Details message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof VnameCert.VerifiedNameCertificate.Details
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {VnameCert.VerifiedNameCertificate.Details} Details
             */
            Details.fromObject = function (object, _depth) {
                if (object instanceof $root.VnameCert.VerifiedNameCertificate.Details)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".VnameCert.VerifiedNameCertificate.Details: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.VnameCert.VerifiedNameCertificate.Details();
                if (object.serial != null)
                    if ($util.Long)
                        message.serial = $util.Long.fromValue(object.serial, true);
                    else if (typeof object.serial === "string")
                        message.serial = $parseInt(object.serial, 10);
                    else if (typeof object.serial === "number")
                        message.serial = object.serial;
                    else if (typeof object.serial === "object")
                        message.serial = new $util.LongBits(object.serial.low >>> 0, object.serial.high >>> 0).toNumber(true);
                if (object.issuer != null)
                    message.issuer = $String(object.issuer);
                if (object.verifiedName != null)
                    message.verifiedName = $String(object.verifiedName);
                if (object.localizedNames) {
                    if (!$Array.isArray(object.localizedNames))
                        throw $TypeError(".VnameCert.VerifiedNameCertificate.Details.localizedNames: array expected");
                    message.localizedNames = $Array(object.localizedNames.length);
                    for (var i = 0; i < object.localizedNames.length; ++i) {
                        if (!$util.isObject(object.localizedNames[i]))
                            throw $TypeError(".VnameCert.VerifiedNameCertificate.Details.localizedNames: object expected");
                        message.localizedNames[i] = $root.VnameCert.LocalizedName.fromObject(object.localizedNames[i], _depth + 1);
                    }
                }
                if (object.issueTime != null)
                    if ($util.Long)
                        message.issueTime = $util.Long.fromValue(object.issueTime, true);
                    else if (typeof object.issueTime === "string")
                        message.issueTime = $parseInt(object.issueTime, 10);
                    else if (typeof object.issueTime === "number")
                        message.issueTime = object.issueTime;
                    else if (typeof object.issueTime === "object")
                        message.issueTime = new $util.LongBits(object.issueTime.low >>> 0, object.issueTime.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a Details message. Also converts values to other types if specified.
             * @function toObject
             * @memberof VnameCert.VerifiedNameCertificate.Details
             * @static
             * @param {VnameCert.VerifiedNameCertificate.Details} message Details
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
                if (options.arrays || options.defaults)
                    object.localizedNames = [];
                if (message.serial != null && $Object.hasOwnProperty.call(message, "serial"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.serial = typeof message.serial === "number" ? $BigInt(message.serial) : $util.Long.fromBits(message.serial.low >>> 0, message.serial.high >>> 0, true).toBigInt();
                    else if (typeof message.serial === "number")
                        object.serial = options.longs === $String ? $String(message.serial) : message.serial;
                    else
                        object.serial = options.longs === $String ? $util.Long.prototype.toString.call(message.serial) : options.longs === $Number ? new $util.LongBits(message.serial.low >>> 0, message.serial.high >>> 0).toNumber(true) : message.serial;
                if (message.issuer != null && $Object.hasOwnProperty.call(message, "issuer"))
                    object.issuer = message.issuer;
                if (message.verifiedName != null && $Object.hasOwnProperty.call(message, "verifiedName"))
                    object.verifiedName = message.verifiedName;
                if (message.localizedNames && message.localizedNames.length) {
                    object.localizedNames = $Array(message.localizedNames.length);
                    for (var j = 0; j < message.localizedNames.length; ++j)
                        object.localizedNames[j] = $root.VnameCert.LocalizedName.toObject(message.localizedNames[j], options, _depth + 1);
                }
                if (message.issueTime != null && $Object.hasOwnProperty.call(message, "issueTime"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.issueTime = typeof message.issueTime === "number" ? $BigInt(message.issueTime) : $util.Long.fromBits(message.issueTime.low >>> 0, message.issueTime.high >>> 0, true).toBigInt();
                    else if (typeof message.issueTime === "number")
                        object.issueTime = options.longs === $String ? $String(message.issueTime) : message.issueTime;
                    else
                        object.issueTime = options.longs === $String ? $util.Long.prototype.toString.call(message.issueTime) : options.longs === $Number ? new $util.LongBits(message.issueTime.low >>> 0, message.issueTime.high >>> 0).toNumber(true) : message.issueTime;
                return object;
            };

            /**
             * Converts this Details to JSON.
             * @function toJSON
             * @memberof VnameCert.VerifiedNameCertificate.Details
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Details.prototype.toJSON = function() {
                return Details.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Details
             * @function getTypeUrl
             * @memberof VnameCert.VerifiedNameCertificate.Details
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Details.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/VnameCert.VerifiedNameCertificate.Details";
            };

            return Details;
        })();

        return VerifiedNameCertificate;
    })();

    VnameCert.LocalizedName = (function() {

        /**
         * Properties of a LocalizedName.
         * @typedef {Object} VnameCert.LocalizedName.$Properties
         * @property {string|null} [lg] LocalizedName lg
         * @property {string|null} [lc] LocalizedName lc
         * @property {string|null} [verifiedName] LocalizedName verifiedName
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a LocalizedName.
         * @memberof VnameCert
         * @interface ILocalizedName
         * @augments VnameCert.LocalizedName.$Properties
         * @deprecated Use VnameCert.LocalizedName.$Properties instead.
         */

        /**
         * Shape of a LocalizedName.
         * @typedef {VnameCert.LocalizedName.$Properties} VnameCert.LocalizedName.$Shape
         */

        /**
         * Constructs a new LocalizedName.
         * @memberof VnameCert
         * @classdesc Represents a LocalizedName.
         * @constructor
         * @param {VnameCert.LocalizedName.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var LocalizedName = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * LocalizedName lg.
         * @member {string|null|undefined} lg
         * @memberof VnameCert.LocalizedName
         * @instance
         */
        LocalizedName.prototype.lg = null;

        /**
         * LocalizedName lc.
         * @member {string|null|undefined} lc
         * @memberof VnameCert.LocalizedName
         * @instance
         */
        LocalizedName.prototype.lc = null;

        /**
         * LocalizedName verifiedName.
         * @member {string|null|undefined} verifiedName
         * @memberof VnameCert.LocalizedName
         * @instance
         */
        LocalizedName.prototype.verifiedName = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(LocalizedName.prototype, "_lg", {
            get: $util.oneOfGetter($oneOfFields = ["lg"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(LocalizedName.prototype, "_lc", {
            get: $util.oneOfGetter($oneOfFields = ["lc"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(LocalizedName.prototype, "_verifiedName", {
            get: $util.oneOfGetter($oneOfFields = ["verifiedName"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new LocalizedName instance using the specified properties.
         * @function create
         * @memberof VnameCert.LocalizedName
         * @static
         * @param {VnameCert.LocalizedName.$Properties=} [properties] Properties to set
         * @returns {VnameCert.LocalizedName} LocalizedName instance
         * @type {{
         *   (properties: VnameCert.LocalizedName.$Shape): VnameCert.LocalizedName & VnameCert.LocalizedName.$Shape;
         *   (properties?: VnameCert.LocalizedName.$Properties): VnameCert.LocalizedName;
         * }}
         */
        LocalizedName.create = function(properties) {
            return new LocalizedName(properties);
        };

        /**
         * Encodes the specified LocalizedName message. Does not implicitly {@link VnameCert.LocalizedName.verify|verify} messages.
         * @function encode
         * @memberof VnameCert.LocalizedName
         * @static
         * @param {VnameCert.LocalizedName.$Properties} message LocalizedName message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LocalizedName.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.lg != null && $Object.hasOwnProperty.call(message, "lg"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.lg);
            if (message.lc != null && $Object.hasOwnProperty.call(message, "lc"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.lc);
            if (message.verifiedName != null && $Object.hasOwnProperty.call(message, "verifiedName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.verifiedName);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified LocalizedName message, length delimited. Does not implicitly {@link VnameCert.LocalizedName.verify|verify} messages.
         * @function encodeDelimited
         * @memberof VnameCert.LocalizedName
         * @static
         * @param {VnameCert.LocalizedName.$Properties} message LocalizedName message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LocalizedName.encodeDelimited = function(message, writer) {
            return this.encode(message, writer && writer.len ? writer.fork() : writer).ldelim();
        };

        /**
         * Decodes a LocalizedName message from the specified reader or buffer.
         * @function decode
         * @memberof VnameCert.LocalizedName
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {VnameCert.LocalizedName & VnameCert.LocalizedName.$Shape} LocalizedName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LocalizedName.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.VnameCert.LocalizedName();
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
                        message.lg = reader.stringVerify();
                        message._lg = "lg";
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.lc = reader.stringVerify();
                        message._lc = "lc";
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        message.verifiedName = reader.stringVerify();
                        message._verifiedName = "verifiedName";
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
         * Decodes a LocalizedName message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof VnameCert.LocalizedName
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {VnameCert.LocalizedName & VnameCert.LocalizedName.$Shape} LocalizedName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LocalizedName.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LocalizedName message.
         * @function verify
         * @memberof VnameCert.LocalizedName
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LocalizedName.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.lg != null && $Object.hasOwnProperty.call(message, "lg")) {
                properties._lg = 1;
                if (!$util.isString(message.lg))
                    return "lg: string expected";
            }
            if (message.lc != null && $Object.hasOwnProperty.call(message, "lc")) {
                properties._lc = 1;
                if (!$util.isString(message.lc))
                    return "lc: string expected";
            }
            if (message.verifiedName != null && $Object.hasOwnProperty.call(message, "verifiedName")) {
                properties._verifiedName = 1;
                if (!$util.isString(message.verifiedName))
                    return "verifiedName: string expected";
            }
            return null;
        };

        /**
         * Creates a LocalizedName message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof VnameCert.LocalizedName
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {VnameCert.LocalizedName} LocalizedName
         */
        LocalizedName.fromObject = function (object, _depth) {
            if (object instanceof $root.VnameCert.LocalizedName)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".VnameCert.LocalizedName: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.VnameCert.LocalizedName();
            if (object.lg != null)
                message.lg = $String(object.lg);
            if (object.lc != null)
                message.lc = $String(object.lc);
            if (object.verifiedName != null)
                message.verifiedName = $String(object.verifiedName);
            return message;
        };

        /**
         * Creates a plain object from a LocalizedName message. Also converts values to other types if specified.
         * @function toObject
         * @memberof VnameCert.LocalizedName
         * @static
         * @param {VnameCert.LocalizedName} message LocalizedName
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LocalizedName.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.lg != null && $Object.hasOwnProperty.call(message, "lg"))
                object.lg = message.lg;
            if (message.lc != null && $Object.hasOwnProperty.call(message, "lc"))
                object.lc = message.lc;
            if (message.verifiedName != null && $Object.hasOwnProperty.call(message, "verifiedName"))
                object.verifiedName = message.verifiedName;
            return object;
        };

        /**
         * Converts this LocalizedName to JSON.
         * @function toJSON
         * @memberof VnameCert.LocalizedName
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LocalizedName.prototype.toJSON = function() {
            return LocalizedName.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for LocalizedName
         * @function getTypeUrl
         * @memberof VnameCert.LocalizedName
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        LocalizedName.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/VnameCert.LocalizedName";
        };

        return LocalizedName;
    })();

    return VnameCert;
})();

module.exports = $root;
