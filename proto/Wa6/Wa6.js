/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-mixed-operators, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars, default-case, jsdoc/require-param*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
var $Object = $util.global.Object, $undefined = $util.global.undefined, $Error = $util.global.Error, $Array = $util.global.Array, $TypeError = $util.global.TypeError, $parseInt = $util.global.parseInt, $Boolean = $util.global.Boolean, $String = $util.global.String, $BigInt = $util.global.BigInt, $Number = $util.global.Number;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Wa6 = (function() {

    /**
     * Namespace Wa6.
     * @exports Wa6
     * @namespace
     */
    var Wa6 = {};

    Wa6.ClientPayload = (function() {

        /**
         * Properties of a ClientPayload.
         * @typedef {Object} Wa6.ClientPayload.$Properties
         * @property {number|Long|null} [username] ClientPayload username
         * @property {boolean|null} [passive] ClientPayload passive
         * @property {Wa6.ClientPayload.UserAgent.$Properties|null} [userAgent] ClientPayload userAgent
         * @property {Wa6.ClientPayload.WebInfo.$Properties|null} [webInfo] ClientPayload webInfo
         * @property {string|null} [pushName] ClientPayload pushName
         * @property {number|null} [sessionId] ClientPayload sessionId
         * @property {boolean|null} [shortConnect] ClientPayload shortConnect
         * @property {Wa6.ClientPayload.ConnectType|null} [connectType] ClientPayload connectType
         * @property {Wa6.ClientPayload.ConnectReason|null} [connectReason] ClientPayload connectReason
         * @property {Array.<number>|null} [shards] ClientPayload shards
         * @property {Wa6.ClientPayload.DNSSource.$Properties|null} [dnsSource] ClientPayload dnsSource
         * @property {number|null} [connectAttemptCount] ClientPayload connectAttemptCount
         * @property {number|null} [device] ClientPayload device
         * @property {Wa6.ClientPayload.DevicePairingRegistrationData.$Properties|null} [devicePairingData] ClientPayload devicePairingData
         * @property {Wa6.ClientPayload.Product|null} [product] ClientPayload product
         * @property {Uint8Array|null} [fbCat] ClientPayload fbCat
         * @property {Uint8Array|null} [fbUserAgent] ClientPayload fbUserAgent
         * @property {boolean|null} [oc] ClientPayload oc
         * @property {number|null} [lc] ClientPayload lc
         * @property {Wa6.ClientPayload.IOSAppExtension|null} [iosAppExtension] ClientPayload iosAppExtension
         * @property {number|Long|null} [fbAppId] ClientPayload fbAppId
         * @property {Uint8Array|null} [fbDeviceId] ClientPayload fbDeviceId
         * @property {boolean|null} [pull] ClientPayload pull
         * @property {Uint8Array|null} [paddingBytes] ClientPayload paddingBytes
         * @property {number|null} [yearClass] ClientPayload yearClass
         * @property {number|null} [memClass] ClientPayload memClass
         * @property {Wa6.ClientPayload.InteropData.$Properties|null} [interopData] ClientPayload interopData
         * @property {Wa6.ClientPayload.TrafficAnonymization|null} [trafficAnonymization] ClientPayload trafficAnonymization
         * @property {boolean|null} [lidDbMigrated] ClientPayload lidDbMigrated
         * @property {Wa6.ClientPayload.AccountType|null} [accountType] ClientPayload accountType
         * @property {number|null} [connectionSequenceInfo] ClientPayload connectionSequenceInfo
         * @property {boolean|null} [paaLink] ClientPayload paaLink
         * @property {number|null} [preacksCount] ClientPayload preacksCount
         * @property {number|null} [processingQueueSize] ClientPayload processingQueueSize
         * @property {Array.<string>|null} [pairedPeripherals] ClientPayload pairedPeripherals
         * @property {Uint8Array|null} [testIsolationId] ClientPayload testIsolationId
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a ClientPayload.
         * @memberof Wa6
         * @interface IClientPayload
         * @augments Wa6.ClientPayload.$Properties
         * @deprecated Use Wa6.ClientPayload.$Properties instead.
         */

        /**
         * Shape of a ClientPayload.
         * @typedef {Wa6.ClientPayload.$Properties} Wa6.ClientPayload.$Shape
         */

        /**
         * Constructs a new ClientPayload.
         * @memberof Wa6
         * @classdesc Represents a ClientPayload.
         * @constructor
         * @param {Wa6.ClientPayload.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var ClientPayload = function (properties) {
            this.shards = [];
            this.pairedPeripherals = [];
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * ClientPayload username.
         * @member {number|Long|null|undefined} username
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.username = null;

        /**
         * ClientPayload passive.
         * @member {boolean|null|undefined} passive
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.passive = null;

        /**
         * ClientPayload userAgent.
         * @member {Wa6.ClientPayload.UserAgent.$Properties|null|undefined} userAgent
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.userAgent = null;

        /**
         * ClientPayload webInfo.
         * @member {Wa6.ClientPayload.WebInfo.$Properties|null|undefined} webInfo
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.webInfo = null;

        /**
         * ClientPayload pushName.
         * @member {string|null|undefined} pushName
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.pushName = null;

        /**
         * ClientPayload sessionId.
         * @member {number|null|undefined} sessionId
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.sessionId = null;

        /**
         * ClientPayload shortConnect.
         * @member {boolean|null|undefined} shortConnect
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.shortConnect = null;

        /**
         * ClientPayload connectType.
         * @member {Wa6.ClientPayload.ConnectType|null|undefined} connectType
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.connectType = null;

        /**
         * ClientPayload connectReason.
         * @member {Wa6.ClientPayload.ConnectReason|null|undefined} connectReason
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.connectReason = null;

        /**
         * ClientPayload shards.
         * @member {Array.<number>} shards
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.shards = $util.emptyArray;

        /**
         * ClientPayload dnsSource.
         * @member {Wa6.ClientPayload.DNSSource.$Properties|null|undefined} dnsSource
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.dnsSource = null;

        /**
         * ClientPayload connectAttemptCount.
         * @member {number|null|undefined} connectAttemptCount
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.connectAttemptCount = null;

        /**
         * ClientPayload device.
         * @member {number|null|undefined} device
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.device = null;

        /**
         * ClientPayload devicePairingData.
         * @member {Wa6.ClientPayload.DevicePairingRegistrationData.$Properties|null|undefined} devicePairingData
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.devicePairingData = null;

        /**
         * ClientPayload product.
         * @member {Wa6.ClientPayload.Product|null|undefined} product
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.product = null;

        /**
         * ClientPayload fbCat.
         * @member {Uint8Array|null|undefined} fbCat
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.fbCat = null;

        /**
         * ClientPayload fbUserAgent.
         * @member {Uint8Array|null|undefined} fbUserAgent
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.fbUserAgent = null;

        /**
         * ClientPayload oc.
         * @member {boolean|null|undefined} oc
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.oc = null;

        /**
         * ClientPayload lc.
         * @member {number|null|undefined} lc
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.lc = null;

        /**
         * ClientPayload iosAppExtension.
         * @member {Wa6.ClientPayload.IOSAppExtension|null|undefined} iosAppExtension
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.iosAppExtension = null;

        /**
         * ClientPayload fbAppId.
         * @member {number|Long|null|undefined} fbAppId
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.fbAppId = null;

        /**
         * ClientPayload fbDeviceId.
         * @member {Uint8Array|null|undefined} fbDeviceId
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.fbDeviceId = null;

        /**
         * ClientPayload pull.
         * @member {boolean|null|undefined} pull
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.pull = null;

        /**
         * ClientPayload paddingBytes.
         * @member {Uint8Array|null|undefined} paddingBytes
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.paddingBytes = null;

        /**
         * ClientPayload yearClass.
         * @member {number|null|undefined} yearClass
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.yearClass = null;

        /**
         * ClientPayload memClass.
         * @member {number|null|undefined} memClass
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.memClass = null;

        /**
         * ClientPayload interopData.
         * @member {Wa6.ClientPayload.InteropData.$Properties|null|undefined} interopData
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.interopData = null;

        /**
         * ClientPayload trafficAnonymization.
         * @member {Wa6.ClientPayload.TrafficAnonymization|null|undefined} trafficAnonymization
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.trafficAnonymization = null;

        /**
         * ClientPayload lidDbMigrated.
         * @member {boolean|null|undefined} lidDbMigrated
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.lidDbMigrated = null;

        /**
         * ClientPayload accountType.
         * @member {Wa6.ClientPayload.AccountType|null|undefined} accountType
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.accountType = null;

        /**
         * ClientPayload connectionSequenceInfo.
         * @member {number|null|undefined} connectionSequenceInfo
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.connectionSequenceInfo = null;

        /**
         * ClientPayload paaLink.
         * @member {boolean|null|undefined} paaLink
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.paaLink = null;

        /**
         * ClientPayload preacksCount.
         * @member {number|null|undefined} preacksCount
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.preacksCount = null;

        /**
         * ClientPayload processingQueueSize.
         * @member {number|null|undefined} processingQueueSize
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.processingQueueSize = null;

        /**
         * ClientPayload pairedPeripherals.
         * @member {Array.<string>} pairedPeripherals
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.pairedPeripherals = $util.emptyArray;

        /**
         * ClientPayload testIsolationId.
         * @member {Uint8Array|null|undefined} testIsolationId
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.testIsolationId = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPayload.prototype, "_username", {
            get: $util.oneOfGetter($oneOfFields = ["username"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPayload.prototype, "_passive", {
            get: $util.oneOfGetter($oneOfFields = ["passive"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPayload.prototype, "_userAgent", {
            get: $util.oneOfGetter($oneOfFields = ["userAgent"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPayload.prototype, "_webInfo", {
            get: $util.oneOfGetter($oneOfFields = ["webInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPayload.prototype, "_pushName", {
            get: $util.oneOfGetter($oneOfFields = ["pushName"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPayload.prototype, "_sessionId", {
            get: $util.oneOfGetter($oneOfFields = ["sessionId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPayload.prototype, "_shortConnect", {
            get: $util.oneOfGetter($oneOfFields = ["shortConnect"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPayload.prototype, "_connectType", {
            get: $util.oneOfGetter($oneOfFields = ["connectType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPayload.prototype, "_connectReason", {
            get: $util.oneOfGetter($oneOfFields = ["connectReason"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPayload.prototype, "_dnsSource", {
            get: $util.oneOfGetter($oneOfFields = ["dnsSource"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPayload.prototype, "_connectAttemptCount", {
            get: $util.oneOfGetter($oneOfFields = ["connectAttemptCount"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPayload.prototype, "_device", {
            get: $util.oneOfGetter($oneOfFields = ["device"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPayload.prototype, "_devicePairingData", {
            get: $util.oneOfGetter($oneOfFields = ["devicePairingData"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPayload.prototype, "_product", {
            get: $util.oneOfGetter($oneOfFields = ["product"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPayload.prototype, "_fbCat", {
            get: $util.oneOfGetter($oneOfFields = ["fbCat"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPayload.prototype, "_fbUserAgent", {
            get: $util.oneOfGetter($oneOfFields = ["fbUserAgent"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPayload.prototype, "_oc", {
            get: $util.oneOfGetter($oneOfFields = ["oc"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPayload.prototype, "_lc", {
            get: $util.oneOfGetter($oneOfFields = ["lc"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPayload.prototype, "_iosAppExtension", {
            get: $util.oneOfGetter($oneOfFields = ["iosAppExtension"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPayload.prototype, "_fbAppId", {
            get: $util.oneOfGetter($oneOfFields = ["fbAppId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPayload.prototype, "_fbDeviceId", {
            get: $util.oneOfGetter($oneOfFields = ["fbDeviceId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPayload.prototype, "_pull", {
            get: $util.oneOfGetter($oneOfFields = ["pull"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPayload.prototype, "_paddingBytes", {
            get: $util.oneOfGetter($oneOfFields = ["paddingBytes"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPayload.prototype, "_yearClass", {
            get: $util.oneOfGetter($oneOfFields = ["yearClass"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPayload.prototype, "_memClass", {
            get: $util.oneOfGetter($oneOfFields = ["memClass"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPayload.prototype, "_interopData", {
            get: $util.oneOfGetter($oneOfFields = ["interopData"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPayload.prototype, "_trafficAnonymization", {
            get: $util.oneOfGetter($oneOfFields = ["trafficAnonymization"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPayload.prototype, "_lidDbMigrated", {
            get: $util.oneOfGetter($oneOfFields = ["lidDbMigrated"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPayload.prototype, "_accountType", {
            get: $util.oneOfGetter($oneOfFields = ["accountType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPayload.prototype, "_connectionSequenceInfo", {
            get: $util.oneOfGetter($oneOfFields = ["connectionSequenceInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPayload.prototype, "_paaLink", {
            get: $util.oneOfGetter($oneOfFields = ["paaLink"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPayload.prototype, "_preacksCount", {
            get: $util.oneOfGetter($oneOfFields = ["preacksCount"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPayload.prototype, "_processingQueueSize", {
            get: $util.oneOfGetter($oneOfFields = ["processingQueueSize"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(ClientPayload.prototype, "_testIsolationId", {
            get: $util.oneOfGetter($oneOfFields = ["testIsolationId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ClientPayload instance using the specified properties.
         * @function create
         * @memberof Wa6.ClientPayload
         * @static
         * @param {Wa6.ClientPayload.$Properties=} [properties] Properties to set
         * @returns {Wa6.ClientPayload} ClientPayload instance
         * @type {{
         *   (properties: Wa6.ClientPayload.$Shape): Wa6.ClientPayload & Wa6.ClientPayload.$Shape;
         *   (properties?: Wa6.ClientPayload.$Properties): Wa6.ClientPayload;
         * }}
         */
        ClientPayload.create = function(properties) {
            return new ClientPayload(properties);
        };

        /**
         * Encodes the specified ClientPayload message. Does not implicitly {@link Wa6.ClientPayload.verify|verify} messages.
         * @function encode
         * @memberof Wa6.ClientPayload
         * @static
         * @param {Wa6.ClientPayload.$Properties} message ClientPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientPayload.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.username != null && $Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.username);
            if (message.passive != null && $Object.hasOwnProperty.call(message, "passive"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.passive);
            if (message.userAgent != null && $Object.hasOwnProperty.call(message, "userAgent"))
                $root.Wa6.ClientPayload.UserAgent.encode(message.userAgent, writer.uint32(/* id 5, wireType 2 =*/42).fork(), _depth + 1).ldelim();
            if (message.webInfo != null && $Object.hasOwnProperty.call(message, "webInfo"))
                $root.Wa6.ClientPayload.WebInfo.encode(message.webInfo, writer.uint32(/* id 6, wireType 2 =*/50).fork(), _depth + 1).ldelim();
            if (message.pushName != null && $Object.hasOwnProperty.call(message, "pushName"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.pushName);
            if (message.sessionId != null && $Object.hasOwnProperty.call(message, "sessionId"))
                writer.uint32(/* id 9, wireType 5 =*/77).sfixed32(message.sessionId);
            if (message.shortConnect != null && $Object.hasOwnProperty.call(message, "shortConnect"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.shortConnect);
            if (message.connectType != null && $Object.hasOwnProperty.call(message, "connectType"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.connectType);
            if (message.connectReason != null && $Object.hasOwnProperty.call(message, "connectReason"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.connectReason);
            if (message.shards != null && message.shards.length)
                writer.uint32(/* id 14, wireType 2 =*/114).int32s(message.shards);
            if (message.dnsSource != null && $Object.hasOwnProperty.call(message, "dnsSource"))
                $root.Wa6.ClientPayload.DNSSource.encode(message.dnsSource, writer.uint32(/* id 15, wireType 2 =*/122).fork(), _depth + 1).ldelim();
            if (message.connectAttemptCount != null && $Object.hasOwnProperty.call(message, "connectAttemptCount"))
                writer.uint32(/* id 16, wireType 0 =*/128).uint32(message.connectAttemptCount);
            if (message.device != null && $Object.hasOwnProperty.call(message, "device"))
                writer.uint32(/* id 18, wireType 0 =*/144).uint32(message.device);
            if (message.devicePairingData != null && $Object.hasOwnProperty.call(message, "devicePairingData"))
                $root.Wa6.ClientPayload.DevicePairingRegistrationData.encode(message.devicePairingData, writer.uint32(/* id 19, wireType 2 =*/154).fork(), _depth + 1).ldelim();
            if (message.product != null && $Object.hasOwnProperty.call(message, "product"))
                writer.uint32(/* id 20, wireType 0 =*/160).int32(message.product);
            if (message.fbCat != null && $Object.hasOwnProperty.call(message, "fbCat"))
                writer.uint32(/* id 21, wireType 2 =*/170).bytes(message.fbCat);
            if (message.fbUserAgent != null && $Object.hasOwnProperty.call(message, "fbUserAgent"))
                writer.uint32(/* id 22, wireType 2 =*/178).bytes(message.fbUserAgent);
            if (message.oc != null && $Object.hasOwnProperty.call(message, "oc"))
                writer.uint32(/* id 23, wireType 0 =*/184).bool(message.oc);
            if (message.lc != null && $Object.hasOwnProperty.call(message, "lc"))
                writer.uint32(/* id 24, wireType 0 =*/192).int32(message.lc);
            if (message.iosAppExtension != null && $Object.hasOwnProperty.call(message, "iosAppExtension"))
                writer.uint32(/* id 30, wireType 0 =*/240).int32(message.iosAppExtension);
            if (message.fbAppId != null && $Object.hasOwnProperty.call(message, "fbAppId"))
                writer.uint32(/* id 31, wireType 0 =*/248).uint64(message.fbAppId);
            if (message.fbDeviceId != null && $Object.hasOwnProperty.call(message, "fbDeviceId"))
                writer.uint32(/* id 32, wireType 2 =*/258).bytes(message.fbDeviceId);
            if (message.pull != null && $Object.hasOwnProperty.call(message, "pull"))
                writer.uint32(/* id 33, wireType 0 =*/264).bool(message.pull);
            if (message.paddingBytes != null && $Object.hasOwnProperty.call(message, "paddingBytes"))
                writer.uint32(/* id 34, wireType 2 =*/274).bytes(message.paddingBytes);
            if (message.yearClass != null && $Object.hasOwnProperty.call(message, "yearClass"))
                writer.uint32(/* id 36, wireType 0 =*/288).int32(message.yearClass);
            if (message.memClass != null && $Object.hasOwnProperty.call(message, "memClass"))
                writer.uint32(/* id 37, wireType 0 =*/296).int32(message.memClass);
            if (message.interopData != null && $Object.hasOwnProperty.call(message, "interopData"))
                $root.Wa6.ClientPayload.InteropData.encode(message.interopData, writer.uint32(/* id 38, wireType 2 =*/306).fork(), _depth + 1).ldelim();
            if (message.trafficAnonymization != null && $Object.hasOwnProperty.call(message, "trafficAnonymization"))
                writer.uint32(/* id 40, wireType 0 =*/320).int32(message.trafficAnonymization);
            if (message.lidDbMigrated != null && $Object.hasOwnProperty.call(message, "lidDbMigrated"))
                writer.uint32(/* id 41, wireType 0 =*/328).bool(message.lidDbMigrated);
            if (message.accountType != null && $Object.hasOwnProperty.call(message, "accountType"))
                writer.uint32(/* id 42, wireType 0 =*/336).int32(message.accountType);
            if (message.connectionSequenceInfo != null && $Object.hasOwnProperty.call(message, "connectionSequenceInfo"))
                writer.uint32(/* id 43, wireType 5 =*/349).sfixed32(message.connectionSequenceInfo);
            if (message.paaLink != null && $Object.hasOwnProperty.call(message, "paaLink"))
                writer.uint32(/* id 44, wireType 0 =*/352).bool(message.paaLink);
            if (message.preacksCount != null && $Object.hasOwnProperty.call(message, "preacksCount"))
                writer.uint32(/* id 45, wireType 0 =*/360).int32(message.preacksCount);
            if (message.processingQueueSize != null && $Object.hasOwnProperty.call(message, "processingQueueSize"))
                writer.uint32(/* id 46, wireType 0 =*/368).int32(message.processingQueueSize);
            if (message.pairedPeripherals != null && message.pairedPeripherals.length)
                for (var i = 0; i < message.pairedPeripherals.length; ++i)
                    writer.uint32(/* id 47, wireType 2 =*/378).string(message.pairedPeripherals[i]);
            if (message.testIsolationId != null && $Object.hasOwnProperty.call(message, "testIsolationId"))
                writer.uint32(/* id 48, wireType 2 =*/386).bytes(message.testIsolationId);
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified ClientPayload message, length delimited. Does not implicitly {@link Wa6.ClientPayload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Wa6.ClientPayload
         * @static
         * @param {Wa6.ClientPayload.$Properties} message ClientPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientPayload.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a ClientPayload message from the specified reader or buffer.
         * @function decode
         * @memberof Wa6.ClientPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Wa6.ClientPayload & Wa6.ClientPayload.$Shape} ClientPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientPayload.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Wa6.ClientPayload(), value;
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
                        message.username = reader.uint64();
                        message._username = "username";
                        continue;
                    }
                case 3: {
                        if (wireType !== 0)
                            break;
                        message.passive = reader.bool();
                        message._passive = "passive";
                        continue;
                    }
                case 5: {
                        if (wireType !== 2)
                            break;
                        message.userAgent = $root.Wa6.ClientPayload.UserAgent.decode(reader, reader.uint32(), $undefined, _depth + 1, message.userAgent);
                        message._userAgent = "userAgent";
                        continue;
                    }
                case 6: {
                        if (wireType !== 2)
                            break;
                        message.webInfo = $root.Wa6.ClientPayload.WebInfo.decode(reader, reader.uint32(), $undefined, _depth + 1, message.webInfo);
                        message._webInfo = "webInfo";
                        continue;
                    }
                case 7: {
                        if (wireType !== 2)
                            break;
                        message.pushName = reader.stringVerify();
                        message._pushName = "pushName";
                        continue;
                    }
                case 9: {
                        if (wireType !== 5)
                            break;
                        message.sessionId = reader.sfixed32();
                        message._sessionId = "sessionId";
                        continue;
                    }
                case 10: {
                        if (wireType !== 0)
                            break;
                        message.shortConnect = reader.bool();
                        message._shortConnect = "shortConnect";
                        continue;
                    }
                case 12: {
                        if (wireType !== 0)
                            break;
                        message.connectType = reader.int32();
                        message._connectType = "connectType";
                        continue;
                    }
                case 13: {
                        if (wireType !== 0)
                            break;
                        message.connectReason = reader.int32();
                        message._connectReason = "connectReason";
                        continue;
                    }
                case 14: {
                        if (wireType === 2) {
                            if (!(message.shards && message.shards.length))
                                message.shards = [];
                            reader.int32s(message.shards);
                            continue;
                        }
                        if (wireType !== 0)
                            break;
                        if (!(message.shards && message.shards.length))
                            message.shards = [];
                        message.shards.push(reader.int32());
                        continue;
                    }
                case 15: {
                        if (wireType !== 2)
                            break;
                        message.dnsSource = $root.Wa6.ClientPayload.DNSSource.decode(reader, reader.uint32(), $undefined, _depth + 1, message.dnsSource);
                        message._dnsSource = "dnsSource";
                        continue;
                    }
                case 16: {
                        if (wireType !== 0)
                            break;
                        message.connectAttemptCount = reader.uint32();
                        message._connectAttemptCount = "connectAttemptCount";
                        continue;
                    }
                case 18: {
                        if (wireType !== 0)
                            break;
                        message.device = reader.uint32();
                        message._device = "device";
                        continue;
                    }
                case 19: {
                        if (wireType !== 2)
                            break;
                        message.devicePairingData = $root.Wa6.ClientPayload.DevicePairingRegistrationData.decode(reader, reader.uint32(), $undefined, _depth + 1, message.devicePairingData);
                        message._devicePairingData = "devicePairingData";
                        continue;
                    }
                case 20: {
                        if (wireType !== 0)
                            break;
                        message.product = reader.int32();
                        message._product = "product";
                        continue;
                    }
                case 21: {
                        if (wireType !== 2)
                            break;
                        message.fbCat = reader.bytes();
                        message._fbCat = "fbCat";
                        continue;
                    }
                case 22: {
                        if (wireType !== 2)
                            break;
                        message.fbUserAgent = reader.bytes();
                        message._fbUserAgent = "fbUserAgent";
                        continue;
                    }
                case 23: {
                        if (wireType !== 0)
                            break;
                        message.oc = reader.bool();
                        message._oc = "oc";
                        continue;
                    }
                case 24: {
                        if (wireType !== 0)
                            break;
                        message.lc = reader.int32();
                        message._lc = "lc";
                        continue;
                    }
                case 30: {
                        if (wireType !== 0)
                            break;
                        message.iosAppExtension = reader.int32();
                        message._iosAppExtension = "iosAppExtension";
                        continue;
                    }
                case 31: {
                        if (wireType !== 0)
                            break;
                        message.fbAppId = reader.uint64();
                        message._fbAppId = "fbAppId";
                        continue;
                    }
                case 32: {
                        if (wireType !== 2)
                            break;
                        message.fbDeviceId = reader.bytes();
                        message._fbDeviceId = "fbDeviceId";
                        continue;
                    }
                case 33: {
                        if (wireType !== 0)
                            break;
                        message.pull = reader.bool();
                        message._pull = "pull";
                        continue;
                    }
                case 34: {
                        if (wireType !== 2)
                            break;
                        message.paddingBytes = reader.bytes();
                        message._paddingBytes = "paddingBytes";
                        continue;
                    }
                case 36: {
                        if (wireType !== 0)
                            break;
                        message.yearClass = reader.int32();
                        message._yearClass = "yearClass";
                        continue;
                    }
                case 37: {
                        if (wireType !== 0)
                            break;
                        message.memClass = reader.int32();
                        message._memClass = "memClass";
                        continue;
                    }
                case 38: {
                        if (wireType !== 2)
                            break;
                        message.interopData = $root.Wa6.ClientPayload.InteropData.decode(reader, reader.uint32(), $undefined, _depth + 1, message.interopData);
                        message._interopData = "interopData";
                        continue;
                    }
                case 40: {
                        if (wireType !== 0)
                            break;
                        message.trafficAnonymization = reader.int32();
                        message._trafficAnonymization = "trafficAnonymization";
                        continue;
                    }
                case 41: {
                        if (wireType !== 0)
                            break;
                        message.lidDbMigrated = reader.bool();
                        message._lidDbMigrated = "lidDbMigrated";
                        continue;
                    }
                case 42: {
                        if (wireType !== 0)
                            break;
                        message.accountType = reader.int32();
                        message._accountType = "accountType";
                        continue;
                    }
                case 43: {
                        if (wireType !== 5)
                            break;
                        message.connectionSequenceInfo = reader.sfixed32();
                        message._connectionSequenceInfo = "connectionSequenceInfo";
                        continue;
                    }
                case 44: {
                        if (wireType !== 0)
                            break;
                        message.paaLink = reader.bool();
                        message._paaLink = "paaLink";
                        continue;
                    }
                case 45: {
                        if (wireType !== 0)
                            break;
                        message.preacksCount = reader.int32();
                        message._preacksCount = "preacksCount";
                        continue;
                    }
                case 46: {
                        if (wireType !== 0)
                            break;
                        message.processingQueueSize = reader.int32();
                        message._processingQueueSize = "processingQueueSize";
                        continue;
                    }
                case 47: {
                        if (wireType !== 2)
                            break;
                        if (!(message.pairedPeripherals && message.pairedPeripherals.length))
                            message.pairedPeripherals = [];
                        message.pairedPeripherals.push(reader.stringVerify());
                        continue;
                    }
                case 48: {
                        if (wireType !== 2)
                            break;
                        message.testIsolationId = reader.bytes();
                        message._testIsolationId = "testIsolationId";
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
         * Decodes a ClientPayload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Wa6.ClientPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Wa6.ClientPayload & Wa6.ClientPayload.$Shape} ClientPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientPayload.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClientPayload message.
         * @function verify
         * @memberof Wa6.ClientPayload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClientPayload.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.username != null && $Object.hasOwnProperty.call(message, "username")) {
                properties._username = 1;
                if (!$util.isInteger(message.username) && !(message.username && $util.isInteger(message.username.low) && $util.isInteger(message.username.high)))
                    return "username: integer|Long expected";
            }
            if (message.passive != null && $Object.hasOwnProperty.call(message, "passive")) {
                properties._passive = 1;
                if (typeof message.passive !== "boolean")
                    return "passive: boolean expected";
            }
            if (message.userAgent != null && $Object.hasOwnProperty.call(message, "userAgent")) {
                properties._userAgent = 1;
                {
                    var error = $root.Wa6.ClientPayload.UserAgent.verify(message.userAgent, _depth + 1);
                    if (error)
                        return "userAgent." + error;
                }
            }
            if (message.webInfo != null && $Object.hasOwnProperty.call(message, "webInfo")) {
                properties._webInfo = 1;
                {
                    var error = $root.Wa6.ClientPayload.WebInfo.verify(message.webInfo, _depth + 1);
                    if (error)
                        return "webInfo." + error;
                }
            }
            if (message.pushName != null && $Object.hasOwnProperty.call(message, "pushName")) {
                properties._pushName = 1;
                if (!$util.isString(message.pushName))
                    return "pushName: string expected";
            }
            if (message.sessionId != null && $Object.hasOwnProperty.call(message, "sessionId")) {
                properties._sessionId = 1;
                if (!$util.isInteger(message.sessionId))
                    return "sessionId: integer expected";
            }
            if (message.shortConnect != null && $Object.hasOwnProperty.call(message, "shortConnect")) {
                properties._shortConnect = 1;
                if (typeof message.shortConnect !== "boolean")
                    return "shortConnect: boolean expected";
            }
            if (message.connectType != null && $Object.hasOwnProperty.call(message, "connectType")) {
                properties._connectType = 1;
                if (typeof message.connectType !== "number" || (message.connectType | 0) !== message.connectType)
                    return "connectType: enum value expected";
            }
            if (message.connectReason != null && $Object.hasOwnProperty.call(message, "connectReason")) {
                properties._connectReason = 1;
                if (typeof message.connectReason !== "number" || (message.connectReason | 0) !== message.connectReason)
                    return "connectReason: enum value expected";
            }
            if (message.shards != null && $Object.hasOwnProperty.call(message, "shards")) {
                if (!$Array.isArray(message.shards))
                    return "shards: array expected";
                for (var i = 0; i < message.shards.length; ++i)
                    if (!$util.isInteger(message.shards[i]))
                        return "shards: integer[] expected";
            }
            if (message.dnsSource != null && $Object.hasOwnProperty.call(message, "dnsSource")) {
                properties._dnsSource = 1;
                {
                    var error = $root.Wa6.ClientPayload.DNSSource.verify(message.dnsSource, _depth + 1);
                    if (error)
                        return "dnsSource." + error;
                }
            }
            if (message.connectAttemptCount != null && $Object.hasOwnProperty.call(message, "connectAttemptCount")) {
                properties._connectAttemptCount = 1;
                if (!$util.isInteger(message.connectAttemptCount))
                    return "connectAttemptCount: integer expected";
            }
            if (message.device != null && $Object.hasOwnProperty.call(message, "device")) {
                properties._device = 1;
                if (!$util.isInteger(message.device))
                    return "device: integer expected";
            }
            if (message.devicePairingData != null && $Object.hasOwnProperty.call(message, "devicePairingData")) {
                properties._devicePairingData = 1;
                {
                    var error = $root.Wa6.ClientPayload.DevicePairingRegistrationData.verify(message.devicePairingData, _depth + 1);
                    if (error)
                        return "devicePairingData." + error;
                }
            }
            if (message.product != null && $Object.hasOwnProperty.call(message, "product")) {
                properties._product = 1;
                if (typeof message.product !== "number" || (message.product | 0) !== message.product)
                    return "product: enum value expected";
            }
            if (message.fbCat != null && $Object.hasOwnProperty.call(message, "fbCat")) {
                properties._fbCat = 1;
                if (!(message.fbCat && typeof message.fbCat.length === "number" || $util.isString(message.fbCat)))
                    return "fbCat: buffer expected";
            }
            if (message.fbUserAgent != null && $Object.hasOwnProperty.call(message, "fbUserAgent")) {
                properties._fbUserAgent = 1;
                if (!(message.fbUserAgent && typeof message.fbUserAgent.length === "number" || $util.isString(message.fbUserAgent)))
                    return "fbUserAgent: buffer expected";
            }
            if (message.oc != null && $Object.hasOwnProperty.call(message, "oc")) {
                properties._oc = 1;
                if (typeof message.oc !== "boolean")
                    return "oc: boolean expected";
            }
            if (message.lc != null && $Object.hasOwnProperty.call(message, "lc")) {
                properties._lc = 1;
                if (!$util.isInteger(message.lc))
                    return "lc: integer expected";
            }
            if (message.iosAppExtension != null && $Object.hasOwnProperty.call(message, "iosAppExtension")) {
                properties._iosAppExtension = 1;
                if (typeof message.iosAppExtension !== "number" || (message.iosAppExtension | 0) !== message.iosAppExtension)
                    return "iosAppExtension: enum value expected";
            }
            if (message.fbAppId != null && $Object.hasOwnProperty.call(message, "fbAppId")) {
                properties._fbAppId = 1;
                if (!$util.isInteger(message.fbAppId) && !(message.fbAppId && $util.isInteger(message.fbAppId.low) && $util.isInteger(message.fbAppId.high)))
                    return "fbAppId: integer|Long expected";
            }
            if (message.fbDeviceId != null && $Object.hasOwnProperty.call(message, "fbDeviceId")) {
                properties._fbDeviceId = 1;
                if (!(message.fbDeviceId && typeof message.fbDeviceId.length === "number" || $util.isString(message.fbDeviceId)))
                    return "fbDeviceId: buffer expected";
            }
            if (message.pull != null && $Object.hasOwnProperty.call(message, "pull")) {
                properties._pull = 1;
                if (typeof message.pull !== "boolean")
                    return "pull: boolean expected";
            }
            if (message.paddingBytes != null && $Object.hasOwnProperty.call(message, "paddingBytes")) {
                properties._paddingBytes = 1;
                if (!(message.paddingBytes && typeof message.paddingBytes.length === "number" || $util.isString(message.paddingBytes)))
                    return "paddingBytes: buffer expected";
            }
            if (message.yearClass != null && $Object.hasOwnProperty.call(message, "yearClass")) {
                properties._yearClass = 1;
                if (!$util.isInteger(message.yearClass))
                    return "yearClass: integer expected";
            }
            if (message.memClass != null && $Object.hasOwnProperty.call(message, "memClass")) {
                properties._memClass = 1;
                if (!$util.isInteger(message.memClass))
                    return "memClass: integer expected";
            }
            if (message.interopData != null && $Object.hasOwnProperty.call(message, "interopData")) {
                properties._interopData = 1;
                {
                    var error = $root.Wa6.ClientPayload.InteropData.verify(message.interopData, _depth + 1);
                    if (error)
                        return "interopData." + error;
                }
            }
            if (message.trafficAnonymization != null && $Object.hasOwnProperty.call(message, "trafficAnonymization")) {
                properties._trafficAnonymization = 1;
                if (typeof message.trafficAnonymization !== "number" || (message.trafficAnonymization | 0) !== message.trafficAnonymization)
                    return "trafficAnonymization: enum value expected";
            }
            if (message.lidDbMigrated != null && $Object.hasOwnProperty.call(message, "lidDbMigrated")) {
                properties._lidDbMigrated = 1;
                if (typeof message.lidDbMigrated !== "boolean")
                    return "lidDbMigrated: boolean expected";
            }
            if (message.accountType != null && $Object.hasOwnProperty.call(message, "accountType")) {
                properties._accountType = 1;
                if (typeof message.accountType !== "number" || (message.accountType | 0) !== message.accountType)
                    return "accountType: enum value expected";
            }
            if (message.connectionSequenceInfo != null && $Object.hasOwnProperty.call(message, "connectionSequenceInfo")) {
                properties._connectionSequenceInfo = 1;
                if (!$util.isInteger(message.connectionSequenceInfo))
                    return "connectionSequenceInfo: integer expected";
            }
            if (message.paaLink != null && $Object.hasOwnProperty.call(message, "paaLink")) {
                properties._paaLink = 1;
                if (typeof message.paaLink !== "boolean")
                    return "paaLink: boolean expected";
            }
            if (message.preacksCount != null && $Object.hasOwnProperty.call(message, "preacksCount")) {
                properties._preacksCount = 1;
                if (!$util.isInteger(message.preacksCount))
                    return "preacksCount: integer expected";
            }
            if (message.processingQueueSize != null && $Object.hasOwnProperty.call(message, "processingQueueSize")) {
                properties._processingQueueSize = 1;
                if (!$util.isInteger(message.processingQueueSize))
                    return "processingQueueSize: integer expected";
            }
            if (message.pairedPeripherals != null && $Object.hasOwnProperty.call(message, "pairedPeripherals")) {
                if (!$Array.isArray(message.pairedPeripherals))
                    return "pairedPeripherals: array expected";
                for (var i = 0; i < message.pairedPeripherals.length; ++i)
                    if (!$util.isString(message.pairedPeripherals[i]))
                        return "pairedPeripherals: string[] expected";
            }
            if (message.testIsolationId != null && $Object.hasOwnProperty.call(message, "testIsolationId")) {
                properties._testIsolationId = 1;
                if (!(message.testIsolationId && typeof message.testIsolationId.length === "number" || $util.isString(message.testIsolationId)))
                    return "testIsolationId: buffer expected";
            }
            return null;
        };

        /**
         * Creates a ClientPayload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Wa6.ClientPayload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Wa6.ClientPayload} ClientPayload
         */
        ClientPayload.fromObject = function (object, _depth) {
            if (object instanceof $root.Wa6.ClientPayload)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".Wa6.ClientPayload: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.Wa6.ClientPayload();
            if (object.username != null)
                if ($util.Long)
                    message.username = $util.Long.fromValue(object.username, true);
                else if (typeof object.username === "string")
                    message.username = $parseInt(object.username, 10);
                else if (typeof object.username === "number")
                    message.username = object.username;
                else if (typeof object.username === "object")
                    message.username = new $util.LongBits(object.username.low >>> 0, object.username.high >>> 0).toNumber(true);
            if (object.passive != null)
                message.passive = $Boolean(object.passive);
            if (object.userAgent != null) {
                if (!$util.isObject(object.userAgent))
                    throw $TypeError(".Wa6.ClientPayload.userAgent: object expected");
                message.userAgent = $root.Wa6.ClientPayload.UserAgent.fromObject(object.userAgent, _depth + 1);
            }
            if (object.webInfo != null) {
                if (!$util.isObject(object.webInfo))
                    throw $TypeError(".Wa6.ClientPayload.webInfo: object expected");
                message.webInfo = $root.Wa6.ClientPayload.WebInfo.fromObject(object.webInfo, _depth + 1);
            }
            if (object.pushName != null)
                message.pushName = $String(object.pushName);
            if (object.sessionId != null)
                message.sessionId = object.sessionId | 0;
            if (object.shortConnect != null)
                message.shortConnect = $Boolean(object.shortConnect);
            switch (object.connectType) {
            case "CELLULAR_UNKNOWN":
            case 0:
                message.connectType = 0;
                break;
            case "WIFI_UNKNOWN":
            case 1:
                message.connectType = 1;
                break;
            case "CELLULAR_EDGE":
            case 100:
                message.connectType = 100;
                break;
            case "CELLULAR_IDEN":
            case 101:
                message.connectType = 101;
                break;
            case "CELLULAR_UMTS":
            case 102:
                message.connectType = 102;
                break;
            case "CELLULAR_EVDO":
            case 103:
                message.connectType = 103;
                break;
            case "CELLULAR_GPRS":
            case 104:
                message.connectType = 104;
                break;
            case "CELLULAR_HSDPA":
            case 105:
                message.connectType = 105;
                break;
            case "CELLULAR_HSUPA":
            case 106:
                message.connectType = 106;
                break;
            case "CELLULAR_HSPA":
            case 107:
                message.connectType = 107;
                break;
            case "CELLULAR_CDMA":
            case 108:
                message.connectType = 108;
                break;
            case "CELLULAR_1XRTT":
            case 109:
                message.connectType = 109;
                break;
            case "CELLULAR_EHRPD":
            case 110:
                message.connectType = 110;
                break;
            case "CELLULAR_LTE":
            case 111:
                message.connectType = 111;
                break;
            case "CELLULAR_HSPAP":
            case 112:
                message.connectType = 112;
                break;
            default:
                if (typeof object.connectType === "number" && (object.connectType | 0) === object.connectType)
                    message.connectType = object.connectType;
            }
            switch (object.connectReason) {
            case "PUSH":
            case 0:
                message.connectReason = 0;
                break;
            case "USER_ACTIVATED":
            case 1:
                message.connectReason = 1;
                break;
            case "SCHEDULED":
            case 2:
                message.connectReason = 2;
                break;
            case "ERROR_RECONNECT":
            case 3:
                message.connectReason = 3;
                break;
            case "NETWORK_SWITCH":
            case 4:
                message.connectReason = 4;
                break;
            case "PING_RECONNECT":
            case 5:
                message.connectReason = 5;
                break;
            case "UNKNOWN":
            case 6:
                message.connectReason = 6;
                break;
            default:
                if (typeof object.connectReason === "number" && (object.connectReason | 0) === object.connectReason)
                    message.connectReason = object.connectReason;
            }
            if (object.shards) {
                if (!$Array.isArray(object.shards))
                    throw $TypeError(".Wa6.ClientPayload.shards: array expected");
                message.shards = $Array(object.shards.length);
                for (var i = 0; i < object.shards.length; ++i)
                    message.shards[i] = object.shards[i] | 0;
            }
            if (object.dnsSource != null) {
                if (!$util.isObject(object.dnsSource))
                    throw $TypeError(".Wa6.ClientPayload.dnsSource: object expected");
                message.dnsSource = $root.Wa6.ClientPayload.DNSSource.fromObject(object.dnsSource, _depth + 1);
            }
            if (object.connectAttemptCount != null)
                message.connectAttemptCount = object.connectAttemptCount >>> 0;
            if (object.device != null)
                message.device = object.device >>> 0;
            if (object.devicePairingData != null) {
                if (!$util.isObject(object.devicePairingData))
                    throw $TypeError(".Wa6.ClientPayload.devicePairingData: object expected");
                message.devicePairingData = $root.Wa6.ClientPayload.DevicePairingRegistrationData.fromObject(object.devicePairingData, _depth + 1);
            }
            switch (object.product) {
            case "WHATSAPP":
            case 0:
                message.product = 0;
                break;
            case "MESSENGER":
            case 1:
                message.product = 1;
                break;
            case "INTEROP":
            case 2:
                message.product = 2;
                break;
            case "INTEROP_MSGR":
            case 3:
                message.product = 3;
                break;
            case "WHATSAPP_LID":
            case 4:
                message.product = 4;
                break;
            default:
                if (typeof object.product === "number" && (object.product | 0) === object.product)
                    message.product = object.product;
            }
            if (object.fbCat != null)
                if (typeof object.fbCat === "string")
                    $util.base64.decode(object.fbCat, message.fbCat = $util.newBuffer($util.base64.length(object.fbCat)), 0);
                else if (object.fbCat.length >= 0)
                    message.fbCat = object.fbCat;
            if (object.fbUserAgent != null)
                if (typeof object.fbUserAgent === "string")
                    $util.base64.decode(object.fbUserAgent, message.fbUserAgent = $util.newBuffer($util.base64.length(object.fbUserAgent)), 0);
                else if (object.fbUserAgent.length >= 0)
                    message.fbUserAgent = object.fbUserAgent;
            if (object.oc != null)
                message.oc = $Boolean(object.oc);
            if (object.lc != null)
                message.lc = object.lc | 0;
            switch (object.iosAppExtension) {
            case "SHARE_EXTENSION":
            case 0:
                message.iosAppExtension = 0;
                break;
            case "SERVICE_EXTENSION":
            case 1:
                message.iosAppExtension = 1;
                break;
            case "INTENTS_EXTENSION":
            case 2:
                message.iosAppExtension = 2;
                break;
            default:
                if (typeof object.iosAppExtension === "number" && (object.iosAppExtension | 0) === object.iosAppExtension)
                    message.iosAppExtension = object.iosAppExtension;
            }
            if (object.fbAppId != null)
                if ($util.Long)
                    message.fbAppId = $util.Long.fromValue(object.fbAppId, true);
                else if (typeof object.fbAppId === "string")
                    message.fbAppId = $parseInt(object.fbAppId, 10);
                else if (typeof object.fbAppId === "number")
                    message.fbAppId = object.fbAppId;
                else if (typeof object.fbAppId === "object")
                    message.fbAppId = new $util.LongBits(object.fbAppId.low >>> 0, object.fbAppId.high >>> 0).toNumber(true);
            if (object.fbDeviceId != null)
                if (typeof object.fbDeviceId === "string")
                    $util.base64.decode(object.fbDeviceId, message.fbDeviceId = $util.newBuffer($util.base64.length(object.fbDeviceId)), 0);
                else if (object.fbDeviceId.length >= 0)
                    message.fbDeviceId = object.fbDeviceId;
            if (object.pull != null)
                message.pull = $Boolean(object.pull);
            if (object.paddingBytes != null)
                if (typeof object.paddingBytes === "string")
                    $util.base64.decode(object.paddingBytes, message.paddingBytes = $util.newBuffer($util.base64.length(object.paddingBytes)), 0);
                else if (object.paddingBytes.length >= 0)
                    message.paddingBytes = object.paddingBytes;
            if (object.yearClass != null)
                message.yearClass = object.yearClass | 0;
            if (object.memClass != null)
                message.memClass = object.memClass | 0;
            if (object.interopData != null) {
                if (!$util.isObject(object.interopData))
                    throw $TypeError(".Wa6.ClientPayload.interopData: object expected");
                message.interopData = $root.Wa6.ClientPayload.InteropData.fromObject(object.interopData, _depth + 1);
            }
            switch (object.trafficAnonymization) {
            case "OFF":
            case 0:
                message.trafficAnonymization = 0;
                break;
            case "STANDARD":
            case 1:
                message.trafficAnonymization = 1;
                break;
            default:
                if (typeof object.trafficAnonymization === "number" && (object.trafficAnonymization | 0) === object.trafficAnonymization)
                    message.trafficAnonymization = object.trafficAnonymization;
            }
            if (object.lidDbMigrated != null)
                message.lidDbMigrated = $Boolean(object.lidDbMigrated);
            switch (object.accountType) {
            case "DEFAULT":
            case 0:
                message.accountType = 0;
                break;
            case "GUEST":
            case 1:
                message.accountType = 1;
                break;
            default:
                if (typeof object.accountType === "number" && (object.accountType | 0) === object.accountType)
                    message.accountType = object.accountType;
            }
            if (object.connectionSequenceInfo != null)
                message.connectionSequenceInfo = object.connectionSequenceInfo | 0;
            if (object.paaLink != null)
                message.paaLink = $Boolean(object.paaLink);
            if (object.preacksCount != null)
                message.preacksCount = object.preacksCount | 0;
            if (object.processingQueueSize != null)
                message.processingQueueSize = object.processingQueueSize | 0;
            if (object.pairedPeripherals) {
                if (!$Array.isArray(object.pairedPeripherals))
                    throw $TypeError(".Wa6.ClientPayload.pairedPeripherals: array expected");
                message.pairedPeripherals = $Array(object.pairedPeripherals.length);
                for (var i = 0; i < object.pairedPeripherals.length; ++i)
                    message.pairedPeripherals[i] = $String(object.pairedPeripherals[i]);
            }
            if (object.testIsolationId != null)
                if (typeof object.testIsolationId === "string")
                    $util.base64.decode(object.testIsolationId, message.testIsolationId = $util.newBuffer($util.base64.length(object.testIsolationId)), 0);
                else if (object.testIsolationId.length >= 0)
                    message.testIsolationId = object.testIsolationId;
            return message;
        };

        /**
         * Creates a plain object from a ClientPayload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Wa6.ClientPayload
         * @static
         * @param {Wa6.ClientPayload} message ClientPayload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClientPayload.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (options.arrays || options.defaults) {
                object.shards = [];
                object.pairedPeripherals = [];
            }
            if (message.username != null && $Object.hasOwnProperty.call(message, "username"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.username = typeof message.username === "number" ? $BigInt(message.username) : $util.Long.fromBits(message.username.low >>> 0, message.username.high >>> 0, true).toBigInt();
                else if (typeof message.username === "number")
                    object.username = options.longs === $String ? $String(message.username) : message.username;
                else
                    object.username = options.longs === $String ? $util.Long.prototype.toString.call(message.username) : options.longs === $Number ? new $util.LongBits(message.username.low >>> 0, message.username.high >>> 0).toNumber(true) : message.username;
            if (message.passive != null && $Object.hasOwnProperty.call(message, "passive"))
                object.passive = message.passive;
            if (message.userAgent != null && $Object.hasOwnProperty.call(message, "userAgent"))
                object.userAgent = $root.Wa6.ClientPayload.UserAgent.toObject(message.userAgent, options, _depth + 1);
            if (message.webInfo != null && $Object.hasOwnProperty.call(message, "webInfo"))
                object.webInfo = $root.Wa6.ClientPayload.WebInfo.toObject(message.webInfo, options, _depth + 1);
            if (message.pushName != null && $Object.hasOwnProperty.call(message, "pushName"))
                object.pushName = message.pushName;
            if (message.sessionId != null && $Object.hasOwnProperty.call(message, "sessionId"))
                object.sessionId = message.sessionId;
            if (message.shortConnect != null && $Object.hasOwnProperty.call(message, "shortConnect"))
                object.shortConnect = message.shortConnect;
            if (message.connectType != null && $Object.hasOwnProperty.call(message, "connectType"))
                object.connectType = options.enums === $String ? $root.Wa6.ClientPayload.ConnectType[message.connectType] === $undefined ? message.connectType : $root.Wa6.ClientPayload.ConnectType[message.connectType] : message.connectType;
            if (message.connectReason != null && $Object.hasOwnProperty.call(message, "connectReason"))
                object.connectReason = options.enums === $String ? $root.Wa6.ClientPayload.ConnectReason[message.connectReason] === $undefined ? message.connectReason : $root.Wa6.ClientPayload.ConnectReason[message.connectReason] : message.connectReason;
            if (message.shards && message.shards.length) {
                object.shards = $Array(message.shards.length);
                for (var j = 0; j < message.shards.length; ++j)
                    object.shards[j] = message.shards[j];
            }
            if (message.dnsSource != null && $Object.hasOwnProperty.call(message, "dnsSource"))
                object.dnsSource = $root.Wa6.ClientPayload.DNSSource.toObject(message.dnsSource, options, _depth + 1);
            if (message.connectAttemptCount != null && $Object.hasOwnProperty.call(message, "connectAttemptCount"))
                object.connectAttemptCount = message.connectAttemptCount;
            if (message.device != null && $Object.hasOwnProperty.call(message, "device"))
                object.device = message.device;
            if (message.devicePairingData != null && $Object.hasOwnProperty.call(message, "devicePairingData"))
                object.devicePairingData = $root.Wa6.ClientPayload.DevicePairingRegistrationData.toObject(message.devicePairingData, options, _depth + 1);
            if (message.product != null && $Object.hasOwnProperty.call(message, "product"))
                object.product = options.enums === $String ? $root.Wa6.ClientPayload.Product[message.product] === $undefined ? message.product : $root.Wa6.ClientPayload.Product[message.product] : message.product;
            if (message.fbCat != null && $Object.hasOwnProperty.call(message, "fbCat"))
                object.fbCat = options.bytes === $String ? $util.base64.encode(message.fbCat, 0, message.fbCat.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.fbCat) : message.fbCat;
            if (message.fbUserAgent != null && $Object.hasOwnProperty.call(message, "fbUserAgent"))
                object.fbUserAgent = options.bytes === $String ? $util.base64.encode(message.fbUserAgent, 0, message.fbUserAgent.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.fbUserAgent) : message.fbUserAgent;
            if (message.oc != null && $Object.hasOwnProperty.call(message, "oc"))
                object.oc = message.oc;
            if (message.lc != null && $Object.hasOwnProperty.call(message, "lc"))
                object.lc = message.lc;
            if (message.iosAppExtension != null && $Object.hasOwnProperty.call(message, "iosAppExtension"))
                object.iosAppExtension = options.enums === $String ? $root.Wa6.ClientPayload.IOSAppExtension[message.iosAppExtension] === $undefined ? message.iosAppExtension : $root.Wa6.ClientPayload.IOSAppExtension[message.iosAppExtension] : message.iosAppExtension;
            if (message.fbAppId != null && $Object.hasOwnProperty.call(message, "fbAppId"))
                if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                    object.fbAppId = typeof message.fbAppId === "number" ? $BigInt(message.fbAppId) : $util.Long.fromBits(message.fbAppId.low >>> 0, message.fbAppId.high >>> 0, true).toBigInt();
                else if (typeof message.fbAppId === "number")
                    object.fbAppId = options.longs === $String ? $String(message.fbAppId) : message.fbAppId;
                else
                    object.fbAppId = options.longs === $String ? $util.Long.prototype.toString.call(message.fbAppId) : options.longs === $Number ? new $util.LongBits(message.fbAppId.low >>> 0, message.fbAppId.high >>> 0).toNumber(true) : message.fbAppId;
            if (message.fbDeviceId != null && $Object.hasOwnProperty.call(message, "fbDeviceId"))
                object.fbDeviceId = options.bytes === $String ? $util.base64.encode(message.fbDeviceId, 0, message.fbDeviceId.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.fbDeviceId) : message.fbDeviceId;
            if (message.pull != null && $Object.hasOwnProperty.call(message, "pull"))
                object.pull = message.pull;
            if (message.paddingBytes != null && $Object.hasOwnProperty.call(message, "paddingBytes"))
                object.paddingBytes = options.bytes === $String ? $util.base64.encode(message.paddingBytes, 0, message.paddingBytes.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.paddingBytes) : message.paddingBytes;
            if (message.yearClass != null && $Object.hasOwnProperty.call(message, "yearClass"))
                object.yearClass = message.yearClass;
            if (message.memClass != null && $Object.hasOwnProperty.call(message, "memClass"))
                object.memClass = message.memClass;
            if (message.interopData != null && $Object.hasOwnProperty.call(message, "interopData"))
                object.interopData = $root.Wa6.ClientPayload.InteropData.toObject(message.interopData, options, _depth + 1);
            if (message.trafficAnonymization != null && $Object.hasOwnProperty.call(message, "trafficAnonymization"))
                object.trafficAnonymization = options.enums === $String ? $root.Wa6.ClientPayload.TrafficAnonymization[message.trafficAnonymization] === $undefined ? message.trafficAnonymization : $root.Wa6.ClientPayload.TrafficAnonymization[message.trafficAnonymization] : message.trafficAnonymization;
            if (message.lidDbMigrated != null && $Object.hasOwnProperty.call(message, "lidDbMigrated"))
                object.lidDbMigrated = message.lidDbMigrated;
            if (message.accountType != null && $Object.hasOwnProperty.call(message, "accountType"))
                object.accountType = options.enums === $String ? $root.Wa6.ClientPayload.AccountType[message.accountType] === $undefined ? message.accountType : $root.Wa6.ClientPayload.AccountType[message.accountType] : message.accountType;
            if (message.connectionSequenceInfo != null && $Object.hasOwnProperty.call(message, "connectionSequenceInfo"))
                object.connectionSequenceInfo = message.connectionSequenceInfo;
            if (message.paaLink != null && $Object.hasOwnProperty.call(message, "paaLink"))
                object.paaLink = message.paaLink;
            if (message.preacksCount != null && $Object.hasOwnProperty.call(message, "preacksCount"))
                object.preacksCount = message.preacksCount;
            if (message.processingQueueSize != null && $Object.hasOwnProperty.call(message, "processingQueueSize"))
                object.processingQueueSize = message.processingQueueSize;
            if (message.pairedPeripherals && message.pairedPeripherals.length) {
                object.pairedPeripherals = $Array(message.pairedPeripherals.length);
                for (var j = 0; j < message.pairedPeripherals.length; ++j)
                    object.pairedPeripherals[j] = message.pairedPeripherals[j];
            }
            if (message.testIsolationId != null && $Object.hasOwnProperty.call(message, "testIsolationId"))
                object.testIsolationId = options.bytes === $String ? $util.base64.encode(message.testIsolationId, 0, message.testIsolationId.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.testIsolationId) : message.testIsolationId;
            return object;
        };

        /**
         * Converts this ClientPayload to JSON.
         * @function toJSON
         * @memberof Wa6.ClientPayload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClientPayload.prototype.toJSON = function() {
            return ClientPayload.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for ClientPayload
         * @function getTypeUrl
         * @memberof Wa6.ClientPayload
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        ClientPayload.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/Wa6.ClientPayload";
        };

        /**
         * AccountType enum.
         * @name Wa6.ClientPayload.AccountType
         * @enum {number}
         * @property {number} DEFAULT=0 DEFAULT value
         * @property {number} GUEST=1 GUEST value
         */
        ClientPayload.AccountType = (function() {
            var valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "DEFAULT"] = 0;
            values[valuesById[1] = "GUEST"] = 1;
            return values;
        })();

        /**
         * ConnectReason enum.
         * @name Wa6.ClientPayload.ConnectReason
         * @enum {number}
         * @property {number} PUSH=0 PUSH value
         * @property {number} USER_ACTIVATED=1 USER_ACTIVATED value
         * @property {number} SCHEDULED=2 SCHEDULED value
         * @property {number} ERROR_RECONNECT=3 ERROR_RECONNECT value
         * @property {number} NETWORK_SWITCH=4 NETWORK_SWITCH value
         * @property {number} PING_RECONNECT=5 PING_RECONNECT value
         * @property {number} UNKNOWN=6 UNKNOWN value
         */
        ClientPayload.ConnectReason = (function() {
            var valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "PUSH"] = 0;
            values[valuesById[1] = "USER_ACTIVATED"] = 1;
            values[valuesById[2] = "SCHEDULED"] = 2;
            values[valuesById[3] = "ERROR_RECONNECT"] = 3;
            values[valuesById[4] = "NETWORK_SWITCH"] = 4;
            values[valuesById[5] = "PING_RECONNECT"] = 5;
            values[valuesById[6] = "UNKNOWN"] = 6;
            return values;
        })();

        /**
         * ConnectType enum.
         * @name Wa6.ClientPayload.ConnectType
         * @enum {number}
         * @property {number} CELLULAR_UNKNOWN=0 CELLULAR_UNKNOWN value
         * @property {number} WIFI_UNKNOWN=1 WIFI_UNKNOWN value
         * @property {number} CELLULAR_EDGE=100 CELLULAR_EDGE value
         * @property {number} CELLULAR_IDEN=101 CELLULAR_IDEN value
         * @property {number} CELLULAR_UMTS=102 CELLULAR_UMTS value
         * @property {number} CELLULAR_EVDO=103 CELLULAR_EVDO value
         * @property {number} CELLULAR_GPRS=104 CELLULAR_GPRS value
         * @property {number} CELLULAR_HSDPA=105 CELLULAR_HSDPA value
         * @property {number} CELLULAR_HSUPA=106 CELLULAR_HSUPA value
         * @property {number} CELLULAR_HSPA=107 CELLULAR_HSPA value
         * @property {number} CELLULAR_CDMA=108 CELLULAR_CDMA value
         * @property {number} CELLULAR_1XRTT=109 CELLULAR_1XRTT value
         * @property {number} CELLULAR_EHRPD=110 CELLULAR_EHRPD value
         * @property {number} CELLULAR_LTE=111 CELLULAR_LTE value
         * @property {number} CELLULAR_HSPAP=112 CELLULAR_HSPAP value
         */
        ClientPayload.ConnectType = (function() {
            var valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "CELLULAR_UNKNOWN"] = 0;
            values[valuesById[1] = "WIFI_UNKNOWN"] = 1;
            values[valuesById[100] = "CELLULAR_EDGE"] = 100;
            values[valuesById[101] = "CELLULAR_IDEN"] = 101;
            values[valuesById[102] = "CELLULAR_UMTS"] = 102;
            values[valuesById[103] = "CELLULAR_EVDO"] = 103;
            values[valuesById[104] = "CELLULAR_GPRS"] = 104;
            values[valuesById[105] = "CELLULAR_HSDPA"] = 105;
            values[valuesById[106] = "CELLULAR_HSUPA"] = 106;
            values[valuesById[107] = "CELLULAR_HSPA"] = 107;
            values[valuesById[108] = "CELLULAR_CDMA"] = 108;
            values[valuesById[109] = "CELLULAR_1XRTT"] = 109;
            values[valuesById[110] = "CELLULAR_EHRPD"] = 110;
            values[valuesById[111] = "CELLULAR_LTE"] = 111;
            values[valuesById[112] = "CELLULAR_HSPAP"] = 112;
            return values;
        })();

        ClientPayload.DNSSource = (function() {

            /**
             * Properties of a DNSSource.
             * @typedef {Object} Wa6.ClientPayload.DNSSource.$Properties
             * @property {Wa6.ClientPayload.DNSSource.DNSResolutionMethod|null} [dnsMethod] DNSSource dnsMethod
             * @property {boolean|null} [appCached] DNSSource appCached
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a DNSSource.
             * @memberof Wa6.ClientPayload
             * @interface IDNSSource
             * @augments Wa6.ClientPayload.DNSSource.$Properties
             * @deprecated Use Wa6.ClientPayload.DNSSource.$Properties instead.
             */

            /**
             * Shape of a DNSSource.
             * @typedef {Wa6.ClientPayload.DNSSource.$Properties} Wa6.ClientPayload.DNSSource.$Shape
             */

            /**
             * Constructs a new DNSSource.
             * @memberof Wa6.ClientPayload
             * @classdesc Represents a DNSSource.
             * @constructor
             * @param {Wa6.ClientPayload.DNSSource.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var DNSSource = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * DNSSource dnsMethod.
             * @member {Wa6.ClientPayload.DNSSource.DNSResolutionMethod|null|undefined} dnsMethod
             * @memberof Wa6.ClientPayload.DNSSource
             * @instance
             */
            DNSSource.prototype.dnsMethod = null;

            /**
             * DNSSource appCached.
             * @member {boolean|null|undefined} appCached
             * @memberof Wa6.ClientPayload.DNSSource
             * @instance
             */
            DNSSource.prototype.appCached = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(DNSSource.prototype, "_dnsMethod", {
                get: $util.oneOfGetter($oneOfFields = ["dnsMethod"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(DNSSource.prototype, "_appCached", {
                get: $util.oneOfGetter($oneOfFields = ["appCached"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new DNSSource instance using the specified properties.
             * @function create
             * @memberof Wa6.ClientPayload.DNSSource
             * @static
             * @param {Wa6.ClientPayload.DNSSource.$Properties=} [properties] Properties to set
             * @returns {Wa6.ClientPayload.DNSSource} DNSSource instance
             * @type {{
             *   (properties: Wa6.ClientPayload.DNSSource.$Shape): Wa6.ClientPayload.DNSSource & Wa6.ClientPayload.DNSSource.$Shape;
             *   (properties?: Wa6.ClientPayload.DNSSource.$Properties): Wa6.ClientPayload.DNSSource;
             * }}
             */
            DNSSource.create = function(properties) {
                return new DNSSource(properties);
            };

            /**
             * Encodes the specified DNSSource message. Does not implicitly {@link Wa6.ClientPayload.DNSSource.verify|verify} messages.
             * @function encode
             * @memberof Wa6.ClientPayload.DNSSource
             * @static
             * @param {Wa6.ClientPayload.DNSSource.$Properties} message DNSSource message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DNSSource.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.dnsMethod != null && $Object.hasOwnProperty.call(message, "dnsMethod"))
                    writer.uint32(/* id 15, wireType 0 =*/120).int32(message.dnsMethod);
                if (message.appCached != null && $Object.hasOwnProperty.call(message, "appCached"))
                    writer.uint32(/* id 16, wireType 0 =*/128).bool(message.appCached);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified DNSSource message, length delimited. Does not implicitly {@link Wa6.ClientPayload.DNSSource.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Wa6.ClientPayload.DNSSource
             * @static
             * @param {Wa6.ClientPayload.DNSSource.$Properties} message DNSSource message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DNSSource.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a DNSSource message from the specified reader or buffer.
             * @function decode
             * @memberof Wa6.ClientPayload.DNSSource
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Wa6.ClientPayload.DNSSource & Wa6.ClientPayload.DNSSource.$Shape} DNSSource
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DNSSource.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Wa6.ClientPayload.DNSSource(), value;
                while (reader.pos < end) {
                    var start = reader.pos;
                    var tag = reader.tag();
                    if (tag === _end) {
                        _end = $undefined;
                        break;
                    }
                    var wireType = tag & 7;
                    switch (tag >>>= 3) {
                    case 15: {
                            if (wireType !== 0)
                                break;
                            message.dnsMethod = reader.int32();
                            message._dnsMethod = "dnsMethod";
                            continue;
                        }
                    case 16: {
                            if (wireType !== 0)
                                break;
                            message.appCached = reader.bool();
                            message._appCached = "appCached";
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
             * Decodes a DNSSource message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Wa6.ClientPayload.DNSSource
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Wa6.ClientPayload.DNSSource & Wa6.ClientPayload.DNSSource.$Shape} DNSSource
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DNSSource.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DNSSource message.
             * @function verify
             * @memberof Wa6.ClientPayload.DNSSource
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DNSSource.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.dnsMethod != null && $Object.hasOwnProperty.call(message, "dnsMethod")) {
                    properties._dnsMethod = 1;
                    if (typeof message.dnsMethod !== "number" || (message.dnsMethod | 0) !== message.dnsMethod)
                        return "dnsMethod: enum value expected";
                }
                if (message.appCached != null && $Object.hasOwnProperty.call(message, "appCached")) {
                    properties._appCached = 1;
                    if (typeof message.appCached !== "boolean")
                        return "appCached: boolean expected";
                }
                return null;
            };

            /**
             * Creates a DNSSource message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Wa6.ClientPayload.DNSSource
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Wa6.ClientPayload.DNSSource} DNSSource
             */
            DNSSource.fromObject = function (object, _depth) {
                if (object instanceof $root.Wa6.ClientPayload.DNSSource)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".Wa6.ClientPayload.DNSSource: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.Wa6.ClientPayload.DNSSource();
                switch (object.dnsMethod) {
                case "SYSTEM":
                case 0:
                    message.dnsMethod = 0;
                    break;
                case "GOOGLE":
                case 1:
                    message.dnsMethod = 1;
                    break;
                case "HARDCODED":
                case 2:
                    message.dnsMethod = 2;
                    break;
                case "OVERRIDE":
                case 3:
                    message.dnsMethod = 3;
                    break;
                case "FALLBACK":
                case 4:
                    message.dnsMethod = 4;
                    break;
                case "MNS":
                case 5:
                    message.dnsMethod = 5;
                    break;
                case "MNS_SECONDARY":
                case 6:
                    message.dnsMethod = 6;
                    break;
                case "SOCKS_PROXY":
                case 7:
                    message.dnsMethod = 7;
                    break;
                default:
                    if (typeof object.dnsMethod === "number" && (object.dnsMethod | 0) === object.dnsMethod)
                        message.dnsMethod = object.dnsMethod;
                }
                if (object.appCached != null)
                    message.appCached = $Boolean(object.appCached);
                return message;
            };

            /**
             * Creates a plain object from a DNSSource message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Wa6.ClientPayload.DNSSource
             * @static
             * @param {Wa6.ClientPayload.DNSSource} message DNSSource
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DNSSource.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (message.dnsMethod != null && $Object.hasOwnProperty.call(message, "dnsMethod"))
                    object.dnsMethod = options.enums === $String ? $root.Wa6.ClientPayload.DNSSource.DNSResolutionMethod[message.dnsMethod] === $undefined ? message.dnsMethod : $root.Wa6.ClientPayload.DNSSource.DNSResolutionMethod[message.dnsMethod] : message.dnsMethod;
                if (message.appCached != null && $Object.hasOwnProperty.call(message, "appCached"))
                    object.appCached = message.appCached;
                return object;
            };

            /**
             * Converts this DNSSource to JSON.
             * @function toJSON
             * @memberof Wa6.ClientPayload.DNSSource
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DNSSource.prototype.toJSON = function() {
                return DNSSource.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for DNSSource
             * @function getTypeUrl
             * @memberof Wa6.ClientPayload.DNSSource
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            DNSSource.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/Wa6.ClientPayload.DNSSource";
            };

            /**
             * DNSResolutionMethod enum.
             * @name Wa6.ClientPayload.DNSSource.DNSResolutionMethod
             * @enum {number}
             * @property {number} SYSTEM=0 SYSTEM value
             * @property {number} GOOGLE=1 GOOGLE value
             * @property {number} HARDCODED=2 HARDCODED value
             * @property {number} OVERRIDE=3 OVERRIDE value
             * @property {number} FALLBACK=4 FALLBACK value
             * @property {number} MNS=5 MNS value
             * @property {number} MNS_SECONDARY=6 MNS_SECONDARY value
             * @property {number} SOCKS_PROXY=7 SOCKS_PROXY value
             */
            DNSSource.DNSResolutionMethod = (function() {
                var valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "SYSTEM"] = 0;
                values[valuesById[1] = "GOOGLE"] = 1;
                values[valuesById[2] = "HARDCODED"] = 2;
                values[valuesById[3] = "OVERRIDE"] = 3;
                values[valuesById[4] = "FALLBACK"] = 4;
                values[valuesById[5] = "MNS"] = 5;
                values[valuesById[6] = "MNS_SECONDARY"] = 6;
                values[valuesById[7] = "SOCKS_PROXY"] = 7;
                return values;
            })();

            return DNSSource;
        })();

        ClientPayload.DevicePairingRegistrationData = (function() {

            /**
             * Properties of a DevicePairingRegistrationData.
             * @typedef {Object} Wa6.ClientPayload.DevicePairingRegistrationData.$Properties
             * @property {Uint8Array|null} [eRegid] DevicePairingRegistrationData eRegid
             * @property {Uint8Array|null} [eKeytype] DevicePairingRegistrationData eKeytype
             * @property {Uint8Array|null} [eIdent] DevicePairingRegistrationData eIdent
             * @property {Uint8Array|null} [eSkeyId] DevicePairingRegistrationData eSkeyId
             * @property {Uint8Array|null} [eSkeyVal] DevicePairingRegistrationData eSkeyVal
             * @property {Uint8Array|null} [eSkeySig] DevicePairingRegistrationData eSkeySig
             * @property {Uint8Array|null} [buildHash] DevicePairingRegistrationData buildHash
             * @property {Uint8Array|null} [deviceProps] DevicePairingRegistrationData deviceProps
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a DevicePairingRegistrationData.
             * @memberof Wa6.ClientPayload
             * @interface IDevicePairingRegistrationData
             * @augments Wa6.ClientPayload.DevicePairingRegistrationData.$Properties
             * @deprecated Use Wa6.ClientPayload.DevicePairingRegistrationData.$Properties instead.
             */

            /**
             * Shape of a DevicePairingRegistrationData.
             * @typedef {Wa6.ClientPayload.DevicePairingRegistrationData.$Properties} Wa6.ClientPayload.DevicePairingRegistrationData.$Shape
             */

            /**
             * Constructs a new DevicePairingRegistrationData.
             * @memberof Wa6.ClientPayload
             * @classdesc Represents a DevicePairingRegistrationData.
             * @constructor
             * @param {Wa6.ClientPayload.DevicePairingRegistrationData.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var DevicePairingRegistrationData = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * DevicePairingRegistrationData eRegid.
             * @member {Uint8Array|null|undefined} eRegid
             * @memberof Wa6.ClientPayload.DevicePairingRegistrationData
             * @instance
             */
            DevicePairingRegistrationData.prototype.eRegid = null;

            /**
             * DevicePairingRegistrationData eKeytype.
             * @member {Uint8Array|null|undefined} eKeytype
             * @memberof Wa6.ClientPayload.DevicePairingRegistrationData
             * @instance
             */
            DevicePairingRegistrationData.prototype.eKeytype = null;

            /**
             * DevicePairingRegistrationData eIdent.
             * @member {Uint8Array|null|undefined} eIdent
             * @memberof Wa6.ClientPayload.DevicePairingRegistrationData
             * @instance
             */
            DevicePairingRegistrationData.prototype.eIdent = null;

            /**
             * DevicePairingRegistrationData eSkeyId.
             * @member {Uint8Array|null|undefined} eSkeyId
             * @memberof Wa6.ClientPayload.DevicePairingRegistrationData
             * @instance
             */
            DevicePairingRegistrationData.prototype.eSkeyId = null;

            /**
             * DevicePairingRegistrationData eSkeyVal.
             * @member {Uint8Array|null|undefined} eSkeyVal
             * @memberof Wa6.ClientPayload.DevicePairingRegistrationData
             * @instance
             */
            DevicePairingRegistrationData.prototype.eSkeyVal = null;

            /**
             * DevicePairingRegistrationData eSkeySig.
             * @member {Uint8Array|null|undefined} eSkeySig
             * @memberof Wa6.ClientPayload.DevicePairingRegistrationData
             * @instance
             */
            DevicePairingRegistrationData.prototype.eSkeySig = null;

            /**
             * DevicePairingRegistrationData buildHash.
             * @member {Uint8Array|null|undefined} buildHash
             * @memberof Wa6.ClientPayload.DevicePairingRegistrationData
             * @instance
             */
            DevicePairingRegistrationData.prototype.buildHash = null;

            /**
             * DevicePairingRegistrationData deviceProps.
             * @member {Uint8Array|null|undefined} deviceProps
             * @memberof Wa6.ClientPayload.DevicePairingRegistrationData
             * @instance
             */
            DevicePairingRegistrationData.prototype.deviceProps = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(DevicePairingRegistrationData.prototype, "_eRegid", {
                get: $util.oneOfGetter($oneOfFields = ["eRegid"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(DevicePairingRegistrationData.prototype, "_eKeytype", {
                get: $util.oneOfGetter($oneOfFields = ["eKeytype"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(DevicePairingRegistrationData.prototype, "_eIdent", {
                get: $util.oneOfGetter($oneOfFields = ["eIdent"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(DevicePairingRegistrationData.prototype, "_eSkeyId", {
                get: $util.oneOfGetter($oneOfFields = ["eSkeyId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(DevicePairingRegistrationData.prototype, "_eSkeyVal", {
                get: $util.oneOfGetter($oneOfFields = ["eSkeyVal"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(DevicePairingRegistrationData.prototype, "_eSkeySig", {
                get: $util.oneOfGetter($oneOfFields = ["eSkeySig"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(DevicePairingRegistrationData.prototype, "_buildHash", {
                get: $util.oneOfGetter($oneOfFields = ["buildHash"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(DevicePairingRegistrationData.prototype, "_deviceProps", {
                get: $util.oneOfGetter($oneOfFields = ["deviceProps"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new DevicePairingRegistrationData instance using the specified properties.
             * @function create
             * @memberof Wa6.ClientPayload.DevicePairingRegistrationData
             * @static
             * @param {Wa6.ClientPayload.DevicePairingRegistrationData.$Properties=} [properties] Properties to set
             * @returns {Wa6.ClientPayload.DevicePairingRegistrationData} DevicePairingRegistrationData instance
             * @type {{
             *   (properties: Wa6.ClientPayload.DevicePairingRegistrationData.$Shape): Wa6.ClientPayload.DevicePairingRegistrationData & Wa6.ClientPayload.DevicePairingRegistrationData.$Shape;
             *   (properties?: Wa6.ClientPayload.DevicePairingRegistrationData.$Properties): Wa6.ClientPayload.DevicePairingRegistrationData;
             * }}
             */
            DevicePairingRegistrationData.create = function(properties) {
                return new DevicePairingRegistrationData(properties);
            };

            /**
             * Encodes the specified DevicePairingRegistrationData message. Does not implicitly {@link Wa6.ClientPayload.DevicePairingRegistrationData.verify|verify} messages.
             * @function encode
             * @memberof Wa6.ClientPayload.DevicePairingRegistrationData
             * @static
             * @param {Wa6.ClientPayload.DevicePairingRegistrationData.$Properties} message DevicePairingRegistrationData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DevicePairingRegistrationData.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.eRegid != null && $Object.hasOwnProperty.call(message, "eRegid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.eRegid);
                if (message.eKeytype != null && $Object.hasOwnProperty.call(message, "eKeytype"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.eKeytype);
                if (message.eIdent != null && $Object.hasOwnProperty.call(message, "eIdent"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.eIdent);
                if (message.eSkeyId != null && $Object.hasOwnProperty.call(message, "eSkeyId"))
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.eSkeyId);
                if (message.eSkeyVal != null && $Object.hasOwnProperty.call(message, "eSkeyVal"))
                    writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.eSkeyVal);
                if (message.eSkeySig != null && $Object.hasOwnProperty.call(message, "eSkeySig"))
                    writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.eSkeySig);
                if (message.buildHash != null && $Object.hasOwnProperty.call(message, "buildHash"))
                    writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.buildHash);
                if (message.deviceProps != null && $Object.hasOwnProperty.call(message, "deviceProps"))
                    writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.deviceProps);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified DevicePairingRegistrationData message, length delimited. Does not implicitly {@link Wa6.ClientPayload.DevicePairingRegistrationData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Wa6.ClientPayload.DevicePairingRegistrationData
             * @static
             * @param {Wa6.ClientPayload.DevicePairingRegistrationData.$Properties} message DevicePairingRegistrationData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DevicePairingRegistrationData.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a DevicePairingRegistrationData message from the specified reader or buffer.
             * @function decode
             * @memberof Wa6.ClientPayload.DevicePairingRegistrationData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Wa6.ClientPayload.DevicePairingRegistrationData & Wa6.ClientPayload.DevicePairingRegistrationData.$Shape} DevicePairingRegistrationData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DevicePairingRegistrationData.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Wa6.ClientPayload.DevicePairingRegistrationData();
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
                            message.eRegid = reader.bytes();
                            message._eRegid = "eRegid";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.eKeytype = reader.bytes();
                            message._eKeytype = "eKeytype";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.eIdent = reader.bytes();
                            message._eIdent = "eIdent";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            message.eSkeyId = reader.bytes();
                            message._eSkeyId = "eSkeyId";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 2)
                                break;
                            message.eSkeyVal = reader.bytes();
                            message._eSkeyVal = "eSkeyVal";
                            continue;
                        }
                    case 6: {
                            if (wireType !== 2)
                                break;
                            message.eSkeySig = reader.bytes();
                            message._eSkeySig = "eSkeySig";
                            continue;
                        }
                    case 7: {
                            if (wireType !== 2)
                                break;
                            message.buildHash = reader.bytes();
                            message._buildHash = "buildHash";
                            continue;
                        }
                    case 8: {
                            if (wireType !== 2)
                                break;
                            message.deviceProps = reader.bytes();
                            message._deviceProps = "deviceProps";
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
             * Decodes a DevicePairingRegistrationData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Wa6.ClientPayload.DevicePairingRegistrationData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Wa6.ClientPayload.DevicePairingRegistrationData & Wa6.ClientPayload.DevicePairingRegistrationData.$Shape} DevicePairingRegistrationData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DevicePairingRegistrationData.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DevicePairingRegistrationData message.
             * @function verify
             * @memberof Wa6.ClientPayload.DevicePairingRegistrationData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DevicePairingRegistrationData.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.eRegid != null && $Object.hasOwnProperty.call(message, "eRegid")) {
                    properties._eRegid = 1;
                    if (!(message.eRegid && typeof message.eRegid.length === "number" || $util.isString(message.eRegid)))
                        return "eRegid: buffer expected";
                }
                if (message.eKeytype != null && $Object.hasOwnProperty.call(message, "eKeytype")) {
                    properties._eKeytype = 1;
                    if (!(message.eKeytype && typeof message.eKeytype.length === "number" || $util.isString(message.eKeytype)))
                        return "eKeytype: buffer expected";
                }
                if (message.eIdent != null && $Object.hasOwnProperty.call(message, "eIdent")) {
                    properties._eIdent = 1;
                    if (!(message.eIdent && typeof message.eIdent.length === "number" || $util.isString(message.eIdent)))
                        return "eIdent: buffer expected";
                }
                if (message.eSkeyId != null && $Object.hasOwnProperty.call(message, "eSkeyId")) {
                    properties._eSkeyId = 1;
                    if (!(message.eSkeyId && typeof message.eSkeyId.length === "number" || $util.isString(message.eSkeyId)))
                        return "eSkeyId: buffer expected";
                }
                if (message.eSkeyVal != null && $Object.hasOwnProperty.call(message, "eSkeyVal")) {
                    properties._eSkeyVal = 1;
                    if (!(message.eSkeyVal && typeof message.eSkeyVal.length === "number" || $util.isString(message.eSkeyVal)))
                        return "eSkeyVal: buffer expected";
                }
                if (message.eSkeySig != null && $Object.hasOwnProperty.call(message, "eSkeySig")) {
                    properties._eSkeySig = 1;
                    if (!(message.eSkeySig && typeof message.eSkeySig.length === "number" || $util.isString(message.eSkeySig)))
                        return "eSkeySig: buffer expected";
                }
                if (message.buildHash != null && $Object.hasOwnProperty.call(message, "buildHash")) {
                    properties._buildHash = 1;
                    if (!(message.buildHash && typeof message.buildHash.length === "number" || $util.isString(message.buildHash)))
                        return "buildHash: buffer expected";
                }
                if (message.deviceProps != null && $Object.hasOwnProperty.call(message, "deviceProps")) {
                    properties._deviceProps = 1;
                    if (!(message.deviceProps && typeof message.deviceProps.length === "number" || $util.isString(message.deviceProps)))
                        return "deviceProps: buffer expected";
                }
                return null;
            };

            /**
             * Creates a DevicePairingRegistrationData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Wa6.ClientPayload.DevicePairingRegistrationData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Wa6.ClientPayload.DevicePairingRegistrationData} DevicePairingRegistrationData
             */
            DevicePairingRegistrationData.fromObject = function (object, _depth) {
                if (object instanceof $root.Wa6.ClientPayload.DevicePairingRegistrationData)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".Wa6.ClientPayload.DevicePairingRegistrationData: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.Wa6.ClientPayload.DevicePairingRegistrationData();
                if (object.eRegid != null)
                    if (typeof object.eRegid === "string")
                        $util.base64.decode(object.eRegid, message.eRegid = $util.newBuffer($util.base64.length(object.eRegid)), 0);
                    else if (object.eRegid.length >= 0)
                        message.eRegid = object.eRegid;
                if (object.eKeytype != null)
                    if (typeof object.eKeytype === "string")
                        $util.base64.decode(object.eKeytype, message.eKeytype = $util.newBuffer($util.base64.length(object.eKeytype)), 0);
                    else if (object.eKeytype.length >= 0)
                        message.eKeytype = object.eKeytype;
                if (object.eIdent != null)
                    if (typeof object.eIdent === "string")
                        $util.base64.decode(object.eIdent, message.eIdent = $util.newBuffer($util.base64.length(object.eIdent)), 0);
                    else if (object.eIdent.length >= 0)
                        message.eIdent = object.eIdent;
                if (object.eSkeyId != null)
                    if (typeof object.eSkeyId === "string")
                        $util.base64.decode(object.eSkeyId, message.eSkeyId = $util.newBuffer($util.base64.length(object.eSkeyId)), 0);
                    else if (object.eSkeyId.length >= 0)
                        message.eSkeyId = object.eSkeyId;
                if (object.eSkeyVal != null)
                    if (typeof object.eSkeyVal === "string")
                        $util.base64.decode(object.eSkeyVal, message.eSkeyVal = $util.newBuffer($util.base64.length(object.eSkeyVal)), 0);
                    else if (object.eSkeyVal.length >= 0)
                        message.eSkeyVal = object.eSkeyVal;
                if (object.eSkeySig != null)
                    if (typeof object.eSkeySig === "string")
                        $util.base64.decode(object.eSkeySig, message.eSkeySig = $util.newBuffer($util.base64.length(object.eSkeySig)), 0);
                    else if (object.eSkeySig.length >= 0)
                        message.eSkeySig = object.eSkeySig;
                if (object.buildHash != null)
                    if (typeof object.buildHash === "string")
                        $util.base64.decode(object.buildHash, message.buildHash = $util.newBuffer($util.base64.length(object.buildHash)), 0);
                    else if (object.buildHash.length >= 0)
                        message.buildHash = object.buildHash;
                if (object.deviceProps != null)
                    if (typeof object.deviceProps === "string")
                        $util.base64.decode(object.deviceProps, message.deviceProps = $util.newBuffer($util.base64.length(object.deviceProps)), 0);
                    else if (object.deviceProps.length >= 0)
                        message.deviceProps = object.deviceProps;
                return message;
            };

            /**
             * Creates a plain object from a DevicePairingRegistrationData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Wa6.ClientPayload.DevicePairingRegistrationData
             * @static
             * @param {Wa6.ClientPayload.DevicePairingRegistrationData} message DevicePairingRegistrationData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DevicePairingRegistrationData.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (message.eRegid != null && $Object.hasOwnProperty.call(message, "eRegid"))
                    object.eRegid = options.bytes === $String ? $util.base64.encode(message.eRegid, 0, message.eRegid.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.eRegid) : message.eRegid;
                if (message.eKeytype != null && $Object.hasOwnProperty.call(message, "eKeytype"))
                    object.eKeytype = options.bytes === $String ? $util.base64.encode(message.eKeytype, 0, message.eKeytype.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.eKeytype) : message.eKeytype;
                if (message.eIdent != null && $Object.hasOwnProperty.call(message, "eIdent"))
                    object.eIdent = options.bytes === $String ? $util.base64.encode(message.eIdent, 0, message.eIdent.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.eIdent) : message.eIdent;
                if (message.eSkeyId != null && $Object.hasOwnProperty.call(message, "eSkeyId"))
                    object.eSkeyId = options.bytes === $String ? $util.base64.encode(message.eSkeyId, 0, message.eSkeyId.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.eSkeyId) : message.eSkeyId;
                if (message.eSkeyVal != null && $Object.hasOwnProperty.call(message, "eSkeyVal"))
                    object.eSkeyVal = options.bytes === $String ? $util.base64.encode(message.eSkeyVal, 0, message.eSkeyVal.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.eSkeyVal) : message.eSkeyVal;
                if (message.eSkeySig != null && $Object.hasOwnProperty.call(message, "eSkeySig"))
                    object.eSkeySig = options.bytes === $String ? $util.base64.encode(message.eSkeySig, 0, message.eSkeySig.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.eSkeySig) : message.eSkeySig;
                if (message.buildHash != null && $Object.hasOwnProperty.call(message, "buildHash"))
                    object.buildHash = options.bytes === $String ? $util.base64.encode(message.buildHash, 0, message.buildHash.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.buildHash) : message.buildHash;
                if (message.deviceProps != null && $Object.hasOwnProperty.call(message, "deviceProps"))
                    object.deviceProps = options.bytes === $String ? $util.base64.encode(message.deviceProps, 0, message.deviceProps.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.deviceProps) : message.deviceProps;
                return object;
            };

            /**
             * Converts this DevicePairingRegistrationData to JSON.
             * @function toJSON
             * @memberof Wa6.ClientPayload.DevicePairingRegistrationData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DevicePairingRegistrationData.prototype.toJSON = function() {
                return DevicePairingRegistrationData.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for DevicePairingRegistrationData
             * @function getTypeUrl
             * @memberof Wa6.ClientPayload.DevicePairingRegistrationData
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            DevicePairingRegistrationData.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/Wa6.ClientPayload.DevicePairingRegistrationData";
            };

            return DevicePairingRegistrationData;
        })();

        /**
         * IOSAppExtension enum.
         * @name Wa6.ClientPayload.IOSAppExtension
         * @enum {number}
         * @property {number} SHARE_EXTENSION=0 SHARE_EXTENSION value
         * @property {number} SERVICE_EXTENSION=1 SERVICE_EXTENSION value
         * @property {number} INTENTS_EXTENSION=2 INTENTS_EXTENSION value
         */
        ClientPayload.IOSAppExtension = (function() {
            var valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "SHARE_EXTENSION"] = 0;
            values[valuesById[1] = "SERVICE_EXTENSION"] = 1;
            values[valuesById[2] = "INTENTS_EXTENSION"] = 2;
            return values;
        })();

        ClientPayload.InteropData = (function() {

            /**
             * Properties of an InteropData.
             * @typedef {Object} Wa6.ClientPayload.InteropData.$Properties
             * @property {number|Long|null} [accountId] InteropData accountId
             * @property {Uint8Array|null} [token] InteropData token
             * @property {boolean|null} [enableReadReceipts] InteropData enableReadReceipts
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of an InteropData.
             * @memberof Wa6.ClientPayload
             * @interface IInteropData
             * @augments Wa6.ClientPayload.InteropData.$Properties
             * @deprecated Use Wa6.ClientPayload.InteropData.$Properties instead.
             */

            /**
             * Shape of an InteropData.
             * @typedef {Wa6.ClientPayload.InteropData.$Properties} Wa6.ClientPayload.InteropData.$Shape
             */

            /**
             * Constructs a new InteropData.
             * @memberof Wa6.ClientPayload
             * @classdesc Represents an InteropData.
             * @constructor
             * @param {Wa6.ClientPayload.InteropData.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var InteropData = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * InteropData accountId.
             * @member {number|Long|null|undefined} accountId
             * @memberof Wa6.ClientPayload.InteropData
             * @instance
             */
            InteropData.prototype.accountId = null;

            /**
             * InteropData token.
             * @member {Uint8Array|null|undefined} token
             * @memberof Wa6.ClientPayload.InteropData
             * @instance
             */
            InteropData.prototype.token = null;

            /**
             * InteropData enableReadReceipts.
             * @member {boolean|null|undefined} enableReadReceipts
             * @memberof Wa6.ClientPayload.InteropData
             * @instance
             */
            InteropData.prototype.enableReadReceipts = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(InteropData.prototype, "_accountId", {
                get: $util.oneOfGetter($oneOfFields = ["accountId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(InteropData.prototype, "_token", {
                get: $util.oneOfGetter($oneOfFields = ["token"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(InteropData.prototype, "_enableReadReceipts", {
                get: $util.oneOfGetter($oneOfFields = ["enableReadReceipts"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new InteropData instance using the specified properties.
             * @function create
             * @memberof Wa6.ClientPayload.InteropData
             * @static
             * @param {Wa6.ClientPayload.InteropData.$Properties=} [properties] Properties to set
             * @returns {Wa6.ClientPayload.InteropData} InteropData instance
             * @type {{
             *   (properties: Wa6.ClientPayload.InteropData.$Shape): Wa6.ClientPayload.InteropData & Wa6.ClientPayload.InteropData.$Shape;
             *   (properties?: Wa6.ClientPayload.InteropData.$Properties): Wa6.ClientPayload.InteropData;
             * }}
             */
            InteropData.create = function(properties) {
                return new InteropData(properties);
            };

            /**
             * Encodes the specified InteropData message. Does not implicitly {@link Wa6.ClientPayload.InteropData.verify|verify} messages.
             * @function encode
             * @memberof Wa6.ClientPayload.InteropData
             * @static
             * @param {Wa6.ClientPayload.InteropData.$Properties} message InteropData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InteropData.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.accountId != null && $Object.hasOwnProperty.call(message, "accountId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.accountId);
                if (message.token != null && $Object.hasOwnProperty.call(message, "token"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.token);
                if (message.enableReadReceipts != null && $Object.hasOwnProperty.call(message, "enableReadReceipts"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.enableReadReceipts);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified InteropData message, length delimited. Does not implicitly {@link Wa6.ClientPayload.InteropData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Wa6.ClientPayload.InteropData
             * @static
             * @param {Wa6.ClientPayload.InteropData.$Properties} message InteropData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InteropData.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes an InteropData message from the specified reader or buffer.
             * @function decode
             * @memberof Wa6.ClientPayload.InteropData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Wa6.ClientPayload.InteropData & Wa6.ClientPayload.InteropData.$Shape} InteropData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InteropData.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Wa6.ClientPayload.InteropData();
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
                            message.accountId = reader.uint64();
                            message._accountId = "accountId";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.token = reader.bytes();
                            message._token = "token";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 0)
                                break;
                            message.enableReadReceipts = reader.bool();
                            message._enableReadReceipts = "enableReadReceipts";
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
             * Decodes an InteropData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Wa6.ClientPayload.InteropData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Wa6.ClientPayload.InteropData & Wa6.ClientPayload.InteropData.$Shape} InteropData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InteropData.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an InteropData message.
             * @function verify
             * @memberof Wa6.ClientPayload.InteropData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            InteropData.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.accountId != null && $Object.hasOwnProperty.call(message, "accountId")) {
                    properties._accountId = 1;
                    if (!$util.isInteger(message.accountId) && !(message.accountId && $util.isInteger(message.accountId.low) && $util.isInteger(message.accountId.high)))
                        return "accountId: integer|Long expected";
                }
                if (message.token != null && $Object.hasOwnProperty.call(message, "token")) {
                    properties._token = 1;
                    if (!(message.token && typeof message.token.length === "number" || $util.isString(message.token)))
                        return "token: buffer expected";
                }
                if (message.enableReadReceipts != null && $Object.hasOwnProperty.call(message, "enableReadReceipts")) {
                    properties._enableReadReceipts = 1;
                    if (typeof message.enableReadReceipts !== "boolean")
                        return "enableReadReceipts: boolean expected";
                }
                return null;
            };

            /**
             * Creates an InteropData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Wa6.ClientPayload.InteropData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Wa6.ClientPayload.InteropData} InteropData
             */
            InteropData.fromObject = function (object, _depth) {
                if (object instanceof $root.Wa6.ClientPayload.InteropData)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".Wa6.ClientPayload.InteropData: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.Wa6.ClientPayload.InteropData();
                if (object.accountId != null)
                    if ($util.Long)
                        message.accountId = $util.Long.fromValue(object.accountId, true);
                    else if (typeof object.accountId === "string")
                        message.accountId = $parseInt(object.accountId, 10);
                    else if (typeof object.accountId === "number")
                        message.accountId = object.accountId;
                    else if (typeof object.accountId === "object")
                        message.accountId = new $util.LongBits(object.accountId.low >>> 0, object.accountId.high >>> 0).toNumber(true);
                if (object.token != null)
                    if (typeof object.token === "string")
                        $util.base64.decode(object.token, message.token = $util.newBuffer($util.base64.length(object.token)), 0);
                    else if (object.token.length >= 0)
                        message.token = object.token;
                if (object.enableReadReceipts != null)
                    message.enableReadReceipts = $Boolean(object.enableReadReceipts);
                return message;
            };

            /**
             * Creates a plain object from an InteropData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Wa6.ClientPayload.InteropData
             * @static
             * @param {Wa6.ClientPayload.InteropData} message InteropData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            InteropData.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (message.accountId != null && $Object.hasOwnProperty.call(message, "accountId"))
                    if (typeof $BigInt !== "undefined" && options.longs === $BigInt)
                        object.accountId = typeof message.accountId === "number" ? $BigInt(message.accountId) : $util.Long.fromBits(message.accountId.low >>> 0, message.accountId.high >>> 0, true).toBigInt();
                    else if (typeof message.accountId === "number")
                        object.accountId = options.longs === $String ? $String(message.accountId) : message.accountId;
                    else
                        object.accountId = options.longs === $String ? $util.Long.prototype.toString.call(message.accountId) : options.longs === $Number ? new $util.LongBits(message.accountId.low >>> 0, message.accountId.high >>> 0).toNumber(true) : message.accountId;
                if (message.token != null && $Object.hasOwnProperty.call(message, "token"))
                    object.token = options.bytes === $String ? $util.base64.encode(message.token, 0, message.token.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.token) : message.token;
                if (message.enableReadReceipts != null && $Object.hasOwnProperty.call(message, "enableReadReceipts"))
                    object.enableReadReceipts = message.enableReadReceipts;
                return object;
            };

            /**
             * Converts this InteropData to JSON.
             * @function toJSON
             * @memberof Wa6.ClientPayload.InteropData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            InteropData.prototype.toJSON = function() {
                return InteropData.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for InteropData
             * @function getTypeUrl
             * @memberof Wa6.ClientPayload.InteropData
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            InteropData.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/Wa6.ClientPayload.InteropData";
            };

            return InteropData;
        })();

        /**
         * Product enum.
         * @name Wa6.ClientPayload.Product
         * @enum {number}
         * @property {number} WHATSAPP=0 WHATSAPP value
         * @property {number} MESSENGER=1 MESSENGER value
         * @property {number} INTEROP=2 INTEROP value
         * @property {number} INTEROP_MSGR=3 INTEROP_MSGR value
         * @property {number} WHATSAPP_LID=4 WHATSAPP_LID value
         */
        ClientPayload.Product = (function() {
            var valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "WHATSAPP"] = 0;
            values[valuesById[1] = "MESSENGER"] = 1;
            values[valuesById[2] = "INTEROP"] = 2;
            values[valuesById[3] = "INTEROP_MSGR"] = 3;
            values[valuesById[4] = "WHATSAPP_LID"] = 4;
            return values;
        })();

        /**
         * TrafficAnonymization enum.
         * @name Wa6.ClientPayload.TrafficAnonymization
         * @enum {number}
         * @property {number} OFF=0 OFF value
         * @property {number} STANDARD=1 STANDARD value
         */
        ClientPayload.TrafficAnonymization = (function() {
            var valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "OFF"] = 0;
            values[valuesById[1] = "STANDARD"] = 1;
            return values;
        })();

        ClientPayload.UserAgent = (function() {

            /**
             * Properties of a UserAgent.
             * @typedef {Object} Wa6.ClientPayload.UserAgent.$Properties
             * @property {Wa6.ClientPayload.UserAgent.Platform|null} [platform] UserAgent platform
             * @property {Wa6.ClientPayload.UserAgent.AppVersion.$Properties|null} [appVersion] UserAgent appVersion
             * @property {string|null} [mcc] UserAgent mcc
             * @property {string|null} [mnc] UserAgent mnc
             * @property {string|null} [osVersion] UserAgent osVersion
             * @property {string|null} [manufacturer] UserAgent manufacturer
             * @property {string|null} [device] UserAgent device
             * @property {string|null} [osBuildNumber] UserAgent osBuildNumber
             * @property {string|null} [phoneId] UserAgent phoneId
             * @property {Wa6.ClientPayload.UserAgent.ReleaseChannel|null} [releaseChannel] UserAgent releaseChannel
             * @property {string|null} [localeLanguageIso6391] UserAgent localeLanguageIso6391
             * @property {string|null} [localeCountryIso31661Alpha2] UserAgent localeCountryIso31661Alpha2
             * @property {string|null} [deviceBoard] UserAgent deviceBoard
             * @property {string|null} [deviceExpId] UserAgent deviceExpId
             * @property {Wa6.ClientPayload.UserAgent.DeviceType|null} [deviceType] UserAgent deviceType
             * @property {string|null} [deviceModelType] UserAgent deviceModelType
             * @property {Wa6.ClientPayload.UserAgent.DistributionChannel|null} [distributionChannel] UserAgent distributionChannel
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a UserAgent.
             * @memberof Wa6.ClientPayload
             * @interface IUserAgent
             * @augments Wa6.ClientPayload.UserAgent.$Properties
             * @deprecated Use Wa6.ClientPayload.UserAgent.$Properties instead.
             */

            /**
             * Shape of a UserAgent.
             * @typedef {Wa6.ClientPayload.UserAgent.$Properties} Wa6.ClientPayload.UserAgent.$Shape
             */

            /**
             * Constructs a new UserAgent.
             * @memberof Wa6.ClientPayload
             * @classdesc Represents a UserAgent.
             * @constructor
             * @param {Wa6.ClientPayload.UserAgent.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var UserAgent = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * UserAgent platform.
             * @member {Wa6.ClientPayload.UserAgent.Platform|null|undefined} platform
             * @memberof Wa6.ClientPayload.UserAgent
             * @instance
             */
            UserAgent.prototype.platform = null;

            /**
             * UserAgent appVersion.
             * @member {Wa6.ClientPayload.UserAgent.AppVersion.$Properties|null|undefined} appVersion
             * @memberof Wa6.ClientPayload.UserAgent
             * @instance
             */
            UserAgent.prototype.appVersion = null;

            /**
             * UserAgent mcc.
             * @member {string|null|undefined} mcc
             * @memberof Wa6.ClientPayload.UserAgent
             * @instance
             */
            UserAgent.prototype.mcc = null;

            /**
             * UserAgent mnc.
             * @member {string|null|undefined} mnc
             * @memberof Wa6.ClientPayload.UserAgent
             * @instance
             */
            UserAgent.prototype.mnc = null;

            /**
             * UserAgent osVersion.
             * @member {string|null|undefined} osVersion
             * @memberof Wa6.ClientPayload.UserAgent
             * @instance
             */
            UserAgent.prototype.osVersion = null;

            /**
             * UserAgent manufacturer.
             * @member {string|null|undefined} manufacturer
             * @memberof Wa6.ClientPayload.UserAgent
             * @instance
             */
            UserAgent.prototype.manufacturer = null;

            /**
             * UserAgent device.
             * @member {string|null|undefined} device
             * @memberof Wa6.ClientPayload.UserAgent
             * @instance
             */
            UserAgent.prototype.device = null;

            /**
             * UserAgent osBuildNumber.
             * @member {string|null|undefined} osBuildNumber
             * @memberof Wa6.ClientPayload.UserAgent
             * @instance
             */
            UserAgent.prototype.osBuildNumber = null;

            /**
             * UserAgent phoneId.
             * @member {string|null|undefined} phoneId
             * @memberof Wa6.ClientPayload.UserAgent
             * @instance
             */
            UserAgent.prototype.phoneId = null;

            /**
             * UserAgent releaseChannel.
             * @member {Wa6.ClientPayload.UserAgent.ReleaseChannel|null|undefined} releaseChannel
             * @memberof Wa6.ClientPayload.UserAgent
             * @instance
             */
            UserAgent.prototype.releaseChannel = null;

            /**
             * UserAgent localeLanguageIso6391.
             * @member {string|null|undefined} localeLanguageIso6391
             * @memberof Wa6.ClientPayload.UserAgent
             * @instance
             */
            UserAgent.prototype.localeLanguageIso6391 = null;

            /**
             * UserAgent localeCountryIso31661Alpha2.
             * @member {string|null|undefined} localeCountryIso31661Alpha2
             * @memberof Wa6.ClientPayload.UserAgent
             * @instance
             */
            UserAgent.prototype.localeCountryIso31661Alpha2 = null;

            /**
             * UserAgent deviceBoard.
             * @member {string|null|undefined} deviceBoard
             * @memberof Wa6.ClientPayload.UserAgent
             * @instance
             */
            UserAgent.prototype.deviceBoard = null;

            /**
             * UserAgent deviceExpId.
             * @member {string|null|undefined} deviceExpId
             * @memberof Wa6.ClientPayload.UserAgent
             * @instance
             */
            UserAgent.prototype.deviceExpId = null;

            /**
             * UserAgent deviceType.
             * @member {Wa6.ClientPayload.UserAgent.DeviceType|null|undefined} deviceType
             * @memberof Wa6.ClientPayload.UserAgent
             * @instance
             */
            UserAgent.prototype.deviceType = null;

            /**
             * UserAgent deviceModelType.
             * @member {string|null|undefined} deviceModelType
             * @memberof Wa6.ClientPayload.UserAgent
             * @instance
             */
            UserAgent.prototype.deviceModelType = null;

            /**
             * UserAgent distributionChannel.
             * @member {Wa6.ClientPayload.UserAgent.DistributionChannel|null|undefined} distributionChannel
             * @memberof Wa6.ClientPayload.UserAgent
             * @instance
             */
            UserAgent.prototype.distributionChannel = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(UserAgent.prototype, "_platform", {
                get: $util.oneOfGetter($oneOfFields = ["platform"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(UserAgent.prototype, "_appVersion", {
                get: $util.oneOfGetter($oneOfFields = ["appVersion"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(UserAgent.prototype, "_mcc", {
                get: $util.oneOfGetter($oneOfFields = ["mcc"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(UserAgent.prototype, "_mnc", {
                get: $util.oneOfGetter($oneOfFields = ["mnc"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(UserAgent.prototype, "_osVersion", {
                get: $util.oneOfGetter($oneOfFields = ["osVersion"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(UserAgent.prototype, "_manufacturer", {
                get: $util.oneOfGetter($oneOfFields = ["manufacturer"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(UserAgent.prototype, "_device", {
                get: $util.oneOfGetter($oneOfFields = ["device"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(UserAgent.prototype, "_osBuildNumber", {
                get: $util.oneOfGetter($oneOfFields = ["osBuildNumber"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(UserAgent.prototype, "_phoneId", {
                get: $util.oneOfGetter($oneOfFields = ["phoneId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(UserAgent.prototype, "_releaseChannel", {
                get: $util.oneOfGetter($oneOfFields = ["releaseChannel"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(UserAgent.prototype, "_localeLanguageIso6391", {
                get: $util.oneOfGetter($oneOfFields = ["localeLanguageIso6391"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(UserAgent.prototype, "_localeCountryIso31661Alpha2", {
                get: $util.oneOfGetter($oneOfFields = ["localeCountryIso31661Alpha2"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(UserAgent.prototype, "_deviceBoard", {
                get: $util.oneOfGetter($oneOfFields = ["deviceBoard"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(UserAgent.prototype, "_deviceExpId", {
                get: $util.oneOfGetter($oneOfFields = ["deviceExpId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(UserAgent.prototype, "_deviceType", {
                get: $util.oneOfGetter($oneOfFields = ["deviceType"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(UserAgent.prototype, "_deviceModelType", {
                get: $util.oneOfGetter($oneOfFields = ["deviceModelType"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(UserAgent.prototype, "_distributionChannel", {
                get: $util.oneOfGetter($oneOfFields = ["distributionChannel"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new UserAgent instance using the specified properties.
             * @function create
             * @memberof Wa6.ClientPayload.UserAgent
             * @static
             * @param {Wa6.ClientPayload.UserAgent.$Properties=} [properties] Properties to set
             * @returns {Wa6.ClientPayload.UserAgent} UserAgent instance
             * @type {{
             *   (properties: Wa6.ClientPayload.UserAgent.$Shape): Wa6.ClientPayload.UserAgent & Wa6.ClientPayload.UserAgent.$Shape;
             *   (properties?: Wa6.ClientPayload.UserAgent.$Properties): Wa6.ClientPayload.UserAgent;
             * }}
             */
            UserAgent.create = function(properties) {
                return new UserAgent(properties);
            };

            /**
             * Encodes the specified UserAgent message. Does not implicitly {@link Wa6.ClientPayload.UserAgent.verify|verify} messages.
             * @function encode
             * @memberof Wa6.ClientPayload.UserAgent
             * @static
             * @param {Wa6.ClientPayload.UserAgent.$Properties} message UserAgent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserAgent.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.platform != null && $Object.hasOwnProperty.call(message, "platform"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.platform);
                if (message.appVersion != null && $Object.hasOwnProperty.call(message, "appVersion"))
                    $root.Wa6.ClientPayload.UserAgent.AppVersion.encode(message.appVersion, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
                if (message.mcc != null && $Object.hasOwnProperty.call(message, "mcc"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.mcc);
                if (message.mnc != null && $Object.hasOwnProperty.call(message, "mnc"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.mnc);
                if (message.osVersion != null && $Object.hasOwnProperty.call(message, "osVersion"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.osVersion);
                if (message.manufacturer != null && $Object.hasOwnProperty.call(message, "manufacturer"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.manufacturer);
                if (message.device != null && $Object.hasOwnProperty.call(message, "device"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.device);
                if (message.osBuildNumber != null && $Object.hasOwnProperty.call(message, "osBuildNumber"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.osBuildNumber);
                if (message.phoneId != null && $Object.hasOwnProperty.call(message, "phoneId"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.phoneId);
                if (message.releaseChannel != null && $Object.hasOwnProperty.call(message, "releaseChannel"))
                    writer.uint32(/* id 10, wireType 0 =*/80).int32(message.releaseChannel);
                if (message.localeLanguageIso6391 != null && $Object.hasOwnProperty.call(message, "localeLanguageIso6391"))
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.localeLanguageIso6391);
                if (message.localeCountryIso31661Alpha2 != null && $Object.hasOwnProperty.call(message, "localeCountryIso31661Alpha2"))
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.localeCountryIso31661Alpha2);
                if (message.deviceBoard != null && $Object.hasOwnProperty.call(message, "deviceBoard"))
                    writer.uint32(/* id 13, wireType 2 =*/106).string(message.deviceBoard);
                if (message.deviceExpId != null && $Object.hasOwnProperty.call(message, "deviceExpId"))
                    writer.uint32(/* id 14, wireType 2 =*/114).string(message.deviceExpId);
                if (message.deviceType != null && $Object.hasOwnProperty.call(message, "deviceType"))
                    writer.uint32(/* id 15, wireType 0 =*/120).int32(message.deviceType);
                if (message.deviceModelType != null && $Object.hasOwnProperty.call(message, "deviceModelType"))
                    writer.uint32(/* id 16, wireType 2 =*/130).string(message.deviceModelType);
                if (message.distributionChannel != null && $Object.hasOwnProperty.call(message, "distributionChannel"))
                    writer.uint32(/* id 17, wireType 0 =*/136).int32(message.distributionChannel);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified UserAgent message, length delimited. Does not implicitly {@link Wa6.ClientPayload.UserAgent.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Wa6.ClientPayload.UserAgent
             * @static
             * @param {Wa6.ClientPayload.UserAgent.$Properties} message UserAgent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserAgent.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a UserAgent message from the specified reader or buffer.
             * @function decode
             * @memberof Wa6.ClientPayload.UserAgent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Wa6.ClientPayload.UserAgent & Wa6.ClientPayload.UserAgent.$Shape} UserAgent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserAgent.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Wa6.ClientPayload.UserAgent(), value;
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
                            message.platform = reader.int32();
                            message._platform = "platform";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.appVersion = $root.Wa6.ClientPayload.UserAgent.AppVersion.decode(reader, reader.uint32(), $undefined, _depth + 1, message.appVersion);
                            message._appVersion = "appVersion";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.mcc = reader.stringVerify();
                            message._mcc = "mcc";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            message.mnc = reader.stringVerify();
                            message._mnc = "mnc";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 2)
                                break;
                            message.osVersion = reader.stringVerify();
                            message._osVersion = "osVersion";
                            continue;
                        }
                    case 6: {
                            if (wireType !== 2)
                                break;
                            message.manufacturer = reader.stringVerify();
                            message._manufacturer = "manufacturer";
                            continue;
                        }
                    case 7: {
                            if (wireType !== 2)
                                break;
                            message.device = reader.stringVerify();
                            message._device = "device";
                            continue;
                        }
                    case 8: {
                            if (wireType !== 2)
                                break;
                            message.osBuildNumber = reader.stringVerify();
                            message._osBuildNumber = "osBuildNumber";
                            continue;
                        }
                    case 9: {
                            if (wireType !== 2)
                                break;
                            message.phoneId = reader.stringVerify();
                            message._phoneId = "phoneId";
                            continue;
                        }
                    case 10: {
                            if (wireType !== 0)
                                break;
                            message.releaseChannel = reader.int32();
                            message._releaseChannel = "releaseChannel";
                            continue;
                        }
                    case 11: {
                            if (wireType !== 2)
                                break;
                            message.localeLanguageIso6391 = reader.stringVerify();
                            message._localeLanguageIso6391 = "localeLanguageIso6391";
                            continue;
                        }
                    case 12: {
                            if (wireType !== 2)
                                break;
                            message.localeCountryIso31661Alpha2 = reader.stringVerify();
                            message._localeCountryIso31661Alpha2 = "localeCountryIso31661Alpha2";
                            continue;
                        }
                    case 13: {
                            if (wireType !== 2)
                                break;
                            message.deviceBoard = reader.stringVerify();
                            message._deviceBoard = "deviceBoard";
                            continue;
                        }
                    case 14: {
                            if (wireType !== 2)
                                break;
                            message.deviceExpId = reader.stringVerify();
                            message._deviceExpId = "deviceExpId";
                            continue;
                        }
                    case 15: {
                            if (wireType !== 0)
                                break;
                            message.deviceType = reader.int32();
                            message._deviceType = "deviceType";
                            continue;
                        }
                    case 16: {
                            if (wireType !== 2)
                                break;
                            message.deviceModelType = reader.stringVerify();
                            message._deviceModelType = "deviceModelType";
                            continue;
                        }
                    case 17: {
                            if (wireType !== 0)
                                break;
                            message.distributionChannel = reader.int32();
                            message._distributionChannel = "distributionChannel";
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
             * Decodes a UserAgent message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Wa6.ClientPayload.UserAgent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Wa6.ClientPayload.UserAgent & Wa6.ClientPayload.UserAgent.$Shape} UserAgent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserAgent.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UserAgent message.
             * @function verify
             * @memberof Wa6.ClientPayload.UserAgent
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserAgent.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.platform != null && $Object.hasOwnProperty.call(message, "platform")) {
                    properties._platform = 1;
                    if (typeof message.platform !== "number" || (message.platform | 0) !== message.platform)
                        return "platform: enum value expected";
                }
                if (message.appVersion != null && $Object.hasOwnProperty.call(message, "appVersion")) {
                    properties._appVersion = 1;
                    {
                        var error = $root.Wa6.ClientPayload.UserAgent.AppVersion.verify(message.appVersion, _depth + 1);
                        if (error)
                            return "appVersion." + error;
                    }
                }
                if (message.mcc != null && $Object.hasOwnProperty.call(message, "mcc")) {
                    properties._mcc = 1;
                    if (!$util.isString(message.mcc))
                        return "mcc: string expected";
                }
                if (message.mnc != null && $Object.hasOwnProperty.call(message, "mnc")) {
                    properties._mnc = 1;
                    if (!$util.isString(message.mnc))
                        return "mnc: string expected";
                }
                if (message.osVersion != null && $Object.hasOwnProperty.call(message, "osVersion")) {
                    properties._osVersion = 1;
                    if (!$util.isString(message.osVersion))
                        return "osVersion: string expected";
                }
                if (message.manufacturer != null && $Object.hasOwnProperty.call(message, "manufacturer")) {
                    properties._manufacturer = 1;
                    if (!$util.isString(message.manufacturer))
                        return "manufacturer: string expected";
                }
                if (message.device != null && $Object.hasOwnProperty.call(message, "device")) {
                    properties._device = 1;
                    if (!$util.isString(message.device))
                        return "device: string expected";
                }
                if (message.osBuildNumber != null && $Object.hasOwnProperty.call(message, "osBuildNumber")) {
                    properties._osBuildNumber = 1;
                    if (!$util.isString(message.osBuildNumber))
                        return "osBuildNumber: string expected";
                }
                if (message.phoneId != null && $Object.hasOwnProperty.call(message, "phoneId")) {
                    properties._phoneId = 1;
                    if (!$util.isString(message.phoneId))
                        return "phoneId: string expected";
                }
                if (message.releaseChannel != null && $Object.hasOwnProperty.call(message, "releaseChannel")) {
                    properties._releaseChannel = 1;
                    if (typeof message.releaseChannel !== "number" || (message.releaseChannel | 0) !== message.releaseChannel)
                        return "releaseChannel: enum value expected";
                }
                if (message.localeLanguageIso6391 != null && $Object.hasOwnProperty.call(message, "localeLanguageIso6391")) {
                    properties._localeLanguageIso6391 = 1;
                    if (!$util.isString(message.localeLanguageIso6391))
                        return "localeLanguageIso6391: string expected";
                }
                if (message.localeCountryIso31661Alpha2 != null && $Object.hasOwnProperty.call(message, "localeCountryIso31661Alpha2")) {
                    properties._localeCountryIso31661Alpha2 = 1;
                    if (!$util.isString(message.localeCountryIso31661Alpha2))
                        return "localeCountryIso31661Alpha2: string expected";
                }
                if (message.deviceBoard != null && $Object.hasOwnProperty.call(message, "deviceBoard")) {
                    properties._deviceBoard = 1;
                    if (!$util.isString(message.deviceBoard))
                        return "deviceBoard: string expected";
                }
                if (message.deviceExpId != null && $Object.hasOwnProperty.call(message, "deviceExpId")) {
                    properties._deviceExpId = 1;
                    if (!$util.isString(message.deviceExpId))
                        return "deviceExpId: string expected";
                }
                if (message.deviceType != null && $Object.hasOwnProperty.call(message, "deviceType")) {
                    properties._deviceType = 1;
                    if (typeof message.deviceType !== "number" || (message.deviceType | 0) !== message.deviceType)
                        return "deviceType: enum value expected";
                }
                if (message.deviceModelType != null && $Object.hasOwnProperty.call(message, "deviceModelType")) {
                    properties._deviceModelType = 1;
                    if (!$util.isString(message.deviceModelType))
                        return "deviceModelType: string expected";
                }
                if (message.distributionChannel != null && $Object.hasOwnProperty.call(message, "distributionChannel")) {
                    properties._distributionChannel = 1;
                    if (typeof message.distributionChannel !== "number" || (message.distributionChannel | 0) !== message.distributionChannel)
                        return "distributionChannel: enum value expected";
                }
                return null;
            };

            /**
             * Creates a UserAgent message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Wa6.ClientPayload.UserAgent
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Wa6.ClientPayload.UserAgent} UserAgent
             */
            UserAgent.fromObject = function (object, _depth) {
                if (object instanceof $root.Wa6.ClientPayload.UserAgent)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".Wa6.ClientPayload.UserAgent: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.Wa6.ClientPayload.UserAgent();
                switch (object.platform) {
                case "ANDROID":
                case 0:
                    message.platform = 0;
                    break;
                case "IOS":
                case 1:
                    message.platform = 1;
                    break;
                case "WINDOWS_PHONE":
                case 2:
                    message.platform = 2;
                    break;
                case "BLACKBERRY":
                case 3:
                    message.platform = 3;
                    break;
                case "BLACKBERRYX":
                case 4:
                    message.platform = 4;
                    break;
                case "S40":
                case 5:
                    message.platform = 5;
                    break;
                case "S60":
                case 6:
                    message.platform = 6;
                    break;
                case "PYTHON_CLIENT":
                case 7:
                    message.platform = 7;
                    break;
                case "TIZEN":
                case 8:
                    message.platform = 8;
                    break;
                case "ENTERPRISE":
                case 9:
                    message.platform = 9;
                    break;
                case "SMB_ANDROID":
                case 10:
                    message.platform = 10;
                    break;
                case "KAIOS":
                case 11:
                    message.platform = 11;
                    break;
                case "SMB_IOS":
                case 12:
                    message.platform = 12;
                    break;
                case "WINDOWS":
                case 13:
                    message.platform = 13;
                    break;
                case "WEB":
                case 14:
                    message.platform = 14;
                    break;
                case "PORTAL":
                case 15:
                    message.platform = 15;
                    break;
                case "GREEN_ANDROID":
                case 16:
                    message.platform = 16;
                    break;
                case "GREEN_IPHONE":
                case 17:
                    message.platform = 17;
                    break;
                case "BLUE_ANDROID":
                case 18:
                    message.platform = 18;
                    break;
                case "BLUE_IPHONE":
                case 19:
                    message.platform = 19;
                    break;
                case "FBLITE_ANDROID":
                case 20:
                    message.platform = 20;
                    break;
                case "MLITE_ANDROID":
                case 21:
                    message.platform = 21;
                    break;
                case "IGLITE_ANDROID":
                case 22:
                    message.platform = 22;
                    break;
                case "PAGE":
                case 23:
                    message.platform = 23;
                    break;
                case "MACOS":
                case 24:
                    message.platform = 24;
                    break;
                case "OCULUS_MSG":
                case 25:
                    message.platform = 25;
                    break;
                case "OCULUS_CALL":
                case 26:
                    message.platform = 26;
                    break;
                case "MILAN":
                case 27:
                    message.platform = 27;
                    break;
                case "CAPI":
                case 28:
                    message.platform = 28;
                    break;
                case "WEAROS":
                case 29:
                    message.platform = 29;
                    break;
                case "ARDEVICE":
                case 30:
                    message.platform = 30;
                    break;
                case "VRDEVICE":
                case 31:
                    message.platform = 31;
                    break;
                case "BLUE_WEB":
                case 32:
                    message.platform = 32;
                    break;
                case "IPAD":
                case 33:
                    message.platform = 33;
                    break;
                case "TEST":
                case 34:
                    message.platform = 34;
                    break;
                case "SMART_GLASSES":
                case 35:
                    message.platform = 35;
                    break;
                case "BLUE_VR":
                case 36:
                    message.platform = 36;
                    break;
                case "AR_WRIST":
                case 37:
                    message.platform = 37;
                    break;
                case "WAIL":
                case 38:
                    message.platform = 38;
                    break;
                default:
                    if (typeof object.platform === "number" && (object.platform | 0) === object.platform)
                        message.platform = object.platform;
                }
                if (object.appVersion != null) {
                    if (!$util.isObject(object.appVersion))
                        throw $TypeError(".Wa6.ClientPayload.UserAgent.appVersion: object expected");
                    message.appVersion = $root.Wa6.ClientPayload.UserAgent.AppVersion.fromObject(object.appVersion, _depth + 1);
                }
                if (object.mcc != null)
                    message.mcc = $String(object.mcc);
                if (object.mnc != null)
                    message.mnc = $String(object.mnc);
                if (object.osVersion != null)
                    message.osVersion = $String(object.osVersion);
                if (object.manufacturer != null)
                    message.manufacturer = $String(object.manufacturer);
                if (object.device != null)
                    message.device = $String(object.device);
                if (object.osBuildNumber != null)
                    message.osBuildNumber = $String(object.osBuildNumber);
                if (object.phoneId != null)
                    message.phoneId = $String(object.phoneId);
                switch (object.releaseChannel) {
                case "RELEASE":
                case 0:
                    message.releaseChannel = 0;
                    break;
                case "BETA":
                case 1:
                    message.releaseChannel = 1;
                    break;
                case "ALPHA":
                case 2:
                    message.releaseChannel = 2;
                    break;
                case "DEBUG":
                case 3:
                    message.releaseChannel = 3;
                    break;
                default:
                    if (typeof object.releaseChannel === "number" && (object.releaseChannel | 0) === object.releaseChannel)
                        message.releaseChannel = object.releaseChannel;
                }
                if (object.localeLanguageIso6391 != null)
                    message.localeLanguageIso6391 = $String(object.localeLanguageIso6391);
                if (object.localeCountryIso31661Alpha2 != null)
                    message.localeCountryIso31661Alpha2 = $String(object.localeCountryIso31661Alpha2);
                if (object.deviceBoard != null)
                    message.deviceBoard = $String(object.deviceBoard);
                if (object.deviceExpId != null)
                    message.deviceExpId = $String(object.deviceExpId);
                switch (object.deviceType) {
                case "PHONE":
                case 0:
                    message.deviceType = 0;
                    break;
                case "TABLET":
                case 1:
                    message.deviceType = 1;
                    break;
                case "DESKTOP":
                case 2:
                    message.deviceType = 2;
                    break;
                case "WEARABLE":
                case 3:
                    message.deviceType = 3;
                    break;
                case "VR":
                case 4:
                    message.deviceType = 4;
                    break;
                default:
                    if (typeof object.deviceType === "number" && (object.deviceType | 0) === object.deviceType)
                        message.deviceType = object.deviceType;
                }
                if (object.deviceModelType != null)
                    message.deviceModelType = $String(object.deviceModelType);
                switch (object.distributionChannel) {
                case "APPSTORE":
                case 0:
                    message.distributionChannel = 0;
                    break;
                case "WEBSITE":
                case 1:
                    message.distributionChannel = 1;
                    break;
                case "TESTFLIGHT":
                case 2:
                    message.distributionChannel = 2;
                    break;
                case "INTERNAL":
                case 3:
                    message.distributionChannel = 3;
                    break;
                default:
                    if (typeof object.distributionChannel === "number" && (object.distributionChannel | 0) === object.distributionChannel)
                        message.distributionChannel = object.distributionChannel;
                }
                return message;
            };

            /**
             * Creates a plain object from a UserAgent message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Wa6.ClientPayload.UserAgent
             * @static
             * @param {Wa6.ClientPayload.UserAgent} message UserAgent
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserAgent.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (message.platform != null && $Object.hasOwnProperty.call(message, "platform"))
                    object.platform = options.enums === $String ? $root.Wa6.ClientPayload.UserAgent.Platform[message.platform] === $undefined ? message.platform : $root.Wa6.ClientPayload.UserAgent.Platform[message.platform] : message.platform;
                if (message.appVersion != null && $Object.hasOwnProperty.call(message, "appVersion"))
                    object.appVersion = $root.Wa6.ClientPayload.UserAgent.AppVersion.toObject(message.appVersion, options, _depth + 1);
                if (message.mcc != null && $Object.hasOwnProperty.call(message, "mcc"))
                    object.mcc = message.mcc;
                if (message.mnc != null && $Object.hasOwnProperty.call(message, "mnc"))
                    object.mnc = message.mnc;
                if (message.osVersion != null && $Object.hasOwnProperty.call(message, "osVersion"))
                    object.osVersion = message.osVersion;
                if (message.manufacturer != null && $Object.hasOwnProperty.call(message, "manufacturer"))
                    object.manufacturer = message.manufacturer;
                if (message.device != null && $Object.hasOwnProperty.call(message, "device"))
                    object.device = message.device;
                if (message.osBuildNumber != null && $Object.hasOwnProperty.call(message, "osBuildNumber"))
                    object.osBuildNumber = message.osBuildNumber;
                if (message.phoneId != null && $Object.hasOwnProperty.call(message, "phoneId"))
                    object.phoneId = message.phoneId;
                if (message.releaseChannel != null && $Object.hasOwnProperty.call(message, "releaseChannel"))
                    object.releaseChannel = options.enums === $String ? $root.Wa6.ClientPayload.UserAgent.ReleaseChannel[message.releaseChannel] === $undefined ? message.releaseChannel : $root.Wa6.ClientPayload.UserAgent.ReleaseChannel[message.releaseChannel] : message.releaseChannel;
                if (message.localeLanguageIso6391 != null && $Object.hasOwnProperty.call(message, "localeLanguageIso6391"))
                    object.localeLanguageIso6391 = message.localeLanguageIso6391;
                if (message.localeCountryIso31661Alpha2 != null && $Object.hasOwnProperty.call(message, "localeCountryIso31661Alpha2"))
                    object.localeCountryIso31661Alpha2 = message.localeCountryIso31661Alpha2;
                if (message.deviceBoard != null && $Object.hasOwnProperty.call(message, "deviceBoard"))
                    object.deviceBoard = message.deviceBoard;
                if (message.deviceExpId != null && $Object.hasOwnProperty.call(message, "deviceExpId"))
                    object.deviceExpId = message.deviceExpId;
                if (message.deviceType != null && $Object.hasOwnProperty.call(message, "deviceType"))
                    object.deviceType = options.enums === $String ? $root.Wa6.ClientPayload.UserAgent.DeviceType[message.deviceType] === $undefined ? message.deviceType : $root.Wa6.ClientPayload.UserAgent.DeviceType[message.deviceType] : message.deviceType;
                if (message.deviceModelType != null && $Object.hasOwnProperty.call(message, "deviceModelType"))
                    object.deviceModelType = message.deviceModelType;
                if (message.distributionChannel != null && $Object.hasOwnProperty.call(message, "distributionChannel"))
                    object.distributionChannel = options.enums === $String ? $root.Wa6.ClientPayload.UserAgent.DistributionChannel[message.distributionChannel] === $undefined ? message.distributionChannel : $root.Wa6.ClientPayload.UserAgent.DistributionChannel[message.distributionChannel] : message.distributionChannel;
                return object;
            };

            /**
             * Converts this UserAgent to JSON.
             * @function toJSON
             * @memberof Wa6.ClientPayload.UserAgent
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserAgent.prototype.toJSON = function() {
                return UserAgent.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for UserAgent
             * @function getTypeUrl
             * @memberof Wa6.ClientPayload.UserAgent
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            UserAgent.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/Wa6.ClientPayload.UserAgent";
            };

            UserAgent.AppVersion = (function() {

                /**
                 * Properties of an AppVersion.
                 * @typedef {Object} Wa6.ClientPayload.UserAgent.AppVersion.$Properties
                 * @property {number|null} [primary] AppVersion primary
                 * @property {number|null} [secondary] AppVersion secondary
                 * @property {number|null} [tertiary] AppVersion tertiary
                 * @property {number|null} [quaternary] AppVersion quaternary
                 * @property {number|null} [quinary] AppVersion quinary
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of an AppVersion.
                 * @memberof Wa6.ClientPayload.UserAgent
                 * @interface IAppVersion
                 * @augments Wa6.ClientPayload.UserAgent.AppVersion.$Properties
                 * @deprecated Use Wa6.ClientPayload.UserAgent.AppVersion.$Properties instead.
                 */

                /**
                 * Shape of an AppVersion.
                 * @typedef {Wa6.ClientPayload.UserAgent.AppVersion.$Properties} Wa6.ClientPayload.UserAgent.AppVersion.$Shape
                 */

                /**
                 * Constructs a new AppVersion.
                 * @memberof Wa6.ClientPayload.UserAgent
                 * @classdesc Represents an AppVersion.
                 * @constructor
                 * @param {Wa6.ClientPayload.UserAgent.AppVersion.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
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
                 * @memberof Wa6.ClientPayload.UserAgent.AppVersion
                 * @instance
                 */
                AppVersion.prototype.primary = null;

                /**
                 * AppVersion secondary.
                 * @member {number|null|undefined} secondary
                 * @memberof Wa6.ClientPayload.UserAgent.AppVersion
                 * @instance
                 */
                AppVersion.prototype.secondary = null;

                /**
                 * AppVersion tertiary.
                 * @member {number|null|undefined} tertiary
                 * @memberof Wa6.ClientPayload.UserAgent.AppVersion
                 * @instance
                 */
                AppVersion.prototype.tertiary = null;

                /**
                 * AppVersion quaternary.
                 * @member {number|null|undefined} quaternary
                 * @memberof Wa6.ClientPayload.UserAgent.AppVersion
                 * @instance
                 */
                AppVersion.prototype.quaternary = null;

                /**
                 * AppVersion quinary.
                 * @member {number|null|undefined} quinary
                 * @memberof Wa6.ClientPayload.UserAgent.AppVersion
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
                 * @memberof Wa6.ClientPayload.UserAgent.AppVersion
                 * @static
                 * @param {Wa6.ClientPayload.UserAgent.AppVersion.$Properties=} [properties] Properties to set
                 * @returns {Wa6.ClientPayload.UserAgent.AppVersion} AppVersion instance
                 * @type {{
                 *   (properties: Wa6.ClientPayload.UserAgent.AppVersion.$Shape): Wa6.ClientPayload.UserAgent.AppVersion & Wa6.ClientPayload.UserAgent.AppVersion.$Shape;
                 *   (properties?: Wa6.ClientPayload.UserAgent.AppVersion.$Properties): Wa6.ClientPayload.UserAgent.AppVersion;
                 * }}
                 */
                AppVersion.create = function(properties) {
                    return new AppVersion(properties);
                };

                /**
                 * Encodes the specified AppVersion message. Does not implicitly {@link Wa6.ClientPayload.UserAgent.AppVersion.verify|verify} messages.
                 * @function encode
                 * @memberof Wa6.ClientPayload.UserAgent.AppVersion
                 * @static
                 * @param {Wa6.ClientPayload.UserAgent.AppVersion.$Properties} message AppVersion message or plain object to encode
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
                 * Encodes the specified AppVersion message, length delimited. Does not implicitly {@link Wa6.ClientPayload.UserAgent.AppVersion.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Wa6.ClientPayload.UserAgent.AppVersion
                 * @static
                 * @param {Wa6.ClientPayload.UserAgent.AppVersion.$Properties} message AppVersion message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AppVersion.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };

                /**
                 * Decodes an AppVersion message from the specified reader or buffer.
                 * @function decode
                 * @memberof Wa6.ClientPayload.UserAgent.AppVersion
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Wa6.ClientPayload.UserAgent.AppVersion & Wa6.ClientPayload.UserAgent.AppVersion.$Shape} AppVersion
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
                    var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Wa6.ClientPayload.UserAgent.AppVersion();
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
                 * @memberof Wa6.ClientPayload.UserAgent.AppVersion
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Wa6.ClientPayload.UserAgent.AppVersion & Wa6.ClientPayload.UserAgent.AppVersion.$Shape} AppVersion
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
                 * @memberof Wa6.ClientPayload.UserAgent.AppVersion
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
                 * @memberof Wa6.ClientPayload.UserAgent.AppVersion
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Wa6.ClientPayload.UserAgent.AppVersion} AppVersion
                 */
                AppVersion.fromObject = function (object, _depth) {
                    if (object instanceof $root.Wa6.ClientPayload.UserAgent.AppVersion)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".Wa6.ClientPayload.UserAgent.AppVersion: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.Wa6.ClientPayload.UserAgent.AppVersion();
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
                 * @memberof Wa6.ClientPayload.UserAgent.AppVersion
                 * @static
                 * @param {Wa6.ClientPayload.UserAgent.AppVersion} message AppVersion
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
                 * @memberof Wa6.ClientPayload.UserAgent.AppVersion
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AppVersion.prototype.toJSON = function() {
                    return AppVersion.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for AppVersion
                 * @function getTypeUrl
                 * @memberof Wa6.ClientPayload.UserAgent.AppVersion
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                AppVersion.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/Wa6.ClientPayload.UserAgent.AppVersion";
                };

                return AppVersion;
            })();

            /**
             * DeviceType enum.
             * @name Wa6.ClientPayload.UserAgent.DeviceType
             * @enum {number}
             * @property {number} PHONE=0 PHONE value
             * @property {number} TABLET=1 TABLET value
             * @property {number} DESKTOP=2 DESKTOP value
             * @property {number} WEARABLE=3 WEARABLE value
             * @property {number} VR=4 VR value
             */
            UserAgent.DeviceType = (function() {
                var valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "PHONE"] = 0;
                values[valuesById[1] = "TABLET"] = 1;
                values[valuesById[2] = "DESKTOP"] = 2;
                values[valuesById[3] = "WEARABLE"] = 3;
                values[valuesById[4] = "VR"] = 4;
                return values;
            })();

            /**
             * DistributionChannel enum.
             * @name Wa6.ClientPayload.UserAgent.DistributionChannel
             * @enum {number}
             * @property {number} APPSTORE=0 APPSTORE value
             * @property {number} WEBSITE=1 WEBSITE value
             * @property {number} TESTFLIGHT=2 TESTFLIGHT value
             * @property {number} INTERNAL=3 INTERNAL value
             */
            UserAgent.DistributionChannel = (function() {
                var valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "APPSTORE"] = 0;
                values[valuesById[1] = "WEBSITE"] = 1;
                values[valuesById[2] = "TESTFLIGHT"] = 2;
                values[valuesById[3] = "INTERNAL"] = 3;
                return values;
            })();

            /**
             * Platform enum.
             * @name Wa6.ClientPayload.UserAgent.Platform
             * @enum {number}
             * @property {number} ANDROID=0 ANDROID value
             * @property {number} IOS=1 IOS value
             * @property {number} WINDOWS_PHONE=2 WINDOWS_PHONE value
             * @property {number} BLACKBERRY=3 BLACKBERRY value
             * @property {number} BLACKBERRYX=4 BLACKBERRYX value
             * @property {number} S40=5 S40 value
             * @property {number} S60=6 S60 value
             * @property {number} PYTHON_CLIENT=7 PYTHON_CLIENT value
             * @property {number} TIZEN=8 TIZEN value
             * @property {number} ENTERPRISE=9 ENTERPRISE value
             * @property {number} SMB_ANDROID=10 SMB_ANDROID value
             * @property {number} KAIOS=11 KAIOS value
             * @property {number} SMB_IOS=12 SMB_IOS value
             * @property {number} WINDOWS=13 WINDOWS value
             * @property {number} WEB=14 WEB value
             * @property {number} PORTAL=15 PORTAL value
             * @property {number} GREEN_ANDROID=16 GREEN_ANDROID value
             * @property {number} GREEN_IPHONE=17 GREEN_IPHONE value
             * @property {number} BLUE_ANDROID=18 BLUE_ANDROID value
             * @property {number} BLUE_IPHONE=19 BLUE_IPHONE value
             * @property {number} FBLITE_ANDROID=20 FBLITE_ANDROID value
             * @property {number} MLITE_ANDROID=21 MLITE_ANDROID value
             * @property {number} IGLITE_ANDROID=22 IGLITE_ANDROID value
             * @property {number} PAGE=23 PAGE value
             * @property {number} MACOS=24 MACOS value
             * @property {number} OCULUS_MSG=25 OCULUS_MSG value
             * @property {number} OCULUS_CALL=26 OCULUS_CALL value
             * @property {number} MILAN=27 MILAN value
             * @property {number} CAPI=28 CAPI value
             * @property {number} WEAROS=29 WEAROS value
             * @property {number} ARDEVICE=30 ARDEVICE value
             * @property {number} VRDEVICE=31 VRDEVICE value
             * @property {number} BLUE_WEB=32 BLUE_WEB value
             * @property {number} IPAD=33 IPAD value
             * @property {number} TEST=34 TEST value
             * @property {number} SMART_GLASSES=35 SMART_GLASSES value
             * @property {number} BLUE_VR=36 BLUE_VR value
             * @property {number} AR_WRIST=37 AR_WRIST value
             * @property {number} WAIL=38 WAIL value
             */
            UserAgent.Platform = (function() {
                var valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "ANDROID"] = 0;
                values[valuesById[1] = "IOS"] = 1;
                values[valuesById[2] = "WINDOWS_PHONE"] = 2;
                values[valuesById[3] = "BLACKBERRY"] = 3;
                values[valuesById[4] = "BLACKBERRYX"] = 4;
                values[valuesById[5] = "S40"] = 5;
                values[valuesById[6] = "S60"] = 6;
                values[valuesById[7] = "PYTHON_CLIENT"] = 7;
                values[valuesById[8] = "TIZEN"] = 8;
                values[valuesById[9] = "ENTERPRISE"] = 9;
                values[valuesById[10] = "SMB_ANDROID"] = 10;
                values[valuesById[11] = "KAIOS"] = 11;
                values[valuesById[12] = "SMB_IOS"] = 12;
                values[valuesById[13] = "WINDOWS"] = 13;
                values[valuesById[14] = "WEB"] = 14;
                values[valuesById[15] = "PORTAL"] = 15;
                values[valuesById[16] = "GREEN_ANDROID"] = 16;
                values[valuesById[17] = "GREEN_IPHONE"] = 17;
                values[valuesById[18] = "BLUE_ANDROID"] = 18;
                values[valuesById[19] = "BLUE_IPHONE"] = 19;
                values[valuesById[20] = "FBLITE_ANDROID"] = 20;
                values[valuesById[21] = "MLITE_ANDROID"] = 21;
                values[valuesById[22] = "IGLITE_ANDROID"] = 22;
                values[valuesById[23] = "PAGE"] = 23;
                values[valuesById[24] = "MACOS"] = 24;
                values[valuesById[25] = "OCULUS_MSG"] = 25;
                values[valuesById[26] = "OCULUS_CALL"] = 26;
                values[valuesById[27] = "MILAN"] = 27;
                values[valuesById[28] = "CAPI"] = 28;
                values[valuesById[29] = "WEAROS"] = 29;
                values[valuesById[30] = "ARDEVICE"] = 30;
                values[valuesById[31] = "VRDEVICE"] = 31;
                values[valuesById[32] = "BLUE_WEB"] = 32;
                values[valuesById[33] = "IPAD"] = 33;
                values[valuesById[34] = "TEST"] = 34;
                values[valuesById[35] = "SMART_GLASSES"] = 35;
                values[valuesById[36] = "BLUE_VR"] = 36;
                values[valuesById[37] = "AR_WRIST"] = 37;
                values[valuesById[38] = "WAIL"] = 38;
                return values;
            })();

            /**
             * ReleaseChannel enum.
             * @name Wa6.ClientPayload.UserAgent.ReleaseChannel
             * @enum {number}
             * @property {number} RELEASE=0 RELEASE value
             * @property {number} BETA=1 BETA value
             * @property {number} ALPHA=2 ALPHA value
             * @property {number} DEBUG=3 DEBUG value
             */
            UserAgent.ReleaseChannel = (function() {
                var valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "RELEASE"] = 0;
                values[valuesById[1] = "BETA"] = 1;
                values[valuesById[2] = "ALPHA"] = 2;
                values[valuesById[3] = "DEBUG"] = 3;
                return values;
            })();

            return UserAgent;
        })();

        ClientPayload.WebInfo = (function() {

            /**
             * Properties of a WebInfo.
             * @typedef {Object} Wa6.ClientPayload.WebInfo.$Properties
             * @property {string|null} [refToken] WebInfo refToken
             * @property {string|null} [version] WebInfo version
             * @property {Wa6.ClientPayload.WebInfo.WebdPayload.$Properties|null} [webdPayload] WebInfo webdPayload
             * @property {Wa6.ClientPayload.WebInfo.WebSubPlatform|null} [webSubPlatform] WebInfo webSubPlatform
             * @property {string|null} [browser] WebInfo browser
             * @property {string|null} [browserVersion] WebInfo browserVersion
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a WebInfo.
             * @memberof Wa6.ClientPayload
             * @interface IWebInfo
             * @augments Wa6.ClientPayload.WebInfo.$Properties
             * @deprecated Use Wa6.ClientPayload.WebInfo.$Properties instead.
             */

            /**
             * Shape of a WebInfo.
             * @typedef {Wa6.ClientPayload.WebInfo.$Properties} Wa6.ClientPayload.WebInfo.$Shape
             */

            /**
             * Constructs a new WebInfo.
             * @memberof Wa6.ClientPayload
             * @classdesc Represents a WebInfo.
             * @constructor
             * @param {Wa6.ClientPayload.WebInfo.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var WebInfo = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * WebInfo refToken.
             * @member {string|null|undefined} refToken
             * @memberof Wa6.ClientPayload.WebInfo
             * @instance
             */
            WebInfo.prototype.refToken = null;

            /**
             * WebInfo version.
             * @member {string|null|undefined} version
             * @memberof Wa6.ClientPayload.WebInfo
             * @instance
             */
            WebInfo.prototype.version = null;

            /**
             * WebInfo webdPayload.
             * @member {Wa6.ClientPayload.WebInfo.WebdPayload.$Properties|null|undefined} webdPayload
             * @memberof Wa6.ClientPayload.WebInfo
             * @instance
             */
            WebInfo.prototype.webdPayload = null;

            /**
             * WebInfo webSubPlatform.
             * @member {Wa6.ClientPayload.WebInfo.WebSubPlatform|null|undefined} webSubPlatform
             * @memberof Wa6.ClientPayload.WebInfo
             * @instance
             */
            WebInfo.prototype.webSubPlatform = null;

            /**
             * WebInfo browser.
             * @member {string|null|undefined} browser
             * @memberof Wa6.ClientPayload.WebInfo
             * @instance
             */
            WebInfo.prototype.browser = null;

            /**
             * WebInfo browserVersion.
             * @member {string|null|undefined} browserVersion
             * @memberof Wa6.ClientPayload.WebInfo
             * @instance
             */
            WebInfo.prototype.browserVersion = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(WebInfo.prototype, "_refToken", {
                get: $util.oneOfGetter($oneOfFields = ["refToken"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(WebInfo.prototype, "_version", {
                get: $util.oneOfGetter($oneOfFields = ["version"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(WebInfo.prototype, "_webdPayload", {
                get: $util.oneOfGetter($oneOfFields = ["webdPayload"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(WebInfo.prototype, "_webSubPlatform", {
                get: $util.oneOfGetter($oneOfFields = ["webSubPlatform"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(WebInfo.prototype, "_browser", {
                get: $util.oneOfGetter($oneOfFields = ["browser"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(WebInfo.prototype, "_browserVersion", {
                get: $util.oneOfGetter($oneOfFields = ["browserVersion"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new WebInfo instance using the specified properties.
             * @function create
             * @memberof Wa6.ClientPayload.WebInfo
             * @static
             * @param {Wa6.ClientPayload.WebInfo.$Properties=} [properties] Properties to set
             * @returns {Wa6.ClientPayload.WebInfo} WebInfo instance
             * @type {{
             *   (properties: Wa6.ClientPayload.WebInfo.$Shape): Wa6.ClientPayload.WebInfo & Wa6.ClientPayload.WebInfo.$Shape;
             *   (properties?: Wa6.ClientPayload.WebInfo.$Properties): Wa6.ClientPayload.WebInfo;
             * }}
             */
            WebInfo.create = function(properties) {
                return new WebInfo(properties);
            };

            /**
             * Encodes the specified WebInfo message. Does not implicitly {@link Wa6.ClientPayload.WebInfo.verify|verify} messages.
             * @function encode
             * @memberof Wa6.ClientPayload.WebInfo
             * @static
             * @param {Wa6.ClientPayload.WebInfo.$Properties} message WebInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WebInfo.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.refToken != null && $Object.hasOwnProperty.call(message, "refToken"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.refToken);
                if (message.version != null && $Object.hasOwnProperty.call(message, "version"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.version);
                if (message.webdPayload != null && $Object.hasOwnProperty.call(message, "webdPayload"))
                    $root.Wa6.ClientPayload.WebInfo.WebdPayload.encode(message.webdPayload, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
                if (message.webSubPlatform != null && $Object.hasOwnProperty.call(message, "webSubPlatform"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.webSubPlatform);
                if (message.browser != null && $Object.hasOwnProperty.call(message, "browser"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.browser);
                if (message.browserVersion != null && $Object.hasOwnProperty.call(message, "browserVersion"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.browserVersion);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified WebInfo message, length delimited. Does not implicitly {@link Wa6.ClientPayload.WebInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Wa6.ClientPayload.WebInfo
             * @static
             * @param {Wa6.ClientPayload.WebInfo.$Properties} message WebInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WebInfo.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a WebInfo message from the specified reader or buffer.
             * @function decode
             * @memberof Wa6.ClientPayload.WebInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Wa6.ClientPayload.WebInfo & Wa6.ClientPayload.WebInfo.$Shape} WebInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WebInfo.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Wa6.ClientPayload.WebInfo(), value;
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
                            message.refToken = reader.stringVerify();
                            message._refToken = "refToken";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.version = reader.stringVerify();
                            message._version = "version";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.webdPayload = $root.Wa6.ClientPayload.WebInfo.WebdPayload.decode(reader, reader.uint32(), $undefined, _depth + 1, message.webdPayload);
                            message._webdPayload = "webdPayload";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 0)
                                break;
                            message.webSubPlatform = reader.int32();
                            message._webSubPlatform = "webSubPlatform";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 2)
                                break;
                            message.browser = reader.stringVerify();
                            message._browser = "browser";
                            continue;
                        }
                    case 6: {
                            if (wireType !== 2)
                                break;
                            message.browserVersion = reader.stringVerify();
                            message._browserVersion = "browserVersion";
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
             * Decodes a WebInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Wa6.ClientPayload.WebInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Wa6.ClientPayload.WebInfo & Wa6.ClientPayload.WebInfo.$Shape} WebInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WebInfo.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a WebInfo message.
             * @function verify
             * @memberof Wa6.ClientPayload.WebInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WebInfo.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.refToken != null && $Object.hasOwnProperty.call(message, "refToken")) {
                    properties._refToken = 1;
                    if (!$util.isString(message.refToken))
                        return "refToken: string expected";
                }
                if (message.version != null && $Object.hasOwnProperty.call(message, "version")) {
                    properties._version = 1;
                    if (!$util.isString(message.version))
                        return "version: string expected";
                }
                if (message.webdPayload != null && $Object.hasOwnProperty.call(message, "webdPayload")) {
                    properties._webdPayload = 1;
                    {
                        var error = $root.Wa6.ClientPayload.WebInfo.WebdPayload.verify(message.webdPayload, _depth + 1);
                        if (error)
                            return "webdPayload." + error;
                    }
                }
                if (message.webSubPlatform != null && $Object.hasOwnProperty.call(message, "webSubPlatform")) {
                    properties._webSubPlatform = 1;
                    if (typeof message.webSubPlatform !== "number" || (message.webSubPlatform | 0) !== message.webSubPlatform)
                        return "webSubPlatform: enum value expected";
                }
                if (message.browser != null && $Object.hasOwnProperty.call(message, "browser")) {
                    properties._browser = 1;
                    if (!$util.isString(message.browser))
                        return "browser: string expected";
                }
                if (message.browserVersion != null && $Object.hasOwnProperty.call(message, "browserVersion")) {
                    properties._browserVersion = 1;
                    if (!$util.isString(message.browserVersion))
                        return "browserVersion: string expected";
                }
                return null;
            };

            /**
             * Creates a WebInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Wa6.ClientPayload.WebInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Wa6.ClientPayload.WebInfo} WebInfo
             */
            WebInfo.fromObject = function (object, _depth) {
                if (object instanceof $root.Wa6.ClientPayload.WebInfo)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".Wa6.ClientPayload.WebInfo: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.Wa6.ClientPayload.WebInfo();
                if (object.refToken != null)
                    message.refToken = $String(object.refToken);
                if (object.version != null)
                    message.version = $String(object.version);
                if (object.webdPayload != null) {
                    if (!$util.isObject(object.webdPayload))
                        throw $TypeError(".Wa6.ClientPayload.WebInfo.webdPayload: object expected");
                    message.webdPayload = $root.Wa6.ClientPayload.WebInfo.WebdPayload.fromObject(object.webdPayload, _depth + 1);
                }
                switch (object.webSubPlatform) {
                case "WEB_BROWSER":
                case 0:
                    message.webSubPlatform = 0;
                    break;
                case "APP_STORE":
                case 1:
                    message.webSubPlatform = 1;
                    break;
                case "WIN_STORE":
                case 2:
                    message.webSubPlatform = 2;
                    break;
                case "DARWIN":
                case 3:
                    message.webSubPlatform = 3;
                    break;
                case "WIN32":
                case 4:
                    message.webSubPlatform = 4;
                    break;
                case "WIN_HYBRID":
                case 5:
                    message.webSubPlatform = 5;
                    break;
                default:
                    if (typeof object.webSubPlatform === "number" && (object.webSubPlatform | 0) === object.webSubPlatform)
                        message.webSubPlatform = object.webSubPlatform;
                }
                if (object.browser != null)
                    message.browser = $String(object.browser);
                if (object.browserVersion != null)
                    message.browserVersion = $String(object.browserVersion);
                return message;
            };

            /**
             * Creates a plain object from a WebInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Wa6.ClientPayload.WebInfo
             * @static
             * @param {Wa6.ClientPayload.WebInfo} message WebInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WebInfo.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (message.refToken != null && $Object.hasOwnProperty.call(message, "refToken"))
                    object.refToken = message.refToken;
                if (message.version != null && $Object.hasOwnProperty.call(message, "version"))
                    object.version = message.version;
                if (message.webdPayload != null && $Object.hasOwnProperty.call(message, "webdPayload"))
                    object.webdPayload = $root.Wa6.ClientPayload.WebInfo.WebdPayload.toObject(message.webdPayload, options, _depth + 1);
                if (message.webSubPlatform != null && $Object.hasOwnProperty.call(message, "webSubPlatform"))
                    object.webSubPlatform = options.enums === $String ? $root.Wa6.ClientPayload.WebInfo.WebSubPlatform[message.webSubPlatform] === $undefined ? message.webSubPlatform : $root.Wa6.ClientPayload.WebInfo.WebSubPlatform[message.webSubPlatform] : message.webSubPlatform;
                if (message.browser != null && $Object.hasOwnProperty.call(message, "browser"))
                    object.browser = message.browser;
                if (message.browserVersion != null && $Object.hasOwnProperty.call(message, "browserVersion"))
                    object.browserVersion = message.browserVersion;
                return object;
            };

            /**
             * Converts this WebInfo to JSON.
             * @function toJSON
             * @memberof Wa6.ClientPayload.WebInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            WebInfo.prototype.toJSON = function() {
                return WebInfo.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for WebInfo
             * @function getTypeUrl
             * @memberof Wa6.ClientPayload.WebInfo
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            WebInfo.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/Wa6.ClientPayload.WebInfo";
            };

            /**
             * WebSubPlatform enum.
             * @name Wa6.ClientPayload.WebInfo.WebSubPlatform
             * @enum {number}
             * @property {number} WEB_BROWSER=0 WEB_BROWSER value
             * @property {number} APP_STORE=1 APP_STORE value
             * @property {number} WIN_STORE=2 WIN_STORE value
             * @property {number} DARWIN=3 DARWIN value
             * @property {number} WIN32=4 WIN32 value
             * @property {number} WIN_HYBRID=5 WIN_HYBRID value
             */
            WebInfo.WebSubPlatform = (function() {
                var valuesById = $Object.create(null), values = $Object.create(valuesById);
                values[valuesById[0] = "WEB_BROWSER"] = 0;
                values[valuesById[1] = "APP_STORE"] = 1;
                values[valuesById[2] = "WIN_STORE"] = 2;
                values[valuesById[3] = "DARWIN"] = 3;
                values[valuesById[4] = "WIN32"] = 4;
                values[valuesById[5] = "WIN_HYBRID"] = 5;
                return values;
            })();

            WebInfo.WebdPayload = (function() {

                /**
                 * Properties of a WebdPayload.
                 * @typedef {Object} Wa6.ClientPayload.WebInfo.WebdPayload.$Properties
                 * @property {boolean|null} [usesParticipantInKey] WebdPayload usesParticipantInKey
                 * @property {boolean|null} [supportsStarredMessages] WebdPayload supportsStarredMessages
                 * @property {boolean|null} [supportsDocumentMessages] WebdPayload supportsDocumentMessages
                 * @property {boolean|null} [supportsUrlMessages] WebdPayload supportsUrlMessages
                 * @property {boolean|null} [supportsMediaRetry] WebdPayload supportsMediaRetry
                 * @property {boolean|null} [supportsE2EImage] WebdPayload supportsE2EImage
                 * @property {boolean|null} [supportsE2EVideo] WebdPayload supportsE2EVideo
                 * @property {boolean|null} [supportsE2EAudio] WebdPayload supportsE2EAudio
                 * @property {boolean|null} [supportsE2EDocument] WebdPayload supportsE2EDocument
                 * @property {string|null} [documentTypes] WebdPayload documentTypes
                 * @property {Uint8Array|null} [features] WebdPayload features
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */

                /**
                 * Properties of a WebdPayload.
                 * @memberof Wa6.ClientPayload.WebInfo
                 * @interface IWebdPayload
                 * @augments Wa6.ClientPayload.WebInfo.WebdPayload.$Properties
                 * @deprecated Use Wa6.ClientPayload.WebInfo.WebdPayload.$Properties instead.
                 */

                /**
                 * Shape of a WebdPayload.
                 * @typedef {Wa6.ClientPayload.WebInfo.WebdPayload.$Properties} Wa6.ClientPayload.WebInfo.WebdPayload.$Shape
                 */

                /**
                 * Constructs a new WebdPayload.
                 * @memberof Wa6.ClientPayload.WebInfo
                 * @classdesc Represents a WebdPayload.
                 * @constructor
                 * @param {Wa6.ClientPayload.WebInfo.WebdPayload.$Properties=} [properties] Properties to set
                 * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
                 */
                var WebdPayload = function (properties) {
                    if (properties)
                        for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null && keys[i] !== "__proto__")
                                this[keys[i]] = properties[keys[i]];
                };

                /**
                 * WebdPayload usesParticipantInKey.
                 * @member {boolean|null|undefined} usesParticipantInKey
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @instance
                 */
                WebdPayload.prototype.usesParticipantInKey = null;

                /**
                 * WebdPayload supportsStarredMessages.
                 * @member {boolean|null|undefined} supportsStarredMessages
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @instance
                 */
                WebdPayload.prototype.supportsStarredMessages = null;

                /**
                 * WebdPayload supportsDocumentMessages.
                 * @member {boolean|null|undefined} supportsDocumentMessages
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @instance
                 */
                WebdPayload.prototype.supportsDocumentMessages = null;

                /**
                 * WebdPayload supportsUrlMessages.
                 * @member {boolean|null|undefined} supportsUrlMessages
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @instance
                 */
                WebdPayload.prototype.supportsUrlMessages = null;

                /**
                 * WebdPayload supportsMediaRetry.
                 * @member {boolean|null|undefined} supportsMediaRetry
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @instance
                 */
                WebdPayload.prototype.supportsMediaRetry = null;

                /**
                 * WebdPayload supportsE2EImage.
                 * @member {boolean|null|undefined} supportsE2EImage
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @instance
                 */
                WebdPayload.prototype.supportsE2EImage = null;

                /**
                 * WebdPayload supportsE2EVideo.
                 * @member {boolean|null|undefined} supportsE2EVideo
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @instance
                 */
                WebdPayload.prototype.supportsE2EVideo = null;

                /**
                 * WebdPayload supportsE2EAudio.
                 * @member {boolean|null|undefined} supportsE2EAudio
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @instance
                 */
                WebdPayload.prototype.supportsE2EAudio = null;

                /**
                 * WebdPayload supportsE2EDocument.
                 * @member {boolean|null|undefined} supportsE2EDocument
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @instance
                 */
                WebdPayload.prototype.supportsE2EDocument = null;

                /**
                 * WebdPayload documentTypes.
                 * @member {string|null|undefined} documentTypes
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @instance
                 */
                WebdPayload.prototype.documentTypes = null;

                /**
                 * WebdPayload features.
                 * @member {Uint8Array|null|undefined} features
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @instance
                 */
                WebdPayload.prototype.features = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                // Virtual OneOf for proto3 optional field
                $Object.defineProperty(WebdPayload.prototype, "_usesParticipantInKey", {
                    get: $util.oneOfGetter($oneOfFields = ["usesParticipantInKey"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                $Object.defineProperty(WebdPayload.prototype, "_supportsStarredMessages", {
                    get: $util.oneOfGetter($oneOfFields = ["supportsStarredMessages"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                $Object.defineProperty(WebdPayload.prototype, "_supportsDocumentMessages", {
                    get: $util.oneOfGetter($oneOfFields = ["supportsDocumentMessages"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                $Object.defineProperty(WebdPayload.prototype, "_supportsUrlMessages", {
                    get: $util.oneOfGetter($oneOfFields = ["supportsUrlMessages"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                $Object.defineProperty(WebdPayload.prototype, "_supportsMediaRetry", {
                    get: $util.oneOfGetter($oneOfFields = ["supportsMediaRetry"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                $Object.defineProperty(WebdPayload.prototype, "_supportsE2EImage", {
                    get: $util.oneOfGetter($oneOfFields = ["supportsE2EImage"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                $Object.defineProperty(WebdPayload.prototype, "_supportsE2EVideo", {
                    get: $util.oneOfGetter($oneOfFields = ["supportsE2EVideo"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                $Object.defineProperty(WebdPayload.prototype, "_supportsE2EAudio", {
                    get: $util.oneOfGetter($oneOfFields = ["supportsE2EAudio"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                $Object.defineProperty(WebdPayload.prototype, "_supportsE2EDocument", {
                    get: $util.oneOfGetter($oneOfFields = ["supportsE2EDocument"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                $Object.defineProperty(WebdPayload.prototype, "_documentTypes", {
                    get: $util.oneOfGetter($oneOfFields = ["documentTypes"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                $Object.defineProperty(WebdPayload.prototype, "_features", {
                    get: $util.oneOfGetter($oneOfFields = ["features"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new WebdPayload instance using the specified properties.
                 * @function create
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @static
                 * @param {Wa6.ClientPayload.WebInfo.WebdPayload.$Properties=} [properties] Properties to set
                 * @returns {Wa6.ClientPayload.WebInfo.WebdPayload} WebdPayload instance
                 * @type {{
                 *   (properties: Wa6.ClientPayload.WebInfo.WebdPayload.$Shape): Wa6.ClientPayload.WebInfo.WebdPayload & Wa6.ClientPayload.WebInfo.WebdPayload.$Shape;
                 *   (properties?: Wa6.ClientPayload.WebInfo.WebdPayload.$Properties): Wa6.ClientPayload.WebInfo.WebdPayload;
                 * }}
                 */
                WebdPayload.create = function(properties) {
                    return new WebdPayload(properties);
                };

                /**
                 * Encodes the specified WebdPayload message. Does not implicitly {@link Wa6.ClientPayload.WebInfo.WebdPayload.verify|verify} messages.
                 * @function encode
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @static
                 * @param {Wa6.ClientPayload.WebInfo.WebdPayload.$Properties} message WebdPayload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                WebdPayload.encode = function (message, writer, _depth) {
                    if (!writer)
                        writer = $Writer.create();
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    if (message.usesParticipantInKey != null && $Object.hasOwnProperty.call(message, "usesParticipantInKey"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.usesParticipantInKey);
                    if (message.supportsStarredMessages != null && $Object.hasOwnProperty.call(message, "supportsStarredMessages"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.supportsStarredMessages);
                    if (message.supportsDocumentMessages != null && $Object.hasOwnProperty.call(message, "supportsDocumentMessages"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.supportsDocumentMessages);
                    if (message.supportsUrlMessages != null && $Object.hasOwnProperty.call(message, "supportsUrlMessages"))
                        writer.uint32(/* id 4, wireType 0 =*/32).bool(message.supportsUrlMessages);
                    if (message.supportsMediaRetry != null && $Object.hasOwnProperty.call(message, "supportsMediaRetry"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.supportsMediaRetry);
                    if (message.supportsE2EImage != null && $Object.hasOwnProperty.call(message, "supportsE2EImage"))
                        writer.uint32(/* id 6, wireType 0 =*/48).bool(message.supportsE2EImage);
                    if (message.supportsE2EVideo != null && $Object.hasOwnProperty.call(message, "supportsE2EVideo"))
                        writer.uint32(/* id 7, wireType 0 =*/56).bool(message.supportsE2EVideo);
                    if (message.supportsE2EAudio != null && $Object.hasOwnProperty.call(message, "supportsE2EAudio"))
                        writer.uint32(/* id 8, wireType 0 =*/64).bool(message.supportsE2EAudio);
                    if (message.supportsE2EDocument != null && $Object.hasOwnProperty.call(message, "supportsE2EDocument"))
                        writer.uint32(/* id 9, wireType 0 =*/72).bool(message.supportsE2EDocument);
                    if (message.documentTypes != null && $Object.hasOwnProperty.call(message, "documentTypes"))
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.documentTypes);
                    if (message.features != null && $Object.hasOwnProperty.call(message, "features"))
                        writer.uint32(/* id 11, wireType 2 =*/90).bytes(message.features);
                    if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                        for (var i = 0; i < message.$unknowns.length; ++i)
                            writer.raw(message.$unknowns[i]);
                    return writer;
                };

                /**
                 * Encodes the specified WebdPayload message, length delimited. Does not implicitly {@link Wa6.ClientPayload.WebInfo.WebdPayload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @static
                 * @param {Wa6.ClientPayload.WebInfo.WebdPayload.$Properties} message WebdPayload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                WebdPayload.encodeDelimited = function(message, writer) {
                    return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
                };

                /**
                 * Decodes a WebdPayload message from the specified reader or buffer.
                 * @function decode
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Wa6.ClientPayload.WebInfo.WebdPayload & Wa6.ClientPayload.WebInfo.WebdPayload.$Shape} WebdPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                WebdPayload.decode = function (reader, length, _end, _depth, _target) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $Reader.recursionLimit)
                        throw $Error("max depth exceeded");
                    var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Wa6.ClientPayload.WebInfo.WebdPayload();
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
                                message.usesParticipantInKey = reader.bool();
                                message._usesParticipantInKey = "usesParticipantInKey";
                                continue;
                            }
                        case 2: {
                                if (wireType !== 0)
                                    break;
                                message.supportsStarredMessages = reader.bool();
                                message._supportsStarredMessages = "supportsStarredMessages";
                                continue;
                            }
                        case 3: {
                                if (wireType !== 0)
                                    break;
                                message.supportsDocumentMessages = reader.bool();
                                message._supportsDocumentMessages = "supportsDocumentMessages";
                                continue;
                            }
                        case 4: {
                                if (wireType !== 0)
                                    break;
                                message.supportsUrlMessages = reader.bool();
                                message._supportsUrlMessages = "supportsUrlMessages";
                                continue;
                            }
                        case 5: {
                                if (wireType !== 0)
                                    break;
                                message.supportsMediaRetry = reader.bool();
                                message._supportsMediaRetry = "supportsMediaRetry";
                                continue;
                            }
                        case 6: {
                                if (wireType !== 0)
                                    break;
                                message.supportsE2EImage = reader.bool();
                                message._supportsE2EImage = "supportsE2EImage";
                                continue;
                            }
                        case 7: {
                                if (wireType !== 0)
                                    break;
                                message.supportsE2EVideo = reader.bool();
                                message._supportsE2EVideo = "supportsE2EVideo";
                                continue;
                            }
                        case 8: {
                                if (wireType !== 0)
                                    break;
                                message.supportsE2EAudio = reader.bool();
                                message._supportsE2EAudio = "supportsE2EAudio";
                                continue;
                            }
                        case 9: {
                                if (wireType !== 0)
                                    break;
                                message.supportsE2EDocument = reader.bool();
                                message._supportsE2EDocument = "supportsE2EDocument";
                                continue;
                            }
                        case 10: {
                                if (wireType !== 2)
                                    break;
                                message.documentTypes = reader.stringVerify();
                                message._documentTypes = "documentTypes";
                                continue;
                            }
                        case 11: {
                                if (wireType !== 2)
                                    break;
                                message.features = reader.bytes();
                                message._features = "features";
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
                 * Decodes a WebdPayload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Wa6.ClientPayload.WebInfo.WebdPayload & Wa6.ClientPayload.WebInfo.WebdPayload.$Shape} WebdPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                WebdPayload.decodeDelimited = function(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a WebdPayload message.
                 * @function verify
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                WebdPayload.verify = function (message, _depth) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        return "max depth exceeded";
                    var properties = {};
                    if (message.usesParticipantInKey != null && $Object.hasOwnProperty.call(message, "usesParticipantInKey")) {
                        properties._usesParticipantInKey = 1;
                        if (typeof message.usesParticipantInKey !== "boolean")
                            return "usesParticipantInKey: boolean expected";
                    }
                    if (message.supportsStarredMessages != null && $Object.hasOwnProperty.call(message, "supportsStarredMessages")) {
                        properties._supportsStarredMessages = 1;
                        if (typeof message.supportsStarredMessages !== "boolean")
                            return "supportsStarredMessages: boolean expected";
                    }
                    if (message.supportsDocumentMessages != null && $Object.hasOwnProperty.call(message, "supportsDocumentMessages")) {
                        properties._supportsDocumentMessages = 1;
                        if (typeof message.supportsDocumentMessages !== "boolean")
                            return "supportsDocumentMessages: boolean expected";
                    }
                    if (message.supportsUrlMessages != null && $Object.hasOwnProperty.call(message, "supportsUrlMessages")) {
                        properties._supportsUrlMessages = 1;
                        if (typeof message.supportsUrlMessages !== "boolean")
                            return "supportsUrlMessages: boolean expected";
                    }
                    if (message.supportsMediaRetry != null && $Object.hasOwnProperty.call(message, "supportsMediaRetry")) {
                        properties._supportsMediaRetry = 1;
                        if (typeof message.supportsMediaRetry !== "boolean")
                            return "supportsMediaRetry: boolean expected";
                    }
                    if (message.supportsE2EImage != null && $Object.hasOwnProperty.call(message, "supportsE2EImage")) {
                        properties._supportsE2EImage = 1;
                        if (typeof message.supportsE2EImage !== "boolean")
                            return "supportsE2EImage: boolean expected";
                    }
                    if (message.supportsE2EVideo != null && $Object.hasOwnProperty.call(message, "supportsE2EVideo")) {
                        properties._supportsE2EVideo = 1;
                        if (typeof message.supportsE2EVideo !== "boolean")
                            return "supportsE2EVideo: boolean expected";
                    }
                    if (message.supportsE2EAudio != null && $Object.hasOwnProperty.call(message, "supportsE2EAudio")) {
                        properties._supportsE2EAudio = 1;
                        if (typeof message.supportsE2EAudio !== "boolean")
                            return "supportsE2EAudio: boolean expected";
                    }
                    if (message.supportsE2EDocument != null && $Object.hasOwnProperty.call(message, "supportsE2EDocument")) {
                        properties._supportsE2EDocument = 1;
                        if (typeof message.supportsE2EDocument !== "boolean")
                            return "supportsE2EDocument: boolean expected";
                    }
                    if (message.documentTypes != null && $Object.hasOwnProperty.call(message, "documentTypes")) {
                        properties._documentTypes = 1;
                        if (!$util.isString(message.documentTypes))
                            return "documentTypes: string expected";
                    }
                    if (message.features != null && $Object.hasOwnProperty.call(message, "features")) {
                        properties._features = 1;
                        if (!(message.features && typeof message.features.length === "number" || $util.isString(message.features)))
                            return "features: buffer expected";
                    }
                    return null;
                };

                /**
                 * Creates a WebdPayload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Wa6.ClientPayload.WebInfo.WebdPayload} WebdPayload
                 */
                WebdPayload.fromObject = function (object, _depth) {
                    if (object instanceof $root.Wa6.ClientPayload.WebInfo.WebdPayload)
                        return object;
                    if (!$util.isObject(object))
                        throw $TypeError(".Wa6.ClientPayload.WebInfo.WebdPayload: object expected");
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var message = new $root.Wa6.ClientPayload.WebInfo.WebdPayload();
                    if (object.usesParticipantInKey != null)
                        message.usesParticipantInKey = $Boolean(object.usesParticipantInKey);
                    if (object.supportsStarredMessages != null)
                        message.supportsStarredMessages = $Boolean(object.supportsStarredMessages);
                    if (object.supportsDocumentMessages != null)
                        message.supportsDocumentMessages = $Boolean(object.supportsDocumentMessages);
                    if (object.supportsUrlMessages != null)
                        message.supportsUrlMessages = $Boolean(object.supportsUrlMessages);
                    if (object.supportsMediaRetry != null)
                        message.supportsMediaRetry = $Boolean(object.supportsMediaRetry);
                    if (object.supportsE2EImage != null)
                        message.supportsE2EImage = $Boolean(object.supportsE2EImage);
                    if (object.supportsE2EVideo != null)
                        message.supportsE2EVideo = $Boolean(object.supportsE2EVideo);
                    if (object.supportsE2EAudio != null)
                        message.supportsE2EAudio = $Boolean(object.supportsE2EAudio);
                    if (object.supportsE2EDocument != null)
                        message.supportsE2EDocument = $Boolean(object.supportsE2EDocument);
                    if (object.documentTypes != null)
                        message.documentTypes = $String(object.documentTypes);
                    if (object.features != null)
                        if (typeof object.features === "string")
                            $util.base64.decode(object.features, message.features = $util.newBuffer($util.base64.length(object.features)), 0);
                        else if (object.features.length >= 0)
                            message.features = object.features;
                    return message;
                };

                /**
                 * Creates a plain object from a WebdPayload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @static
                 * @param {Wa6.ClientPayload.WebInfo.WebdPayload} message WebdPayload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                WebdPayload.toObject = function (message, options, _depth) {
                    if (!options)
                        options = {};
                    if (_depth === $undefined)
                        _depth = 0;
                    if (_depth > $util.recursionLimit)
                        throw $Error("max depth exceeded");
                    var object = {};
                    if (message.usesParticipantInKey != null && $Object.hasOwnProperty.call(message, "usesParticipantInKey"))
                        object.usesParticipantInKey = message.usesParticipantInKey;
                    if (message.supportsStarredMessages != null && $Object.hasOwnProperty.call(message, "supportsStarredMessages"))
                        object.supportsStarredMessages = message.supportsStarredMessages;
                    if (message.supportsDocumentMessages != null && $Object.hasOwnProperty.call(message, "supportsDocumentMessages"))
                        object.supportsDocumentMessages = message.supportsDocumentMessages;
                    if (message.supportsUrlMessages != null && $Object.hasOwnProperty.call(message, "supportsUrlMessages"))
                        object.supportsUrlMessages = message.supportsUrlMessages;
                    if (message.supportsMediaRetry != null && $Object.hasOwnProperty.call(message, "supportsMediaRetry"))
                        object.supportsMediaRetry = message.supportsMediaRetry;
                    if (message.supportsE2EImage != null && $Object.hasOwnProperty.call(message, "supportsE2EImage"))
                        object.supportsE2EImage = message.supportsE2EImage;
                    if (message.supportsE2EVideo != null && $Object.hasOwnProperty.call(message, "supportsE2EVideo"))
                        object.supportsE2EVideo = message.supportsE2EVideo;
                    if (message.supportsE2EAudio != null && $Object.hasOwnProperty.call(message, "supportsE2EAudio"))
                        object.supportsE2EAudio = message.supportsE2EAudio;
                    if (message.supportsE2EDocument != null && $Object.hasOwnProperty.call(message, "supportsE2EDocument"))
                        object.supportsE2EDocument = message.supportsE2EDocument;
                    if (message.documentTypes != null && $Object.hasOwnProperty.call(message, "documentTypes"))
                        object.documentTypes = message.documentTypes;
                    if (message.features != null && $Object.hasOwnProperty.call(message, "features"))
                        object.features = options.bytes === $String ? $util.base64.encode(message.features, 0, message.features.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.features) : message.features;
                    return object;
                };

                /**
                 * Converts this WebdPayload to JSON.
                 * @function toJSON
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                WebdPayload.prototype.toJSON = function() {
                    return WebdPayload.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the type url for WebdPayload
                 * @function getTypeUrl
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @static
                 * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
                 * @returns {string} The type url
                 */
                WebdPayload.getTypeUrl = function(prefix) {
                    if (prefix === $undefined)
                        prefix = "type.googleapis.com";
                    return prefix + "/Wa6.ClientPayload.WebInfo.WebdPayload";
                };

                return WebdPayload;
            })();

            return WebInfo;
        })();

        return ClientPayload;
    })();

    Wa6.HandshakeMessage = (function() {

        /**
         * Properties of a HandshakeMessage.
         * @typedef {Object} Wa6.HandshakeMessage.$Properties
         * @property {Wa6.HandshakeMessage.ClientHello.$Properties|null} [clientHello] HandshakeMessage clientHello
         * @property {Wa6.HandshakeMessage.ServerHello.$Properties|null} [serverHello] HandshakeMessage serverHello
         * @property {Wa6.HandshakeMessage.ClientFinish.$Properties|null} [clientFinish] HandshakeMessage clientFinish
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */

        /**
         * Properties of a HandshakeMessage.
         * @memberof Wa6
         * @interface IHandshakeMessage
         * @augments Wa6.HandshakeMessage.$Properties
         * @deprecated Use Wa6.HandshakeMessage.$Properties instead.
         */

        /**
         * Shape of a HandshakeMessage.
         * @typedef {Wa6.HandshakeMessage.$Properties} Wa6.HandshakeMessage.$Shape
         */

        /**
         * Constructs a new HandshakeMessage.
         * @memberof Wa6
         * @classdesc Represents a HandshakeMessage.
         * @constructor
         * @param {Wa6.HandshakeMessage.$Properties=} [properties] Properties to set
         * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
         */
        var HandshakeMessage = function (properties) {
            if (properties)
                for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null && keys[i] !== "__proto__")
                        this[keys[i]] = properties[keys[i]];
        };

        /**
         * HandshakeMessage clientHello.
         * @member {Wa6.HandshakeMessage.ClientHello.$Properties|null|undefined} clientHello
         * @memberof Wa6.HandshakeMessage
         * @instance
         */
        HandshakeMessage.prototype.clientHello = null;

        /**
         * HandshakeMessage serverHello.
         * @member {Wa6.HandshakeMessage.ServerHello.$Properties|null|undefined} serverHello
         * @memberof Wa6.HandshakeMessage
         * @instance
         */
        HandshakeMessage.prototype.serverHello = null;

        /**
         * HandshakeMessage clientFinish.
         * @member {Wa6.HandshakeMessage.ClientFinish.$Properties|null|undefined} clientFinish
         * @memberof Wa6.HandshakeMessage
         * @instance
         */
        HandshakeMessage.prototype.clientFinish = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(HandshakeMessage.prototype, "_clientHello", {
            get: $util.oneOfGetter($oneOfFields = ["clientHello"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(HandshakeMessage.prototype, "_serverHello", {
            get: $util.oneOfGetter($oneOfFields = ["serverHello"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        $Object.defineProperty(HandshakeMessage.prototype, "_clientFinish", {
            get: $util.oneOfGetter($oneOfFields = ["clientFinish"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new HandshakeMessage instance using the specified properties.
         * @function create
         * @memberof Wa6.HandshakeMessage
         * @static
         * @param {Wa6.HandshakeMessage.$Properties=} [properties] Properties to set
         * @returns {Wa6.HandshakeMessage} HandshakeMessage instance
         * @type {{
         *   (properties: Wa6.HandshakeMessage.$Shape): Wa6.HandshakeMessage & Wa6.HandshakeMessage.$Shape;
         *   (properties?: Wa6.HandshakeMessage.$Properties): Wa6.HandshakeMessage;
         * }}
         */
        HandshakeMessage.create = function(properties) {
            return new HandshakeMessage(properties);
        };

        /**
         * Encodes the specified HandshakeMessage message. Does not implicitly {@link Wa6.HandshakeMessage.verify|verify} messages.
         * @function encode
         * @memberof Wa6.HandshakeMessage
         * @static
         * @param {Wa6.HandshakeMessage.$Properties} message HandshakeMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HandshakeMessage.encode = function (message, writer, _depth) {
            if (!writer)
                writer = $Writer.create();
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            if (message.clientHello != null && $Object.hasOwnProperty.call(message, "clientHello"))
                $root.Wa6.HandshakeMessage.ClientHello.encode(message.clientHello, writer.uint32(/* id 2, wireType 2 =*/18).fork(), _depth + 1).ldelim();
            if (message.serverHello != null && $Object.hasOwnProperty.call(message, "serverHello"))
                $root.Wa6.HandshakeMessage.ServerHello.encode(message.serverHello, writer.uint32(/* id 3, wireType 2 =*/26).fork(), _depth + 1).ldelim();
            if (message.clientFinish != null && $Object.hasOwnProperty.call(message, "clientFinish"))
                $root.Wa6.HandshakeMessage.ClientFinish.encode(message.clientFinish, writer.uint32(/* id 4, wireType 2 =*/34).fork(), _depth + 1).ldelim();
            if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                for (var i = 0; i < message.$unknowns.length; ++i)
                    writer.raw(message.$unknowns[i]);
            return writer;
        };

        /**
         * Encodes the specified HandshakeMessage message, length delimited. Does not implicitly {@link Wa6.HandshakeMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Wa6.HandshakeMessage
         * @static
         * @param {Wa6.HandshakeMessage.$Properties} message HandshakeMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HandshakeMessage.encodeDelimited = function(message, writer) {
            return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
        };

        /**
         * Decodes a HandshakeMessage message from the specified reader or buffer.
         * @function decode
         * @memberof Wa6.HandshakeMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Wa6.HandshakeMessage & Wa6.HandshakeMessage.$Shape} HandshakeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HandshakeMessage.decode = function (reader, length, _end, _depth, _target) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $Reader.recursionLimit)
                throw $Error("max depth exceeded");
            var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Wa6.HandshakeMessage();
            while (reader.pos < end) {
                var start = reader.pos;
                var tag = reader.tag();
                if (tag === _end) {
                    _end = $undefined;
                    break;
                }
                var wireType = tag & 7;
                switch (tag >>>= 3) {
                case 2: {
                        if (wireType !== 2)
                            break;
                        message.clientHello = $root.Wa6.HandshakeMessage.ClientHello.decode(reader, reader.uint32(), $undefined, _depth + 1, message.clientHello);
                        message._clientHello = "clientHello";
                        continue;
                    }
                case 3: {
                        if (wireType !== 2)
                            break;
                        message.serverHello = $root.Wa6.HandshakeMessage.ServerHello.decode(reader, reader.uint32(), $undefined, _depth + 1, message.serverHello);
                        message._serverHello = "serverHello";
                        continue;
                    }
                case 4: {
                        if (wireType !== 2)
                            break;
                        message.clientFinish = $root.Wa6.HandshakeMessage.ClientFinish.decode(reader, reader.uint32(), $undefined, _depth + 1, message.clientFinish);
                        message._clientFinish = "clientFinish";
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
         * Decodes a HandshakeMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Wa6.HandshakeMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Wa6.HandshakeMessage & Wa6.HandshakeMessage.$Shape} HandshakeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HandshakeMessage.decodeDelimited = function(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HandshakeMessage message.
         * @function verify
         * @memberof Wa6.HandshakeMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HandshakeMessage.verify = function (message, _depth) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                return "max depth exceeded";
            var properties = {};
            if (message.clientHello != null && $Object.hasOwnProperty.call(message, "clientHello")) {
                properties._clientHello = 1;
                {
                    var error = $root.Wa6.HandshakeMessage.ClientHello.verify(message.clientHello, _depth + 1);
                    if (error)
                        return "clientHello." + error;
                }
            }
            if (message.serverHello != null && $Object.hasOwnProperty.call(message, "serverHello")) {
                properties._serverHello = 1;
                {
                    var error = $root.Wa6.HandshakeMessage.ServerHello.verify(message.serverHello, _depth + 1);
                    if (error)
                        return "serverHello." + error;
                }
            }
            if (message.clientFinish != null && $Object.hasOwnProperty.call(message, "clientFinish")) {
                properties._clientFinish = 1;
                {
                    var error = $root.Wa6.HandshakeMessage.ClientFinish.verify(message.clientFinish, _depth + 1);
                    if (error)
                        return "clientFinish." + error;
                }
            }
            return null;
        };

        /**
         * Creates a HandshakeMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Wa6.HandshakeMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Wa6.HandshakeMessage} HandshakeMessage
         */
        HandshakeMessage.fromObject = function (object, _depth) {
            if (object instanceof $root.Wa6.HandshakeMessage)
                return object;
            if (!$util.isObject(object))
                throw $TypeError(".Wa6.HandshakeMessage: object expected");
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var message = new $root.Wa6.HandshakeMessage();
            if (object.clientHello != null) {
                if (!$util.isObject(object.clientHello))
                    throw $TypeError(".Wa6.HandshakeMessage.clientHello: object expected");
                message.clientHello = $root.Wa6.HandshakeMessage.ClientHello.fromObject(object.clientHello, _depth + 1);
            }
            if (object.serverHello != null) {
                if (!$util.isObject(object.serverHello))
                    throw $TypeError(".Wa6.HandshakeMessage.serverHello: object expected");
                message.serverHello = $root.Wa6.HandshakeMessage.ServerHello.fromObject(object.serverHello, _depth + 1);
            }
            if (object.clientFinish != null) {
                if (!$util.isObject(object.clientFinish))
                    throw $TypeError(".Wa6.HandshakeMessage.clientFinish: object expected");
                message.clientFinish = $root.Wa6.HandshakeMessage.ClientFinish.fromObject(object.clientFinish, _depth + 1);
            }
            return message;
        };

        /**
         * Creates a plain object from a HandshakeMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Wa6.HandshakeMessage
         * @static
         * @param {Wa6.HandshakeMessage} message HandshakeMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HandshakeMessage.toObject = function (message, options, _depth) {
            if (!options)
                options = {};
            if (_depth === $undefined)
                _depth = 0;
            if (_depth > $util.recursionLimit)
                throw $Error("max depth exceeded");
            var object = {};
            if (message.clientHello != null && $Object.hasOwnProperty.call(message, "clientHello"))
                object.clientHello = $root.Wa6.HandshakeMessage.ClientHello.toObject(message.clientHello, options, _depth + 1);
            if (message.serverHello != null && $Object.hasOwnProperty.call(message, "serverHello"))
                object.serverHello = $root.Wa6.HandshakeMessage.ServerHello.toObject(message.serverHello, options, _depth + 1);
            if (message.clientFinish != null && $Object.hasOwnProperty.call(message, "clientFinish"))
                object.clientFinish = $root.Wa6.HandshakeMessage.ClientFinish.toObject(message.clientFinish, options, _depth + 1);
            return object;
        };

        /**
         * Converts this HandshakeMessage to JSON.
         * @function toJSON
         * @memberof Wa6.HandshakeMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HandshakeMessage.prototype.toJSON = function() {
            return HandshakeMessage.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the type url for HandshakeMessage
         * @function getTypeUrl
         * @memberof Wa6.HandshakeMessage
         * @static
         * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
         * @returns {string} The type url
         */
        HandshakeMessage.getTypeUrl = function(prefix) {
            if (prefix === $undefined)
                prefix = "type.googleapis.com";
            return prefix + "/Wa6.HandshakeMessage";
        };

        HandshakeMessage.ClientFinish = (function() {

            /**
             * Properties of a ClientFinish.
             * @typedef {Object} Wa6.HandshakeMessage.ClientFinish.$Properties
             * @property {Uint8Array|null} ["static"] ClientFinish static
             * @property {Uint8Array|null} [payload] ClientFinish payload
             * @property {Uint8Array|null} [extendedCiphertext] ClientFinish extendedCiphertext
             * @property {Uint8Array|null} [paddedBytes] ClientFinish paddedBytes
             * @property {boolean|null} [simulateXxkemFs] ClientFinish simulateXxkemFs
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a ClientFinish.
             * @memberof Wa6.HandshakeMessage
             * @interface IClientFinish
             * @augments Wa6.HandshakeMessage.ClientFinish.$Properties
             * @deprecated Use Wa6.HandshakeMessage.ClientFinish.$Properties instead.
             */

            /**
             * Shape of a ClientFinish.
             * @typedef {Wa6.HandshakeMessage.ClientFinish.$Properties} Wa6.HandshakeMessage.ClientFinish.$Shape
             */

            /**
             * Constructs a new ClientFinish.
             * @memberof Wa6.HandshakeMessage
             * @classdesc Represents a ClientFinish.
             * @constructor
             * @param {Wa6.HandshakeMessage.ClientFinish.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var ClientFinish = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * ClientFinish static.
             * @member {Uint8Array|null|undefined} static
             * @memberof Wa6.HandshakeMessage.ClientFinish
             * @instance
             */
            ClientFinish.prototype["static"] = null;

            /**
             * ClientFinish payload.
             * @member {Uint8Array|null|undefined} payload
             * @memberof Wa6.HandshakeMessage.ClientFinish
             * @instance
             */
            ClientFinish.prototype.payload = null;

            /**
             * ClientFinish extendedCiphertext.
             * @member {Uint8Array|null|undefined} extendedCiphertext
             * @memberof Wa6.HandshakeMessage.ClientFinish
             * @instance
             */
            ClientFinish.prototype.extendedCiphertext = null;

            /**
             * ClientFinish paddedBytes.
             * @member {Uint8Array|null|undefined} paddedBytes
             * @memberof Wa6.HandshakeMessage.ClientFinish
             * @instance
             */
            ClientFinish.prototype.paddedBytes = null;

            /**
             * ClientFinish simulateXxkemFs.
             * @member {boolean|null|undefined} simulateXxkemFs
             * @memberof Wa6.HandshakeMessage.ClientFinish
             * @instance
             */
            ClientFinish.prototype.simulateXxkemFs = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ClientFinish.prototype, "_static", {
                get: $util.oneOfGetter($oneOfFields = ["static"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ClientFinish.prototype, "_payload", {
                get: $util.oneOfGetter($oneOfFields = ["payload"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ClientFinish.prototype, "_extendedCiphertext", {
                get: $util.oneOfGetter($oneOfFields = ["extendedCiphertext"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ClientFinish.prototype, "_paddedBytes", {
                get: $util.oneOfGetter($oneOfFields = ["paddedBytes"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ClientFinish.prototype, "_simulateXxkemFs", {
                get: $util.oneOfGetter($oneOfFields = ["simulateXxkemFs"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new ClientFinish instance using the specified properties.
             * @function create
             * @memberof Wa6.HandshakeMessage.ClientFinish
             * @static
             * @param {Wa6.HandshakeMessage.ClientFinish.$Properties=} [properties] Properties to set
             * @returns {Wa6.HandshakeMessage.ClientFinish} ClientFinish instance
             * @type {{
             *   (properties: Wa6.HandshakeMessage.ClientFinish.$Shape): Wa6.HandshakeMessage.ClientFinish & Wa6.HandshakeMessage.ClientFinish.$Shape;
             *   (properties?: Wa6.HandshakeMessage.ClientFinish.$Properties): Wa6.HandshakeMessage.ClientFinish;
             * }}
             */
            ClientFinish.create = function(properties) {
                return new ClientFinish(properties);
            };

            /**
             * Encodes the specified ClientFinish message. Does not implicitly {@link Wa6.HandshakeMessage.ClientFinish.verify|verify} messages.
             * @function encode
             * @memberof Wa6.HandshakeMessage.ClientFinish
             * @static
             * @param {Wa6.HandshakeMessage.ClientFinish.$Properties} message ClientFinish message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ClientFinish.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message["static"] != null && $Object.hasOwnProperty.call(message, "static"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message["static"]);
                if (message.payload != null && $Object.hasOwnProperty.call(message, "payload"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.payload);
                if (message.extendedCiphertext != null && $Object.hasOwnProperty.call(message, "extendedCiphertext"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.extendedCiphertext);
                if (message.paddedBytes != null && $Object.hasOwnProperty.call(message, "paddedBytes"))
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.paddedBytes);
                if (message.simulateXxkemFs != null && $Object.hasOwnProperty.call(message, "simulateXxkemFs"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.simulateXxkemFs);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified ClientFinish message, length delimited. Does not implicitly {@link Wa6.HandshakeMessage.ClientFinish.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Wa6.HandshakeMessage.ClientFinish
             * @static
             * @param {Wa6.HandshakeMessage.ClientFinish.$Properties} message ClientFinish message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ClientFinish.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a ClientFinish message from the specified reader or buffer.
             * @function decode
             * @memberof Wa6.HandshakeMessage.ClientFinish
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Wa6.HandshakeMessage.ClientFinish & Wa6.HandshakeMessage.ClientFinish.$Shape} ClientFinish
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ClientFinish.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Wa6.HandshakeMessage.ClientFinish();
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
                            message["static"] = reader.bytes();
                            message._static = "static";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message.payload = reader.bytes();
                            message._payload = "payload";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.extendedCiphertext = reader.bytes();
                            message._extendedCiphertext = "extendedCiphertext";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            message.paddedBytes = reader.bytes();
                            message._paddedBytes = "paddedBytes";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 0)
                                break;
                            message.simulateXxkemFs = reader.bool();
                            message._simulateXxkemFs = "simulateXxkemFs";
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
             * Decodes a ClientFinish message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Wa6.HandshakeMessage.ClientFinish
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Wa6.HandshakeMessage.ClientFinish & Wa6.HandshakeMessage.ClientFinish.$Shape} ClientFinish
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ClientFinish.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ClientFinish message.
             * @function verify
             * @memberof Wa6.HandshakeMessage.ClientFinish
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ClientFinish.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message["static"] != null && $Object.hasOwnProperty.call(message, "static")) {
                    properties._static = 1;
                    if (!(message["static"] && typeof message["static"].length === "number" || $util.isString(message["static"])))
                        return "static: buffer expected";
                }
                if (message.payload != null && $Object.hasOwnProperty.call(message, "payload")) {
                    properties._payload = 1;
                    if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                        return "payload: buffer expected";
                }
                if (message.extendedCiphertext != null && $Object.hasOwnProperty.call(message, "extendedCiphertext")) {
                    properties._extendedCiphertext = 1;
                    if (!(message.extendedCiphertext && typeof message.extendedCiphertext.length === "number" || $util.isString(message.extendedCiphertext)))
                        return "extendedCiphertext: buffer expected";
                }
                if (message.paddedBytes != null && $Object.hasOwnProperty.call(message, "paddedBytes")) {
                    properties._paddedBytes = 1;
                    if (!(message.paddedBytes && typeof message.paddedBytes.length === "number" || $util.isString(message.paddedBytes)))
                        return "paddedBytes: buffer expected";
                }
                if (message.simulateXxkemFs != null && $Object.hasOwnProperty.call(message, "simulateXxkemFs")) {
                    properties._simulateXxkemFs = 1;
                    if (typeof message.simulateXxkemFs !== "boolean")
                        return "simulateXxkemFs: boolean expected";
                }
                return null;
            };

            /**
             * Creates a ClientFinish message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Wa6.HandshakeMessage.ClientFinish
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Wa6.HandshakeMessage.ClientFinish} ClientFinish
             */
            ClientFinish.fromObject = function (object, _depth) {
                if (object instanceof $root.Wa6.HandshakeMessage.ClientFinish)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".Wa6.HandshakeMessage.ClientFinish: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.Wa6.HandshakeMessage.ClientFinish();
                if (object["static"] != null)
                    if (typeof object["static"] === "string")
                        $util.base64.decode(object["static"], message["static"] = $util.newBuffer($util.base64.length(object["static"])), 0);
                    else if (object["static"].length >= 0)
                        message["static"] = object["static"];
                if (object.payload != null)
                    if (typeof object.payload === "string")
                        $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                    else if (object.payload.length >= 0)
                        message.payload = object.payload;
                if (object.extendedCiphertext != null)
                    if (typeof object.extendedCiphertext === "string")
                        $util.base64.decode(object.extendedCiphertext, message.extendedCiphertext = $util.newBuffer($util.base64.length(object.extendedCiphertext)), 0);
                    else if (object.extendedCiphertext.length >= 0)
                        message.extendedCiphertext = object.extendedCiphertext;
                if (object.paddedBytes != null)
                    if (typeof object.paddedBytes === "string")
                        $util.base64.decode(object.paddedBytes, message.paddedBytes = $util.newBuffer($util.base64.length(object.paddedBytes)), 0);
                    else if (object.paddedBytes.length >= 0)
                        message.paddedBytes = object.paddedBytes;
                if (object.simulateXxkemFs != null)
                    message.simulateXxkemFs = $Boolean(object.simulateXxkemFs);
                return message;
            };

            /**
             * Creates a plain object from a ClientFinish message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Wa6.HandshakeMessage.ClientFinish
             * @static
             * @param {Wa6.HandshakeMessage.ClientFinish} message ClientFinish
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ClientFinish.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (message["static"] != null && $Object.hasOwnProperty.call(message, "static"))
                    object["static"] = options.bytes === $String ? $util.base64.encode(message["static"], 0, message["static"].length) : options.bytes === $Array ? $Array.prototype.slice.call(message["static"]) : message["static"];
                if (message.payload != null && $Object.hasOwnProperty.call(message, "payload"))
                    object.payload = options.bytes === $String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.payload) : message.payload;
                if (message.extendedCiphertext != null && $Object.hasOwnProperty.call(message, "extendedCiphertext"))
                    object.extendedCiphertext = options.bytes === $String ? $util.base64.encode(message.extendedCiphertext, 0, message.extendedCiphertext.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.extendedCiphertext) : message.extendedCiphertext;
                if (message.paddedBytes != null && $Object.hasOwnProperty.call(message, "paddedBytes"))
                    object.paddedBytes = options.bytes === $String ? $util.base64.encode(message.paddedBytes, 0, message.paddedBytes.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.paddedBytes) : message.paddedBytes;
                if (message.simulateXxkemFs != null && $Object.hasOwnProperty.call(message, "simulateXxkemFs"))
                    object.simulateXxkemFs = message.simulateXxkemFs;
                return object;
            };

            /**
             * Converts this ClientFinish to JSON.
             * @function toJSON
             * @memberof Wa6.HandshakeMessage.ClientFinish
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ClientFinish.prototype.toJSON = function() {
                return ClientFinish.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for ClientFinish
             * @function getTypeUrl
             * @memberof Wa6.HandshakeMessage.ClientFinish
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            ClientFinish.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/Wa6.HandshakeMessage.ClientFinish";
            };

            return ClientFinish;
        })();

        HandshakeMessage.ClientHello = (function() {

            /**
             * Properties of a ClientHello.
             * @typedef {Object} Wa6.HandshakeMessage.ClientHello.$Properties
             * @property {Uint8Array|null} [ephemeral] ClientHello ephemeral
             * @property {Uint8Array|null} ["static"] ClientHello static
             * @property {Uint8Array|null} [payload] ClientHello payload
             * @property {boolean|null} [useExtended] ClientHello useExtended
             * @property {Uint8Array|null} [extendedCiphertext] ClientHello extendedCiphertext
             * @property {Uint8Array|null} [paddedBytes] ClientHello paddedBytes
             * @property {boolean|null} [sendServerHelloPaddedBytes] ClientHello sendServerHelloPaddedBytes
             * @property {boolean|null} [simulateXxkemFs] ClientHello simulateXxkemFs
             * @property {Wa6.HandshakeMessage.HandshakePqMode|null} [pqMode] ClientHello pqMode
             * @property {Uint8Array|null} [extendedEphemeral] ClientHello extendedEphemeral
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a ClientHello.
             * @memberof Wa6.HandshakeMessage
             * @interface IClientHello
             * @augments Wa6.HandshakeMessage.ClientHello.$Properties
             * @deprecated Use Wa6.HandshakeMessage.ClientHello.$Properties instead.
             */

            /**
             * Shape of a ClientHello.
             * @typedef {Wa6.HandshakeMessage.ClientHello.$Properties} Wa6.HandshakeMessage.ClientHello.$Shape
             */

            /**
             * Constructs a new ClientHello.
             * @memberof Wa6.HandshakeMessage
             * @classdesc Represents a ClientHello.
             * @constructor
             * @param {Wa6.HandshakeMessage.ClientHello.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var ClientHello = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * ClientHello ephemeral.
             * @member {Uint8Array|null|undefined} ephemeral
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @instance
             */
            ClientHello.prototype.ephemeral = null;

            /**
             * ClientHello static.
             * @member {Uint8Array|null|undefined} static
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @instance
             */
            ClientHello.prototype["static"] = null;

            /**
             * ClientHello payload.
             * @member {Uint8Array|null|undefined} payload
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @instance
             */
            ClientHello.prototype.payload = null;

            /**
             * ClientHello useExtended.
             * @member {boolean|null|undefined} useExtended
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @instance
             */
            ClientHello.prototype.useExtended = null;

            /**
             * ClientHello extendedCiphertext.
             * @member {Uint8Array|null|undefined} extendedCiphertext
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @instance
             */
            ClientHello.prototype.extendedCiphertext = null;

            /**
             * ClientHello paddedBytes.
             * @member {Uint8Array|null|undefined} paddedBytes
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @instance
             */
            ClientHello.prototype.paddedBytes = null;

            /**
             * ClientHello sendServerHelloPaddedBytes.
             * @member {boolean|null|undefined} sendServerHelloPaddedBytes
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @instance
             */
            ClientHello.prototype.sendServerHelloPaddedBytes = null;

            /**
             * ClientHello simulateXxkemFs.
             * @member {boolean|null|undefined} simulateXxkemFs
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @instance
             */
            ClientHello.prototype.simulateXxkemFs = null;

            /**
             * ClientHello pqMode.
             * @member {Wa6.HandshakeMessage.HandshakePqMode|null|undefined} pqMode
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @instance
             */
            ClientHello.prototype.pqMode = null;

            /**
             * ClientHello extendedEphemeral.
             * @member {Uint8Array|null|undefined} extendedEphemeral
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @instance
             */
            ClientHello.prototype.extendedEphemeral = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ClientHello.prototype, "_ephemeral", {
                get: $util.oneOfGetter($oneOfFields = ["ephemeral"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ClientHello.prototype, "_static", {
                get: $util.oneOfGetter($oneOfFields = ["static"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ClientHello.prototype, "_payload", {
                get: $util.oneOfGetter($oneOfFields = ["payload"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ClientHello.prototype, "_useExtended", {
                get: $util.oneOfGetter($oneOfFields = ["useExtended"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ClientHello.prototype, "_extendedCiphertext", {
                get: $util.oneOfGetter($oneOfFields = ["extendedCiphertext"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ClientHello.prototype, "_paddedBytes", {
                get: $util.oneOfGetter($oneOfFields = ["paddedBytes"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ClientHello.prototype, "_sendServerHelloPaddedBytes", {
                get: $util.oneOfGetter($oneOfFields = ["sendServerHelloPaddedBytes"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ClientHello.prototype, "_simulateXxkemFs", {
                get: $util.oneOfGetter($oneOfFields = ["simulateXxkemFs"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ClientHello.prototype, "_pqMode", {
                get: $util.oneOfGetter($oneOfFields = ["pqMode"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ClientHello.prototype, "_extendedEphemeral", {
                get: $util.oneOfGetter($oneOfFields = ["extendedEphemeral"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new ClientHello instance using the specified properties.
             * @function create
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @static
             * @param {Wa6.HandshakeMessage.ClientHello.$Properties=} [properties] Properties to set
             * @returns {Wa6.HandshakeMessage.ClientHello} ClientHello instance
             * @type {{
             *   (properties: Wa6.HandshakeMessage.ClientHello.$Shape): Wa6.HandshakeMessage.ClientHello & Wa6.HandshakeMessage.ClientHello.$Shape;
             *   (properties?: Wa6.HandshakeMessage.ClientHello.$Properties): Wa6.HandshakeMessage.ClientHello;
             * }}
             */
            ClientHello.create = function(properties) {
                return new ClientHello(properties);
            };

            /**
             * Encodes the specified ClientHello message. Does not implicitly {@link Wa6.HandshakeMessage.ClientHello.verify|verify} messages.
             * @function encode
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @static
             * @param {Wa6.HandshakeMessage.ClientHello.$Properties} message ClientHello message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ClientHello.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.ephemeral != null && $Object.hasOwnProperty.call(message, "ephemeral"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.ephemeral);
                if (message["static"] != null && $Object.hasOwnProperty.call(message, "static"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message["static"]);
                if (message.payload != null && $Object.hasOwnProperty.call(message, "payload"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.payload);
                if (message.useExtended != null && $Object.hasOwnProperty.call(message, "useExtended"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.useExtended);
                if (message.extendedCiphertext != null && $Object.hasOwnProperty.call(message, "extendedCiphertext"))
                    writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.extendedCiphertext);
                if (message.paddedBytes != null && $Object.hasOwnProperty.call(message, "paddedBytes"))
                    writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.paddedBytes);
                if (message.sendServerHelloPaddedBytes != null && $Object.hasOwnProperty.call(message, "sendServerHelloPaddedBytes"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.sendServerHelloPaddedBytes);
                if (message.simulateXxkemFs != null && $Object.hasOwnProperty.call(message, "simulateXxkemFs"))
                    writer.uint32(/* id 8, wireType 0 =*/64).bool(message.simulateXxkemFs);
                if (message.pqMode != null && $Object.hasOwnProperty.call(message, "pqMode"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.pqMode);
                if (message.extendedEphemeral != null && $Object.hasOwnProperty.call(message, "extendedEphemeral"))
                    writer.uint32(/* id 10, wireType 2 =*/82).bytes(message.extendedEphemeral);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified ClientHello message, length delimited. Does not implicitly {@link Wa6.HandshakeMessage.ClientHello.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @static
             * @param {Wa6.HandshakeMessage.ClientHello.$Properties} message ClientHello message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ClientHello.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a ClientHello message from the specified reader or buffer.
             * @function decode
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Wa6.HandshakeMessage.ClientHello & Wa6.HandshakeMessage.ClientHello.$Shape} ClientHello
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ClientHello.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Wa6.HandshakeMessage.ClientHello(), value;
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
                            message.ephemeral = reader.bytes();
                            message._ephemeral = "ephemeral";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message["static"] = reader.bytes();
                            message._static = "static";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.payload = reader.bytes();
                            message._payload = "payload";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 0)
                                break;
                            message.useExtended = reader.bool();
                            message._useExtended = "useExtended";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 2)
                                break;
                            message.extendedCiphertext = reader.bytes();
                            message._extendedCiphertext = "extendedCiphertext";
                            continue;
                        }
                    case 6: {
                            if (wireType !== 2)
                                break;
                            message.paddedBytes = reader.bytes();
                            message._paddedBytes = "paddedBytes";
                            continue;
                        }
                    case 7: {
                            if (wireType !== 0)
                                break;
                            message.sendServerHelloPaddedBytes = reader.bool();
                            message._sendServerHelloPaddedBytes = "sendServerHelloPaddedBytes";
                            continue;
                        }
                    case 8: {
                            if (wireType !== 0)
                                break;
                            message.simulateXxkemFs = reader.bool();
                            message._simulateXxkemFs = "simulateXxkemFs";
                            continue;
                        }
                    case 9: {
                            if (wireType !== 0)
                                break;
                            message.pqMode = reader.int32();
                            message._pqMode = "pqMode";
                            continue;
                        }
                    case 10: {
                            if (wireType !== 2)
                                break;
                            message.extendedEphemeral = reader.bytes();
                            message._extendedEphemeral = "extendedEphemeral";
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
             * Decodes a ClientHello message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Wa6.HandshakeMessage.ClientHello & Wa6.HandshakeMessage.ClientHello.$Shape} ClientHello
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ClientHello.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ClientHello message.
             * @function verify
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ClientHello.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.ephemeral != null && $Object.hasOwnProperty.call(message, "ephemeral")) {
                    properties._ephemeral = 1;
                    if (!(message.ephemeral && typeof message.ephemeral.length === "number" || $util.isString(message.ephemeral)))
                        return "ephemeral: buffer expected";
                }
                if (message["static"] != null && $Object.hasOwnProperty.call(message, "static")) {
                    properties._static = 1;
                    if (!(message["static"] && typeof message["static"].length === "number" || $util.isString(message["static"])))
                        return "static: buffer expected";
                }
                if (message.payload != null && $Object.hasOwnProperty.call(message, "payload")) {
                    properties._payload = 1;
                    if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                        return "payload: buffer expected";
                }
                if (message.useExtended != null && $Object.hasOwnProperty.call(message, "useExtended")) {
                    properties._useExtended = 1;
                    if (typeof message.useExtended !== "boolean")
                        return "useExtended: boolean expected";
                }
                if (message.extendedCiphertext != null && $Object.hasOwnProperty.call(message, "extendedCiphertext")) {
                    properties._extendedCiphertext = 1;
                    if (!(message.extendedCiphertext && typeof message.extendedCiphertext.length === "number" || $util.isString(message.extendedCiphertext)))
                        return "extendedCiphertext: buffer expected";
                }
                if (message.paddedBytes != null && $Object.hasOwnProperty.call(message, "paddedBytes")) {
                    properties._paddedBytes = 1;
                    if (!(message.paddedBytes && typeof message.paddedBytes.length === "number" || $util.isString(message.paddedBytes)))
                        return "paddedBytes: buffer expected";
                }
                if (message.sendServerHelloPaddedBytes != null && $Object.hasOwnProperty.call(message, "sendServerHelloPaddedBytes")) {
                    properties._sendServerHelloPaddedBytes = 1;
                    if (typeof message.sendServerHelloPaddedBytes !== "boolean")
                        return "sendServerHelloPaddedBytes: boolean expected";
                }
                if (message.simulateXxkemFs != null && $Object.hasOwnProperty.call(message, "simulateXxkemFs")) {
                    properties._simulateXxkemFs = 1;
                    if (typeof message.simulateXxkemFs !== "boolean")
                        return "simulateXxkemFs: boolean expected";
                }
                if (message.pqMode != null && $Object.hasOwnProperty.call(message, "pqMode")) {
                    properties._pqMode = 1;
                    if (typeof message.pqMode !== "number" || (message.pqMode | 0) !== message.pqMode)
                        return "pqMode: enum value expected";
                }
                if (message.extendedEphemeral != null && $Object.hasOwnProperty.call(message, "extendedEphemeral")) {
                    properties._extendedEphemeral = 1;
                    if (!(message.extendedEphemeral && typeof message.extendedEphemeral.length === "number" || $util.isString(message.extendedEphemeral)))
                        return "extendedEphemeral: buffer expected";
                }
                return null;
            };

            /**
             * Creates a ClientHello message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Wa6.HandshakeMessage.ClientHello} ClientHello
             */
            ClientHello.fromObject = function (object, _depth) {
                if (object instanceof $root.Wa6.HandshakeMessage.ClientHello)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".Wa6.HandshakeMessage.ClientHello: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.Wa6.HandshakeMessage.ClientHello();
                if (object.ephemeral != null)
                    if (typeof object.ephemeral === "string")
                        $util.base64.decode(object.ephemeral, message.ephemeral = $util.newBuffer($util.base64.length(object.ephemeral)), 0);
                    else if (object.ephemeral.length >= 0)
                        message.ephemeral = object.ephemeral;
                if (object["static"] != null)
                    if (typeof object["static"] === "string")
                        $util.base64.decode(object["static"], message["static"] = $util.newBuffer($util.base64.length(object["static"])), 0);
                    else if (object["static"].length >= 0)
                        message["static"] = object["static"];
                if (object.payload != null)
                    if (typeof object.payload === "string")
                        $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                    else if (object.payload.length >= 0)
                        message.payload = object.payload;
                if (object.useExtended != null)
                    message.useExtended = $Boolean(object.useExtended);
                if (object.extendedCiphertext != null)
                    if (typeof object.extendedCiphertext === "string")
                        $util.base64.decode(object.extendedCiphertext, message.extendedCiphertext = $util.newBuffer($util.base64.length(object.extendedCiphertext)), 0);
                    else if (object.extendedCiphertext.length >= 0)
                        message.extendedCiphertext = object.extendedCiphertext;
                if (object.paddedBytes != null)
                    if (typeof object.paddedBytes === "string")
                        $util.base64.decode(object.paddedBytes, message.paddedBytes = $util.newBuffer($util.base64.length(object.paddedBytes)), 0);
                    else if (object.paddedBytes.length >= 0)
                        message.paddedBytes = object.paddedBytes;
                if (object.sendServerHelloPaddedBytes != null)
                    message.sendServerHelloPaddedBytes = $Boolean(object.sendServerHelloPaddedBytes);
                if (object.simulateXxkemFs != null)
                    message.simulateXxkemFs = $Boolean(object.simulateXxkemFs);
                switch (object.pqMode) {
                case "HANDSHAKE_PQ_MODE_UNKNOWN":
                case 0:
                    message.pqMode = 0;
                    break;
                case "XXKEM":
                case 1:
                    message.pqMode = 1;
                    break;
                case "XXKEM_FS":
                case 2:
                    message.pqMode = 2;
                    break;
                case "XXKEM_EPH":
                case 9:
                    message.pqMode = 9;
                    break;
                case "WA_CLASSICAL":
                case 3:
                    message.pqMode = 3;
                    break;
                case "WA_PQ":
                case 4:
                    message.pqMode = 4;
                    break;
                case "IKKEM":
                case 5:
                    message.pqMode = 5;
                    break;
                case "IKKEM_FS":
                case 6:
                    message.pqMode = 6;
                    break;
                case "XXKEM_2":
                case 7:
                    message.pqMode = 7;
                    break;
                case "IKKEM_2":
                case 8:
                    message.pqMode = 8;
                    break;
                default:
                    if (typeof object.pqMode === "number" && (object.pqMode | 0) === object.pqMode)
                        message.pqMode = object.pqMode;
                }
                if (object.extendedEphemeral != null)
                    if (typeof object.extendedEphemeral === "string")
                        $util.base64.decode(object.extendedEphemeral, message.extendedEphemeral = $util.newBuffer($util.base64.length(object.extendedEphemeral)), 0);
                    else if (object.extendedEphemeral.length >= 0)
                        message.extendedEphemeral = object.extendedEphemeral;
                return message;
            };

            /**
             * Creates a plain object from a ClientHello message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @static
             * @param {Wa6.HandshakeMessage.ClientHello} message ClientHello
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ClientHello.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (message.ephemeral != null && $Object.hasOwnProperty.call(message, "ephemeral"))
                    object.ephemeral = options.bytes === $String ? $util.base64.encode(message.ephemeral, 0, message.ephemeral.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.ephemeral) : message.ephemeral;
                if (message["static"] != null && $Object.hasOwnProperty.call(message, "static"))
                    object["static"] = options.bytes === $String ? $util.base64.encode(message["static"], 0, message["static"].length) : options.bytes === $Array ? $Array.prototype.slice.call(message["static"]) : message["static"];
                if (message.payload != null && $Object.hasOwnProperty.call(message, "payload"))
                    object.payload = options.bytes === $String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.payload) : message.payload;
                if (message.useExtended != null && $Object.hasOwnProperty.call(message, "useExtended"))
                    object.useExtended = message.useExtended;
                if (message.extendedCiphertext != null && $Object.hasOwnProperty.call(message, "extendedCiphertext"))
                    object.extendedCiphertext = options.bytes === $String ? $util.base64.encode(message.extendedCiphertext, 0, message.extendedCiphertext.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.extendedCiphertext) : message.extendedCiphertext;
                if (message.paddedBytes != null && $Object.hasOwnProperty.call(message, "paddedBytes"))
                    object.paddedBytes = options.bytes === $String ? $util.base64.encode(message.paddedBytes, 0, message.paddedBytes.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.paddedBytes) : message.paddedBytes;
                if (message.sendServerHelloPaddedBytes != null && $Object.hasOwnProperty.call(message, "sendServerHelloPaddedBytes"))
                    object.sendServerHelloPaddedBytes = message.sendServerHelloPaddedBytes;
                if (message.simulateXxkemFs != null && $Object.hasOwnProperty.call(message, "simulateXxkemFs"))
                    object.simulateXxkemFs = message.simulateXxkemFs;
                if (message.pqMode != null && $Object.hasOwnProperty.call(message, "pqMode"))
                    object.pqMode = options.enums === $String ? $root.Wa6.HandshakeMessage.HandshakePqMode[message.pqMode] === $undefined ? message.pqMode : $root.Wa6.HandshakeMessage.HandshakePqMode[message.pqMode] : message.pqMode;
                if (message.extendedEphemeral != null && $Object.hasOwnProperty.call(message, "extendedEphemeral"))
                    object.extendedEphemeral = options.bytes === $String ? $util.base64.encode(message.extendedEphemeral, 0, message.extendedEphemeral.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.extendedEphemeral) : message.extendedEphemeral;
                return object;
            };

            /**
             * Converts this ClientHello to JSON.
             * @function toJSON
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ClientHello.prototype.toJSON = function() {
                return ClientHello.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for ClientHello
             * @function getTypeUrl
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            ClientHello.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/Wa6.HandshakeMessage.ClientHello";
            };

            return ClientHello;
        })();

        /**
         * HandshakePqMode enum.
         * @name Wa6.HandshakeMessage.HandshakePqMode
         * @enum {number}
         * @property {number} HANDSHAKE_PQ_MODE_UNKNOWN=0 HANDSHAKE_PQ_MODE_UNKNOWN value
         * @property {number} XXKEM=1 XXKEM value
         * @property {number} XXKEM_FS=2 XXKEM_FS value
         * @property {number} XXKEM_EPH=9 XXKEM_EPH value
         * @property {number} WA_CLASSICAL=3 WA_CLASSICAL value
         * @property {number} WA_PQ=4 WA_PQ value
         * @property {number} IKKEM=5 IKKEM value
         * @property {number} IKKEM_FS=6 IKKEM_FS value
         * @property {number} XXKEM_2=7 XXKEM_2 value
         * @property {number} IKKEM_2=8 IKKEM_2 value
         */
        HandshakeMessage.HandshakePqMode = (function() {
            var valuesById = $Object.create(null), values = $Object.create(valuesById);
            values[valuesById[0] = "HANDSHAKE_PQ_MODE_UNKNOWN"] = 0;
            values[valuesById[1] = "XXKEM"] = 1;
            values[valuesById[2] = "XXKEM_FS"] = 2;
            values[valuesById[9] = "XXKEM_EPH"] = 9;
            values[valuesById[3] = "WA_CLASSICAL"] = 3;
            values[valuesById[4] = "WA_PQ"] = 4;
            values[valuesById[5] = "IKKEM"] = 5;
            values[valuesById[6] = "IKKEM_FS"] = 6;
            values[valuesById[7] = "XXKEM_2"] = 7;
            values[valuesById[8] = "IKKEM_2"] = 8;
            return values;
        })();

        HandshakeMessage.ServerHello = (function() {

            /**
             * Properties of a ServerHello.
             * @typedef {Object} Wa6.HandshakeMessage.ServerHello.$Properties
             * @property {Uint8Array|null} [ephemeral] ServerHello ephemeral
             * @property {Uint8Array|null} ["static"] ServerHello static
             * @property {Uint8Array|null} [payload] ServerHello payload
             * @property {Uint8Array|null} [extendedStatic] ServerHello extendedStatic
             * @property {Uint8Array|null} [paddingBytes] ServerHello paddingBytes
             * @property {Uint8Array|null} [extendedCiphertext] ServerHello extendedCiphertext
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */

            /**
             * Properties of a ServerHello.
             * @memberof Wa6.HandshakeMessage
             * @interface IServerHello
             * @augments Wa6.HandshakeMessage.ServerHello.$Properties
             * @deprecated Use Wa6.HandshakeMessage.ServerHello.$Properties instead.
             */

            /**
             * Shape of a ServerHello.
             * @typedef {Wa6.HandshakeMessage.ServerHello.$Properties} Wa6.HandshakeMessage.ServerHello.$Shape
             */

            /**
             * Constructs a new ServerHello.
             * @memberof Wa6.HandshakeMessage
             * @classdesc Represents a ServerHello.
             * @constructor
             * @param {Wa6.HandshakeMessage.ServerHello.$Properties=} [properties] Properties to set
             * @property {Array.<Uint8Array>} [$unknowns] Unknown fields preserved while decoding when enabled
             */
            var ServerHello = function (properties) {
                if (properties)
                    for (var keys = $Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null && keys[i] !== "__proto__")
                            this[keys[i]] = properties[keys[i]];
            };

            /**
             * ServerHello ephemeral.
             * @member {Uint8Array|null|undefined} ephemeral
             * @memberof Wa6.HandshakeMessage.ServerHello
             * @instance
             */
            ServerHello.prototype.ephemeral = null;

            /**
             * ServerHello static.
             * @member {Uint8Array|null|undefined} static
             * @memberof Wa6.HandshakeMessage.ServerHello
             * @instance
             */
            ServerHello.prototype["static"] = null;

            /**
             * ServerHello payload.
             * @member {Uint8Array|null|undefined} payload
             * @memberof Wa6.HandshakeMessage.ServerHello
             * @instance
             */
            ServerHello.prototype.payload = null;

            /**
             * ServerHello extendedStatic.
             * @member {Uint8Array|null|undefined} extendedStatic
             * @memberof Wa6.HandshakeMessage.ServerHello
             * @instance
             */
            ServerHello.prototype.extendedStatic = null;

            /**
             * ServerHello paddingBytes.
             * @member {Uint8Array|null|undefined} paddingBytes
             * @memberof Wa6.HandshakeMessage.ServerHello
             * @instance
             */
            ServerHello.prototype.paddingBytes = null;

            /**
             * ServerHello extendedCiphertext.
             * @member {Uint8Array|null|undefined} extendedCiphertext
             * @memberof Wa6.HandshakeMessage.ServerHello
             * @instance
             */
            ServerHello.prototype.extendedCiphertext = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ServerHello.prototype, "_ephemeral", {
                get: $util.oneOfGetter($oneOfFields = ["ephemeral"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ServerHello.prototype, "_static", {
                get: $util.oneOfGetter($oneOfFields = ["static"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ServerHello.prototype, "_payload", {
                get: $util.oneOfGetter($oneOfFields = ["payload"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ServerHello.prototype, "_extendedStatic", {
                get: $util.oneOfGetter($oneOfFields = ["extendedStatic"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ServerHello.prototype, "_paddingBytes", {
                get: $util.oneOfGetter($oneOfFields = ["paddingBytes"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            $Object.defineProperty(ServerHello.prototype, "_extendedCiphertext", {
                get: $util.oneOfGetter($oneOfFields = ["extendedCiphertext"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new ServerHello instance using the specified properties.
             * @function create
             * @memberof Wa6.HandshakeMessage.ServerHello
             * @static
             * @param {Wa6.HandshakeMessage.ServerHello.$Properties=} [properties] Properties to set
             * @returns {Wa6.HandshakeMessage.ServerHello} ServerHello instance
             * @type {{
             *   (properties: Wa6.HandshakeMessage.ServerHello.$Shape): Wa6.HandshakeMessage.ServerHello & Wa6.HandshakeMessage.ServerHello.$Shape;
             *   (properties?: Wa6.HandshakeMessage.ServerHello.$Properties): Wa6.HandshakeMessage.ServerHello;
             * }}
             */
            ServerHello.create = function(properties) {
                return new ServerHello(properties);
            };

            /**
             * Encodes the specified ServerHello message. Does not implicitly {@link Wa6.HandshakeMessage.ServerHello.verify|verify} messages.
             * @function encode
             * @memberof Wa6.HandshakeMessage.ServerHello
             * @static
             * @param {Wa6.HandshakeMessage.ServerHello.$Properties} message ServerHello message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServerHello.encode = function (message, writer, _depth) {
                if (!writer)
                    writer = $Writer.create();
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                if (message.ephemeral != null && $Object.hasOwnProperty.call(message, "ephemeral"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.ephemeral);
                if (message["static"] != null && $Object.hasOwnProperty.call(message, "static"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message["static"]);
                if (message.payload != null && $Object.hasOwnProperty.call(message, "payload"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.payload);
                if (message.extendedStatic != null && $Object.hasOwnProperty.call(message, "extendedStatic"))
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.extendedStatic);
                if (message.paddingBytes != null && $Object.hasOwnProperty.call(message, "paddingBytes"))
                    writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.paddingBytes);
                if (message.extendedCiphertext != null && $Object.hasOwnProperty.call(message, "extendedCiphertext"))
                    writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.extendedCiphertext);
                if (message.$unknowns != null && $Object.hasOwnProperty.call(message, "$unknowns"))
                    for (var i = 0; i < message.$unknowns.length; ++i)
                        writer.raw(message.$unknowns[i]);
                return writer;
            };

            /**
             * Encodes the specified ServerHello message, length delimited. Does not implicitly {@link Wa6.HandshakeMessage.ServerHello.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Wa6.HandshakeMessage.ServerHello
             * @static
             * @param {Wa6.HandshakeMessage.ServerHello.$Properties} message ServerHello message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServerHello.encodeDelimited = function(message, writer) {
                return this.encode(message, (writer || $Writer.create()).fork()).ldelim();
            };

            /**
             * Decodes a ServerHello message from the specified reader or buffer.
             * @function decode
             * @memberof Wa6.HandshakeMessage.ServerHello
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Wa6.HandshakeMessage.ServerHello & Wa6.HandshakeMessage.ServerHello.$Shape} ServerHello
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServerHello.decode = function (reader, length, _end, _depth, _target) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $Reader.recursionLimit)
                    throw $Error("max depth exceeded");
                var end = length === $undefined ? reader.len : reader.pos + length, message = _target || new $root.Wa6.HandshakeMessage.ServerHello();
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
                            message.ephemeral = reader.bytes();
                            message._ephemeral = "ephemeral";
                            continue;
                        }
                    case 2: {
                            if (wireType !== 2)
                                break;
                            message["static"] = reader.bytes();
                            message._static = "static";
                            continue;
                        }
                    case 3: {
                            if (wireType !== 2)
                                break;
                            message.payload = reader.bytes();
                            message._payload = "payload";
                            continue;
                        }
                    case 4: {
                            if (wireType !== 2)
                                break;
                            message.extendedStatic = reader.bytes();
                            message._extendedStatic = "extendedStatic";
                            continue;
                        }
                    case 5: {
                            if (wireType !== 2)
                                break;
                            message.paddingBytes = reader.bytes();
                            message._paddingBytes = "paddingBytes";
                            continue;
                        }
                    case 6: {
                            if (wireType !== 2)
                                break;
                            message.extendedCiphertext = reader.bytes();
                            message._extendedCiphertext = "extendedCiphertext";
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
             * Decodes a ServerHello message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Wa6.HandshakeMessage.ServerHello
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Wa6.HandshakeMessage.ServerHello & Wa6.HandshakeMessage.ServerHello.$Shape} ServerHello
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServerHello.decodeDelimited = function(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ServerHello message.
             * @function verify
             * @memberof Wa6.HandshakeMessage.ServerHello
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ServerHello.verify = function (message, _depth) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    return "max depth exceeded";
                var properties = {};
                if (message.ephemeral != null && $Object.hasOwnProperty.call(message, "ephemeral")) {
                    properties._ephemeral = 1;
                    if (!(message.ephemeral && typeof message.ephemeral.length === "number" || $util.isString(message.ephemeral)))
                        return "ephemeral: buffer expected";
                }
                if (message["static"] != null && $Object.hasOwnProperty.call(message, "static")) {
                    properties._static = 1;
                    if (!(message["static"] && typeof message["static"].length === "number" || $util.isString(message["static"])))
                        return "static: buffer expected";
                }
                if (message.payload != null && $Object.hasOwnProperty.call(message, "payload")) {
                    properties._payload = 1;
                    if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                        return "payload: buffer expected";
                }
                if (message.extendedStatic != null && $Object.hasOwnProperty.call(message, "extendedStatic")) {
                    properties._extendedStatic = 1;
                    if (!(message.extendedStatic && typeof message.extendedStatic.length === "number" || $util.isString(message.extendedStatic)))
                        return "extendedStatic: buffer expected";
                }
                if (message.paddingBytes != null && $Object.hasOwnProperty.call(message, "paddingBytes")) {
                    properties._paddingBytes = 1;
                    if (!(message.paddingBytes && typeof message.paddingBytes.length === "number" || $util.isString(message.paddingBytes)))
                        return "paddingBytes: buffer expected";
                }
                if (message.extendedCiphertext != null && $Object.hasOwnProperty.call(message, "extendedCiphertext")) {
                    properties._extendedCiphertext = 1;
                    if (!(message.extendedCiphertext && typeof message.extendedCiphertext.length === "number" || $util.isString(message.extendedCiphertext)))
                        return "extendedCiphertext: buffer expected";
                }
                return null;
            };

            /**
             * Creates a ServerHello message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Wa6.HandshakeMessage.ServerHello
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Wa6.HandshakeMessage.ServerHello} ServerHello
             */
            ServerHello.fromObject = function (object, _depth) {
                if (object instanceof $root.Wa6.HandshakeMessage.ServerHello)
                    return object;
                if (!$util.isObject(object))
                    throw $TypeError(".Wa6.HandshakeMessage.ServerHello: object expected");
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var message = new $root.Wa6.HandshakeMessage.ServerHello();
                if (object.ephemeral != null)
                    if (typeof object.ephemeral === "string")
                        $util.base64.decode(object.ephemeral, message.ephemeral = $util.newBuffer($util.base64.length(object.ephemeral)), 0);
                    else if (object.ephemeral.length >= 0)
                        message.ephemeral = object.ephemeral;
                if (object["static"] != null)
                    if (typeof object["static"] === "string")
                        $util.base64.decode(object["static"], message["static"] = $util.newBuffer($util.base64.length(object["static"])), 0);
                    else if (object["static"].length >= 0)
                        message["static"] = object["static"];
                if (object.payload != null)
                    if (typeof object.payload === "string")
                        $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                    else if (object.payload.length >= 0)
                        message.payload = object.payload;
                if (object.extendedStatic != null)
                    if (typeof object.extendedStatic === "string")
                        $util.base64.decode(object.extendedStatic, message.extendedStatic = $util.newBuffer($util.base64.length(object.extendedStatic)), 0);
                    else if (object.extendedStatic.length >= 0)
                        message.extendedStatic = object.extendedStatic;
                if (object.paddingBytes != null)
                    if (typeof object.paddingBytes === "string")
                        $util.base64.decode(object.paddingBytes, message.paddingBytes = $util.newBuffer($util.base64.length(object.paddingBytes)), 0);
                    else if (object.paddingBytes.length >= 0)
                        message.paddingBytes = object.paddingBytes;
                if (object.extendedCiphertext != null)
                    if (typeof object.extendedCiphertext === "string")
                        $util.base64.decode(object.extendedCiphertext, message.extendedCiphertext = $util.newBuffer($util.base64.length(object.extendedCiphertext)), 0);
                    else if (object.extendedCiphertext.length >= 0)
                        message.extendedCiphertext = object.extendedCiphertext;
                return message;
            };

            /**
             * Creates a plain object from a ServerHello message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Wa6.HandshakeMessage.ServerHello
             * @static
             * @param {Wa6.HandshakeMessage.ServerHello} message ServerHello
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServerHello.toObject = function (message, options, _depth) {
                if (!options)
                    options = {};
                if (_depth === $undefined)
                    _depth = 0;
                if (_depth > $util.recursionLimit)
                    throw $Error("max depth exceeded");
                var object = {};
                if (message.ephemeral != null && $Object.hasOwnProperty.call(message, "ephemeral"))
                    object.ephemeral = options.bytes === $String ? $util.base64.encode(message.ephemeral, 0, message.ephemeral.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.ephemeral) : message.ephemeral;
                if (message["static"] != null && $Object.hasOwnProperty.call(message, "static"))
                    object["static"] = options.bytes === $String ? $util.base64.encode(message["static"], 0, message["static"].length) : options.bytes === $Array ? $Array.prototype.slice.call(message["static"]) : message["static"];
                if (message.payload != null && $Object.hasOwnProperty.call(message, "payload"))
                    object.payload = options.bytes === $String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.payload) : message.payload;
                if (message.extendedStatic != null && $Object.hasOwnProperty.call(message, "extendedStatic"))
                    object.extendedStatic = options.bytes === $String ? $util.base64.encode(message.extendedStatic, 0, message.extendedStatic.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.extendedStatic) : message.extendedStatic;
                if (message.paddingBytes != null && $Object.hasOwnProperty.call(message, "paddingBytes"))
                    object.paddingBytes = options.bytes === $String ? $util.base64.encode(message.paddingBytes, 0, message.paddingBytes.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.paddingBytes) : message.paddingBytes;
                if (message.extendedCiphertext != null && $Object.hasOwnProperty.call(message, "extendedCiphertext"))
                    object.extendedCiphertext = options.bytes === $String ? $util.base64.encode(message.extendedCiphertext, 0, message.extendedCiphertext.length) : options.bytes === $Array ? $Array.prototype.slice.call(message.extendedCiphertext) : message.extendedCiphertext;
                return object;
            };

            /**
             * Converts this ServerHello to JSON.
             * @function toJSON
             * @memberof Wa6.HandshakeMessage.ServerHello
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServerHello.prototype.toJSON = function() {
                return ServerHello.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the type url for ServerHello
             * @function getTypeUrl
             * @memberof Wa6.HandshakeMessage.ServerHello
             * @static
             * @param {string} [prefix] Custom type url prefix, defaults to `"type.googleapis.com"`
             * @returns {string} The type url
             */
            ServerHello.getTypeUrl = function(prefix) {
                if (prefix === $undefined)
                    prefix = "type.googleapis.com";
                return prefix + "/Wa6.HandshakeMessage.ServerHello";
            };

            return ServerHello;
        })();

        return HandshakeMessage;
    })();

    return Wa6;
})();

module.exports = $root;
