/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
var $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $TypeError = $util.global.TypeError, $String = $util.global.String, $Boolean = $util.global.Boolean;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.StatusAttributions = (function() {

    /**
     * Namespace StatusAttributions.
     * @exports StatusAttributions
     * @namespace
     */
    var StatusAttributions = {};

    StatusAttributions.StatusAttribution = (function() {

        /**
         * Properties of a StatusAttribution.
         * @typedef {Object} StatusAttributions.StatusAttribution.$Properties
         * @property {StatusAttributions.StatusAttribution.Type|null} [type] StatusAttribution type
         * @property {string|null} [actionUrl] StatusAttribution actionUrl
         * @property {StatusAttributions.StatusAttribution.StatusReshare.$Properties|null} [statusReshare] StatusAttribution statusReshare
         * @property {StatusAttributions.StatusAttribution.ExternalShare.$Properties|null} [externalShare] StatusAttribution externalShare
         * @property {StatusAttributions.StatusAttribution.Music.$Properties|null} [music] StatusAttribution music
         * @property {StatusAttributions.StatusAttribution.GroupStatus.$Properties|null} [groupStatus] StatusAttribution groupStatus
         * @property {StatusAttributions.StatusAttribution.RLAttribution.$Properties|null} [rlAttribution] StatusAttribution rlAttribution
         * @property {StatusAttributions.StatusAttribution.AiCreatedAttribution.$Properties|null} [aiCreatedAttribution] StatusAttribution aiCreatedAttribution
         * @property {"statusReshare"|"externalShare"|"music"|"groupStatus"|"rlAttribution"|"aiCreatedAttribution"} [attributionData] StatusAttribution attributionData
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a StatusAttribution.
         * @memberof StatusAttributions
         * @interface IStatusAttribution
         * @augments StatusAttributions.StatusAttribution.$Properties
         * @deprecated Use StatusAttributions.StatusAttribution.$Properties instead.
         */

        /**
         * Narrowed shape of a StatusAttribution.
         * @typedef {{
         *   type?: StatusAttributions.StatusAttribution.Type|null;
         *   actionUrl?: string|null;
         *   statusReshare?: StatusAttributions.StatusAttribution.StatusReshare.$Shape|null;
         *   externalShare?: StatusAttributions.StatusAttribution.ExternalShare.$Shape|null;
         *   music?: StatusAttributions.StatusAttribution.Music.$Shape|null;
         *   groupStatus?: StatusAttributions.StatusAttribution.GroupStatus.$Shape|null;
         *   rlAttribution?: StatusAttributions.StatusAttribution.RLAttribution.$Shape|null;
         *   aiCreatedAttribution?: StatusAttributions.StatusAttribution.AiCreatedAttribution.$Shape|null;
         *   $unknowns?: Array.<Uint8Array>;
         * } & (
         *   ({ attributionData?: undefined; statusReshare?: null; externalShare?: null; music?: null; groupStatus?: null; rlAttribution?: null; aiCreatedAttribution?: null }|{ attributionData?: "statusReshare"; statusReshare: StatusAttributions.StatusAttribution.StatusReshare.$Shape; externalShare?: null; music?: null; groupStatus?: null; rlAttribution?: null; aiCreatedAttribution?: null }|{ attributionData?: "externalShare"; statusReshare?: null; externalShare: StatusAttributions.StatusAttribution.ExternalShare.$Shape; music?: null; groupStatus?: null; rlAttribution?: null; aiCreatedAttribution?: null }|{ attributionData?: "music"; statusReshare?: null; externalShare?: null; music: StatusAttributions.StatusAttribution.Music.$Shape; groupStatus?: null; rlAttribution?: null; aiCreatedAttribution?: null }|{ attributionData?: "groupStatus"; statusReshare?: null; externalShare?: null; music?: null; groupStatus: StatusAttributions.StatusAttribution.GroupStatus.$Shape; rlAttribution?: null; aiCreatedAttribution?: null }|{ attributionData?: "rlAttribution"; statusReshare?: null; externalShare?: null; music?: null; groupStatus?: null; rlAttribution: StatusAttributions.StatusAttribution.RLAttribution.$Shape; aiCreatedAttribution?: null }|{ attributionData?: "aiCreatedAttribution"; statusReshare?: null; externalShare?: null; music?: null; groupStatus?: null; rlAttribution?: null; aiCreatedAttribution: StatusAttributions.StatusAttribution.AiCreatedAttribution.$Shape })
         * )} StatusAttributions.StatusAttribution.$Shape
         */

        /**
         * Constructs a new StatusAttribution.
         * @memberof StatusAttributions
         * @classdesc Represents a StatusAttribution.
         * @constructor
         * @param {StatusAttributions.StatusAttribution.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var StatusAttribution = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * StatusAttribution type.
         * @member {StatusAttributions.StatusAttribution.Type|null|undefined} type
         * @memberof StatusAttributions.StatusAttribution
         * @instance
         */
        StatusAttribution.prototype.type = null;

        /**
         * StatusAttribution actionUrl.
         * @member {string|null|undefined} actionUrl
         * @memberof StatusAttributions.StatusAttribution
         * @instance
         */
        StatusAttribution.prototype.actionUrl = null;

        /**
         * StatusAttribution statusReshare.
         * @member {StatusAttributions.StatusAttribution.StatusReshare.$Properties|null|undefined} statusReshare
         * @memberof StatusAttributions.StatusAttribution
         * @instance
         */
        StatusAttribution.prototype.statusReshare = null;

        /**
         * StatusAttribution externalShare.
         * @member {StatusAttributions.StatusAttribution.ExternalShare.$Properties|null|undefined} externalShare
         * @memberof StatusAttributions.StatusAttribution
         * @instance
         */
        StatusAttribution.prototype.externalShare = null;

        /**
         * StatusAttribution music.
         * @member {StatusAttributions.StatusAttribution.Music.$Properties|null|undefined} music
         * @memberof StatusAttributions.StatusAttribution
         * @instance
         */
        StatusAttribution.prototype.music = null;

        /**
         * StatusAttribution groupStatus.
         * @member {StatusAttributions.StatusAttribution.GroupStatus.$Properties|null|undefined} groupStatus
         * @memberof StatusAttributions.StatusAttribution
         * @instance
         */
        StatusAttribution.prototype.groupStatus = null;

        /**
         * StatusAttribution rlAttribution.
         * @member {StatusAttributions.StatusAttribution.RLAttribution.$Properties|null|undefined} rlAttribution
         * @memberof StatusAttributions.StatusAttribution
         * @instance
         */
        StatusAttribution.prototype.rlAttribution = null;

        /**
         * StatusAttribution aiCreatedAttribution.
         * @member {StatusAttributions.StatusAttribution.AiCreatedAttribution.$Properties|null|undefined} aiCreatedAttribution
         * @memberof StatusAttributions.StatusAttribution
         * @instance
         */
        StatusAttribution.prototype.aiCreatedAttribution = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(StatusAttribution.prototype, "_type", {
            get: $util.oneOfGetter($oneOfFields = ["type"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(StatusAttribution.prototype, "_actionUrl", {
            get: $util.oneOfGetter($oneOfFields = ["actionUrl"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * StatusAttribution attributionData.
         * @member {"statusReshare"|"externalShare"|"music"|"groupStatus"|"rlAttribution"|"aiCreatedAttribution"|undefined} attributionData
         * @memberof StatusAttributions.StatusAttribution
         * @instance
         */
        $Object.defineProperty(StatusAttribution.prototype, "attributionData", {
            get: $util.oneOfGetter($oneOfFields = ["statusReshare", "externalShare", "music", "groupStatus", "rlAttribution", "aiCreatedAttribution"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new StatusAttribution instance using the specified properties.
         * @function create
         * @memberof StatusAttributions.StatusAttribution
         * @static
         * @param {StatusAttributions.StatusAttribution.$Properties=} [properties] Properties to set
         * @returns {StatusAttributions.StatusAttribution} StatusAttribution instance
         * @type {{
         *   (properties: StatusAttributions.StatusAttribution.$Shape): StatusAttributions.StatusAttribution & StatusAttributions.StatusAttribution.$Shape;
         *   (properties?: StatusAttributions.StatusAttribution.$Properties): StatusAttributions.StatusAttribution;
         * }}
         */
        StatusAttribution.create = function(properties) {
            return new StatusAttribution(properties);
        };

        /**
         * Encodes the specified StatusAttribution message. Does not implicitly {@link StatusAttributions.StatusAttribution.verify|verify} messages.
         * @function encode
         * @memberof StatusAttributions.StatusAttribution
         * @static
         * @param {StatusAttributions.StatusAttribution.$Properties} message StatusAttribution message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StatusAttribution.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.actionUrl != null && $Object.hasOwnProperty.call(message, "actionUrl"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.actionUrl);
            if (message.statusReshare != null && $Object.hasOwnProperty.call(message, "statusReshare"))
                $root.StatusAttributions.StatusAttribution.StatusReshare.encode(message.statusReshare, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
            if (message.externalShare != null && $Object.hasOwnProperty.call(message, "externalShare"))
                $root.StatusAttributions.StatusAttribution.ExternalShare.encode(message.externalShare, writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
            if (message.music != null && $Object.hasOwnProperty.call(message, "music"))
                $root.StatusAttributions.StatusAttribution.Music.encode(message.music, writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
            if (message.groupStatus != null && $Object.hasOwnProperty.call(message, "groupStatus"))
                $root.StatusAttributions.StatusAttribution.GroupStatus.encode(message.groupStatus, writer.uint32(/* id 6, wireType 2 =*/50).fork(), _depth + 1).ldelim();
            if (message.rlAttribution != null && $Object.hasOwnProperty.call(message, "rlAttribution"))
                $root.StatusAttributions.StatusAttribution.RLAttribution.encode(message.rlAttribution, writer.uint32(/* id 7, wireType 2 =*/58).fork(), _depth + 1).ldelim();
            if (message.aiCreatedAttribution != null && $Object.hasOwnProperty.call(message, "aiCreatedAttribution"))
                $root.StatusAttributions.StatusAttribution.AiCreatedAttribution.encode(message.aiCreatedAttribution, writer.uint32(/* id 8, wireType 2 =*/66).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified StatusAttribution message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.verify|verify} messages.
         * @function encodeDelimited
         * @memberof StatusAttributions.StatusAttribution
         * @static
         * @param {StatusAttributions.StatusAttribution.$Properties} message StatusAttribution message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StatusAttribution.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a StatusAttribution message from the specified reader or buffer.
         * @function decode
         * @memberof StatusAttributions.StatusAttribution
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {StatusAttributions.StatusAttribution & StatusAttributions.StatusAttribution.$Shape} StatusAttribution
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StatusAttribution.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.StatusAttributions.StatusAttribution(), value;
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
                        message.type = reader.int32();
                        message._type = "type";
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.actionUrl = reader.stringVerify();
                        message._actionUrl = "actionUrl";
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        message.statusReshare = $root.StatusAttributions.StatusAttribution.StatusReshare.decode(reader, reader.uint32(), $undefined, _depth + 1, message.statusReshare);
                        message.attributionData = "statusReshare";
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        message.externalShare = $root.StatusAttributions.StatusAttribution.ExternalShare.decode(reader, reader.uint32(), $undefined, _depth + 1, message.externalShare);
                        message.attributionData = "externalShare";
                        continue;
                    }
                case 5: {
                        if (wireType !== 2)
                            break;
                        message.music = $root.StatusAttributions.StatusAttribution.Music.decode(reader, reader.uint32(), $undefined, _depth + 1, message.music);
                        message.attributionData = "music";
                        continue;
                    }
                case 6: {
                        if (wireType !== 2)
                            break;
                        message.groupStatus = $root.StatusAttributions.StatusAttribution.GroupStatus.decode(reader, reader.uint32(), $undefined, _depth + 1, message.groupStatus);
                        message.attributionData = "groupStatus";
                        continue;
                    }
                case 7: {
                        if (wireType !== 2)
                            break;
                        message.rlAttribution = $root.StatusAttributions.StatusAttribution.RLAttribution.decode(reader, reader.uint32(), $undefined, _depth + 1, message.rlAttribution);
                        message.attributionData = "rlAttribution";
                        continue;
                    }
                case 8: {
                        if (wireType !== 2)
                            break;
                        message.aiCreatedAttribution = $root.StatusAttributions.StatusAttribution.AiCreatedAttribution.decode(reader, reader.uint32(), $undefined, _depth + 1, message.aiCreatedAttribution);
                        message.attributionData = "aiCreatedAttribution";
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
         * Decodes a StatusAttribution message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof StatusAttributions.StatusAttribution
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {StatusAttributions.StatusAttribution & StatusAttributions.StatusAttribution.$Shape} StatusAttribution
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StatusAttribution.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StatusAttribution message.
         * @function verify
         * @memberof StatusAttributions.StatusAttribution
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StatusAttribution.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.type != null && $Object.hasOwnProperty.call(message, "type")) {
                properties._type = 1;
                if (typeof message.type !== "number" || (message.type | 0) !== message.type)
                    return "type: enum value expected";
            }
            if (message.actionUrl != null && $Object.hasOwnProperty.call(message, "actionUrl")) {
                properties._actionUrl = 1;
                if (!$util.isString(message.actionUrl))
                    return "actionUrl: string expected";
            }
            if (message.statusReshare != null && $Object.hasOwnProperty.call(message, "statusReshare")) {
                properties.attributionData = 1;
                {
                    var error = $root.StatusAttributions.StatusAttribution.StatusReshare.verify(message.statusReshare, _depth + 1);
                    if (error)
                        return "statusReshare." + error;
                }
            }
            if (message.externalShare != null && $Object.hasOwnProperty.call(message, "externalShare")) {
                if (properties.attributionData === 1)
                    return "attributionData: multiple values";
                properties.attributionData = 1;
                {
                    var error = $root.StatusAttributions.StatusAttribution.ExternalShare.verify(message.externalShare, _depth + 1);
                    if (error)
                        return "externalShare." + error;
                }
            }
            if (message.music != null && $Object.hasOwnProperty.call(message, "music")) {
                if (properties.attributionData === 1)
                    return "attributionData: multiple values";
                properties.attributionData = 1;
                {
                    var error = $root.StatusAttributions.StatusAttribution.Music.verify(message.music, _depth + 1);
                    if (error)
                        return "music." + error;
                }
            }
            if (message.groupStatus != null && $Object.hasOwnProperty.call(message, "groupStatus")) {
                if (properties.attributionData === 1)
                    return "attributionData: multiple values";
                properties.attributionData = 1;
                {
                    var error = $root.StatusAttributions.StatusAttribution.GroupStatus.verify(message.groupStatus, _depth + 1);
                    if (error)
                        return "groupStatus." + error;
                }
            }
            if (message.rlAttribution != null && $Object.hasOwnProperty.call(message, "rlAttribution")) {
                if (properties.attributionData === 1)
                    return "attributionData: multiple values";
                properties.attributionData = 1;
                {
                    var error = $root.StatusAttributions.StatusAttribution.RLAttribution.verify(message.rlAttribution, _depth + 1);
                    if (error)
                        return "rlAttribution." + error;
                }
            }
            if (message.aiCreatedAttribution != null && $Object.hasOwnProperty.call(message, "aiCreatedAttribution")) {
                if (properties.attributionData === 1)
                    return "attributionData: multiple values";
                properties.attributionData = 1;
                {
                    var error = $root.StatusAttributions.StatusAttribution.AiCreatedAttribution.verify(message.aiCreatedAttribution, _depth + 1);
                    if (error)
                        return "aiCreatedAttribution." + error;
                }
            }
            return null;
        };

        /**
         * Creates a StatusAttribution message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof StatusAttributions.StatusAttribution
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {StatusAttributions.StatusAttribution} StatusAttribution
         */
        StatusAttribution.fromObject = function (object, _depth) {
            if (object instanceof $root.StatusAttributions.StatusAttribution)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".StatusAttributions.StatusAttribution: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.StatusAttributions.StatusAttribution();
            switch (object.type) {
            case "UNKNOWN":
            case 0:
                message.type = 0;
                break;
            case "RESHARE":
            case 1:
                message.type = 1;
                break;
            case "EXTERNAL_SHARE":
            case 2:
                message.type = 2;
                break;
            case "MUSIC":
            case 3:
                message.type = 3;
                break;
            case "STATUS_MENTION":
            case 4:
                message.type = 4;
                break;
            case "GROUP_STATUS":
            case 5:
                message.type = 5;
                break;
            case "RL_ATTRIBUTION":
            case 6:
                message.type = 6;
                break;
            case "AI_CREATED":
            case 7:
                message.type = 7;
                break;
            case "LAYOUTS":
            case 8:
                message.type = 8;
                break;
            case "NEWSLETTER_STATUS":
            case 9:
                message.type = 9;
                break;
            case "STATUS_CLOSE_SHARING":
            case 10:
                message.type = 10;
                break;
            case "PAID_PARTNERSHIP":
            case 11:
                message.type = 11;
                break;
            default:
                if (typeof object.type === "number" && (object.type | 0) === object.type)
                    message.type = object.type;
            }
            if (object.actionUrl != null)
                message.actionUrl = $String(object.actionUrl);
            if (object.statusReshare != null) {
                if (!$util.isObject(object.statusReshare))
                    throw $TypeError(".StatusAttributions.StatusAttribution.statusReshare: object expected");
                message.statusReshare = $root.StatusAttributions.StatusAttribution.StatusReshare.fromObject(object.statusReshare, _depth + 1);
            }
            if (object.externalShare != null) {
                if (!$util.isObject(object.externalShare))
                    throw $TypeError(".StatusAttributions.StatusAttribution.externalShare: object expected");
                message.externalShare = $root.StatusAttributions.StatusAttribution.ExternalShare.fromObject(object.externalShare, _depth + 1);
            }
            if (object.music != null) {
                if (!$util.isObject(object.music))
                    throw $TypeError(".StatusAttributions.StatusAttribution.music: object expected");
                message.music = $root.StatusAttributions.StatusAttribution.Music.fromObject(object.music, _depth + 1);
            }
            if (object.groupStatus != null) {
                if (!$util.isObject(object.groupStatus))
                    throw $TypeError(".StatusAttributions.StatusAttribution.groupStatus: object expected");
                message.groupStatus = $root.StatusAttributions.StatusAttribution.GroupStatus.fromObject(object.groupStatus, _depth + 1);
            }
            if (object.rlAttribution != null) {
                if (!$util.isObject(object.rlAttribution))
                    throw $TypeError(".StatusAttributions.StatusAttribution.rlAttribution: object expected");
                message.rlAttribution = $root.StatusAttributions.StatusAttribution.RLAttribution.fromObject(object.rlAttribution, _depth + 1);
            }
            if (object.aiCreatedAttribution != null) {
                if (!$util.isObject(object.aiCreatedAttribution))
                    throw $TypeError(".StatusAttributions.StatusAttribution.aiCreatedAttribution: object expected");
                message.aiCreatedAttribution = $root.StatusAttributions.StatusAttribution.AiCreatedAttribution.fromObject(object.aiCreatedAttribution, _depth + 1);
            }
            return message;
        };

        /**
         * Creates a plain object from a StatusAttribution message. Also converts values to other types if specified.
         * @function toObject
         * @memberof StatusAttributions.StatusAttribution
         * @static
         * @param {StatusAttributions.StatusAttribution} message StatusAttribution
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StatusAttribution.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.type != null && $Object.hasOwnProperty.call(message, "type"))
                object.type = options.enums === $String ? $root.StatusAttributions.StatusAttribution.Type[message.type] === $undefined ? message.type : $root.StatusAttributions.StatusAttribution.Type[message.type] : message.type;
            if (message.actionUrl != null && $Object.hasOwnProperty.call(message, "actionUrl"))
                object.actionUrl = message.actionUrl;
            if (message.statusReshare != null && $Object.hasOwnProperty.call(message, "statusReshare")) {
                object.statusReshare = $root.StatusAttributions.StatusAttribution.StatusReshare.toObject(message.statusReshare, options, _depth + 1);
                if (options.oneofs)
                    object.attributionData = "statusReshare";
            }
            if (message.externalShare != null && $Object.hasOwnProperty.call(message, "externalShare")) {
                object.externalShare = $root.StatusAttributions.StatusAttribution.ExternalShare.toObject(message.externalShare, options, _depth + 1);
                if (options.oneofs)
                    object.attributionData = "externalShare";
            }
            if (message.music != null && $Object.hasOwnProperty.call(message, "music")) {
                object.music = $root.StatusAttributions.StatusAttribution.Music.toObject(message.music, options, _depth + 1);
                if (options.oneofs)
                    object.attributionData = "music";
            }
            if (message.groupStatus != null && $Object.hasOwnProperty.call(message, "groupStatus")) {
                object.groupStatus = $root.StatusAttributions.StatusAttribution.GroupStatus.toObject(message.groupStatus, options, _depth + 1);
                if (options.oneofs)
                    object.attributionData = "groupStatus";
            }
            if (message.rlAttribution != null && $Object.hasOwnProperty.call(message, "rlAttribution")) {
                object.rlAttribution = $root.StatusAttributions.StatusAttribution.RLAttribution.toObject(message.rlAttribution, options, _depth + 1);
                if (options.oneofs)
                    object.attributionData = "rlAttribution";
            }
            if (message.aiCreatedAttribution != null && $Object.hasOwnProperty.call(message, "aiCreatedAttribution")) {
                object.aiCreatedAttribution = $root.StatusAttributions.StatusAttribution.AiCreatedAttribution.toObject(message.aiCreatedAttribution, options, _depth + 1);
                if (options.oneofs)
                    object.attributionData = "aiCreatedAttribution";
            }
            return object;
        };

        /**
         * Converts this StatusAttribution to JSON.
         * @function toJSON
         * @memberof StatusAttributions.StatusAttribution
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StatusAttribution.prototype.toJSON = function() {
            return StatusAttribution.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for StatusAttribution
         * @function getTypeUrl
         * @memberof StatusAttributions.StatusAttribution
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        StatusAttribution.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/StatusAttributions.StatusAttribution";
        };

        StatusAttribution.AiCreatedAttribution = (function() {

            /**
             * Properties of an AiCreatedAttribution.
             * @typedef {Object} StatusAttributions.StatusAttribution.AiCreatedAttribution.$Properties
             * @property {StatusAttributions.StatusAttribution.AiCreatedAttribution.Source|null} [source] AiCreatedAttribution source
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of an AiCreatedAttribution.
             * @memberof StatusAttributions.StatusAttribution
             * @interface IAiCreatedAttribution
             * @augments StatusAttributions.StatusAttribution.AiCreatedAttribution.$Properties
             * @deprecated Use StatusAttributions.StatusAttribution.AiCreatedAttribution.$Properties instead.
             */

            /**
             * Shape of an AiCreatedAttribution.
             * @typedef {StatusAttributions.StatusAttribution.AiCreatedAttribution.$Properties} StatusAttributions.StatusAttribution.AiCreatedAttribution.$Shape
             */

            /**
             * Constructs a new AiCreatedAttribution.
             * @memberof StatusAttributions.StatusAttribution
             * @classdesc Represents an AiCreatedAttribution.
             * @constructor
             * @param {StatusAttributions.StatusAttribution.AiCreatedAttribution.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var AiCreatedAttribution = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * AiCreatedAttribution source.
             * @member {StatusAttributions.StatusAttribution.AiCreatedAttribution.Source|null|undefined} source
             * @memberof StatusAttributions.StatusAttribution.AiCreatedAttribution
             * @instance
             */
            AiCreatedAttribution.prototype.source = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(AiCreatedAttribution.prototype, "_source", {
                get: $util.oneOfGetter($oneOfFields = ["source"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new AiCreatedAttribution instance using the specified properties.
             * @function create
             * @memberof StatusAttributions.StatusAttribution.AiCreatedAttribution
             * @static
             * @param {StatusAttributions.StatusAttribution.AiCreatedAttribution.$Properties=} [properties] Properties to set
             * @returns {StatusAttributions.StatusAttribution.AiCreatedAttribution} AiCreatedAttribution instance
             * @type {{
             *   (properties: StatusAttributions.StatusAttribution.AiCreatedAttribution.$Shape): StatusAttributions.StatusAttribution.AiCreatedAttribution & StatusAttributions.StatusAttribution.AiCreatedAttribution.$Shape;
             *   (properties?: StatusAttributions.StatusAttribution.AiCreatedAttribution.$Properties): StatusAttributions.StatusAttribution.AiCreatedAttribution;
             * }}
             */
            AiCreatedAttribution.create = function(properties) {
                return new AiCreatedAttribution(properties);
            };

            /**
             * Encodes the specified AiCreatedAttribution message. Does not implicitly {@link StatusAttributions.StatusAttribution.AiCreatedAttribution.verify|verify} messages.
             * @function encode
             * @memberof StatusAttributions.StatusAttribution.AiCreatedAttribution
             * @static
             * @param {StatusAttributions.StatusAttribution.AiCreatedAttribution.$Properties} message AiCreatedAttribution message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AiCreatedAttribution.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.source != null && $Object.hasOwnProperty.call(message, "source"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.source);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified AiCreatedAttribution message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.AiCreatedAttribution.verify|verify} messages.
             * @function encodeDelimited
             * @memberof StatusAttributions.StatusAttribution.AiCreatedAttribution
             * @static
             * @param {StatusAttributions.StatusAttribution.AiCreatedAttribution.$Properties} message AiCreatedAttribution message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AiCreatedAttribution.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes an AiCreatedAttribution message from the specified reader or buffer.
             * @function decode
             * @memberof StatusAttributions.StatusAttribution.AiCreatedAttribution
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {StatusAttributions.StatusAttribution.AiCreatedAttribution & StatusAttributions.StatusAttribution.AiCreatedAttribution.$Shape} AiCreatedAttribution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AiCreatedAttribution.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.StatusAttributions.StatusAttribution.AiCreatedAttribution(), value;
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
                            message.source = reader.int32();
                            message._source = "source";
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
             * Decodes an AiCreatedAttribution message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof StatusAttributions.StatusAttribution.AiCreatedAttribution
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {StatusAttributions.StatusAttribution.AiCreatedAttribution & StatusAttributions.StatusAttribution.AiCreatedAttribution.$Shape} AiCreatedAttribution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AiCreatedAttribution.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AiCreatedAttribution message.
             * @function verify
             * @memberof StatusAttributions.StatusAttribution.AiCreatedAttribution
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AiCreatedAttribution.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.source != null && $Object.hasOwnProperty.call(message, "source")) {
                    properties._source = 1;
                    if (typeof message.source !== "number" || (message.source | 0) !== message.source)
                        return "source: enum value expected";
                }
                return null;
            };

            /**
             * Creates an AiCreatedAttribution message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof StatusAttributions.StatusAttribution.AiCreatedAttribution
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {StatusAttributions.StatusAttribution.AiCreatedAttribution} AiCreatedAttribution
             */
            AiCreatedAttribution.fromObject = function (object, _depth) {
                if (object instanceof $root.StatusAttributions.StatusAttribution.AiCreatedAttribution)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".StatusAttributions.StatusAttribution.AiCreatedAttribution: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.StatusAttributions.StatusAttribution.AiCreatedAttribution();
                switch (object.source) {
                case "UNKNOWN":
                case 0:
                    message.source = 0;
                    break;
                case "STATUS_MIMICRY":
                case 1:
                    message.source = 1;
                    break;
                default:
                    if (typeof object.source === "number" && (object.source | 0) === object.source)
                        message.source = object.source;
                }
                return message;
            };

            /**
             * Creates a plain object from an AiCreatedAttribution message. Also converts values to other types if specified.
             * @function toObject
             * @memberof StatusAttributions.StatusAttribution.AiCreatedAttribution
             * @static
             * @param {StatusAttributions.StatusAttribution.AiCreatedAttribution} message AiCreatedAttribution
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AiCreatedAttribution.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (message.source != null && $Object.hasOwnProperty.call(message, "source"))
                    object.source = options.enums === $String ? $root.StatusAttributions.StatusAttribution.AiCreatedAttribution.Source[message.source] === $undefined ? message.source : $root.StatusAttributions.StatusAttribution.AiCreatedAttribution.Source[message.source] : message.source;
                return object;
            };

            /**
             * Converts this AiCreatedAttribution to JSON.
             * @function toJSON
             * @memberof StatusAttributions.StatusAttribution.AiCreatedAttribution
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AiCreatedAttribution.prototype.toJSON = function() {
                return AiCreatedAttribution.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for AiCreatedAttribution
             * @function getTypeUrl
             * @memberof StatusAttributions.StatusAttribution.AiCreatedAttribution
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            AiCreatedAttribution.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/StatusAttributions.StatusAttribution.AiCreatedAttribution";
            };

            /**
             * Source enum.
             * @name StatusAttributions.StatusAttribution.AiCreatedAttribution.Source
             * @enum {number}
             * @property {number} UNKNOWN=0 UNKNOWN value
             * @property {number} STATUS_MIMICRY=1 STATUS_MIMICRY value
             */
            AiCreatedAttribution.Source = (function() {
                var valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "STATUS_MIMICRY"] = 1;
                return values;
            })();

            return AiCreatedAttribution;
        })();

        StatusAttribution.ExternalShare = (function() {

            /**
             * Properties of an ExternalShare.
             * @typedef {Object} StatusAttributions.StatusAttribution.ExternalShare.$Properties
             * @property {string|null} [actionUrl] ExternalShare actionUrl
             * @property {StatusAttributions.StatusAttribution.ExternalShare.Source|null} [source] ExternalShare source
             * @property {number|null} [duration] ExternalShare duration
             * @property {string|null} [actionFallbackUrl] ExternalShare actionFallbackUrl
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of an ExternalShare.
             * @memberof StatusAttributions.StatusAttribution
             * @interface IExternalShare
             * @augments StatusAttributions.StatusAttribution.ExternalShare.$Properties
             * @deprecated Use StatusAttributions.StatusAttribution.ExternalShare.$Properties instead.
             */

            /**
             * Shape of an ExternalShare.
             * @typedef {StatusAttributions.StatusAttribution.ExternalShare.$Properties} StatusAttributions.StatusAttribution.ExternalShare.$Shape
             */

            /**
             * Constructs a new ExternalShare.
             * @memberof StatusAttributions.StatusAttribution
             * @classdesc Represents an ExternalShare.
             * @constructor
             * @param {StatusAttributions.StatusAttribution.ExternalShare.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var ExternalShare = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * ExternalShare actionUrl.
             * @member {string|null|undefined} actionUrl
             * @memberof StatusAttributions.StatusAttribution.ExternalShare
             * @instance
             */
            ExternalShare.prototype.actionUrl = null;

            /**
             * ExternalShare source.
             * @member {StatusAttributions.StatusAttribution.ExternalShare.Source|null|undefined} source
             * @memberof StatusAttributions.StatusAttribution.ExternalShare
             * @instance
             */
            ExternalShare.prototype.source = null;

            /**
             * ExternalShare duration.
             * @member {number|null|undefined} duration
             * @memberof StatusAttributions.StatusAttribution.ExternalShare
             * @instance
             */
            ExternalShare.prototype.duration = null;

            /**
             * ExternalShare actionFallbackUrl.
             * @member {string|null|undefined} actionFallbackUrl
             * @memberof StatusAttributions.StatusAttribution.ExternalShare
             * @instance
             */
            ExternalShare.prototype.actionFallbackUrl = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ExternalShare.prototype, "_actionUrl", {
                get: $util.oneOfGetter($oneOfFields = ["actionUrl"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ExternalShare.prototype, "_source", {
                get: $util.oneOfGetter($oneOfFields = ["source"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ExternalShare.prototype, "_duration", {
                get: $util.oneOfGetter($oneOfFields = ["duration"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ExternalShare.prototype, "_actionFallbackUrl", {
                get: $util.oneOfGetter($oneOfFields = ["actionFallbackUrl"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new ExternalShare instance using the specified properties.
             * @function create
             * @memberof StatusAttributions.StatusAttribution.ExternalShare
             * @static
             * @param {StatusAttributions.StatusAttribution.ExternalShare.$Properties=} [properties] Properties to set
             * @returns {StatusAttributions.StatusAttribution.ExternalShare} ExternalShare instance
             * @type {{
             *   (properties: StatusAttributions.StatusAttribution.ExternalShare.$Shape): StatusAttributions.StatusAttribution.ExternalShare & StatusAttributions.StatusAttribution.ExternalShare.$Shape;
             *   (properties?: StatusAttributions.StatusAttribution.ExternalShare.$Properties): StatusAttributions.StatusAttribution.ExternalShare;
             * }}
             */
            ExternalShare.create = function(properties) {
                return new ExternalShare(properties);
            };

            /**
             * Encodes the specified ExternalShare message. Does not implicitly {@link StatusAttributions.StatusAttribution.ExternalShare.verify|verify} messages.
             * @function encode
             * @memberof StatusAttributions.StatusAttribution.ExternalShare
             * @static
             * @param {StatusAttributions.StatusAttribution.ExternalShare.$Properties} message ExternalShare message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExternalShare.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.actionUrl != null && $Object.hasOwnProperty.call(message, "actionUrl"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.actionUrl);
                if (message.source != null && $Object.hasOwnProperty.call(message, "source"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.source);
                if (message.duration != null && $Object.hasOwnProperty.call(message, "duration"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.duration);
                if (message.actionFallbackUrl != null && $Object.hasOwnProperty.call(message, "actionFallbackUrl"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.actionFallbackUrl);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified ExternalShare message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.ExternalShare.verify|verify} messages.
             * @function encodeDelimited
             * @memberof StatusAttributions.StatusAttribution.ExternalShare
             * @static
             * @param {StatusAttributions.StatusAttribution.ExternalShare.$Properties} message ExternalShare message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExternalShare.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes an ExternalShare message from the specified reader or buffer.
             * @function decode
             * @memberof StatusAttributions.StatusAttribution.ExternalShare
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {StatusAttributions.StatusAttribution.ExternalShare & StatusAttributions.StatusAttribution.ExternalShare.$Shape} ExternalShare
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExternalShare.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.StatusAttributions.StatusAttribution.ExternalShare(), value;
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
                            message.actionUrl = reader.stringVerify();
                            message._actionUrl = "actionUrl";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            message.source = reader.int32();
                            message._source = "source";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            message.duration = reader.int32();
                            message._duration = "duration";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            message.actionFallbackUrl = reader.stringVerify();
                            message._actionFallbackUrl = "actionFallbackUrl";
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
             * Decodes an ExternalShare message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof StatusAttributions.StatusAttribution.ExternalShare
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {StatusAttributions.StatusAttribution.ExternalShare & StatusAttributions.StatusAttribution.ExternalShare.$Shape} ExternalShare
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExternalShare.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ExternalShare message.
             * @function verify
             * @memberof StatusAttributions.StatusAttribution.ExternalShare
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ExternalShare.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.actionUrl != null && $Object.hasOwnProperty.call(message, "actionUrl")) {
                    properties._actionUrl = 1;
                    if (!$util.isString(message.actionUrl))
                        return "actionUrl: string expected";
                }
                if (message.source != null && $Object.hasOwnProperty.call(message, "source")) {
                    properties._source = 1;
                    if (typeof message.source !== "number" || (message.source | 0) !== message.source)
                        return "source: enum value expected";
                }
                if (message.duration != null && $Object.hasOwnProperty.call(message, "duration")) {
                    properties._duration = 1;
                    if (!$util.isInteger(message.duration))
                        return "duration: integer expected";
                }
                if (message.actionFallbackUrl != null && $Object.hasOwnProperty.call(message, "actionFallbackUrl")) {
                    properties._actionFallbackUrl = 1;
                    if (!$util.isString(message.actionFallbackUrl))
                        return "actionFallbackUrl: string expected";
                }
                return null;
            };

            /**
             * Creates an ExternalShare message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof StatusAttributions.StatusAttribution.ExternalShare
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {StatusAttributions.StatusAttribution.ExternalShare} ExternalShare
             */
            ExternalShare.fromObject = function (object, _depth) {
                if (object instanceof $root.StatusAttributions.StatusAttribution.ExternalShare)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".StatusAttributions.StatusAttribution.ExternalShare: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.StatusAttributions.StatusAttribution.ExternalShare();
                if (object.actionUrl != null)
                    message.actionUrl = $String(object.actionUrl);
                switch (object.source) {
                case "UNKNOWN":
                case 0:
                    message.source = 0;
                    break;
                case "INSTAGRAM":
                case 1:
                    message.source = 1;
                    break;
                case "FACEBOOK":
                case 2:
                    message.source = 2;
                    break;
                case "MESSENGER":
                case 3:
                    message.source = 3;
                    break;
                case "SPOTIFY":
                case 4:
                    message.source = 4;
                    break;
                case "YOUTUBE":
                case 5:
                    message.source = 5;
                    break;
                case "PINTEREST":
                case 6:
                    message.source = 6;
                    break;
                case "THREADS":
                case 7:
                    message.source = 7;
                    break;
                case "APPLE_MUSIC":
                case 8:
                    message.source = 8;
                    break;
                case "SHARECHAT":
                case 9:
                    message.source = 9;
                    break;
                case "GOOGLE_PHOTOS":
                case 10:
                    message.source = 10;
                    break;
                case "SOUNDCLOUD":
                case 11:
                    message.source = 11;
                    break;
                case "SHAZAM":
                case 12:
                    message.source = 12;
                    break;
                default:
                    if (typeof object.source === "number" && (object.source | 0) === object.source)
                        message.source = object.source;
                }
                if (object.duration != null)
                    message.duration = object.duration | 0;
                if (object.actionFallbackUrl != null)
                    message.actionFallbackUrl = $String(object.actionFallbackUrl);
                return message;
            };

            /**
             * Creates a plain object from an ExternalShare message. Also converts values to other types if specified.
             * @function toObject
             * @memberof StatusAttributions.StatusAttribution.ExternalShare
             * @static
             * @param {StatusAttributions.StatusAttribution.ExternalShare} message ExternalShare
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ExternalShare.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (message.actionUrl != null && $Object.hasOwnProperty.call(message, "actionUrl"))
                    object.actionUrl = message.actionUrl;
                if (message.source != null && $Object.hasOwnProperty.call(message, "source"))
                    object.source = options.enums === $String ? $root.StatusAttributions.StatusAttribution.ExternalShare.Source[message.source] === $undefined ? message.source : $root.StatusAttributions.StatusAttribution.ExternalShare.Source[message.source] : message.source;
                if (message.duration != null && $Object.hasOwnProperty.call(message, "duration"))
                    object.duration = message.duration;
                if (message.actionFallbackUrl != null && $Object.hasOwnProperty.call(message, "actionFallbackUrl"))
                    object.actionFallbackUrl = message.actionFallbackUrl;
                return object;
            };

            /**
             * Converts this ExternalShare to JSON.
             * @function toJSON
             * @memberof StatusAttributions.StatusAttribution.ExternalShare
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ExternalShare.prototype.toJSON = function() {
                return ExternalShare.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for ExternalShare
             * @function getTypeUrl
             * @memberof StatusAttributions.StatusAttribution.ExternalShare
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            ExternalShare.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/StatusAttributions.StatusAttribution.ExternalShare";
            };

            /**
             * Source enum.
             * @name StatusAttributions.StatusAttribution.ExternalShare.Source
             * @enum {number}
             * @property {number} UNKNOWN=0 UNKNOWN value
             * @property {number} INSTAGRAM=1 INSTAGRAM value
             * @property {number} FACEBOOK=2 FACEBOOK value
             * @property {number} MESSENGER=3 MESSENGER value
             * @property {number} SPOTIFY=4 SPOTIFY value
             * @property {number} YOUTUBE=5 YOUTUBE value
             * @property {number} PINTEREST=6 PINTEREST value
             * @property {number} THREADS=7 THREADS value
             * @property {number} APPLE_MUSIC=8 APPLE_MUSIC value
             * @property {number} SHARECHAT=9 SHARECHAT value
             * @property {number} GOOGLE_PHOTOS=10 GOOGLE_PHOTOS value
             * @property {number} SOUNDCLOUD=11 SOUNDCLOUD value
             * @property {number} SHAZAM=12 SHAZAM value
             */
            ExternalShare.Source = (function() {
                var valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "INSTAGRAM"] = 1;
                values[valuesById[2] = "FACEBOOK"] = 2;
                values[valuesById[3] = "MESSENGER"] = 3;
                values[valuesById[4] = "SPOTIFY"] = 4;
                values[valuesById[5] = "YOUTUBE"] = 5;
                values[valuesById[6] = "PINTEREST"] = 6;
                values[valuesById[7] = "THREADS"] = 7;
                values[valuesById[8] = "APPLE_MUSIC"] = 8;
                values[valuesById[9] = "SHARECHAT"] = 9;
                values[valuesById[10] = "GOOGLE_PHOTOS"] = 10;
                values[valuesById[11] = "SOUNDCLOUD"] = 11;
                values[valuesById[12] = "SHAZAM"] = 12;
                return values;
            })();

            return ExternalShare;
        })();

        StatusAttribution.GroupStatus = (function() {

            /**
             * Properties of a GroupStatus.
             * @typedef {Object} StatusAttributions.StatusAttribution.GroupStatus.$Properties
             * @property {string|null} [authorJid] GroupStatus authorJid
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a GroupStatus.
             * @memberof StatusAttributions.StatusAttribution
             * @interface IGroupStatus
             * @augments StatusAttributions.StatusAttribution.GroupStatus.$Properties
             * @deprecated Use StatusAttributions.StatusAttribution.GroupStatus.$Properties instead.
             */

            /**
             * Shape of a GroupStatus.
             * @typedef {StatusAttributions.StatusAttribution.GroupStatus.$Properties} StatusAttributions.StatusAttribution.GroupStatus.$Shape
             */

            /**
             * Constructs a new GroupStatus.
             * @memberof StatusAttributions.StatusAttribution
             * @classdesc Represents a GroupStatus.
             * @constructor
             * @param {StatusAttributions.StatusAttribution.GroupStatus.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var GroupStatus = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * GroupStatus authorJid.
             * @member {string|null|undefined} authorJid
             * @memberof StatusAttributions.StatusAttribution.GroupStatus
             * @instance
             */
            GroupStatus.prototype.authorJid = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(GroupStatus.prototype, "_authorJid", {
                get: $util.oneOfGetter($oneOfFields = ["authorJid"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new GroupStatus instance using the specified properties.
             * @function create
             * @memberof StatusAttributions.StatusAttribution.GroupStatus
             * @static
             * @param {StatusAttributions.StatusAttribution.GroupStatus.$Properties=} [properties] Properties to set
             * @returns {StatusAttributions.StatusAttribution.GroupStatus} GroupStatus instance
             * @type {{
             *   (properties: StatusAttributions.StatusAttribution.GroupStatus.$Shape): StatusAttributions.StatusAttribution.GroupStatus & StatusAttributions.StatusAttribution.GroupStatus.$Shape;
             *   (properties?: StatusAttributions.StatusAttribution.GroupStatus.$Properties): StatusAttributions.StatusAttribution.GroupStatus;
             * }}
             */
            GroupStatus.create = function(properties) {
                return new GroupStatus(properties);
            };

            /**
             * Encodes the specified GroupStatus message. Does not implicitly {@link StatusAttributions.StatusAttribution.GroupStatus.verify|verify} messages.
             * @function encode
             * @memberof StatusAttributions.StatusAttribution.GroupStatus
             * @static
             * @param {StatusAttributions.StatusAttribution.GroupStatus.$Properties} message GroupStatus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GroupStatus.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.authorJid != null && $Object.hasOwnProperty.call(message, "authorJid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.authorJid);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified GroupStatus message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.GroupStatus.verify|verify} messages.
             * @function encodeDelimited
             * @memberof StatusAttributions.StatusAttribution.GroupStatus
             * @static
             * @param {StatusAttributions.StatusAttribution.GroupStatus.$Properties} message GroupStatus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GroupStatus.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a GroupStatus message from the specified reader or buffer.
             * @function decode
             * @memberof StatusAttributions.StatusAttribution.GroupStatus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {StatusAttributions.StatusAttribution.GroupStatus & StatusAttributions.StatusAttribution.GroupStatus.$Shape} GroupStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GroupStatus.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.StatusAttributions.StatusAttribution.GroupStatus();
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
                            message.authorJid = reader.stringVerify();
                            message._authorJid = "authorJid";
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
             * Decodes a GroupStatus message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof StatusAttributions.StatusAttribution.GroupStatus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {StatusAttributions.StatusAttribution.GroupStatus & StatusAttributions.StatusAttribution.GroupStatus.$Shape} GroupStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GroupStatus.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GroupStatus message.
             * @function verify
             * @memberof StatusAttributions.StatusAttribution.GroupStatus
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GroupStatus.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.authorJid != null && $Object.hasOwnProperty.call(message, "authorJid")) {
                    properties._authorJid = 1;
                    if (!$util.isString(message.authorJid))
                        return "authorJid: string expected";
                }
                return null;
            };

            /**
             * Creates a GroupStatus message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof StatusAttributions.StatusAttribution.GroupStatus
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {StatusAttributions.StatusAttribution.GroupStatus} GroupStatus
             */
            GroupStatus.fromObject = function (object, _depth) {
                if (object instanceof $root.StatusAttributions.StatusAttribution.GroupStatus)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".StatusAttributions.StatusAttribution.GroupStatus: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.StatusAttributions.StatusAttribution.GroupStatus();
                if (object.authorJid != null)
                    message.authorJid = $String(object.authorJid);
                return message;
            };

            /**
             * Creates a plain object from a GroupStatus message. Also converts values to other types if specified.
             * @function toObject
             * @memberof StatusAttributions.StatusAttribution.GroupStatus
             * @static
             * @param {StatusAttributions.StatusAttribution.GroupStatus} message GroupStatus
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GroupStatus.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (message.authorJid != null && $Object.hasOwnProperty.call(message, "authorJid"))
                    object.authorJid = message.authorJid;
                return object;
            };

            /**
             * Converts this GroupStatus to JSON.
             * @function toJSON
             * @memberof StatusAttributions.StatusAttribution.GroupStatus
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GroupStatus.prototype.toJSON = function() {
                return GroupStatus.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for GroupStatus
             * @function getTypeUrl
             * @memberof StatusAttributions.StatusAttribution.GroupStatus
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            GroupStatus.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/StatusAttributions.StatusAttribution.GroupStatus";
            };

            return GroupStatus;
        })();

        StatusAttribution.Music = (function() {

            /**
             * Properties of a Music.
             * @typedef {Object} StatusAttributions.StatusAttribution.Music.$Properties
             * @property {string|null} [authorName] Music authorName
             * @property {string|null} [songId] Music songId
             * @property {string|null} [title] Music title
             * @property {string|null} [author] Music author
             * @property {string|null} [artistAttribution] Music artistAttribution
             * @property {boolean|null} [isExplicit] Music isExplicit
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a Music.
             * @memberof StatusAttributions.StatusAttribution
             * @interface IMusic
             * @augments StatusAttributions.StatusAttribution.Music.$Properties
             * @deprecated Use StatusAttributions.StatusAttribution.Music.$Properties instead.
             */

            /**
             * Shape of a Music.
             * @typedef {StatusAttributions.StatusAttribution.Music.$Properties} StatusAttributions.StatusAttribution.Music.$Shape
             */

            /**
             * Constructs a new Music.
             * @memberof StatusAttributions.StatusAttribution
             * @classdesc Represents a Music.
             * @constructor
             * @param {StatusAttributions.StatusAttribution.Music.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var Music = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * Music authorName.
             * @member {string|null|undefined} authorName
             * @memberof StatusAttributions.StatusAttribution.Music
             * @instance
             */
            Music.prototype.authorName = null;

            /**
             * Music songId.
             * @member {string|null|undefined} songId
             * @memberof StatusAttributions.StatusAttribution.Music
             * @instance
             */
            Music.prototype.songId = null;

            /**
             * Music title.
             * @member {string|null|undefined} title
             * @memberof StatusAttributions.StatusAttribution.Music
             * @instance
             */
            Music.prototype.title = null;

            /**
             * Music author.
             * @member {string|null|undefined} author
             * @memberof StatusAttributions.StatusAttribution.Music
             * @instance
             */
            Music.prototype.author = null;

            /**
             * Music artistAttribution.
             * @member {string|null|undefined} artistAttribution
             * @memberof StatusAttributions.StatusAttribution.Music
             * @instance
             */
            Music.prototype.artistAttribution = null;

            /**
             * Music isExplicit.
             * @member {boolean|null|undefined} isExplicit
             * @memberof StatusAttributions.StatusAttribution.Music
             * @instance
             */
            Music.prototype.isExplicit = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Music.prototype, "_authorName", {
                get: $util.oneOfGetter($oneOfFields = ["authorName"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Music.prototype, "_songId", {
                get: $util.oneOfGetter($oneOfFields = ["songId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Music.prototype, "_title", {
                get: $util.oneOfGetter($oneOfFields = ["title"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Music.prototype, "_author", {
                get: $util.oneOfGetter($oneOfFields = ["author"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Music.prototype, "_artistAttribution", {
                get: $util.oneOfGetter($oneOfFields = ["artistAttribution"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(Music.prototype, "_isExplicit", {
                get: $util.oneOfGetter($oneOfFields = ["isExplicit"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Music instance using the specified properties.
             * @function create
             * @memberof StatusAttributions.StatusAttribution.Music
             * @static
             * @param {StatusAttributions.StatusAttribution.Music.$Properties=} [properties] Properties to set
             * @returns {StatusAttributions.StatusAttribution.Music} Music instance
             * @type {{
             *   (properties: StatusAttributions.StatusAttribution.Music.$Shape): StatusAttributions.StatusAttribution.Music & StatusAttributions.StatusAttribution.Music.$Shape;
             *   (properties?: StatusAttributions.StatusAttribution.Music.$Properties): StatusAttributions.StatusAttribution.Music;
             * }}
             */
            Music.create = function(properties) {
                return new Music(properties);
            };

            /**
             * Encodes the specified Music message. Does not implicitly {@link StatusAttributions.StatusAttribution.Music.verify|verify} messages.
             * @function encode
             * @memberof StatusAttributions.StatusAttribution.Music
             * @static
             * @param {StatusAttributions.StatusAttribution.Music.$Properties} message Music message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Music.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.authorName != null && $Object.hasOwnProperty.call(message, "authorName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.authorName);
                if (message.songId != null && $Object.hasOwnProperty.call(message, "songId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.songId);
                if (message.title != null && $Object.hasOwnProperty.call(message, "title"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.title);
                if (message.author != null && $Object.hasOwnProperty.call(message, "author"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.author);
                if (message.artistAttribution != null && $Object.hasOwnProperty.call(message, "artistAttribution"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.artistAttribution);
                if (message.isExplicit != null && $Object.hasOwnProperty.call(message, "isExplicit"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.isExplicit);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified Music message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.Music.verify|verify} messages.
             * @function encodeDelimited
             * @memberof StatusAttributions.StatusAttribution.Music
             * @static
             * @param {StatusAttributions.StatusAttribution.Music.$Properties} message Music message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Music.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a Music message from the specified reader or buffer.
             * @function decode
             * @memberof StatusAttributions.StatusAttribution.Music
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {StatusAttributions.StatusAttribution.Music & StatusAttributions.StatusAttribution.Music.$Shape} Music
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Music.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.StatusAttributions.StatusAttribution.Music();
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
                            message.authorName = reader.stringVerify();
                            message._authorName = "authorName";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.songId = reader.stringVerify();
                            message._songId = "songId";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.title = reader.stringVerify();
                            message._title = "title";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            message.author = reader.stringVerify();
                            message._author = "author";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 2)
                                break;
                            message.artistAttribution = reader.stringVerify();
                            message._artistAttribution = "artistAttribution";
                            continue;
                        }
                    case 6: {
                            if (wireType !== 0)
                                break;
                            message.isExplicit = reader.bool();
                            message._isExplicit = "isExplicit";
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
             * Decodes a Music message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof StatusAttributions.StatusAttribution.Music
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {StatusAttributions.StatusAttribution.Music & StatusAttributions.StatusAttribution.Music.$Shape} Music
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Music.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Music message.
             * @function verify
             * @memberof StatusAttributions.StatusAttribution.Music
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Music.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.authorName != null && $Object.hasOwnProperty.call(message, "authorName")) {
                    properties._authorName = 1;
                    if (!$util.isString(message.authorName))
                        return "authorName: string expected";
                }
                if (message.songId != null && $Object.hasOwnProperty.call(message, "songId")) {
                    properties._songId = 1;
                    if (!$util.isString(message.songId))
                        return "songId: string expected";
                }
                if (message.title != null && $Object.hasOwnProperty.call(message, "title")) {
                    properties._title = 1;
                    if (!$util.isString(message.title))
                        return "title: string expected";
                }
                if (message.author != null && $Object.hasOwnProperty.call(message, "author")) {
                    properties._author = 1;
                    if (!$util.isString(message.author))
                        return "author: string expected";
                }
                if (message.artistAttribution != null && $Object.hasOwnProperty.call(message, "artistAttribution")) {
                    properties._artistAttribution = 1;
                    if (!$util.isString(message.artistAttribution))
                        return "artistAttribution: string expected";
                }
                if (message.isExplicit != null && $Object.hasOwnProperty.call(message, "isExplicit")) {
                    properties._isExplicit = 1;
                    if (typeof message.isExplicit !== "boolean")
                        return "isExplicit: boolean expected";
                }
                return null;
            };

            /**
             * Creates a Music message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof StatusAttributions.StatusAttribution.Music
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {StatusAttributions.StatusAttribution.Music} Music
             */
            Music.fromObject = function (object, _depth) {
                if (object instanceof $root.StatusAttributions.StatusAttribution.Music)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".StatusAttributions.StatusAttribution.Music: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.StatusAttributions.StatusAttribution.Music();
                if (object.authorName != null)
                    message.authorName = $String(object.authorName);
                if (object.songId != null)
                    message.songId = $String(object.songId);
                if (object.title != null)
                    message.title = $String(object.title);
                if (object.author != null)
                    message.author = $String(object.author);
                if (object.artistAttribution != null)
                    message.artistAttribution = $String(object.artistAttribution);
                if (object.isExplicit != null)
                    message.isExplicit = $Boolean(object.isExplicit);
                return message;
            };

            /**
             * Creates a plain object from a Music message. Also converts values to other types if specified.
             * @function toObject
             * @memberof StatusAttributions.StatusAttribution.Music
             * @static
             * @param {StatusAttributions.StatusAttribution.Music} message Music
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Music.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (message.authorName != null && $Object.hasOwnProperty.call(message, "authorName"))
                    object.authorName = message.authorName;
                if (message.songId != null && $Object.hasOwnProperty.call(message, "songId"))
                    object.songId = message.songId;
                if (message.title != null && $Object.hasOwnProperty.call(message, "title"))
                    object.title = message.title;
                if (message.author != null && $Object.hasOwnProperty.call(message, "author"))
                    object.author = message.author;
                if (message.artistAttribution != null && $Object.hasOwnProperty.call(message, "artistAttribution"))
                    object.artistAttribution = message.artistAttribution;
                if (message.isExplicit != null && $Object.hasOwnProperty.call(message, "isExplicit"))
                    object.isExplicit = message.isExplicit;
                return object;
            };

            /**
             * Converts this Music to JSON.
             * @function toJSON
             * @memberof StatusAttributions.StatusAttribution.Music
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Music.prototype.toJSON = function() {
                return Music.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for Music
             * @function getTypeUrl
             * @memberof StatusAttributions.StatusAttribution.Music
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            Music.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/StatusAttributions.StatusAttribution.Music";
            };

            return Music;
        })();

        StatusAttribution.RLAttribution = (function() {

            /**
             * Properties of a RLAttribution.
             * @typedef {Object} StatusAttributions.StatusAttribution.RLAttribution.$Properties
             * @property {StatusAttributions.StatusAttribution.RLAttribution.Source|null} [source] RLAttribution source
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a RLAttribution.
             * @memberof StatusAttributions.StatusAttribution
             * @interface IRLAttribution
             * @augments StatusAttributions.StatusAttribution.RLAttribution.$Properties
             * @deprecated Use StatusAttributions.StatusAttribution.RLAttribution.$Properties instead.
             */

            /**
             * Shape of a RLAttribution.
             * @typedef {StatusAttributions.StatusAttribution.RLAttribution.$Properties} StatusAttributions.StatusAttribution.RLAttribution.$Shape
             */

            /**
             * Constructs a new RLAttribution.
             * @memberof StatusAttributions.StatusAttribution
             * @classdesc Represents a RLAttribution.
             * @constructor
             * @param {StatusAttributions.StatusAttribution.RLAttribution.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var RLAttribution = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * RLAttribution source.
             * @member {StatusAttributions.StatusAttribution.RLAttribution.Source|null|undefined} source
             * @memberof StatusAttributions.StatusAttribution.RLAttribution
             * @instance
             */
            RLAttribution.prototype.source = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(RLAttribution.prototype, "_source", {
                get: $util.oneOfGetter($oneOfFields = ["source"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new RLAttribution instance using the specified properties.
             * @function create
             * @memberof StatusAttributions.StatusAttribution.RLAttribution
             * @static
             * @param {StatusAttributions.StatusAttribution.RLAttribution.$Properties=} [properties] Properties to set
             * @returns {StatusAttributions.StatusAttribution.RLAttribution} RLAttribution instance
             * @type {{
             *   (properties: StatusAttributions.StatusAttribution.RLAttribution.$Shape): StatusAttributions.StatusAttribution.RLAttribution & StatusAttributions.StatusAttribution.RLAttribution.$Shape;
             *   (properties?: StatusAttributions.StatusAttribution.RLAttribution.$Properties): StatusAttributions.StatusAttribution.RLAttribution;
             * }}
             */
            RLAttribution.create = function(properties) {
                return new RLAttribution(properties);
            };

            /**
             * Encodes the specified RLAttribution message. Does not implicitly {@link StatusAttributions.StatusAttribution.RLAttribution.verify|verify} messages.
             * @function encode
             * @memberof StatusAttributions.StatusAttribution.RLAttribution
             * @static
             * @param {StatusAttributions.StatusAttribution.RLAttribution.$Properties} message RLAttribution message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RLAttribution.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.source != null && $Object.hasOwnProperty.call(message, "source"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.source);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified RLAttribution message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.RLAttribution.verify|verify} messages.
             * @function encodeDelimited
             * @memberof StatusAttributions.StatusAttribution.RLAttribution
             * @static
             * @param {StatusAttributions.StatusAttribution.RLAttribution.$Properties} message RLAttribution message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RLAttribution.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a RLAttribution message from the specified reader or buffer.
             * @function decode
             * @memberof StatusAttributions.StatusAttribution.RLAttribution
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {StatusAttributions.StatusAttribution.RLAttribution & StatusAttributions.StatusAttribution.RLAttribution.$Shape} RLAttribution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RLAttribution.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.StatusAttributions.StatusAttribution.RLAttribution(), value;
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
                            message.source = reader.int32();
                            message._source = "source";
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
             * Decodes a RLAttribution message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof StatusAttributions.StatusAttribution.RLAttribution
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {StatusAttributions.StatusAttribution.RLAttribution & StatusAttributions.StatusAttribution.RLAttribution.$Shape} RLAttribution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RLAttribution.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RLAttribution message.
             * @function verify
             * @memberof StatusAttributions.StatusAttribution.RLAttribution
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RLAttribution.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.source != null && $Object.hasOwnProperty.call(message, "source")) {
                    properties._source = 1;
                    if (typeof message.source !== "number" || (message.source | 0) !== message.source)
                        return "source: enum value expected";
                }
                return null;
            };

            /**
             * Creates a RLAttribution message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof StatusAttributions.StatusAttribution.RLAttribution
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {StatusAttributions.StatusAttribution.RLAttribution} RLAttribution
             */
            RLAttribution.fromObject = function (object, _depth) {
                if (object instanceof $root.StatusAttributions.StatusAttribution.RLAttribution)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".StatusAttributions.StatusAttribution.RLAttribution: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.StatusAttributions.StatusAttribution.RLAttribution();
                switch (object.source) {
                case "UNKNOWN":
                case 0:
                    message.source = 0;
                    break;
                case "RAY_BAN_META_GLASSES":
                case 1:
                    message.source = 1;
                    break;
                case "OAKLEY_META_GLASSES":
                case 2:
                    message.source = 2;
                    break;
                case "HYPERNOVA_GLASSES":
                case 3:
                    message.source = 3;
                    break;
                default:
                    if (typeof object.source === "number" && (object.source | 0) === object.source)
                        message.source = object.source;
                }
                return message;
            };

            /**
             * Creates a plain object from a RLAttribution message. Also converts values to other types if specified.
             * @function toObject
             * @memberof StatusAttributions.StatusAttribution.RLAttribution
             * @static
             * @param {StatusAttributions.StatusAttribution.RLAttribution} message RLAttribution
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RLAttribution.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (message.source != null && $Object.hasOwnProperty.call(message, "source"))
                    object.source = options.enums === $String ? $root.StatusAttributions.StatusAttribution.RLAttribution.Source[message.source] === $undefined ? message.source : $root.StatusAttributions.StatusAttribution.RLAttribution.Source[message.source] : message.source;
                return object;
            };

            /**
             * Converts this RLAttribution to JSON.
             * @function toJSON
             * @memberof StatusAttributions.StatusAttribution.RLAttribution
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RLAttribution.prototype.toJSON = function() {
                return RLAttribution.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for RLAttribution
             * @function getTypeUrl
             * @memberof StatusAttributions.StatusAttribution.RLAttribution
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            RLAttribution.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/StatusAttributions.StatusAttribution.RLAttribution";
            };

            /**
             * Source enum.
             * @name StatusAttributions.StatusAttribution.RLAttribution.Source
             * @enum {number}
             * @property {number} UNKNOWN=0 UNKNOWN value
             * @property {number} RAY_BAN_META_GLASSES=1 RAY_BAN_META_GLASSES value
             * @property {number} OAKLEY_META_GLASSES=2 OAKLEY_META_GLASSES value
             * @property {number} HYPERNOVA_GLASSES=3 HYPERNOVA_GLASSES value
             */
            RLAttribution.Source = (function() {
                var valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "RAY_BAN_META_GLASSES"] = 1;
                values[valuesById[2] = "OAKLEY_META_GLASSES"] = 2;
                values[valuesById[3] = "HYPERNOVA_GLASSES"] = 3;
                return values;
            })();

            return RLAttribution;
        })();

        StatusAttribution.StatusReshare = (function() {

            /**
             * Properties of a StatusReshare.
             * @typedef {Object} StatusAttributions.StatusAttribution.StatusReshare.$Properties
             * @property {StatusAttributions.StatusAttribution.StatusReshare.Source|null} [source] StatusReshare source
             * @property {StatusAttributions.StatusAttribution.StatusReshare.Metadata.$Properties|null} [metadata] StatusReshare metadata
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a StatusReshare.
             * @memberof StatusAttributions.StatusAttribution
             * @interface IStatusReshare
             * @augments StatusAttributions.StatusAttribution.StatusReshare.$Properties
             * @deprecated Use StatusAttributions.StatusAttribution.StatusReshare.$Properties instead.
             */

            /**
             * Shape of a StatusReshare.
             * @typedef {StatusAttributions.StatusAttribution.StatusReshare.$Properties} StatusAttributions.StatusAttribution.StatusReshare.$Shape
             */

            /**
             * Constructs a new StatusReshare.
             * @memberof StatusAttributions.StatusAttribution
             * @classdesc Represents a StatusReshare.
             * @constructor
             * @param {StatusAttributions.StatusAttribution.StatusReshare.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var StatusReshare = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * StatusReshare source.
             * @member {StatusAttributions.StatusAttribution.StatusReshare.Source|null|undefined} source
             * @memberof StatusAttributions.StatusAttribution.StatusReshare
             * @instance
             */
            StatusReshare.prototype.source = null;

            /**
             * StatusReshare metadata.
             * @member {StatusAttributions.StatusAttribution.StatusReshare.Metadata.$Properties|null|undefined} metadata
             * @memberof StatusAttributions.StatusAttribution.StatusReshare
             * @instance
             */
            StatusReshare.prototype.metadata = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(StatusReshare.prototype, "_source", {
                get: $util.oneOfGetter($oneOfFields = ["source"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(StatusReshare.prototype, "_metadata", {
                get: $util.oneOfGetter($oneOfFields = ["metadata"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new StatusReshare instance using the specified properties.
             * @function create
             * @memberof StatusAttributions.StatusAttribution.StatusReshare
             * @static
             * @param {StatusAttributions.StatusAttribution.StatusReshare.$Properties=} [properties] Properties to set
             * @returns {StatusAttributions.StatusAttribution.StatusReshare} StatusReshare instance
             * @type {{
             *   (properties: StatusAttributions.StatusAttribution.StatusReshare.$Shape): StatusAttributions.StatusAttribution.StatusReshare & StatusAttributions.StatusAttribution.StatusReshare.$Shape;
             *   (properties?: StatusAttributions.StatusAttribution.StatusReshare.$Properties): StatusAttributions.StatusAttribution.StatusReshare;
             * }}
             */
            StatusReshare.create = function(properties) {
                return new StatusReshare(properties);
            };

            /**
             * Encodes the specified StatusReshare message. Does not implicitly {@link StatusAttributions.StatusAttribution.StatusReshare.verify|verify} messages.
             * @function encode
             * @memberof StatusAttributions.StatusAttribution.StatusReshare
             * @static
             * @param {StatusAttributions.StatusAttribution.StatusReshare.$Properties} message StatusReshare message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StatusReshare.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.source != null && $Object.hasOwnProperty.call(message, "source"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.source);
                if (message.metadata != null && $Object.hasOwnProperty.call(message, "metadata"))
                    $root.StatusAttributions.StatusAttribution.StatusReshare.Metadata.encode(message.metadata, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified StatusReshare message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.StatusReshare.verify|verify} messages.
             * @function encodeDelimited
             * @memberof StatusAttributions.StatusAttribution.StatusReshare
             * @static
             * @param {StatusAttributions.StatusAttribution.StatusReshare.$Properties} message StatusReshare message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StatusReshare.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a StatusReshare message from the specified reader or buffer.
             * @function decode
             * @memberof StatusAttributions.StatusAttribution.StatusReshare
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {StatusAttributions.StatusAttribution.StatusReshare & StatusAttributions.StatusAttribution.StatusReshare.$Shape} StatusReshare
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StatusReshare.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.StatusAttributions.StatusAttribution.StatusReshare(), value;
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
                            message.source = reader.int32();
                            message._source = "source";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.metadata = $root.StatusAttributions.StatusAttribution.StatusReshare.Metadata.decode(reader, reader.uint32(), $undefined, _depth + 1, message.metadata);
                            message._metadata = "metadata";
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
             * Decodes a StatusReshare message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof StatusAttributions.StatusAttribution.StatusReshare
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {StatusAttributions.StatusAttribution.StatusReshare & StatusAttributions.StatusAttribution.StatusReshare.$Shape} StatusReshare
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StatusReshare.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StatusReshare message.
             * @function verify
             * @memberof StatusAttributions.StatusAttribution.StatusReshare
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StatusReshare.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.source != null && $Object.hasOwnProperty.call(message, "source")) {
                    properties._source = 1;
                    if (typeof message.source !== "number" || (message.source | 0) !== message.source)
                        return "source: enum value expected";
                }
                if (message.metadata != null && $Object.hasOwnProperty.call(message, "metadata")) {
                    properties._metadata = 1;
                    {
                        var error = $root.StatusAttributions.StatusAttribution.StatusReshare.Metadata.verify(message.metadata, _depth + 1);
                        if (error)
                            return "metadata." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a StatusReshare message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof StatusAttributions.StatusAttribution.StatusReshare
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {StatusAttributions.StatusAttribution.StatusReshare} StatusReshare
             */
            StatusReshare.fromObject = function (object, _depth) {
                if (object instanceof $root.StatusAttributions.StatusAttribution.StatusReshare)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".StatusAttributions.StatusAttribution.StatusReshare: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.StatusAttributions.StatusAttribution.StatusReshare();
                switch (object.source) {
                case "UNKNOWN":
                case 0:
                    message.source = 0;
                    break;
                case "INTERNAL_RESHARE":
                case 1:
                    message.source = 1;
                    break;
                case "MENTION_RESHARE":
                case 2:
                    message.source = 2;
                    break;
                case "CHANNEL_RESHARE":
                case 3:
                    message.source = 3;
                    break;
                case "FORWARD":
                case 4:
                    message.source = 4;
                    break;
                default:
                    if (typeof object.source === "number" && (object.source | 0) === object.source)
                        message.source = object.source;
                }
                if (object.metadata != null) {
                    if (!$util.isObject(object.metadata))
                        throw $TypeError(".StatusAttributions.StatusAttribution.StatusReshare.metadata: object expected");
                    message.metadata = $root.StatusAttributions.StatusAttribution.StatusReshare.Metadata.fromObject(object.metadata, _depth + 1);
                }
                return message;
            };

            /**
             * Creates a plain object from a StatusReshare message. Also converts values to other types if specified.
             * @function toObject
             * @memberof StatusAttributions.StatusAttribution.StatusReshare
             * @static
             * @param {StatusAttributions.StatusAttribution.StatusReshare} message StatusReshare
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StatusReshare.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (message.source != null && $Object.hasOwnProperty.call(message, "source"))
                    object.source = options.enums === $String ? $root.StatusAttributions.StatusAttribution.StatusReshare.Source[message.source] === $undefined ? message.source : $root.StatusAttributions.StatusAttribution.StatusReshare.Source[message.source] : message.source;
                if (message.metadata != null && $Object.hasOwnProperty.call(message, "metadata"))
                    object.metadata = $root.StatusAttributions.StatusAttribution.StatusReshare.Metadata.toObject(message.metadata, options, _depth + 1);
                return object;
            };

            /**
             * Converts this StatusReshare to JSON.
             * @function toJSON
             * @memberof StatusAttributions.StatusAttribution.StatusReshare
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StatusReshare.prototype.toJSON = function() {
                return StatusReshare.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for StatusReshare
             * @function getTypeUrl
             * @memberof StatusAttributions.StatusAttribution.StatusReshare
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            StatusReshare.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/StatusAttributions.StatusAttribution.StatusReshare";
            };

            StatusReshare.Metadata = (function() {

                /**
                 * Properties of a Metadata.
                 * @typedef {Object} StatusAttributions.StatusAttribution.StatusReshare.Metadata.$Properties
                 * @property {number|null} [duration] Metadata duration
                 * @property {string|null} [channelJid] Metadata channelJid
                 * @property {number|null} [channelMessageId] Metadata channelMessageId
                 * @property {boolean|null} [hasMultipleReshares] Metadata hasMultipleReshares
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a Metadata.
                 * @memberof StatusAttributions.StatusAttribution.StatusReshare
                 * @interface IMetadata
                 * @augments StatusAttributions.StatusAttribution.StatusReshare.Metadata.$Properties
                 * @deprecated Use StatusAttributions.StatusAttribution.StatusReshare.Metadata.$Properties instead.
                 */

                /**
                 * Shape of a Metadata.
                 * @typedef {StatusAttributions.StatusAttribution.StatusReshare.Metadata.$Properties} StatusAttributions.StatusAttribution.StatusReshare.Metadata.$Shape
                 */

                /**
                 * Constructs a new Metadata.
                 * @memberof StatusAttributions.StatusAttribution.StatusReshare
                 * @classdesc Represents a Metadata.
                 * @constructor
                 * @param {StatusAttributions.StatusAttribution.StatusReshare.Metadata.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var Metadata = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * Metadata duration.
                 * @member {number|null|undefined} duration
                 * @memberof StatusAttributions.StatusAttribution.StatusReshare.Metadata
                 * @instance
                 */
                Metadata.prototype.duration = null;

                /**
                 * Metadata channelJid.
                 * @member {string|null|undefined} channelJid
                 * @memberof StatusAttributions.StatusAttribution.StatusReshare.Metadata
                 * @instance
                 */
                Metadata.prototype.channelJid = null;

                /**
                 * Metadata channelMessageId.
                 * @member {number|null|undefined} channelMessageId
                 * @memberof StatusAttributions.StatusAttribution.StatusReshare.Metadata
                 * @instance
                 */
                Metadata.prototype.channelMessageId = null;

                /**
                 * Metadata hasMultipleReshares.
                 * @member {boolean|null|undefined} hasMultipleReshares
                 * @memberof StatusAttributions.StatusAttribution.StatusReshare.Metadata
                 * @instance
                 */
                Metadata.prototype.hasMultipleReshares = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                // Virtual OneOf for proto3 optional field
                $Object.defineProperty(Metadata.prototype, "_duration", {
                    get: $util.oneOfGetter($oneOfFields = ["duration"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                $Object.defineProperty(Metadata.prototype, "_channelJid", {
                    get: $util.oneOfGetter($oneOfFields = ["channelJid"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                $Object.defineProperty(Metadata.prototype, "_channelMessageId", {
                    get: $util.oneOfGetter($oneOfFields = ["channelMessageId"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                $Object.defineProperty(Metadata.prototype, "_hasMultipleReshares", {
                    get: $util.oneOfGetter($oneOfFields = ["hasMultipleReshares"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new Metadata instance using the specified properties.
                 * @function create
                 * @memberof StatusAttributions.StatusAttribution.StatusReshare.Metadata
                 * @static
                 * @param {StatusAttributions.StatusAttribution.StatusReshare.Metadata.$Properties=} [properties] Properties to set
                 * @returns {StatusAttributions.StatusAttribution.StatusReshare.Metadata} Metadata instance
                 * @type {{
                 *   (properties: StatusAttributions.StatusAttribution.StatusReshare.Metadata.$Shape): StatusAttributions.StatusAttribution.StatusReshare.Metadata & StatusAttributions.StatusAttribution.StatusReshare.Metadata.$Shape;
                 *   (properties?: StatusAttributions.StatusAttribution.StatusReshare.Metadata.$Properties): StatusAttributions.StatusAttribution.StatusReshare.Metadata;
                 * }}
                 */
                Metadata.create = function(properties) {
                    return new Metadata(properties);
                };

                /**
                 * Encodes the specified Metadata message. Does not implicitly {@link StatusAttributions.StatusAttribution.StatusReshare.Metadata.verify|verify} messages.
                 * @function encode
                 * @memberof StatusAttributions.StatusAttribution.StatusReshare.Metadata
                 * @static
                 * @param {StatusAttributions.StatusAttribution.StatusReshare.Metadata.$Properties} message Metadata message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Metadata.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.duration != null && $Object.hasOwnProperty.call(message, "duration"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.duration);
                    if (message.channelJid != null && $Object.hasOwnProperty.call(message, "channelJid"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.channelJid);
                    if (message.channelMessageId != null && $Object.hasOwnProperty.call(message, "channelMessageId"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.channelMessageId);
                    if (message.hasMultipleReshares != null && $Object.hasOwnProperty.call(message, "hasMultipleReshares"))
                        writer.uint32(/* id 4, wireType 0 =*/32).bool(message.hasMultipleReshares);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified Metadata message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.StatusReshare.Metadata.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof StatusAttributions.StatusAttribution.StatusReshare.Metadata
                 * @static
                 * @param {StatusAttributions.StatusAttribution.StatusReshare.Metadata.$Properties} message Metadata message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Metadata.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };

                /**
                 * Decodes a Metadata message from the specified reader or buffer.
                 * @function decode
                 * @memberof StatusAttributions.StatusAttribution.StatusReshare.Metadata
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {StatusAttributions.StatusAttribution.StatusReshare.Metadata & StatusAttributions.StatusAttribution.StatusReshare.Metadata.$Shape} Metadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Metadata.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.StatusAttributions.StatusAttribution.StatusReshare.Metadata();
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
                                message.duration = reader.int32();
                                message._duration = "duration";
                                continue;
                            }
                        case 2: {
                                if (wireType !== 2)
                                    break;
                                message.channelJid = reader.stringVerify();
                                message._channelJid = "channelJid";
                                continue;
                            }
                        case 3: {
                                if (wireType !== 0)
                                    break;
                                message.channelMessageId = reader.int32();
                                message._channelMessageId = "channelMessageId";
                                continue;
                            }
                        case 4: {
                                if (wireType !== 0)
                                    break;
                                message.hasMultipleReshares = reader.bool();
                                message._hasMultipleReshares = "hasMultipleReshares";
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
                 * Decodes a Metadata message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof StatusAttributions.StatusAttribution.StatusReshare.Metadata
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {StatusAttributions.StatusAttribution.StatusReshare.Metadata & StatusAttributions.StatusAttribution.StatusReshare.Metadata.$Shape} Metadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Metadata.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Metadata message.
                 * @function verify
                 * @memberof StatusAttributions.StatusAttribution.StatusReshare.Metadata
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Metadata.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    var properties = {};
                    if (message.duration != null && $Object.hasOwnProperty.call(message, "duration")) {
                        properties._duration = 1;
                        if (!$util.isInteger(message.duration))
                            return "duration: integer expected";
                    }
                    if (message.channelJid != null && $Object.hasOwnProperty.call(message, "channelJid")) {
                        properties._channelJid = 1;
                        if (!$util.isString(message.channelJid))
                            return "channelJid: string expected";
                    }
                    if (message.channelMessageId != null && $Object.hasOwnProperty.call(message, "channelMessageId")) {
                        properties._channelMessageId = 1;
                        if (!$util.isInteger(message.channelMessageId))
                            return "channelMessageId: integer expected";
                    }
                    if (message.hasMultipleReshares != null && $Object.hasOwnProperty.call(message, "hasMultipleReshares")) {
                        properties._hasMultipleReshares = 1;
                        if (typeof message.hasMultipleReshares !== "boolean")
                            return "hasMultipleReshares: boolean expected";
                    }
                    return null;
                };

                /**
                 * Creates a Metadata message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof StatusAttributions.StatusAttribution.StatusReshare.Metadata
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {StatusAttributions.StatusAttribution.StatusReshare.Metadata} Metadata
                 */
                Metadata.fromObject = function (object, _depth) {
                    if (object instanceof $root.StatusAttributions.StatusAttribution.StatusReshare.Metadata)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".StatusAttributions.StatusAttribution.StatusReshare.Metadata: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.StatusAttributions.StatusAttribution.StatusReshare.Metadata();
                    if (object.duration != null)
                        message.duration = object.duration | 0;
                    if (object.channelJid != null)
                        message.channelJid = $String(object.channelJid);
                    if (object.channelMessageId != null)
                        message.channelMessageId = object.channelMessageId | 0;
                    if (object.hasMultipleReshares != null)
                        message.hasMultipleReshares = $Boolean(object.hasMultipleReshares);
                    return message;
                };

                /**
                 * Creates a plain object from a Metadata message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof StatusAttributions.StatusAttribution.StatusReshare.Metadata
                 * @static
                 * @param {StatusAttributions.StatusAttribution.StatusReshare.Metadata} message Metadata
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Metadata.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (message.duration != null && $Object.hasOwnProperty.call(message, "duration"))
                        object.duration = message.duration;
                    if (message.channelJid != null && $Object.hasOwnProperty.call(message, "channelJid"))
                        object.channelJid = message.channelJid;
                    if (message.channelMessageId != null && $Object.hasOwnProperty.call(message, "channelMessageId"))
                        object.channelMessageId = message.channelMessageId;
                    if (message.hasMultipleReshares != null && $Object.hasOwnProperty.call(message, "hasMultipleReshares"))
                        object.hasMultipleReshares = message.hasMultipleReshares;
                    return object;
                };

                /**
                 * Converts this Metadata to JSON.
                 * @function toJSON
                 * @memberof StatusAttributions.StatusAttribution.StatusReshare.Metadata
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Metadata.prototype.toJSON = function() {
                    return Metadata.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for Metadata
                 * @function getTypeUrl
                 * @memberof StatusAttributions.StatusAttribution.StatusReshare.Metadata
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                Metadata.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/StatusAttributions.StatusAttribution.StatusReshare.Metadata";
                };

                return Metadata;
            })();

            /**
             * Source enum.
             * @name StatusAttributions.StatusAttribution.StatusReshare.Source
             * @enum {number}
             * @property {number} UNKNOWN=0 UNKNOWN value
             * @property {number} INTERNAL_RESHARE=1 INTERNAL_RESHARE value
             * @property {number} MENTION_RESHARE=2 MENTION_RESHARE value
             * @property {number} CHANNEL_RESHARE=3 CHANNEL_RESHARE value
             * @property {number} FORWARD=4 FORWARD value
             */
            StatusReshare.Source = (function() {
                var valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "INTERNAL_RESHARE"] = 1;
                values[valuesById[2] = "MENTION_RESHARE"] = 2;
                values[valuesById[3] = "CHANNEL_RESHARE"] = 3;
                values[valuesById[4] = "FORWARD"] = 4;
                return values;
            })();

            return StatusReshare;
        })();

        /**
         * Type enum.
         * @name StatusAttributions.StatusAttribution.Type
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} RESHARE=1 RESHARE value
         * @property {number} EXTERNAL_SHARE=2 EXTERNAL_SHARE value
         * @property {number} MUSIC=3 MUSIC value
         * @property {number} STATUS_MENTION=4 STATUS_MENTION value
         * @property {number} GROUP_STATUS=5 GROUP_STATUS value
         * @property {number} RL_ATTRIBUTION=6 RL_ATTRIBUTION value
         * @property {number} AI_CREATED=7 AI_CREATED value
         * @property {number} LAYOUTS=8 LAYOUTS value
         * @property {number} NEWSLETTER_STATUS=9 NEWSLETTER_STATUS value
         * @property {number} STATUS_CLOSE_SHARING=10 STATUS_CLOSE_SHARING value
         * @property {number} PAID_PARTNERSHIP=11 PAID_PARTNERSHIP value
         */
        StatusAttribution.Type = (function() {
            var valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "RESHARE"] = 1;
            values[valuesById[2] = "EXTERNAL_SHARE"] = 2;
            values[valuesById[3] = "MUSIC"] = 3;
            values[valuesById[4] = "STATUS_MENTION"] = 4;
            values[valuesById[5] = "GROUP_STATUS"] = 5;
            values[valuesById[6] = "RL_ATTRIBUTION"] = 6;
            values[valuesById[7] = "AI_CREATED"] = 7;
            values[valuesById[8] = "LAYOUTS"] = 8;
            values[valuesById[9] = "NEWSLETTER_STATUS"] = 9;
            values[valuesById[10] = "STATUS_CLOSE_SHARING"] = 10;
            values[valuesById[11] = "PAID_PARTNERSHIP"] = 11;
            return values;
        })();

        return StatusAttribution;
    })();

    return StatusAttributions;
})();

module.exports = $root;
