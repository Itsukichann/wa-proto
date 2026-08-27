/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
var $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $RangeError = $util.global.RangeError, $TypeError = $util.global.TypeError, $String = $util.global.String, $parseInt = $util.global.parseInt, $BigInt = $util.global.BigInt, $Number = $util.global.Number, $Boolean = $util.global.Boolean;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.DeviceCapabilities = (function() {

    /**
     * Namespace DeviceCapabilities.
     * @exports DeviceCapabilities
     * @namespace
     */
    var DeviceCapabilities = {};

    DeviceCapabilities.DeviceCapabilities = (function() {

        /**
         * Properties of a DeviceCapabilities.
         * @typedef {Object} DeviceCapabilities.DeviceCapabilities.$Properties
         * @property {DeviceCapabilities.DeviceCapabilities.ChatLockSupportLevel|null} [chatLockSupportLevel] DeviceCapabilities chatLockSupportLevel
         * @property {DeviceCapabilities.DeviceCapabilities.LIDMigration.$Properties|null} [lidMigration] DeviceCapabilities lidMigration
         * @property {DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.$Properties|null} [businessBroadcast] DeviceCapabilities businessBroadcast
         * @property {DeviceCapabilities.DeviceCapabilities.UserHasAvatar.$Properties|null} [userHasAvatar] DeviceCapabilities userHasAvatar
         * @property {DeviceCapabilities.DeviceCapabilities.MemberNameTagPrimarySupport|null} [memberNameTagPrimarySupport] DeviceCapabilities memberNameTagPrimarySupport
         * @property {DeviceCapabilities.DeviceCapabilities.AiThread.$Properties|null} [aiThread] DeviceCapabilities aiThread
         * @property {DeviceCapabilities.DeviceCapabilities.AiFbidMigration.$Properties|null} [aiFbidMigration] DeviceCapabilities aiFbidMigration
         * @property {DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.$Properties|null} [bizAiSettingsSync] DeviceCapabilities bizAiSettingsSync
         * @property {DeviceCapabilities.DeviceCapabilities.ContactRefresh.$Properties|null} [contactRefresh] DeviceCapabilities contactRefresh
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a DeviceCapabilities.
         * @memberof DeviceCapabilities
         * @interface IDeviceCapabilities
         * @augments DeviceCapabilities.DeviceCapabilities.$Properties
         * @deprecated Use DeviceCapabilities.DeviceCapabilities.$Properties instead.
         */

        /**
         * Shape of a DeviceCapabilities.
         * @typedef {DeviceCapabilities.DeviceCapabilities.$Properties} DeviceCapabilities.DeviceCapabilities.$Shape
         */

        /**
         * Constructs a new DeviceCapabilities.
         * @memberof DeviceCapabilities
         * @classdesc Represents a DeviceCapabilities.
         * @constructor
         * @param {DeviceCapabilities.DeviceCapabilities.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var DeviceCapabilities = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * DeviceCapabilities chatLockSupportLevel.
         * @member {DeviceCapabilities.DeviceCapabilities.ChatLockSupportLevel|null|undefined} chatLockSupportLevel
         * @memberof DeviceCapabilities.DeviceCapabilities
         * @instance
         */
        DeviceCapabilities.prototype.chatLockSupportLevel = null;

        /**
         * DeviceCapabilities lidMigration.
         * @member {DeviceCapabilities.DeviceCapabilities.LIDMigration.$Properties|null|undefined} lidMigration
         * @memberof DeviceCapabilities.DeviceCapabilities
         * @instance
         */
        DeviceCapabilities.prototype.lidMigration = null;

        /**
         * DeviceCapabilities businessBroadcast.
         * @member {DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.$Properties|null|undefined} businessBroadcast
         * @memberof DeviceCapabilities.DeviceCapabilities
         * @instance
         */
        DeviceCapabilities.prototype.businessBroadcast = null;

        /**
         * DeviceCapabilities userHasAvatar.
         * @member {DeviceCapabilities.DeviceCapabilities.UserHasAvatar.$Properties|null|undefined} userHasAvatar
         * @memberof DeviceCapabilities.DeviceCapabilities
         * @instance
         */
        DeviceCapabilities.prototype.userHasAvatar = null;

        /**
         * DeviceCapabilities memberNameTagPrimarySupport.
         * @member {DeviceCapabilities.DeviceCapabilities.MemberNameTagPrimarySupport|null|undefined} memberNameTagPrimarySupport
         * @memberof DeviceCapabilities.DeviceCapabilities
         * @instance
         */
        DeviceCapabilities.prototype.memberNameTagPrimarySupport = null;

        /**
         * DeviceCapabilities aiThread.
         * @member {DeviceCapabilities.DeviceCapabilities.AiThread.$Properties|null|undefined} aiThread
         * @memberof DeviceCapabilities.DeviceCapabilities
         * @instance
         */
        DeviceCapabilities.prototype.aiThread = null;

        /**
         * DeviceCapabilities aiFbidMigration.
         * @member {DeviceCapabilities.DeviceCapabilities.AiFbidMigration.$Properties|null|undefined} aiFbidMigration
         * @memberof DeviceCapabilities.DeviceCapabilities
         * @instance
         */
        DeviceCapabilities.prototype.aiFbidMigration = null;

        /**
         * DeviceCapabilities bizAiSettingsSync.
         * @member {DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.$Properties|null|undefined} bizAiSettingsSync
         * @memberof DeviceCapabilities.DeviceCapabilities
         * @instance
         */
        DeviceCapabilities.prototype.bizAiSettingsSync = null;

        /**
         * DeviceCapabilities contactRefresh.
         * @member {DeviceCapabilities.DeviceCapabilities.ContactRefresh.$Properties|null|undefined} contactRefresh
         * @memberof DeviceCapabilities.DeviceCapabilities
         * @instance
         */
        DeviceCapabilities.prototype.contactRefresh = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(DeviceCapabilities.prototype, "_chatLockSupportLevel", {
            get: $util.oneOfGetter($oneOfFields = ["chatLockSupportLevel"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(DeviceCapabilities.prototype, "_lidMigration", {
            get: $util.oneOfGetter($oneOfFields = ["lidMigration"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(DeviceCapabilities.prototype, "_businessBroadcast", {
            get: $util.oneOfGetter($oneOfFields = ["businessBroadcast"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(DeviceCapabilities.prototype, "_userHasAvatar", {
            get: $util.oneOfGetter($oneOfFields = ["userHasAvatar"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(DeviceCapabilities.prototype, "_memberNameTagPrimarySupport", {
            get: $util.oneOfGetter($oneOfFields = ["memberNameTagPrimarySupport"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(DeviceCapabilities.prototype, "_aiThread", {
            get: $util.oneOfGetter($oneOfFields = ["aiThread"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(DeviceCapabilities.prototype, "_aiFbidMigration", {
            get: $util.oneOfGetter($oneOfFields = ["aiFbidMigration"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(DeviceCapabilities.prototype, "_bizAiSettingsSync", {
            get: $util.oneOfGetter($oneOfFields = ["bizAiSettingsSync"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(DeviceCapabilities.prototype, "_contactRefresh", {
            get: $util.oneOfGetter($oneOfFields = ["contactRefresh"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new DeviceCapabilities instance using the specified properties.
         * @function create
         * @memberof DeviceCapabilities.DeviceCapabilities
         * @static
         * @param {DeviceCapabilities.DeviceCapabilities.$Properties=} [properties] Properties to set
         * @returns {DeviceCapabilities.DeviceCapabilities} DeviceCapabilities instance
         * @type {{
         *   (properties: DeviceCapabilities.DeviceCapabilities.$Shape): DeviceCapabilities.DeviceCapabilities & DeviceCapabilities.DeviceCapabilities.$Shape;
         *   (properties?: DeviceCapabilities.DeviceCapabilities.$Properties): DeviceCapabilities.DeviceCapabilities;
         * }}
         */
        DeviceCapabilities.create = function(properties) {
            return new DeviceCapabilities(properties);
        };

        /**
         * Encodes the specified DeviceCapabilities message. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.verify|verify} messages.
         * @function encode
         * @memberof DeviceCapabilities.DeviceCapabilities
         * @static
         * @param {DeviceCapabilities.DeviceCapabilities.$Properties} message DeviceCapabilities message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceCapabilities.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.chatLockSupportLevel != null && $Object.hasOwnProperty.call(message, "chatLockSupportLevel"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.chatLockSupportLevel);
            if (message.lidMigration != null && $Object.hasOwnProperty.call(message, "lidMigration"))
                $root.DeviceCapabilities.DeviceCapabilities.LIDMigration.encode(message.lidMigration, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
            if (message.businessBroadcast != null && $Object.hasOwnProperty.call(message, "businessBroadcast"))
                $root.DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.encode(message.businessBroadcast, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
            if (message.userHasAvatar != null && $Object.hasOwnProperty.call(message, "userHasAvatar"))
                $root.DeviceCapabilities.DeviceCapabilities.UserHasAvatar.encode(message.userHasAvatar, writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
            if (message.memberNameTagPrimarySupport != null && $Object.hasOwnProperty.call(message, "memberNameTagPrimarySupport"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.memberNameTagPrimarySupport);
            if (message.aiThread != null && $Object.hasOwnProperty.call(message, "aiThread"))
                $root.DeviceCapabilities.DeviceCapabilities.AiThread.encode(message.aiThread, writer.uint32(/* id 6, wireType 2 =*/50).fork(), _depth + 1).ldelim();
            if (message.aiFbidMigration != null && $Object.hasOwnProperty.call(message, "aiFbidMigration"))
                $root.DeviceCapabilities.DeviceCapabilities.AiFbidMigration.encode(message.aiFbidMigration, writer.uint32(/* id 7, wireType 2 =*/58).fork(), _depth + 1).ldelim();
            if (message.bizAiSettingsSync != null && $Object.hasOwnProperty.call(message, "bizAiSettingsSync"))
                $root.DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.encode(message.bizAiSettingsSync, writer.uint32(/* id 8, wireType 2 =*/66).fork(), _depth + 1).ldelim();
            if (message.contactRefresh != null && $Object.hasOwnProperty.call(message, "contactRefresh"))
                $root.DeviceCapabilities.DeviceCapabilities.ContactRefresh.encode(message.contactRefresh, writer.uint32(/* id 9, wireType 2 =*/74).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified DeviceCapabilities message, length delimited. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DeviceCapabilities.DeviceCapabilities
         * @static
         * @param {DeviceCapabilities.DeviceCapabilities.$Properties} message DeviceCapabilities message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceCapabilities.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a DeviceCapabilities message from the specified reader or buffer.
         * @function decode
         * @memberof DeviceCapabilities.DeviceCapabilities
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DeviceCapabilities.DeviceCapabilities & DeviceCapabilities.DeviceCapabilities.$Shape} DeviceCapabilities
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceCapabilities.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end, message, value;
            if (length === $undefined)
                end = reader.len;
            else {
                end = reader.pos + length;
                if (end > reader.len)
                    throw $RangeError("index out of range");
                length = reader.len;
                reader.len = end;
            }
            message = _target || new $root.DeviceCapabilities.DeviceCapabilities();
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
                        message.chatLockSupportLevel = reader.int32();
                        message._chatLockSupportLevel = "chatLockSupportLevel";
                        continue;
                    }
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.lidMigration = $root.DeviceCapabilities.DeviceCapabilities.LIDMigration.decode(reader, reader.uint32(), $undefined, _depth + 1, message.lidMigration);
                        message._lidMigration = "lidMigration";
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        message.businessBroadcast = $root.DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.decode(reader, reader.uint32(), $undefined, _depth + 1, message.businessBroadcast);
                        message._businessBroadcast = "businessBroadcast";
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        message.userHasAvatar = $root.DeviceCapabilities.DeviceCapabilities.UserHasAvatar.decode(reader, reader.uint32(), $undefined, _depth + 1, message.userHasAvatar);
                        message._userHasAvatar = "userHasAvatar";
                        continue;
                    }
                case 5: {
                        if (wireType !== 0)
                            break;
                        message.memberNameTagPrimarySupport = reader.int32();
                        message._memberNameTagPrimarySupport = "memberNameTagPrimarySupport";
                        continue;
                    }
                case 6: {
                        if (wireType !== 2)
                            break;
                        message.aiThread = $root.DeviceCapabilities.DeviceCapabilities.AiThread.decode(reader, reader.uint32(), $undefined, _depth + 1, message.aiThread);
                        message._aiThread = "aiThread";
                        continue;
                    }
                case 7: {
                        if (wireType !== 2)
                            break;
                        message.aiFbidMigration = $root.DeviceCapabilities.DeviceCapabilities.AiFbidMigration.decode(reader, reader.uint32(), $undefined, _depth + 1, message.aiFbidMigration);
                        message._aiFbidMigration = "aiFbidMigration";
                        continue;
                    }
                case 8: {
                        if (wireType !== 2)
                            break;
                        message.bizAiSettingsSync = $root.DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.decode(reader, reader.uint32(), $undefined, _depth + 1, message.bizAiSettingsSync);
                        message._bizAiSettingsSync = "bizAiSettingsSync";
                        continue;
                    }
                case 9: {
                        if (wireType !== 2)
                            break;
                        message.contactRefresh = $root.DeviceCapabilities.DeviceCapabilities.ContactRefresh.decode(reader, reader.uint32(), $undefined, _depth + 1, message.contactRefresh);
                        message._contactRefresh = "contactRefresh";
                        continue;
                    }
                }
                reader.skipType(wireType, _depth, tag);
                if (!reader.discardUnknown) {
                    $util.makeProp(message, "$unknowns", false);
                    (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                }
            }
            if (length !== $undefined) {
                if (reader.pos !== end)
                    throw $RangeError("index out of range");
                reader.len = length;
            }
            if (_end !== $undefined)
                throw $Error("missing end group");
            return message;
        };

        /**
         * Decodes a DeviceCapabilities message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DeviceCapabilities.DeviceCapabilities
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DeviceCapabilities.DeviceCapabilities & DeviceCapabilities.DeviceCapabilities.$Shape} DeviceCapabilities
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceCapabilities.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeviceCapabilities message.
         * @function verify
         * @memberof DeviceCapabilities.DeviceCapabilities
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeviceCapabilities.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.chatLockSupportLevel != null && $Object.hasOwnProperty.call(message, "chatLockSupportLevel")) {
                properties._chatLockSupportLevel = 1;
                if (typeof message.chatLockSupportLevel !== "number" || (message.chatLockSupportLevel | 0) !== message.chatLockSupportLevel)
                    return "chatLockSupportLevel: enum value expected";
            }
            if (message.lidMigration != null && $Object.hasOwnProperty.call(message, "lidMigration")) {
                properties._lidMigration = 1;
                {
                    var error = $root.DeviceCapabilities.DeviceCapabilities.LIDMigration.verify(message.lidMigration, _depth + 1);
                    if (error)
                        return "lidMigration." + error;
                }
            }
            if (message.businessBroadcast != null && $Object.hasOwnProperty.call(message, "businessBroadcast")) {
                properties._businessBroadcast = 1;
                {
                    var error = $root.DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.verify(message.businessBroadcast, _depth + 1);
                    if (error)
                        return "businessBroadcast." + error;
                }
            }
            if (message.userHasAvatar != null && $Object.hasOwnProperty.call(message, "userHasAvatar")) {
                properties._userHasAvatar = 1;
                {
                    var error = $root.DeviceCapabilities.DeviceCapabilities.UserHasAvatar.verify(message.userHasAvatar, _depth + 1);
                    if (error)
                        return "userHasAvatar." + error;
                }
            }
            if (message.memberNameTagPrimarySupport != null && $Object.hasOwnProperty.call(message, "memberNameTagPrimarySupport")) {
                properties._memberNameTagPrimarySupport = 1;
                if (typeof message.memberNameTagPrimarySupport !== "number" || (message.memberNameTagPrimarySupport | 0) !== message.memberNameTagPrimarySupport)
                    return "memberNameTagPrimarySupport: enum value expected";
            }
            if (message.aiThread != null && $Object.hasOwnProperty.call(message, "aiThread")) {
                properties._aiThread = 1;
                {
                    var error = $root.DeviceCapabilities.DeviceCapabilities.AiThread.verify(message.aiThread, _depth + 1);
                    if (error)
                        return "aiThread." + error;
                }
            }
            if (message.aiFbidMigration != null && $Object.hasOwnProperty.call(message, "aiFbidMigration")) {
                properties._aiFbidMigration = 1;
                {
                    var error = $root.DeviceCapabilities.DeviceCapabilities.AiFbidMigration.verify(message.aiFbidMigration, _depth + 1);
                    if (error)
                        return "aiFbidMigration." + error;
                }
            }
            if (message.bizAiSettingsSync != null && $Object.hasOwnProperty.call(message, "bizAiSettingsSync")) {
                properties._bizAiSettingsSync = 1;
                {
                    var error = $root.DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.verify(message.bizAiSettingsSync, _depth + 1);
                    if (error)
                        return "bizAiSettingsSync." + error;
                }
            }
            if (message.contactRefresh != null && $Object.hasOwnProperty.call(message, "contactRefresh")) {
                properties._contactRefresh = 1;
                {
                    var error = $root.DeviceCapabilities.DeviceCapabilities.ContactRefresh.verify(message.contactRefresh, _depth + 1);
                    if (error)
                        return "contactRefresh." + error;
                }
            }
            return null;
        };

        /**
         * Creates a DeviceCapabilities message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DeviceCapabilities.DeviceCapabilities
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DeviceCapabilities.DeviceCapabilities} DeviceCapabilities
         */
        DeviceCapabilities.fromObject = function (object, _depth) {
            if (object instanceof $root.DeviceCapabilities.DeviceCapabilities)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".DeviceCapabilities.DeviceCapabilities: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.DeviceCapabilities.DeviceCapabilities();
            switch (object.chatLockSupportLevel) {
            case "NONE":
            case 0:
                message.chatLockSupportLevel = 0;
                break;
            case "MINIMAL":
            case 1:
                message.chatLockSupportLevel = 1;
                break;
            case "FULL":
            case 2:
                message.chatLockSupportLevel = 2;
                break;
            default:
                if (typeof object.chatLockSupportLevel === "number" && (object.chatLockSupportLevel | 0) === object.chatLockSupportLevel)
                    message.chatLockSupportLevel = object.chatLockSupportLevel;
            }
            if (object.lidMigration != null) {
                if (!$util.isObject(object.lidMigration))
                    throw $TypeError(".DeviceCapabilities.DeviceCapabilities.lidMigration: object expected");
                message.lidMigration = $root.DeviceCapabilities.DeviceCapabilities.LIDMigration.fromObject(object.lidMigration, _depth + 1);
            }
            if (object.businessBroadcast != null) {
                if (!$util.isObject(object.businessBroadcast))
                    throw $TypeError(".DeviceCapabilities.DeviceCapabilities.businessBroadcast: object expected");
                message.businessBroadcast = $root.DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.fromObject(object.businessBroadcast, _depth + 1);
            }
            if (object.userHasAvatar != null) {
                if (!$util.isObject(object.userHasAvatar))
                    throw $TypeError(".DeviceCapabilities.DeviceCapabilities.userHasAvatar: object expected");
                message.userHasAvatar = $root.DeviceCapabilities.DeviceCapabilities.UserHasAvatar.fromObject(object.userHasAvatar, _depth + 1);
            }
            switch (object.memberNameTagPrimarySupport) {
            case "DISABLED":
            case 0:
                message.memberNameTagPrimarySupport = 0;
                break;
            case "RECEIVER_ENABLED":
            case 1:
                message.memberNameTagPrimarySupport = 1;
                break;
            case "SENDER_ENABLED":
            case 2:
                message.memberNameTagPrimarySupport = 2;
                break;
            default:
                if (typeof object.memberNameTagPrimarySupport === "number" && (object.memberNameTagPrimarySupport | 0) === object.memberNameTagPrimarySupport)
                    message.memberNameTagPrimarySupport = object.memberNameTagPrimarySupport;
            }
            if (object.aiThread != null) {
                if (!$util.isObject(object.aiThread))
                    throw $TypeError(".DeviceCapabilities.DeviceCapabilities.aiThread: object expected");
                message.aiThread = $root.DeviceCapabilities.DeviceCapabilities.AiThread.fromObject(object.aiThread, _depth + 1);
            }
            if (object.aiFbidMigration != null) {
                if (!$util.isObject(object.aiFbidMigration))
                    throw $TypeError(".DeviceCapabilities.DeviceCapabilities.aiFbidMigration: object expected");
                message.aiFbidMigration = $root.DeviceCapabilities.DeviceCapabilities.AiFbidMigration.fromObject(object.aiFbidMigration, _depth + 1);
            }
            if (object.bizAiSettingsSync != null) {
                if (!$util.isObject(object.bizAiSettingsSync))
                    throw $TypeError(".DeviceCapabilities.DeviceCapabilities.bizAiSettingsSync: object expected");
                message.bizAiSettingsSync = $root.DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.fromObject(object.bizAiSettingsSync, _depth + 1);
            }
            if (object.contactRefresh != null) {
                if (!$util.isObject(object.contactRefresh))
                    throw $TypeError(".DeviceCapabilities.DeviceCapabilities.contactRefresh: object expected");
                message.contactRefresh = $root.DeviceCapabilities.DeviceCapabilities.ContactRefresh.fromObject(object.contactRefresh, _depth + 1);
            }
            return message;
        };

        /**
         * Creates a plain object from a DeviceCapabilities message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DeviceCapabilities.DeviceCapabilities
         * @static
         * @param {DeviceCapabilities.DeviceCapabilities} message DeviceCapabilities
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeviceCapabilities.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.chatLockSupportLevel != null && $Object.hasOwnProperty.call(message, "chatLockSupportLevel"))
                object.chatLockSupportLevel = options.enums === $String ? $root.DeviceCapabilities.DeviceCapabilities.ChatLockSupportLevel[message.chatLockSupportLevel] === $undefined ? message.chatLockSupportLevel : $root.DeviceCapabilities.DeviceCapabilities.ChatLockSupportLevel[message.chatLockSupportLevel] : message.chatLockSupportLevel;
            if (message.lidMigration != null && $Object.hasOwnProperty.call(message, "lidMigration"))
                object.lidMigration = $root.DeviceCapabilities.DeviceCapabilities.LIDMigration.toObject(message.lidMigration, options, _depth + 1);
            if (message.businessBroadcast != null && $Object.hasOwnProperty.call(message, "businessBroadcast"))
                object.businessBroadcast = $root.DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.toObject(message.businessBroadcast, options, _depth + 1);
            if (message.userHasAvatar != null && $Object.hasOwnProperty.call(message, "userHasAvatar"))
                object.userHasAvatar = $root.DeviceCapabilities.DeviceCapabilities.UserHasAvatar.toObject(message.userHasAvatar, options, _depth + 1);
            if (message.memberNameTagPrimarySupport != null && $Object.hasOwnProperty.call(message, "memberNameTagPrimarySupport"))
                object.memberNameTagPrimarySupport = options.enums === $String ? $root.DeviceCapabilities.DeviceCapabilities.MemberNameTagPrimarySupport[message.memberNameTagPrimarySupport] === $undefined ? message.memberNameTagPrimarySupport : $root.DeviceCapabilities.DeviceCapabilities.MemberNameTagPrimarySupport[message.memberNameTagPrimarySupport] : message.memberNameTagPrimarySupport;
            if (message.aiThread != null && $Object.hasOwnProperty.call(message, "aiThread"))
                object.aiThread = $root.DeviceCapabilities.DeviceCapabilities.AiThread.toObject(message.aiThread, options, _depth + 1);
            if (message.aiFbidMigration != null && $Object.hasOwnProperty.call(message, "aiFbidMigration"))
                object.aiFbidMigration = $root.DeviceCapabilities.DeviceCapabilities.AiFbidMigration.toObject(message.aiFbidMigration, options, _depth + 1);
            if (message.bizAiSettingsSync != null && $Object.hasOwnProperty.call(message, "bizAiSettingsSync"))
                object.bizAiSettingsSync = $root.DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.toObject(message.bizAiSettingsSync, options, _depth + 1);
            if (message.contactRefresh != null && $Object.hasOwnProperty.call(message, "contactRefresh"))
                object.contactRefresh = $root.DeviceCapabilities.DeviceCapabilities.ContactRefresh.toObject(message.contactRefresh, options, _depth + 1);
            return object;
        };

        /**
         * Converts this DeviceCapabilities to JSON.
         * @function toJSON
         * @memberof DeviceCapabilities.DeviceCapabilities
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeviceCapabilities.prototype.toJSON = function() {
            return DeviceCapabilities.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for DeviceCapabilities
         * @function getTypeUrl
         * @memberof DeviceCapabilities.DeviceCapabilities
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        DeviceCapabilities.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/DeviceCapabilities.DeviceCapabilities";
        };

        DeviceCapabilities.AiFbidMigration = (function() {

            /**
             * Properties of an AiFbidMigration.
             * @typedef {Object} DeviceCapabilities.DeviceCapabilities.AiFbidMigration.$Properties
             * @property {number|Long|null} [chatDbMigrationTimestamp] AiFbidMigration chatDbMigrationTimestamp
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of an AiFbidMigration.
             * @memberof DeviceCapabilities.DeviceCapabilities
             * @interface IAiFbidMigration
             * @augments DeviceCapabilities.DeviceCapabilities.AiFbidMigration.$Properties
             * @deprecated Use DeviceCapabilities.DeviceCapabilities.AiFbidMigration.$Properties instead.
             */

            /**
             * Shape of an AiFbidMigration.
             * @typedef {DeviceCapabilities.DeviceCapabilities.AiFbidMigration.$Properties} DeviceCapabilities.DeviceCapabilities.AiFbidMigration.$Shape
             */

            /**
             * Constructs a new AiFbidMigration.
             * @memberof DeviceCapabilities.DeviceCapabilities
             * @classdesc Represents an AiFbidMigration.
             * @constructor
             * @param {DeviceCapabilities.DeviceCapabilities.AiFbidMigration.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var AiFbidMigration = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * AiFbidMigration chatDbMigrationTimestamp.
             * @member {number|Long|null|undefined} chatDbMigrationTimestamp
             * @memberof DeviceCapabilities.DeviceCapabilities.AiFbidMigration
             * @instance
             */
            AiFbidMigration.prototype.chatDbMigrationTimestamp = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(AiFbidMigration.prototype, "_chatDbMigrationTimestamp", {
                get: $util.oneOfGetter($oneOfFields = ["chatDbMigrationTimestamp"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new AiFbidMigration instance using the specified properties.
             * @function create
             * @memberof DeviceCapabilities.DeviceCapabilities.AiFbidMigration
             * @static
             * @param {DeviceCapabilities.DeviceCapabilities.AiFbidMigration.$Properties=} [properties] Properties to set
             * @returns {DeviceCapabilities.DeviceCapabilities.AiFbidMigration} AiFbidMigration instance
             * @type {{
             *   (properties: DeviceCapabilities.DeviceCapabilities.AiFbidMigration.$Shape): DeviceCapabilities.DeviceCapabilities.AiFbidMigration & DeviceCapabilities.DeviceCapabilities.AiFbidMigration.$Shape;
             *   (properties?: DeviceCapabilities.DeviceCapabilities.AiFbidMigration.$Properties): DeviceCapabilities.DeviceCapabilities.AiFbidMigration;
             * }}
             */
            AiFbidMigration.create = function(properties) {
                return new AiFbidMigration(properties);
            };

            /**
             * Encodes the specified AiFbidMigration message. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.AiFbidMigration.verify|verify} messages.
             * @function encode
             * @memberof DeviceCapabilities.DeviceCapabilities.AiFbidMigration
             * @static
             * @param {DeviceCapabilities.DeviceCapabilities.AiFbidMigration.$Properties} message AiFbidMigration message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AiFbidMigration.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.chatDbMigrationTimestamp != null && $Object.hasOwnProperty.call(message, "chatDbMigrationTimestamp"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.chatDbMigrationTimestamp);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified AiFbidMigration message, length delimited. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.AiFbidMigration.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DeviceCapabilities.DeviceCapabilities.AiFbidMigration
             * @static
             * @param {DeviceCapabilities.DeviceCapabilities.AiFbidMigration.$Properties} message AiFbidMigration message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AiFbidMigration.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes an AiFbidMigration message from the specified reader or buffer.
             * @function decode
             * @memberof DeviceCapabilities.DeviceCapabilities.AiFbidMigration
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DeviceCapabilities.DeviceCapabilities.AiFbidMigration & DeviceCapabilities.DeviceCapabilities.AiFbidMigration.$Shape} AiFbidMigration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AiFbidMigration.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.DeviceCapabilities.DeviceCapabilities.AiFbidMigration();
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
                            message.chatDbMigrationTimestamp = reader.uint64();
                            message._chatDbMigrationTimestamp = "chatDbMigrationTimestamp";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes an AiFbidMigration message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DeviceCapabilities.DeviceCapabilities.AiFbidMigration
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DeviceCapabilities.DeviceCapabilities.AiFbidMigration & DeviceCapabilities.DeviceCapabilities.AiFbidMigration.$Shape} AiFbidMigration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AiFbidMigration.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AiFbidMigration message.
             * @function verify
             * @memberof DeviceCapabilities.DeviceCapabilities.AiFbidMigration
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AiFbidMigration.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.chatDbMigrationTimestamp != null && $Object.hasOwnProperty.call(message, "chatDbMigrationTimestamp")) {
                    properties._chatDbMigrationTimestamp = 1;
                    if (!$util.isInteger(message.chatDbMigrationTimestamp) && !(message.chatDbMigrationTimestamp && $util.isInteger(message.chatDbMigrationTimestamp.low) && $util.isInteger(message.chatDbMigrationTimestamp.high)))
                        return "chatDbMigrationTimestamp: integer|Long expected";
                }
                return null;
            };

            /**
             * Creates an AiFbidMigration message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DeviceCapabilities.DeviceCapabilities.AiFbidMigration
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DeviceCapabilities.DeviceCapabilities.AiFbidMigration} AiFbidMigration
             */
            AiFbidMigration.fromObject = function (object, _depth) {
                if (object instanceof $root.DeviceCapabilities.DeviceCapabilities.AiFbidMigration)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".DeviceCapabilities.DeviceCapabilities.AiFbidMigration: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.DeviceCapabilities.DeviceCapabilities.AiFbidMigration();
                if (object.chatDbMigrationTimestamp != null)
                    if ($util.Long)
                        message.chatDbMigrationTimestamp = $util.Long.fromValue(object.chatDbMigrationTimestamp, true);
                    else if (typeof object.chatDbMigrationTimestamp === "string")
                        message.chatDbMigrationTimestamp = $parseInt(object.chatDbMigrationTimestamp, 10);
                    else if (typeof object.chatDbMigrationTimestamp === "number")
                        message.chatDbMigrationTimestamp = object.chatDbMigrationTimestamp;
                    else if (typeof object.chatDbMigrationTimestamp === "object")
                        message.chatDbMigrationTimestamp = new $util.LongBits(object.chatDbMigrationTimestamp.low >>> 0, object.chatDbMigrationTimestamp.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from an AiFbidMigration message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DeviceCapabilities.DeviceCapabilities.AiFbidMigration
             * @static
             * @param {DeviceCapabilities.DeviceCapabilities.AiFbidMigration} message AiFbidMigration
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AiFbidMigration.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (message.chatDbMigrationTimestamp != null && $Object.hasOwnProperty.call(message, "chatDbMigrationTimestamp"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.chatDbMigrationTimestamp = typeof message.chatDbMigrationTimestamp === "number" ? $BigInt(message.chatDbMigrationTimestamp) : $util.Long.fromBits(message.chatDbMigrationTimestamp.low >>> 0, message.chatDbMigrationTimestamp.high >>> 0, true).toBigInt();
                    else if (typeof message.chatDbMigrationTimestamp === "number")
                        object.chatDbMigrationTimestamp = options.longs === $String ? $String(message.chatDbMigrationTimestamp) : message.chatDbMigrationTimestamp;
                    else
                        object.chatDbMigrationTimestamp = options.longs === $String ? $util.Long.prototype.toString.call(message.chatDbMigrationTimestamp) : options.longs === $Number ? new $util.LongBits(message.chatDbMigrationTimestamp.low >>> 0, message.chatDbMigrationTimestamp.high >>> 0).toNumber(true) : message.chatDbMigrationTimestamp;
                return object;
            };

            /**
             * Converts this AiFbidMigration to JSON.
             * @function toJSON
             * @memberof DeviceCapabilities.DeviceCapabilities.AiFbidMigration
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AiFbidMigration.prototype.toJSON = function() {
                return AiFbidMigration.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for AiFbidMigration
             * @function getTypeUrl
             * @memberof DeviceCapabilities.DeviceCapabilities.AiFbidMigration
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            AiFbidMigration.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/DeviceCapabilities.DeviceCapabilities.AiFbidMigration";
            };

            return AiFbidMigration;
        })();

        DeviceCapabilities.AiThread = (function() {

            /**
             * Properties of an AiThread.
             * @typedef {Object} DeviceCapabilities.DeviceCapabilities.AiThread.$Properties
             * @property {DeviceCapabilities.DeviceCapabilities.AiThread.SupportLevel|null} [supportLevel] AiThread supportLevel
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of an AiThread.
             * @memberof DeviceCapabilities.DeviceCapabilities
             * @interface IAiThread
             * @augments DeviceCapabilities.DeviceCapabilities.AiThread.$Properties
             * @deprecated Use DeviceCapabilities.DeviceCapabilities.AiThread.$Properties instead.
             */

            /**
             * Shape of an AiThread.
             * @typedef {DeviceCapabilities.DeviceCapabilities.AiThread.$Properties} DeviceCapabilities.DeviceCapabilities.AiThread.$Shape
             */

            /**
             * Constructs a new AiThread.
             * @memberof DeviceCapabilities.DeviceCapabilities
             * @classdesc Represents an AiThread.
             * @constructor
             * @param {DeviceCapabilities.DeviceCapabilities.AiThread.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var AiThread = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * AiThread supportLevel.
             * @member {DeviceCapabilities.DeviceCapabilities.AiThread.SupportLevel|null|undefined} supportLevel
             * @memberof DeviceCapabilities.DeviceCapabilities.AiThread
             * @instance
             */
            AiThread.prototype.supportLevel = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(AiThread.prototype, "_supportLevel", {
                get: $util.oneOfGetter($oneOfFields = ["supportLevel"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new AiThread instance using the specified properties.
             * @function create
             * @memberof DeviceCapabilities.DeviceCapabilities.AiThread
             * @static
             * @param {DeviceCapabilities.DeviceCapabilities.AiThread.$Properties=} [properties] Properties to set
             * @returns {DeviceCapabilities.DeviceCapabilities.AiThread} AiThread instance
             * @type {{
             *   (properties: DeviceCapabilities.DeviceCapabilities.AiThread.$Shape): DeviceCapabilities.DeviceCapabilities.AiThread & DeviceCapabilities.DeviceCapabilities.AiThread.$Shape;
             *   (properties?: DeviceCapabilities.DeviceCapabilities.AiThread.$Properties): DeviceCapabilities.DeviceCapabilities.AiThread;
             * }}
             */
            AiThread.create = function(properties) {
                return new AiThread(properties);
            };

            /**
             * Encodes the specified AiThread message. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.AiThread.verify|verify} messages.
             * @function encode
             * @memberof DeviceCapabilities.DeviceCapabilities.AiThread
             * @static
             * @param {DeviceCapabilities.DeviceCapabilities.AiThread.$Properties} message AiThread message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AiThread.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.supportLevel != null && $Object.hasOwnProperty.call(message, "supportLevel"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.supportLevel);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified AiThread message, length delimited. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.AiThread.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DeviceCapabilities.DeviceCapabilities.AiThread
             * @static
             * @param {DeviceCapabilities.DeviceCapabilities.AiThread.$Properties} message AiThread message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AiThread.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes an AiThread message from the specified reader or buffer.
             * @function decode
             * @memberof DeviceCapabilities.DeviceCapabilities.AiThread
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DeviceCapabilities.DeviceCapabilities.AiThread & DeviceCapabilities.DeviceCapabilities.AiThread.$Shape} AiThread
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AiThread.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end, message, value;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.DeviceCapabilities.DeviceCapabilities.AiThread();
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
                            message.supportLevel = reader.int32();
                            message._supportLevel = "supportLevel";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes an AiThread message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DeviceCapabilities.DeviceCapabilities.AiThread
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DeviceCapabilities.DeviceCapabilities.AiThread & DeviceCapabilities.DeviceCapabilities.AiThread.$Shape} AiThread
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AiThread.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AiThread message.
             * @function verify
             * @memberof DeviceCapabilities.DeviceCapabilities.AiThread
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AiThread.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.supportLevel != null && $Object.hasOwnProperty.call(message, "supportLevel")) {
                    properties._supportLevel = 1;
                    if (typeof message.supportLevel !== "number" || (message.supportLevel | 0) !== message.supportLevel)
                        return "supportLevel: enum value expected";
                }
                return null;
            };

            /**
             * Creates an AiThread message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DeviceCapabilities.DeviceCapabilities.AiThread
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DeviceCapabilities.DeviceCapabilities.AiThread} AiThread
             */
            AiThread.fromObject = function (object, _depth) {
                if (object instanceof $root.DeviceCapabilities.DeviceCapabilities.AiThread)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".DeviceCapabilities.DeviceCapabilities.AiThread: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.DeviceCapabilities.DeviceCapabilities.AiThread();
                switch (object.supportLevel) {
                case "NONE":
                case 0:
                    message.supportLevel = 0;
                    break;
                case "INFRA":
                case 1:
                    message.supportLevel = 1;
                    break;
                case "FULL":
                case 2:
                    message.supportLevel = 2;
                    break;
                default:
                    if (typeof object.supportLevel === "number" && (object.supportLevel | 0) === object.supportLevel)
                        message.supportLevel = object.supportLevel;
                }
                return message;
            };

            /**
             * Creates a plain object from an AiThread message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DeviceCapabilities.DeviceCapabilities.AiThread
             * @static
             * @param {DeviceCapabilities.DeviceCapabilities.AiThread} message AiThread
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AiThread.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (message.supportLevel != null && $Object.hasOwnProperty.call(message, "supportLevel"))
                    object.supportLevel = options.enums === $String ? $root.DeviceCapabilities.DeviceCapabilities.AiThread.SupportLevel[message.supportLevel] === $undefined ? message.supportLevel : $root.DeviceCapabilities.DeviceCapabilities.AiThread.SupportLevel[message.supportLevel] : message.supportLevel;
                return object;
            };

            /**
             * Converts this AiThread to JSON.
             * @function toJSON
             * @memberof DeviceCapabilities.DeviceCapabilities.AiThread
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AiThread.prototype.toJSON = function() {
                return AiThread.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for AiThread
             * @function getTypeUrl
             * @memberof DeviceCapabilities.DeviceCapabilities.AiThread
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            AiThread.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/DeviceCapabilities.DeviceCapabilities.AiThread";
            };

            /**
             * SupportLevel enum.
             * @name DeviceCapabilities.DeviceCapabilities.AiThread.SupportLevel
             * @enum {number}
             * @property {number} NONE=0 NONE value
             * @property {number} INFRA=1 INFRA value
             * @property {number} FULL=2 FULL value
             */
            AiThread.SupportLevel = (function() {
                var valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "NONE"] = 0;
                values[valuesById[1] = "INFRA"] = 1;
                values[valuesById[2] = "FULL"] = 2;
                return values;
            })();

            return AiThread;
        })();

        DeviceCapabilities.BizAiSettingsSync = (function() {

            /**
             * Properties of a BizAiSettingsSync.
             * @typedef {Object} DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.$Properties
             * @property {boolean|null} [handoffRemovalTimingEnabled] BizAiSettingsSync handoffRemovalTimingEnabled
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a BizAiSettingsSync.
             * @memberof DeviceCapabilities.DeviceCapabilities
             * @interface IBizAiSettingsSync
             * @augments DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.$Properties
             * @deprecated Use DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.$Properties instead.
             */

            /**
             * Shape of a BizAiSettingsSync.
             * @typedef {DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.$Properties} DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.$Shape
             */

            /**
             * Constructs a new BizAiSettingsSync.
             * @memberof DeviceCapabilities.DeviceCapabilities
             * @classdesc Represents a BizAiSettingsSync.
             * @constructor
             * @param {DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var BizAiSettingsSync = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * BizAiSettingsSync handoffRemovalTimingEnabled.
             * @member {boolean|null|undefined} handoffRemovalTimingEnabled
             * @memberof DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync
             * @instance
             */
            BizAiSettingsSync.prototype.handoffRemovalTimingEnabled = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(BizAiSettingsSync.prototype, "_handoffRemovalTimingEnabled", {
                get: $util.oneOfGetter($oneOfFields = ["handoffRemovalTimingEnabled"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new BizAiSettingsSync instance using the specified properties.
             * @function create
             * @memberof DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync
             * @static
             * @param {DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.$Properties=} [properties] Properties to set
             * @returns {DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync} BizAiSettingsSync instance
             * @type {{
             *   (properties: DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.$Shape): DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync & DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.$Shape;
             *   (properties?: DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.$Properties): DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync;
             * }}
             */
            BizAiSettingsSync.create = function(properties) {
                return new BizAiSettingsSync(properties);
            };

            /**
             * Encodes the specified BizAiSettingsSync message. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.verify|verify} messages.
             * @function encode
             * @memberof DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync
             * @static
             * @param {DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.$Properties} message BizAiSettingsSync message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BizAiSettingsSync.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.handoffRemovalTimingEnabled != null && $Object.hasOwnProperty.call(message, "handoffRemovalTimingEnabled"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.handoffRemovalTimingEnabled);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified BizAiSettingsSync message, length delimited. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync
             * @static
             * @param {DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.$Properties} message BizAiSettingsSync message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BizAiSettingsSync.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a BizAiSettingsSync message from the specified reader or buffer.
             * @function decode
             * @memberof DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync & DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.$Shape} BizAiSettingsSync
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BizAiSettingsSync.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync();
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
                            message.handoffRemovalTimingEnabled = reader.bool();
                            message._handoffRemovalTimingEnabled = "handoffRemovalTimingEnabled";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a BizAiSettingsSync message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync & DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync.$Shape} BizAiSettingsSync
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BizAiSettingsSync.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BizAiSettingsSync message.
             * @function verify
             * @memberof DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BizAiSettingsSync.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.handoffRemovalTimingEnabled != null && $Object.hasOwnProperty.call(message, "handoffRemovalTimingEnabled")) {
                    properties._handoffRemovalTimingEnabled = 1;
                    if (typeof message.handoffRemovalTimingEnabled !== "boolean")
                        return "handoffRemovalTimingEnabled: boolean expected";
                }
                return null;
            };

            /**
             * Creates a BizAiSettingsSync message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync} BizAiSettingsSync
             */
            BizAiSettingsSync.fromObject = function (object, _depth) {
                if (object instanceof $root.DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync();
                if (object.handoffRemovalTimingEnabled != null)
                    message.handoffRemovalTimingEnabled = $Boolean(object.handoffRemovalTimingEnabled);
                return message;
            };

            /**
             * Creates a plain object from a BizAiSettingsSync message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync
             * @static
             * @param {DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync} message BizAiSettingsSync
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BizAiSettingsSync.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (message.handoffRemovalTimingEnabled != null && $Object.hasOwnProperty.call(message, "handoffRemovalTimingEnabled"))
                    object.handoffRemovalTimingEnabled = message.handoffRemovalTimingEnabled;
                return object;
            };

            /**
             * Converts this BizAiSettingsSync to JSON.
             * @function toJSON
             * @memberof DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BizAiSettingsSync.prototype.toJSON = function() {
                return BizAiSettingsSync.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for BizAiSettingsSync
             * @function getTypeUrl
             * @memberof DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            BizAiSettingsSync.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/DeviceCapabilities.DeviceCapabilities.BizAiSettingsSync";
            };

            return BizAiSettingsSync;
        })();

        DeviceCapabilities.BusinessBroadcast = (function() {

            /**
             * Properties of a BusinessBroadcast.
             * @typedef {Object} DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.$Properties
             * @property {boolean|null} [importListEnabled] BusinessBroadcast importListEnabled
             * @property {boolean|null} [companionSupportEnabled] BusinessBroadcast companionSupportEnabled
             * @property {boolean|null} [campaignSyncEnabled] BusinessBroadcast campaignSyncEnabled
             * @property {boolean|null} [insightsSyncEnabled] BusinessBroadcast insightsSyncEnabled
             * @property {number|null} [recipientLimit] BusinessBroadcast recipientLimit
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a BusinessBroadcast.
             * @memberof DeviceCapabilities.DeviceCapabilities
             * @interface IBusinessBroadcast
             * @augments DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.$Properties
             * @deprecated Use DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.$Properties instead.
             */

            /**
             * Shape of a BusinessBroadcast.
             * @typedef {DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.$Properties} DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.$Shape
             */

            /**
             * Constructs a new BusinessBroadcast.
             * @memberof DeviceCapabilities.DeviceCapabilities
             * @classdesc Represents a BusinessBroadcast.
             * @constructor
             * @param {DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var BusinessBroadcast = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * BusinessBroadcast importListEnabled.
             * @member {boolean|null|undefined} importListEnabled
             * @memberof DeviceCapabilities.DeviceCapabilities.BusinessBroadcast
             * @instance
             */
            BusinessBroadcast.prototype.importListEnabled = null;

            /**
             * BusinessBroadcast companionSupportEnabled.
             * @member {boolean|null|undefined} companionSupportEnabled
             * @memberof DeviceCapabilities.DeviceCapabilities.BusinessBroadcast
             * @instance
             */
            BusinessBroadcast.prototype.companionSupportEnabled = null;

            /**
             * BusinessBroadcast campaignSyncEnabled.
             * @member {boolean|null|undefined} campaignSyncEnabled
             * @memberof DeviceCapabilities.DeviceCapabilities.BusinessBroadcast
             * @instance
             */
            BusinessBroadcast.prototype.campaignSyncEnabled = null;

            /**
             * BusinessBroadcast insightsSyncEnabled.
             * @member {boolean|null|undefined} insightsSyncEnabled
             * @memberof DeviceCapabilities.DeviceCapabilities.BusinessBroadcast
             * @instance
             */
            BusinessBroadcast.prototype.insightsSyncEnabled = null;

            /**
             * BusinessBroadcast recipientLimit.
             * @member {number|null|undefined} recipientLimit
             * @memberof DeviceCapabilities.DeviceCapabilities.BusinessBroadcast
             * @instance
             */
            BusinessBroadcast.prototype.recipientLimit = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(BusinessBroadcast.prototype, "_importListEnabled", {
                get: $util.oneOfGetter($oneOfFields = ["importListEnabled"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(BusinessBroadcast.prototype, "_companionSupportEnabled", {
                get: $util.oneOfGetter($oneOfFields = ["companionSupportEnabled"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(BusinessBroadcast.prototype, "_campaignSyncEnabled", {
                get: $util.oneOfGetter($oneOfFields = ["campaignSyncEnabled"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(BusinessBroadcast.prototype, "_insightsSyncEnabled", {
                get: $util.oneOfGetter($oneOfFields = ["insightsSyncEnabled"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(BusinessBroadcast.prototype, "_recipientLimit", {
                get: $util.oneOfGetter($oneOfFields = ["recipientLimit"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new BusinessBroadcast instance using the specified properties.
             * @function create
             * @memberof DeviceCapabilities.DeviceCapabilities.BusinessBroadcast
             * @static
             * @param {DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.$Properties=} [properties] Properties to set
             * @returns {DeviceCapabilities.DeviceCapabilities.BusinessBroadcast} BusinessBroadcast instance
             * @type {{
             *   (properties: DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.$Shape): DeviceCapabilities.DeviceCapabilities.BusinessBroadcast & DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.$Shape;
             *   (properties?: DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.$Properties): DeviceCapabilities.DeviceCapabilities.BusinessBroadcast;
             * }}
             */
            BusinessBroadcast.create = function(properties) {
                return new BusinessBroadcast(properties);
            };

            /**
             * Encodes the specified BusinessBroadcast message. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.verify|verify} messages.
             * @function encode
             * @memberof DeviceCapabilities.DeviceCapabilities.BusinessBroadcast
             * @static
             * @param {DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.$Properties} message BusinessBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BusinessBroadcast.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.importListEnabled != null && $Object.hasOwnProperty.call(message, "importListEnabled"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.importListEnabled);
                if (message.companionSupportEnabled != null && $Object.hasOwnProperty.call(message, "companionSupportEnabled"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.companionSupportEnabled);
                if (message.campaignSyncEnabled != null && $Object.hasOwnProperty.call(message, "campaignSyncEnabled"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.campaignSyncEnabled);
                if (message.insightsSyncEnabled != null && $Object.hasOwnProperty.call(message, "insightsSyncEnabled"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.insightsSyncEnabled);
                if (message.recipientLimit != null && $Object.hasOwnProperty.call(message, "recipientLimit"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.recipientLimit);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified BusinessBroadcast message, length delimited. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DeviceCapabilities.DeviceCapabilities.BusinessBroadcast
             * @static
             * @param {DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.$Properties} message BusinessBroadcast message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            BusinessBroadcast.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a BusinessBroadcast message from the specified reader or buffer.
             * @function decode
             * @memberof DeviceCapabilities.DeviceCapabilities.BusinessBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DeviceCapabilities.DeviceCapabilities.BusinessBroadcast & DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.$Shape} BusinessBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BusinessBroadcast.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.DeviceCapabilities.DeviceCapabilities.BusinessBroadcast();
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
                            message.importListEnabled = reader.bool();
                            message._importListEnabled = "importListEnabled";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 0)
                                break;
                            message.companionSupportEnabled = reader.bool();
                            message._companionSupportEnabled = "companionSupportEnabled";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            message.campaignSyncEnabled = reader.bool();
                            message._campaignSyncEnabled = "campaignSyncEnabled";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 0)
                                break;
                            message.insightsSyncEnabled = reader.bool();
                            message._insightsSyncEnabled = "insightsSyncEnabled";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 0)
                                break;
                            message.recipientLimit = reader.int32();
                            message._recipientLimit = "recipientLimit";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a BusinessBroadcast message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DeviceCapabilities.DeviceCapabilities.BusinessBroadcast
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DeviceCapabilities.DeviceCapabilities.BusinessBroadcast & DeviceCapabilities.DeviceCapabilities.BusinessBroadcast.$Shape} BusinessBroadcast
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            BusinessBroadcast.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a BusinessBroadcast message.
             * @function verify
             * @memberof DeviceCapabilities.DeviceCapabilities.BusinessBroadcast
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            BusinessBroadcast.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.importListEnabled != null && $Object.hasOwnProperty.call(message, "importListEnabled")) {
                    properties._importListEnabled = 1;
                    if (typeof message.importListEnabled !== "boolean")
                        return "importListEnabled: boolean expected";
                }
                if (message.companionSupportEnabled != null && $Object.hasOwnProperty.call(message, "companionSupportEnabled")) {
                    properties._companionSupportEnabled = 1;
                    if (typeof message.companionSupportEnabled !== "boolean")
                        return "companionSupportEnabled: boolean expected";
                }
                if (message.campaignSyncEnabled != null && $Object.hasOwnProperty.call(message, "campaignSyncEnabled")) {
                    properties._campaignSyncEnabled = 1;
                    if (typeof message.campaignSyncEnabled !== "boolean")
                        return "campaignSyncEnabled: boolean expected";
                }
                if (message.insightsSyncEnabled != null && $Object.hasOwnProperty.call(message, "insightsSyncEnabled")) {
                    properties._insightsSyncEnabled = 1;
                    if (typeof message.insightsSyncEnabled !== "boolean")
                        return "insightsSyncEnabled: boolean expected";
                }
                if (message.recipientLimit != null && $Object.hasOwnProperty.call(message, "recipientLimit")) {
                    properties._recipientLimit = 1;
                    if (!$util.isInteger(message.recipientLimit))
                        return "recipientLimit: integer expected";
                }
                return null;
            };

            /**
             * Creates a BusinessBroadcast message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DeviceCapabilities.DeviceCapabilities.BusinessBroadcast
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DeviceCapabilities.DeviceCapabilities.BusinessBroadcast} BusinessBroadcast
             */
            BusinessBroadcast.fromObject = function (object, _depth) {
                if (object instanceof $root.DeviceCapabilities.DeviceCapabilities.BusinessBroadcast)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".DeviceCapabilities.DeviceCapabilities.BusinessBroadcast: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.DeviceCapabilities.DeviceCapabilities.BusinessBroadcast();
                if (object.importListEnabled != null)
                    message.importListEnabled = $Boolean(object.importListEnabled);
                if (object.companionSupportEnabled != null)
                    message.companionSupportEnabled = $Boolean(object.companionSupportEnabled);
                if (object.campaignSyncEnabled != null)
                    message.campaignSyncEnabled = $Boolean(object.campaignSyncEnabled);
                if (object.insightsSyncEnabled != null)
                    message.insightsSyncEnabled = $Boolean(object.insightsSyncEnabled);
                if (object.recipientLimit != null)
                    message.recipientLimit = object.recipientLimit | 0;
                return message;
            };

            /**
             * Creates a plain object from a BusinessBroadcast message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DeviceCapabilities.DeviceCapabilities.BusinessBroadcast
             * @static
             * @param {DeviceCapabilities.DeviceCapabilities.BusinessBroadcast} message BusinessBroadcast
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            BusinessBroadcast.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (message.importListEnabled != null && $Object.hasOwnProperty.call(message, "importListEnabled"))
                    object.importListEnabled = message.importListEnabled;
                if (message.companionSupportEnabled != null && $Object.hasOwnProperty.call(message, "companionSupportEnabled"))
                    object.companionSupportEnabled = message.companionSupportEnabled;
                if (message.campaignSyncEnabled != null && $Object.hasOwnProperty.call(message, "campaignSyncEnabled"))
                    object.campaignSyncEnabled = message.campaignSyncEnabled;
                if (message.insightsSyncEnabled != null && $Object.hasOwnProperty.call(message, "insightsSyncEnabled"))
                    object.insightsSyncEnabled = message.insightsSyncEnabled;
                if (message.recipientLimit != null && $Object.hasOwnProperty.call(message, "recipientLimit"))
                    object.recipientLimit = message.recipientLimit;
                return object;
            };

            /**
             * Converts this BusinessBroadcast to JSON.
             * @function toJSON
             * @memberof DeviceCapabilities.DeviceCapabilities.BusinessBroadcast
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            BusinessBroadcast.prototype.toJSON = function() {
                return BusinessBroadcast.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for BusinessBroadcast
             * @function getTypeUrl
             * @memberof DeviceCapabilities.DeviceCapabilities.BusinessBroadcast
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            BusinessBroadcast.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/DeviceCapabilities.DeviceCapabilities.BusinessBroadcast";
            };

            return BusinessBroadcast;
        })();

        /**
         * ChatLockSupportLevel enum.
         * @name DeviceCapabilities.DeviceCapabilities.ChatLockSupportLevel
         * @enum {number}
         * @property {number} NONE=0 NONE value
         * @property {number} MINIMAL=1 MINIMAL value
         * @property {number} FULL=2 FULL value
         */
        DeviceCapabilities.ChatLockSupportLevel = (function() {
            var valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "MINIMAL"] = 1;
            values[valuesById[2] = "FULL"] = 2;
            return values;
        })();

        DeviceCapabilities.ContactRefresh = (function() {

            /**
             * Properties of a ContactRefresh.
             * @typedef {Object} DeviceCapabilities.DeviceCapabilities.ContactRefresh.$Properties
             * @property {boolean|null} [refreshSupported] ContactRefresh refreshSupported
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a ContactRefresh.
             * @memberof DeviceCapabilities.DeviceCapabilities
             * @interface IContactRefresh
             * @augments DeviceCapabilities.DeviceCapabilities.ContactRefresh.$Properties
             * @deprecated Use DeviceCapabilities.DeviceCapabilities.ContactRefresh.$Properties instead.
             */

            /**
             * Shape of a ContactRefresh.
             * @typedef {DeviceCapabilities.DeviceCapabilities.ContactRefresh.$Properties} DeviceCapabilities.DeviceCapabilities.ContactRefresh.$Shape
             */

            /**
             * Constructs a new ContactRefresh.
             * @memberof DeviceCapabilities.DeviceCapabilities
             * @classdesc Represents a ContactRefresh.
             * @constructor
             * @param {DeviceCapabilities.DeviceCapabilities.ContactRefresh.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var ContactRefresh = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * ContactRefresh refreshSupported.
             * @member {boolean|null|undefined} refreshSupported
             * @memberof DeviceCapabilities.DeviceCapabilities.ContactRefresh
             * @instance
             */
            ContactRefresh.prototype.refreshSupported = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ContactRefresh.prototype, "_refreshSupported", {
                get: $util.oneOfGetter($oneOfFields = ["refreshSupported"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new ContactRefresh instance using the specified properties.
             * @function create
             * @memberof DeviceCapabilities.DeviceCapabilities.ContactRefresh
             * @static
             * @param {DeviceCapabilities.DeviceCapabilities.ContactRefresh.$Properties=} [properties] Properties to set
             * @returns {DeviceCapabilities.DeviceCapabilities.ContactRefresh} ContactRefresh instance
             * @type {{
             *   (properties: DeviceCapabilities.DeviceCapabilities.ContactRefresh.$Shape): DeviceCapabilities.DeviceCapabilities.ContactRefresh & DeviceCapabilities.DeviceCapabilities.ContactRefresh.$Shape;
             *   (properties?: DeviceCapabilities.DeviceCapabilities.ContactRefresh.$Properties): DeviceCapabilities.DeviceCapabilities.ContactRefresh;
             * }}
             */
            ContactRefresh.create = function(properties) {
                return new ContactRefresh(properties);
            };

            /**
             * Encodes the specified ContactRefresh message. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.ContactRefresh.verify|verify} messages.
             * @function encode
             * @memberof DeviceCapabilities.DeviceCapabilities.ContactRefresh
             * @static
             * @param {DeviceCapabilities.DeviceCapabilities.ContactRefresh.$Properties} message ContactRefresh message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ContactRefresh.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.refreshSupported != null && $Object.hasOwnProperty.call(message, "refreshSupported"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.refreshSupported);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified ContactRefresh message, length delimited. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.ContactRefresh.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DeviceCapabilities.DeviceCapabilities.ContactRefresh
             * @static
             * @param {DeviceCapabilities.DeviceCapabilities.ContactRefresh.$Properties} message ContactRefresh message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ContactRefresh.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a ContactRefresh message from the specified reader or buffer.
             * @function decode
             * @memberof DeviceCapabilities.DeviceCapabilities.ContactRefresh
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DeviceCapabilities.DeviceCapabilities.ContactRefresh & DeviceCapabilities.DeviceCapabilities.ContactRefresh.$Shape} ContactRefresh
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ContactRefresh.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.DeviceCapabilities.DeviceCapabilities.ContactRefresh();
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
                            message.refreshSupported = reader.bool();
                            message._refreshSupported = "refreshSupported";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a ContactRefresh message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DeviceCapabilities.DeviceCapabilities.ContactRefresh
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DeviceCapabilities.DeviceCapabilities.ContactRefresh & DeviceCapabilities.DeviceCapabilities.ContactRefresh.$Shape} ContactRefresh
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ContactRefresh.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ContactRefresh message.
             * @function verify
             * @memberof DeviceCapabilities.DeviceCapabilities.ContactRefresh
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ContactRefresh.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.refreshSupported != null && $Object.hasOwnProperty.call(message, "refreshSupported")) {
                    properties._refreshSupported = 1;
                    if (typeof message.refreshSupported !== "boolean")
                        return "refreshSupported: boolean expected";
                }
                return null;
            };

            /**
             * Creates a ContactRefresh message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DeviceCapabilities.DeviceCapabilities.ContactRefresh
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DeviceCapabilities.DeviceCapabilities.ContactRefresh} ContactRefresh
             */
            ContactRefresh.fromObject = function (object, _depth) {
                if (object instanceof $root.DeviceCapabilities.DeviceCapabilities.ContactRefresh)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".DeviceCapabilities.DeviceCapabilities.ContactRefresh: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.DeviceCapabilities.DeviceCapabilities.ContactRefresh();
                if (object.refreshSupported != null)
                    message.refreshSupported = $Boolean(object.refreshSupported);
                return message;
            };

            /**
             * Creates a plain object from a ContactRefresh message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DeviceCapabilities.DeviceCapabilities.ContactRefresh
             * @static
             * @param {DeviceCapabilities.DeviceCapabilities.ContactRefresh} message ContactRefresh
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ContactRefresh.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (message.refreshSupported != null && $Object.hasOwnProperty.call(message, "refreshSupported"))
                    object.refreshSupported = message.refreshSupported;
                return object;
            };

            /**
             * Converts this ContactRefresh to JSON.
             * @function toJSON
             * @memberof DeviceCapabilities.DeviceCapabilities.ContactRefresh
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ContactRefresh.prototype.toJSON = function() {
                return ContactRefresh.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for ContactRefresh
             * @function getTypeUrl
             * @memberof DeviceCapabilities.DeviceCapabilities.ContactRefresh
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            ContactRefresh.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/DeviceCapabilities.DeviceCapabilities.ContactRefresh";
            };

            return ContactRefresh;
        })();

        DeviceCapabilities.LIDMigration = (function() {

            /**
             * Properties of a LIDMigration.
             * @typedef {Object} DeviceCapabilities.DeviceCapabilities.LIDMigration.$Properties
             * @property {number|Long|null} [chatDbMigrationTimestamp] LIDMigration chatDbMigrationTimestamp
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a LIDMigration.
             * @memberof DeviceCapabilities.DeviceCapabilities
             * @interface ILIDMigration
             * @augments DeviceCapabilities.DeviceCapabilities.LIDMigration.$Properties
             * @deprecated Use DeviceCapabilities.DeviceCapabilities.LIDMigration.$Properties instead.
             */

            /**
             * Shape of a LIDMigration.
             * @typedef {DeviceCapabilities.DeviceCapabilities.LIDMigration.$Properties} DeviceCapabilities.DeviceCapabilities.LIDMigration.$Shape
             */

            /**
             * Constructs a new LIDMigration.
             * @memberof DeviceCapabilities.DeviceCapabilities
             * @classdesc Represents a LIDMigration.
             * @constructor
             * @param {DeviceCapabilities.DeviceCapabilities.LIDMigration.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var LIDMigration = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * LIDMigration chatDbMigrationTimestamp.
             * @member {number|Long|null|undefined} chatDbMigrationTimestamp
             * @memberof DeviceCapabilities.DeviceCapabilities.LIDMigration
             * @instance
             */
            LIDMigration.prototype.chatDbMigrationTimestamp = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(LIDMigration.prototype, "_chatDbMigrationTimestamp", {
                get: $util.oneOfGetter($oneOfFields = ["chatDbMigrationTimestamp"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new LIDMigration instance using the specified properties.
             * @function create
             * @memberof DeviceCapabilities.DeviceCapabilities.LIDMigration
             * @static
             * @param {DeviceCapabilities.DeviceCapabilities.LIDMigration.$Properties=} [properties] Properties to set
             * @returns {DeviceCapabilities.DeviceCapabilities.LIDMigration} LIDMigration instance
             * @type {{
             *   (properties: DeviceCapabilities.DeviceCapabilities.LIDMigration.$Shape): DeviceCapabilities.DeviceCapabilities.LIDMigration & DeviceCapabilities.DeviceCapabilities.LIDMigration.$Shape;
             *   (properties?: DeviceCapabilities.DeviceCapabilities.LIDMigration.$Properties): DeviceCapabilities.DeviceCapabilities.LIDMigration;
             * }}
             */
            LIDMigration.create = function(properties) {
                return new LIDMigration(properties);
            };

            /**
             * Encodes the specified LIDMigration message. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.LIDMigration.verify|verify} messages.
             * @function encode
             * @memberof DeviceCapabilities.DeviceCapabilities.LIDMigration
             * @static
             * @param {DeviceCapabilities.DeviceCapabilities.LIDMigration.$Properties} message LIDMigration message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LIDMigration.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.chatDbMigrationTimestamp != null && $Object.hasOwnProperty.call(message, "chatDbMigrationTimestamp"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.chatDbMigrationTimestamp);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified LIDMigration message, length delimited. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.LIDMigration.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DeviceCapabilities.DeviceCapabilities.LIDMigration
             * @static
             * @param {DeviceCapabilities.DeviceCapabilities.LIDMigration.$Properties} message LIDMigration message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            LIDMigration.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a LIDMigration message from the specified reader or buffer.
             * @function decode
             * @memberof DeviceCapabilities.DeviceCapabilities.LIDMigration
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DeviceCapabilities.DeviceCapabilities.LIDMigration & DeviceCapabilities.DeviceCapabilities.LIDMigration.$Shape} LIDMigration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LIDMigration.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.DeviceCapabilities.DeviceCapabilities.LIDMigration();
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
                            message.chatDbMigrationTimestamp = reader.uint64();
                            message._chatDbMigrationTimestamp = "chatDbMigrationTimestamp";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a LIDMigration message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DeviceCapabilities.DeviceCapabilities.LIDMigration
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DeviceCapabilities.DeviceCapabilities.LIDMigration & DeviceCapabilities.DeviceCapabilities.LIDMigration.$Shape} LIDMigration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            LIDMigration.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a LIDMigration message.
             * @function verify
             * @memberof DeviceCapabilities.DeviceCapabilities.LIDMigration
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            LIDMigration.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.chatDbMigrationTimestamp != null && $Object.hasOwnProperty.call(message, "chatDbMigrationTimestamp")) {
                    properties._chatDbMigrationTimestamp = 1;
                    if (!$util.isInteger(message.chatDbMigrationTimestamp) && !(message.chatDbMigrationTimestamp && $util.isInteger(message.chatDbMigrationTimestamp.low) && $util.isInteger(message.chatDbMigrationTimestamp.high)))
                        return "chatDbMigrationTimestamp: integer|Long expected";
                }
                return null;
            };

            /**
             * Creates a LIDMigration message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DeviceCapabilities.DeviceCapabilities.LIDMigration
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DeviceCapabilities.DeviceCapabilities.LIDMigration} LIDMigration
             */
            LIDMigration.fromObject = function (object, _depth) {
                if (object instanceof $root.DeviceCapabilities.DeviceCapabilities.LIDMigration)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".DeviceCapabilities.DeviceCapabilities.LIDMigration: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.DeviceCapabilities.DeviceCapabilities.LIDMigration();
                if (object.chatDbMigrationTimestamp != null)
                    if ($util.Long)
                        message.chatDbMigrationTimestamp = $util.Long.fromValue(object.chatDbMigrationTimestamp, true);
                    else if (typeof object.chatDbMigrationTimestamp === "string")
                        message.chatDbMigrationTimestamp = $parseInt(object.chatDbMigrationTimestamp, 10);
                    else if (typeof object.chatDbMigrationTimestamp === "number")
                        message.chatDbMigrationTimestamp = object.chatDbMigrationTimestamp;
                    else if (typeof object.chatDbMigrationTimestamp === "object")
                        message.chatDbMigrationTimestamp = new $util.LongBits(object.chatDbMigrationTimestamp.low >>> 0, object.chatDbMigrationTimestamp.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a LIDMigration message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DeviceCapabilities.DeviceCapabilities.LIDMigration
             * @static
             * @param {DeviceCapabilities.DeviceCapabilities.LIDMigration} message LIDMigration
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            LIDMigration.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (message.chatDbMigrationTimestamp != null && $Object.hasOwnProperty.call(message, "chatDbMigrationTimestamp"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.chatDbMigrationTimestamp = typeof message.chatDbMigrationTimestamp === "number" ? $BigInt(message.chatDbMigrationTimestamp) : $util.Long.fromBits(message.chatDbMigrationTimestamp.low >>> 0, message.chatDbMigrationTimestamp.high >>> 0, true).toBigInt();
                    else if (typeof message.chatDbMigrationTimestamp === "number")
                        object.chatDbMigrationTimestamp = options.longs === $String ? $String(message.chatDbMigrationTimestamp) : message.chatDbMigrationTimestamp;
                    else
                        object.chatDbMigrationTimestamp = options.longs === $String ? $util.Long.prototype.toString.call(message.chatDbMigrationTimestamp) : options.longs === $Number ? new $util.LongBits(message.chatDbMigrationTimestamp.low >>> 0, message.chatDbMigrationTimestamp.high >>> 0).toNumber(true) : message.chatDbMigrationTimestamp;
                return object;
            };

            /**
             * Converts this LIDMigration to JSON.
             * @function toJSON
             * @memberof DeviceCapabilities.DeviceCapabilities.LIDMigration
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            LIDMigration.prototype.toJSON = function() {
                return LIDMigration.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for LIDMigration
             * @function getTypeUrl
             * @memberof DeviceCapabilities.DeviceCapabilities.LIDMigration
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            LIDMigration.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/DeviceCapabilities.DeviceCapabilities.LIDMigration";
            };

            return LIDMigration;
        })();

        /**
         * MemberNameTagPrimarySupport enum.
         * @name DeviceCapabilities.DeviceCapabilities.MemberNameTagPrimarySupport
         * @enum {number}
         * @property {number} DISABLED=0 DISABLED value
         * @property {number} RECEIVER_ENABLED=1 RECEIVER_ENABLED value
         * @property {number} SENDER_ENABLED=2 SENDER_ENABLED value
         */
        DeviceCapabilities.MemberNameTagPrimarySupport = (function() {
            var valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "DISABLED"] = 0;
            values[valuesById[1] = "RECEIVER_ENABLED"] = 1;
            values[valuesById[2] = "SENDER_ENABLED"] = 2;
            return values;
        })();

        DeviceCapabilities.UserHasAvatar = (function() {

            /**
             * Properties of a UserHasAvatar.
             * @typedef {Object} DeviceCapabilities.DeviceCapabilities.UserHasAvatar.$Properties
             * @property {boolean|null} [userHasAvatar] UserHasAvatar userHasAvatar
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a UserHasAvatar.
             * @memberof DeviceCapabilities.DeviceCapabilities
             * @interface IUserHasAvatar
             * @augments DeviceCapabilities.DeviceCapabilities.UserHasAvatar.$Properties
             * @deprecated Use DeviceCapabilities.DeviceCapabilities.UserHasAvatar.$Properties instead.
             */

            /**
             * Shape of a UserHasAvatar.
             * @typedef {DeviceCapabilities.DeviceCapabilities.UserHasAvatar.$Properties} DeviceCapabilities.DeviceCapabilities.UserHasAvatar.$Shape
             */

            /**
             * Constructs a new UserHasAvatar.
             * @memberof DeviceCapabilities.DeviceCapabilities
             * @classdesc Represents a UserHasAvatar.
             * @constructor
             * @param {DeviceCapabilities.DeviceCapabilities.UserHasAvatar.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var UserHasAvatar = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * UserHasAvatar userHasAvatar.
             * @member {boolean|null|undefined} userHasAvatar
             * @memberof DeviceCapabilities.DeviceCapabilities.UserHasAvatar
             * @instance
             */
            UserHasAvatar.prototype.userHasAvatar = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(UserHasAvatar.prototype, "_userHasAvatar", {
                get: $util.oneOfGetter($oneOfFields = ["userHasAvatar"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new UserHasAvatar instance using the specified properties.
             * @function create
             * @memberof DeviceCapabilities.DeviceCapabilities.UserHasAvatar
             * @static
             * @param {DeviceCapabilities.DeviceCapabilities.UserHasAvatar.$Properties=} [properties] Properties to set
             * @returns {DeviceCapabilities.DeviceCapabilities.UserHasAvatar} UserHasAvatar instance
             * @type {{
             *   (properties: DeviceCapabilities.DeviceCapabilities.UserHasAvatar.$Shape): DeviceCapabilities.DeviceCapabilities.UserHasAvatar & DeviceCapabilities.DeviceCapabilities.UserHasAvatar.$Shape;
             *   (properties?: DeviceCapabilities.DeviceCapabilities.UserHasAvatar.$Properties): DeviceCapabilities.DeviceCapabilities.UserHasAvatar;
             * }}
             */
            UserHasAvatar.create = function(properties) {
                return new UserHasAvatar(properties);
            };

            /**
             * Encodes the specified UserHasAvatar message. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.UserHasAvatar.verify|verify} messages.
             * @function encode
             * @memberof DeviceCapabilities.DeviceCapabilities.UserHasAvatar
             * @static
             * @param {DeviceCapabilities.DeviceCapabilities.UserHasAvatar.$Properties} message UserHasAvatar message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserHasAvatar.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.userHasAvatar != null && $Object.hasOwnProperty.call(message, "userHasAvatar"))
                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.userHasAvatar);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified UserHasAvatar message, length delimited. Does not implicitly {@link DeviceCapabilities.DeviceCapabilities.UserHasAvatar.verify|verify} messages.
             * @function encodeDelimited
             * @memberof DeviceCapabilities.DeviceCapabilities.UserHasAvatar
             * @static
             * @param {DeviceCapabilities.DeviceCapabilities.UserHasAvatar.$Properties} message UserHasAvatar message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserHasAvatar.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a UserHasAvatar message from the specified reader or buffer.
             * @function decode
             * @memberof DeviceCapabilities.DeviceCapabilities.UserHasAvatar
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {DeviceCapabilities.DeviceCapabilities.UserHasAvatar & DeviceCapabilities.DeviceCapabilities.UserHasAvatar.$Shape} UserHasAvatar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserHasAvatar.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end, message;
                if (length === $undefined)
                    end = reader.len;
                else {
                    end = reader.pos + length;
                    if (end > reader.len)
                        throw $RangeError("index out of range");
                    length = reader.len;
                    reader.len = end;
                }
                message = _target || new $root.DeviceCapabilities.DeviceCapabilities.UserHasAvatar();
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
                            message.userHasAvatar = reader.bool();
                            message._userHasAvatar = "userHasAvatar";
                            continue;
                        }
                    }
                    reader.skipType(wireType, _depth, tag);
                    if (!reader.discardUnknown) {
                        $util.makeProp(message, "$unknowns", false);
                        (message.$unknowns || (message.$unknowns = [])).push(reader.raw(start, reader.pos));
                    }
                }
                if (length !== $undefined) {
                    if (reader.pos !== end)
                        throw $RangeError("index out of range");
                    reader.len = length;
                }
                if (_end !== $undefined)
                    throw $Error("missing end group");
                return message;
            };

            /**
             * Decodes a UserHasAvatar message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof DeviceCapabilities.DeviceCapabilities.UserHasAvatar
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {DeviceCapabilities.DeviceCapabilities.UserHasAvatar & DeviceCapabilities.DeviceCapabilities.UserHasAvatar.$Shape} UserHasAvatar
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserHasAvatar.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UserHasAvatar message.
             * @function verify
             * @memberof DeviceCapabilities.DeviceCapabilities.UserHasAvatar
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserHasAvatar.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.userHasAvatar != null && $Object.hasOwnProperty.call(message, "userHasAvatar")) {
                    properties._userHasAvatar = 1;
                    if (typeof message.userHasAvatar !== "boolean")
                        return "userHasAvatar: boolean expected";
                }
                return null;
            };

            /**
             * Creates a UserHasAvatar message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof DeviceCapabilities.DeviceCapabilities.UserHasAvatar
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {DeviceCapabilities.DeviceCapabilities.UserHasAvatar} UserHasAvatar
             */
            UserHasAvatar.fromObject = function (object, _depth) {
                if (object instanceof $root.DeviceCapabilities.DeviceCapabilities.UserHasAvatar)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".DeviceCapabilities.DeviceCapabilities.UserHasAvatar: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.DeviceCapabilities.DeviceCapabilities.UserHasAvatar();
                if (object.userHasAvatar != null)
                    message.userHasAvatar = $Boolean(object.userHasAvatar);
                return message;
            };

            /**
             * Creates a plain object from a UserHasAvatar message. Also converts values to other types if specified.
             * @function toObject
             * @memberof DeviceCapabilities.DeviceCapabilities.UserHasAvatar
             * @static
             * @param {DeviceCapabilities.DeviceCapabilities.UserHasAvatar} message UserHasAvatar
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserHasAvatar.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (message.userHasAvatar != null && $Object.hasOwnProperty.call(message, "userHasAvatar"))
                    object.userHasAvatar = message.userHasAvatar;
                return object;
            };

            /**
             * Converts this UserHasAvatar to JSON.
             * @function toJSON
             * @memberof DeviceCapabilities.DeviceCapabilities.UserHasAvatar
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserHasAvatar.prototype.toJSON = function() {
                return UserHasAvatar.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for UserHasAvatar
             * @function getTypeUrl
             * @memberof DeviceCapabilities.DeviceCapabilities.UserHasAvatar
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            UserHasAvatar.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/DeviceCapabilities.DeviceCapabilities.UserHasAvatar";
            };

            return UserHasAvatar;
        })();

        return DeviceCapabilities;
    })();

    return DeviceCapabilities;
})();

module.exports = $root;
