export const SUPPORTED_LOCALES = Object.freeze([
  "en-US",
  "zh-Hans",
  "yue-Hant-HK",
  "ko",
  "ja",
  "es-ES",
]);

export const MESSAGES = Object.freeze({
  "en-US": {
    "common.brand": "EV Command",
    "common.skip": "Skip to main content",
    "common.language": "Language",
    "common.primaryNavigation": "Primary navigation",
    "nav.home": "Home",
    "nav.product": "Product",
    "nav.privacy": "Privacy",
    "nav.support": "Support",
    "nav.terms": "Terms",

    "index.title": "EV Command",
    "index.description":
      "EV Command is a multilingual, read-only Tesla vehicle monitor with on-device snapshot history and CSV export.",
    "index.eyebrow": "Read-only vehicle monitoring",
    "index.heading": "EV Command",
    "index.intro":
      "EV Command is a multilingual, read-only Tesla vehicle monitor with on-device snapshot history and CSV export.",

    "marketing.title": "EV Command Product Overview",
    "marketing.description":
      "A multilingual, read-only EV companion with optional Tesla Fleet API monitoring and a clearly separated demo mode.",
    "marketing.eyebrow": "Product overview",
    "marketing.heading": "EV Command",
    "marketing.intro":
      "A multilingual, read-only EV companion with optional Tesla Fleet API monitoring and a clearly separated demo mode.",
    "marketing.feature1":
      "View supported Tesla battery, range, charging, lock, odometer and temperature fields.",
    "marketing.feature2":
      "Distinguish live, cached, stale, unavailable and demo data at a glance.",
    "marketing.feature3":
      "Create, access, sign out and delete an EV Command account with Sign in with Apple.",
    "marketing.feature4":
      "Keep vehicle access read-only; this release does not send remote commands.",
    "marketing.feature5":
      "Disconnect local Tesla data or open Tesla's consent page to revoke authorization.",
    "marketing.feature6":
      "Use EV Command Pro to keep up to 180 coordinate-free, account-isolated vehicle snapshots on the device and export real or clearly labeled sample history as CSV.",
    "marketing.feature7":
      "Switch between English, Simplified Chinese, Cantonese, Korean, Japanese and Spanish.",

    "privacy.title": "EV Command Privacy Policy",
    "privacy.description":
      "EV Command helps electric vehicle owners view vehicle status and related owner information. This policy explains the account, vehicle and purchase data used by the current version.",
    "privacy.eyebrow": "Legal information",
    "privacy.heading": "EV Command Privacy Policy",
    "privacy.updated": "Last updated: July 14, 2026",
    "privacy.intro":
      "EV Command helps electric vehicle owners view vehicle status and related owner information. This policy explains the account, vehicle and purchase data used by the current version.",
    "privacy.collect.heading": "Information We Collect",
    "privacy.collect.p1":
      "When you use Sign in with Apple, we receive a pseudonymous Apple account identifier and, if Apple provides them, your email address and display name. We store a one-way keyed representation of the Apple identifier, account details, hashed session credentials, an encrypted Apple refresh token and security timestamps.",
    "privacy.collect.p2":
      "If you choose to connect Tesla, we store encrypted OAuth credentials and the granted scopes. We process the latest available vehicle identifier, VIN, display name, online state, battery level, estimated range, charging state, charge limit, lock state, odometer and cabin or outside temperature. EV Command does not request Tesla's vehicle-location scope, and the server discards latitude and longitude.",
    "privacy.use.heading": "How We Use Information",
    "privacy.use.p1":
      "We use this information only to authenticate your account, maintain the optional Tesla connection, display requested vehicle information, prevent replay or abuse, provide support and operate app functionality. We do not sell personal information, use it for advertising or track you across other companies' apps or websites.",
    "privacy.vehicle.heading": "Vehicle Data",
    "privacy.vehicle.p1":
      "EV Command is not affiliated with Tesla, Inc. Tesla connection is optional and uses Tesla's authorization screen. The current release requests read-only account and vehicle-data scopes and does not implement vehicle commands. Successful vehicle lists and snapshots may be cached to preserve clear availability status: data up to 15 minutes old is labeled cached, data over 15 minutes and up to 6 hours old is labeled stale, and older data is not returned. An hourly server maintenance task removes vehicle cache records after that 6-hour window.",
    "privacy.vehicle.p2":
      "Disconnecting Tesla removes the stored Tesla credentials, pending authorization state and cached vehicle lists and snapshots from EV Command. The app provides a separate Manage Tesla consent action that opens Tesla's consent-management page so you can modify scopes or revoke Tesla's authorization.",
    "privacy.storage.heading": "Storage and Security",
    "privacy.storage.p1":
      "The app stores its opaque session token in the iOS Keychain. The server stores only a hash of that token. Apple and Tesla refresh tokens are encrypted with authenticated encryption on the server. No method of storage is completely secure, but we limit retained fields and do not log raw tokens, Apple identifiers, email addresses, names or upstream response bodies.",
    "privacy.storage.p2":
      "If EV Command Pro is active, the app can retain up to 180 requested vehicle snapshots in protected Application Support storage on the device. History is separated by a one-way hash of the random EV Command account ID; the account ID is not used as a plaintext filename. Each history file uses complete iOS file protection and is excluded from device backups. This history includes the vehicle identifier, VIN, timestamps, source and freshness labels, vehicle state, battery level, estimated range, charging state, charge limit, lock state, odometer and cabin or outside temperature. It does not include latitude or longitude. Signing out or losing authorization clears applicable local history. Disconnecting Tesla and deleting the account clear applicable local history after the server confirms the remote action, so a failed remote request does not destroy history.",
    "privacy.purchases.heading": "Purchases",
    "privacy.purchases.p1":
      "EV Command Pro Lifetime is a one-time, non-consumable purchase processed by Apple. Apple provides verified entitlement status so the app can unlock paid features. EV Command does not receive your full payment-card details.",
    "privacy.deletion.heading": "Account Deletion",
    "privacy.deletion.p1":
      "You can permanently delete your EV Command account from Account > Delete account in the app. Before deletion, the app requires a fresh Sign in with Apple confirmation, verifies that the fresh identity token identifies the signed-in account, and records a deletion-protection tombstone plus an authenticated operation result. It then attempts to exchange the authorization code and revoke the returned refresh token before removing the account, sessions, Apple assertion fingerprints, encrypted Apple refresh token, pending Tesla authorization states, Tesla credentials and cached vehicle data. Once the tombstone is recorded, every request for the deleted internal account is rejected even if physical database cleanup is interrupted; startup, sign-in and hourly maintenance reconcile any remaining rows. A rejected or stale confirmation does not sign you out. The app retains a random, status-only deletion-operation credential in the iOS Keychain until the server result and local cleanup are confirmed; it does not authorize account access. If the response is interrupted, the app queries that result before deciding whether to clear local history. If Apple token exchange or revocation cannot be confirmed, EV Command still deletes the account and local history, then stores a persistent on-device reminder that links to Apple's official instructions for manually stopping use of Sign in with Apple. Deleting an EV Command account does not cancel or erase purchases managed by Apple.",
    "privacy.deletion.p2":
      "To prevent an older database backup from recreating a deleted account, a separate deletion-protection ledger retains a SHA-256 hash of the random internal EV Command user ID and deletion timestamp. For 24 hours after a deletion attempt, it also retains a random operation ID, hashed operation secret, hashed internal user ID, status, optional random receipt and timestamps; hourly maintenance removes that operation record after the status window expires. These records contain no Apple identifier, email, name, Tesla account identifier, VIN, vehicle data, session or provider token and cannot be used to restore or access the account.",
    "privacy.deletion.p3":
      "To authenticate and deduplicate Sign in with Apple server notifications, EV Command stores a SHA-256 hash of the notification ID, the event type, event time, receipt time and processing state. It does not store the notification payload or Apple account identifier in this record. Hourly maintenance removes completed records after seven days.",
    "privacy.demo.heading": "Demo Mode",
    "privacy.demo.p1":
      "You can explore an explicitly labeled demo mode without connecting Tesla. Demo values are sample fixtures and are not associated with your vehicle.",
    "privacy.contact.heading": "Contact",
    "privacy.contact.beforeEmail":
      "For privacy questions or a deletion issue, email ",
    "privacy.contact.between": " or use the ",
    "privacy.contact.link": "EV Command support page",
    "privacy.contact.after": ".",

    "support.title": "EV Command Support",
    "support.description":
      "Support information for EV Command accounts, Tesla connection, languages, purchases, vehicle data and privacy.",
    "support.eyebrow": "Help and support",
    "support.heading": "EV Command Support",
    "support.intro.beforeEmail": "Need help with EV Command? Email ",
    "support.intro.after": ".",
    "support.topics.heading": "Common Topics",
    "support.account.label": "Account",
    "support.account.text":
      "Use Sign in with Apple to create or access an EV Command account. You can sign out or permanently delete the account from Account. Deletion requires a fresh Apple confirmation, records durable deletion protection, and then attempts to revoke the resulting Apple credential before removing the EV Command cloud account and associated data. A rejected confirmation does not sign you out. If the response is interrupted, the app uses a status-only operation credential in the iOS Keychain to confirm the server result before clearing local history. If Apple revocation cannot be confirmed, account deletion still completes and the app keeps a persistent on-device link to Apple's official manual revocation instructions.",
    "support.account.appleLink":
      "Manage Sign in with Apple on Apple's support site",
    "support.tesla.label": "Tesla connection",
    "support.tesla.text":
      "Sign in to EV Command first, then authorize optional read-only Fleet API access from Settings. Disconnect removes EV Command's stored Tesla credentials and cached vehicle data. Manage Tesla consent opens Tesla's own consent page, where you can modify scopes or revoke Tesla's authorization.",
    "support.language.label": "Language",
    "support.language.text":
      "Choose English, Simplified Chinese, Cantonese, Korean, Japanese or Spanish from Settings.",
    "support.purchases.label": "Purchases",
    "support.purchases.text":
      "Use the Membership screen to buy or restore the one-time EV Command Pro Lifetime unlock through Apple In-App Purchase. Pro retains up to 180 coordinate-free vehicle snapshots in protected, backup-excluded, account-isolated storage on the device and enables CSV export. The labeled sample history can be exported after Pro is active without connecting Tesla. Deleting an EV Command account does not remove Apple-managed purchases.",
    "support.vehicle.label": "Vehicle data",
    "support.vehicle.text":
      "Live, cached, stale, unavailable and demo states are labeled separately. Cached data is no more than 15 minutes old; stale data is over 15 minutes and no more than 6 hours old. Older data is not returned and is removed by hourly server maintenance. Demo data does not require a Tesla account and never represents your vehicle.",
    "support.privacy.label": "Privacy",
    "support.privacy.beforeLink": "Review the ",
    "support.privacy.link": "Privacy Policy",
    "support.privacy.afterLink":
      " for collected fields, security and deletion details.",

    "terms.title": "EV Command Terms of Use",
    "terms.description":
      "Terms governing EV Command's optional read-only vehicle monitoring, demo information and owner tools.",
    "terms.eyebrow": "Legal information",
    "terms.heading": "EV Command Terms of Use",
    "terms.updated": "Last updated: July 14, 2026",
    "terms.intro":
      "EV Command provides optional read-only vehicle monitoring, clearly labeled demo information and owner tools for informational use. EV Command is not affiliated with Tesla, Inc. or any vehicle manufacturer.",
    "terms.use.heading": "Use of the App",
    "terms.use.p1":
      "Do not rely on EV Command as the sole source for driving, charging, safety, service or emergency decisions. Always follow your vehicle's official displays, manuals and service guidance.",
    "terms.accounts.heading": "Accounts and Vehicle Connection",
    "terms.accounts.p1":
      "An EV Command account uses Sign in with Apple. Connecting Tesla is optional and requires your consent on Tesla's authorization screen. The current release requests read-only data access and does not send vehicle commands. You are responsible for protecting access to your device and accounts.",
    "terms.accuracy.heading": "Data Accuracy and Availability",
    "terms.accuracy.p1":
      "Live, cached and stale states are labeled in the app. Cached data is no more than 15 minutes old; stale data is over 15 minutes and no more than 6 hours old. Older data is not returned and is removed by hourly server maintenance. Vehicle data may be delayed, unavailable or incomplete because of vehicle sleep, network conditions, regional API availability or third-party services. Demo values are sample fixtures and do not describe your vehicle.",
    "terms.paid.heading": "Paid Features",
    "terms.paid.p1":
      "EV Command Pro Lifetime is a one-time non-consumable purchase through Apple In-App Purchase and does not auto-renew. It unlocks up to 180 coordinate-free vehicle snapshots stored in protected, backup-excluded storage on the device and CSV export. Any observed 100% range is an extrapolation of the latest displayed range, not a battery-capacity or SOH diagnosis. Apple manages payment, restoration and refund eligibility.",
    "terms.deletion.heading": "Account Deletion",
    "terms.deletion.p1":
      "You can delete your EV Command cloud account from Account > Delete account. The app requires a fresh Sign in with Apple confirmation, records durable deletion protection, and then attempts to revoke the resulting Apple credential before removing the account and connected-vehicle records. A rejected confirmation does not sign you out. If the response is interrupted, the app verifies the authenticated deletion-operation result before clearing local history. If Apple revocation cannot be confirmed, account deletion still completes and the app keeps a persistent on-device link to Apple's official manual revocation instructions. Separate pseudonymous deletion-protection records prevent an old backup from recreating a successfully deleted account. Deletion does not cancel or delete purchases managed by Apple.",
    "terms.contact.heading": "Contact",
    "terms.contact.beforeEmail": "For support, email ",
    "terms.contact.after": ".",
  },

  "zh-Hans": {
    "common.brand": "EV Command",
    "common.skip": "跳到主要内容",
    "common.language": "语言",
    "common.primaryNavigation": "主导航",
    "nav.home": "首页",
    "nav.product": "产品",
    "nav.privacy": "隐私",
    "nav.support": "支持",
    "nav.terms": "条款",

    "index.title": "EV Command",
    "index.description":
      "EV Command 是一款多语言、只读的 Tesla 车况监控应用，支持本机快照历史与 CSV 导出。",
    "index.eyebrow": "只读车辆监控",
    "index.heading": "EV Command",
    "index.intro":
      "EV Command 是一款多语言、只读的 Tesla 车况监控应用，支持本机快照历史与 CSV 导出。",

    "marketing.title": "EV Command 产品概览",
    "marketing.description":
      "一款多语言、只读的电动车车主工具，支持可选的 Tesla Fleet API 监控，并提供明确区分的演示模式。",
    "marketing.eyebrow": "产品概览",
    "marketing.heading": "EV Command",
    "marketing.intro":
      "一款多语言、只读的电动车车主工具，支持可选的 Tesla Fleet API 监控，并提供明确区分的演示模式。",
    "marketing.feature1":
      "查看 Tesla 支持的电量、续航、充电、车锁、里程和温度字段。",
    "marketing.feature2":
      "一目了然地区分实时、缓存、过期、不可用和演示数据。",
    "marketing.feature3":
      "通过 Apple 登录创建、访问、退出和删除 EV Command 账户。",
    "marketing.feature4":
      "车辆访问保持只读；此版本不会发送远程指令。",
    "marketing.feature5":
      "断开 EV Command 中的 Tesla 数据连接，或打开 Tesla 的同意管理页面撤销授权。",
    "marketing.feature6":
      "使用 EV Command Pro 在本机保存最多 180 条不含坐标、按账户隔离的车辆快照，并将真实历史或明确标示的样例历史导出为 CSV。",
    "marketing.feature7":
      "可在英语、简体中文、粤语、韩语、日语和西班牙语之间切换。",

    "privacy.title": "EV Command 隐私政策",
    "privacy.description":
      "EV Command 帮助电动车车主查看车辆状态和相关车主信息。本政策说明当前版本使用的账户、车辆和购买数据。",
    "privacy.eyebrow": "法律信息",
    "privacy.heading": "EV Command 隐私政策",
    "privacy.updated": "最后更新：2026年7月14日",
    "privacy.intro":
      "EV Command 帮助电动车车主查看车辆状态和相关车主信息。本政策说明当前版本使用的账户、车辆和购买数据。",
    "privacy.collect.heading": "我们收集的信息",
    "privacy.collect.p1":
      "当您使用“通过 Apple 登录”时，我们会收到一个 Apple 账户假名标识符，以及 Apple 在提供时给出的电子邮件地址和显示名称。我们会存储该 Apple 标识符的单向密钥化表示、账户详情、经过哈希处理的会话凭据、加密的 Apple 刷新令牌和安全时间戳。",
    "privacy.collect.p2":
      "如果您选择连接 Tesla，我们会存储加密的 OAuth 凭据和已授予的权限范围。我们处理最新可用的车辆标识符、VIN、显示名称、在线状态、电量、预计续航、充电状态、充电上限、车锁状态、里程表数值以及车内或车外温度。EV Command 不请求 Tesla 的车辆位置权限范围，服务器会丢弃经纬度。",
    "privacy.use.heading": "我们如何使用信息",
    "privacy.use.p1":
      "我们仅将这些信息用于验证账户、维持可选的 Tesla 连接、显示所请求的车辆信息、防止重放或滥用、提供支持以及运行 App 功能。我们不会出售个人信息，不会将其用于广告，也不会跨其他公司的 App 或网站跟踪您。",
    "privacy.vehicle.heading": "车辆数据",
    "privacy.vehicle.p1":
      "EV Command 与 Tesla, Inc. 无关联。Tesla 连接为可选功能，并使用 Tesla 的授权页面。当前版本请求只读的账户和车辆数据权限范围，不实现车辆指令。为清楚显示可用状态，成功获取的车辆列表和快照可能会被缓存：不超过 15 分钟的数据标示为“缓存”，超过 15 分钟且不超过 6 小时的数据标示为“过期”，更早的数据不会返回。服务器每小时执行维护任务，在 6 小时窗口结束后删除车辆缓存记录。",
    "privacy.vehicle.p2":
      "断开 Tesla 连接会从 EV Command 中删除已存储的 Tesla 凭据、待处理的授权状态，以及缓存的车辆列表和快照。App 另设“管理 Tesla 同意”操作，用于打开 Tesla 的同意管理页面，以便您修改权限范围或撤销 Tesla 授权。",
    "privacy.storage.heading": "存储与安全",
    "privacy.storage.p1":
      "App 将不透明会话令牌存储在 iOS 钥匙串中。服务器只存储该令牌的哈希值。Apple 和 Tesla 刷新令牌在服务器上使用认证加密进行加密。任何存储方式都无法保证绝对安全，但我们会限制保留的字段，并且不会记录原始令牌、Apple 标识符、电子邮件地址、姓名或上游响应正文。",
    "privacy.storage.p2":
      "启用 EV Command Pro 后，App 可在设备上受保护的“应用支持”存储中保留最多 180 条按请求获取的车辆快照。历史记录通过随机 EV Command 账户 ID 的单向哈希进行隔离；账户 ID 不会用作明文文件名。每个历史文件均使用完整的 iOS 文件保护，并排除在设备备份之外。历史记录包括车辆标识符、VIN、时间戳、来源和新鲜度标签、车辆状态、电量、预计续航、充电状态、充电上限、车锁状态、里程表数值以及车内或车外温度，不包括经纬度。退出登录或失去授权会清除相应的本地历史记录。断开 Tesla 连接和删除账户时，App 会在服务器确认远程操作后清除相应的本地历史记录，因此失败的远程请求不会毁掉历史记录。",
    "privacy.purchases.heading": "购买",
    "privacy.purchases.p1":
      "EV Command Pro 终身版是由 Apple 处理的一次性非消耗型购买。Apple 提供经过验证的权益状态，以便 App 解锁付费功能。EV Command 不会收到您完整的支付卡信息。",
    "privacy.deletion.heading": "账户删除",
    "privacy.deletion.p1":
      "您可以在 App 的“账户 > 删除账户”中永久删除 EV Command 账户。删除前，App 会要求您重新完成“通过 Apple 登录”确认，验证新的身份令牌对应当前登录账户，并先记录删除保护墓碑和经认证的操作结果。随后，App 会尝试交换授权码及撤销返回的刷新令牌，再删除账户、会话、Apple 断言指纹、加密的 Apple 刷新令牌、待处理的 Tesla 授权状态、Tesla 凭据和缓存车辆数据。墓碑一经记录，即使物理数据库清理中断，针对已删除内部账户的请求也会被拒绝；启动、登录和每小时维护流程会核对并清理剩余行。被拒绝或已过期的确认不会使您退出登录。App 会在 iOS 钥匙串中保留一个随机、仅用于查询状态的删除操作凭据，直到服务器结果和本地清理均得到确认；该凭据不能授权访问账户。如果响应中断，App 会先查询结果，再决定是否清除本地历史记录。如果无法确认 Apple 令牌交换或撤销，EV Command 仍会删除账户和本地历史记录，并在设备上保存一条持久提醒，其中包含 Apple 官方说明链接，供您手动停止对本 App 使用“通过 Apple 登录”。删除 EV Command 账户不会取消或抹除由 Apple 管理的购买。",
    "privacy.deletion.p2":
      "为防止较早的数据库备份重新创建已删除账户，独立的删除保护账本会保留随机内部 EV Command 用户 ID 的 SHA-256 哈希值和删除时间戳。在尝试删除后的 24 小时内，该账本还会保留随机操作 ID、经过哈希处理的操作密钥、经过哈希处理的内部用户 ID、状态、可选的随机回执和时间戳；状态窗口结束后，每小时维护流程会删除该操作记录。这些记录不包含 Apple 标识符、电子邮件地址、姓名、Tesla 账户标识符、VIN、车辆数据、会话令牌或提供商令牌，也不能用于恢复或访问账户。",
    "privacy.deletion.p3":
      "为验证并防止重复处理“通过 Apple 登录”服务器通知，EV Command 会存储通知 ID 的 SHA-256 哈希值、事件类型、事件时间、接收时间和处理状态。该记录不存储通知正文或 Apple 账户标识符。每小时维护流程会在处理完成七天后删除这些记录。",
    "privacy.demo.heading": "演示模式",
    "privacy.demo.p1":
      "您无需连接 Tesla 即可体验明确标示的演示模式。演示数值是样例固定数据，与您的车辆无关。",
    "privacy.contact.heading": "联系我们",
    "privacy.contact.beforeEmail": "如有隐私问题或账户删除问题，请发送邮件至 ",
    "privacy.contact.between": "，或使用",
    "privacy.contact.link": "EV Command 支持页面",
    "privacy.contact.after": "。",

    "support.title": "EV Command 支持",
    "support.description":
      "EV Command 账户、Tesla 连接、语言、购买、车辆数据和隐私支持信息。",
    "support.eyebrow": "帮助与支持",
    "support.heading": "EV Command 支持",
    "support.intro.beforeEmail": "需要 EV Command 帮助？请发送邮件至 ",
    "support.intro.after": "。",
    "support.topics.heading": "常见主题",
    "support.account.label": "账户",
    "support.account.text":
      "使用“通过 Apple 登录”创建或访问 EV Command 账户。您可以从“账户”中退出登录或永久删除账户。删除需要新的 Apple 确认，会先记录持久删除保护，然后尝试撤销由此获得的 Apple 凭据，再删除 EV Command 云端账户及关联数据。被拒绝的确认不会使您退出登录。如果响应中断，App 会使用 iOS 钥匙串中仅用于查询状态的操作凭据，在清除本地历史记录前确认服务器结果。如果无法确认 Apple 撤销，账户删除仍会完成，App 会在设备上持续保留 Apple 官方手动撤销说明的链接。",
    "support.account.appleLink":
      "在 Apple 支持网站管理“通过 Apple 登录”",
    "support.tesla.label": "Tesla 连接",
    "support.tesla.text":
      "请先登录 EV Command，再从“设置”授权可选的只读 Fleet API 访问。断开连接会删除 EV Command 存储的 Tesla 凭据和缓存车辆数据。“管理 Tesla 同意”会打开 Tesla 自己的同意页面，您可以在其中修改权限范围或撤销 Tesla 授权。",
    "support.language.label": "语言",
    "support.language.text":
      "可在“设置”中选择英语、简体中文、粤语、韩语、日语或西班牙语。",
    "support.purchases.label": "购买",
    "support.purchases.text":
      "在“会员”页面通过 Apple App 内购买购买或恢复一次性的 EV Command Pro 终身版解锁。Pro 可在设备上受保护、排除备份且按账户隔离的存储中保留最多 180 条不含坐标的车辆快照，并支持 CSV 导出。Pro 生效后，即使未连接 Tesla，也可导出已标示的样例历史记录。删除 EV Command 账户不会移除由 Apple 管理的购买。",
    "support.vehicle.label": "车辆数据",
    "support.vehicle.text":
      "实时、缓存、过期、不可用和演示状态会分别标示。缓存数据不超过 15 分钟；过期数据超过 15 分钟但不超过 6 小时。更早的数据不会返回，并由服务器每小时维护流程删除。演示数据不需要 Tesla 账户，也绝不代表您的车辆。",
    "support.privacy.label": "隐私",
    "support.privacy.beforeLink": "请查看",
    "support.privacy.link": "隐私政策",
    "support.privacy.afterLink": "，了解收集字段、安全措施和删除详情。",

    "terms.title": "EV Command 使用条款",
    "terms.description":
      "适用于 EV Command 可选只读车辆监控、演示信息和车主工具的条款。",
    "terms.eyebrow": "法律信息",
    "terms.heading": "EV Command 使用条款",
    "terms.updated": "最后更新：2026年7月14日",
    "terms.intro":
      "EV Command 提供可选的只读车辆监控、明确标示的演示信息和仅供参考的车主工具。EV Command 与 Tesla, Inc. 或任何车辆制造商均无关联。",
    "terms.use.heading": "App 的使用",
    "terms.use.p1":
      "请勿将 EV Command 作为驾驶、充电、安全、维修或紧急决策的唯一信息来源。请始终遵循车辆官方显示、手册和维修指引。",
    "terms.accounts.heading": "账户与车辆连接",
    "terms.accounts.p1":
      "EV Command 账户使用“通过 Apple 登录”。连接 Tesla 为可选功能，并需要您在 Tesla 授权页面同意。当前版本请求只读数据访问，不会发送车辆指令。您有责任保护对自己设备和账户的访问。",
    "terms.accuracy.heading": "数据准确性与可用性",
    "terms.accuracy.p1":
      "App 会标示实时、缓存和过期状态。缓存数据不超过 15 分钟；过期数据超过 15 分钟但不超过 6 小时。更早的数据不会返回，并由服务器每小时维护流程删除。由于车辆休眠、网络状况、地区 API 可用性或第三方服务，车辆数据可能延迟、不可用或不完整。演示数值是样例固定数据，并不描述您的车辆。",
    "terms.paid.heading": "付费功能",
    "terms.paid.p1":
      "EV Command Pro 终身版是通过 Apple App 内购买完成的一次性非消耗型购买，不会自动续订。它可解锁在设备受保护且排除备份的存储中保存最多 180 条不含坐标的车辆快照，以及 CSV 导出功能。任何观察到的 100% 续航都是根据最新显示续航外推的结果，不是对电池容量或 SOH 的诊断。Apple 负责管理付款、恢复购买和退款资格。",
    "terms.deletion.heading": "账户删除",
    "terms.deletion.p1":
      "您可以从“账户 > 删除账户”删除 EV Command 云端账户。App 会要求重新完成“通过 Apple 登录”确认，先记录持久删除保护，然后尝试撤销由此获得的 Apple 凭据，再删除账户和已连接车辆记录。被拒绝的确认不会使您退出登录。如果响应中断，App 会先验证经认证的删除操作结果，再清除本地历史记录。如果无法确认 Apple 撤销，账户删除仍会完成，App 会在设备上持续保留 Apple 官方手动撤销说明的链接。独立的假名化删除保护记录可防止旧备份重新创建已成功删除的账户。删除账户不会取消或删除由 Apple 管理的购买。",
    "terms.contact.heading": "联系我们",
    "terms.contact.beforeEmail": "如需支持，请发送邮件至 ",
    "terms.contact.after": "。",
  },

  "yue-Hant-HK": {
    "common.brand": "EV Command",
    "common.skip": "跳去主要內容",
    "common.language": "語言",
    "common.primaryNavigation": "主要導覽",
    "nav.home": "主頁",
    "nav.product": "產品",
    "nav.privacy": "私隱",
    "nav.support": "支援",
    "nav.terms": "條款",

    "index.title": "EV Command",
    "index.description":
      "EV Command 係一款多語言、只讀嘅 Tesla 車況監控 App，支援本機快照記錄同 CSV 匯出。",
    "index.eyebrow": "只讀車輛監控",
    "index.heading": "EV Command",
    "index.intro":
      "EV Command 係一款多語言、只讀嘅 Tesla 車況監控 App，支援本機快照記錄同 CSV 匯出。",

    "marketing.title": "EV Command 產品概覽",
    "marketing.description":
      "一款多語言、只讀嘅電動車車主工具，支援可選嘅 Tesla Fleet API 監控，亦有清楚分開嘅示範模式。",
    "marketing.eyebrow": "產品概覽",
    "marketing.heading": "EV Command",
    "marketing.intro":
      "一款多語言、只讀嘅電動車車主工具，支援可選嘅 Tesla Fleet API 監控，亦有清楚分開嘅示範模式。",
    "marketing.feature1":
      "查看 Tesla 支援嘅電量、續航、充電、車鎖、里程同溫度欄位。",
    "marketing.feature2":
      "一眼分清即時、快取、過期、暫時不可用同示範資料。",
    "marketing.feature3":
      "用 Apple 登入建立、使用、登出同刪除 EV Command 帳戶。",
    "marketing.feature4":
      "車輛存取維持只讀；呢個版本唔會傳送遙距指令。",
    "marketing.feature5":
      "中斷 EV Command 入面嘅 Tesla 資料連接，或者開啟 Tesla 同意管理頁面撤銷授權。",
    "marketing.feature6":
      "用 EV Command Pro 喺本機保存最多 180 條不含座標、按帳戶分隔嘅車輛快照，並將真實記錄或者清楚標示嘅樣例記錄匯出做 CSV。",
    "marketing.feature7":
      "可以喺英文、簡體中文、廣東話、韓文、日文同西班牙文之間切換。",

    "privacy.title": "EV Command 私隱政策",
    "privacy.description":
      "EV Command 幫電動車車主查看車況同相關車主資料。呢份政策說明目前版本使用嘅帳戶、車輛同購買資料。",
    "privacy.eyebrow": "法律資料",
    "privacy.heading": "EV Command 私隱政策",
    "privacy.updated": "最後更新：2026年7月14日",
    "privacy.intro":
      "EV Command 幫電動車車主查看車況同相關車主資料。呢份政策說明目前版本使用嘅帳戶、車輛同購買資料。",
    "privacy.collect.heading": "我哋收集嘅資料",
    "privacy.collect.p1":
      "當你用 Apple 登入，我哋會收到一個假名化 Apple 帳戶識別碼，以及 Apple 有提供時交畀我哋嘅電郵地址同顯示名稱。我哋會儲存 Apple 識別碼嘅有密鑰單向表示、帳戶詳情、經雜湊處理嘅連線憑證、加密嘅 Apple 更新權杖同保安時間戳。",
    "privacy.collect.p2":
      "如果你選擇連接 Tesla，我哋會儲存加密嘅 OAuth 憑證同已授予嘅權限範圍。我哋會處理最新可用嘅車輛識別碼、VIN、顯示名稱、在線狀態、電量、預計續航、充電狀態、充電上限、車鎖狀態、里程錶數值，以及車廂內或者車外溫度。EV Command 唔會要求 Tesla 嘅車輛位置權限範圍，伺服器亦會棄置經緯度。",
    "privacy.use.heading": "我哋點樣使用資料",
    "privacy.use.p1":
      "我哋只會用呢啲資料驗證你嘅帳戶、維持可選嘅 Tesla 連接、顯示你要求嘅車輛資料、防止重放或者濫用、提供支援同運行 App 功能。我哋唔會出售個人資料、用嚟賣廣告，亦唔會跨其他公司嘅 App 或網站追蹤你。",
    "privacy.vehicle.heading": "車輛資料",
    "privacy.vehicle.p1":
      "EV Command 同 Tesla, Inc. 冇關聯。Tesla 連接係可選功能，並會使用 Tesla 嘅授權頁面。目前版本只會要求只讀帳戶同車輛資料權限範圍，唔會實作車輛指令。為咗清楚顯示可用狀態，成功取得嘅車輛清單同快照可能會被快取：不超過 15 分鐘嘅資料會標示為「快取」，超過 15 分鐘但不超過 6 小時嘅資料會標示為「過期」，再舊嘅資料唔會傳回。伺服器每小時執行維護工作，喺 6 小時期限後刪除車輛快取記錄。",
    "privacy.vehicle.p2":
      "中斷 Tesla 連接會由 EV Command 刪除已儲存嘅 Tesla 憑證、待處理授權狀態，同埋快取嘅車輛清單同快照。App 另有「管理 Tesla 同意」操作，會開啟 Tesla 嘅同意管理頁面，等你修改權限範圍或者撤銷 Tesla 授權。",
    "privacy.storage.heading": "儲存同保安",
    "privacy.storage.p1":
      "App 會將不透明連線權杖儲存喺 iOS 鑰匙圈。伺服器只會儲存呢個權杖嘅雜湊值。Apple 同 Tesla 更新權杖會喺伺服器用認證加密方式加密。冇任何儲存方法係絕對安全，但我哋會限制保留欄位，亦唔會記錄原始權杖、Apple 識別碼、電郵地址、姓名或者上游回應正文。",
    "privacy.storage.p2":
      "如果 EV Command Pro 已啟用，App 可以喺裝置受保護嘅 Application Support 儲存空間保留最多 180 條按要求取得嘅車輛快照。記錄會用隨機 EV Command 帳戶 ID 嘅單向雜湊值分隔；帳戶 ID 唔會用做純文字檔案名稱。每個記錄檔案都使用完整 iOS 檔案保護，並排除喺裝置備份之外。記錄包括車輛識別碼、VIN、時間戳、來源同新鮮度標籤、車輛狀態、電量、預計續航、充電狀態、充電上限、車鎖狀態、里程錶數值，以及車廂內或者車外溫度；唔包括經緯度。登出或者失去授權會清除適用嘅本機記錄。中斷 Tesla 連接同刪除帳戶時，App 會等伺服器確認遙距操作之後先清除適用嘅本機記錄，所以失敗嘅遙距要求唔會銷毀記錄。",
    "privacy.purchases.heading": "購買",
    "privacy.purchases.p1":
      "EV Command Pro 終身版係由 Apple 處理嘅一次性非消耗型購買。Apple 會提供已驗證嘅權益狀態，等 App 解鎖付費功能。EV Command 唔會收到你完整嘅付款卡資料。",
    "privacy.deletion.heading": "刪除帳戶",
    "privacy.deletion.p1":
      "你可以喺 App 嘅「帳戶 > 刪除帳戶」永久刪除 EV Command 帳戶。刪除之前，App 會要求你重新用 Apple 登入確認，驗證新身分權杖屬於目前登入帳戶，並先記錄刪除保護墓碑同經認證嘅操作結果。之後 App 會嘗試交換授權碼同撤銷傳回嘅更新權杖，再刪除帳戶、連線、Apple 斷言指紋、加密 Apple 更新權杖、待處理 Tesla 授權狀態、Tesla 憑證同快取車輛資料。墓碑一經記錄，就算實體資料庫清理中斷，已刪除內部帳戶嘅要求都會被拒絕；啟動、登入同每小時維護程序會核對同清理剩餘資料列。被拒絕或者過期嘅確認唔會令你登出。App 會喺 iOS 鑰匙圈保留隨機、只用嚟查詢狀態嘅刪除操作憑證，直至伺服器結果同本機清理都獲確認；呢個憑證唔可以授權存取帳戶。如果回應中斷，App 會先查詢結果，再決定係咪清除本機記錄。如果未能確認 Apple 權杖交換或者撤銷，EV Command 仍然會刪除帳戶同本機記錄，並喺裝置保存持久提示，當中有 Apple 官方指示連結，畀你手動停止 EV Command 使用「用 Apple 登入」。刪除 EV Command 帳戶唔會取消或者清除由 Apple 管理嘅購買。",
    "privacy.deletion.p2":
      "為咗防止較舊嘅資料庫備份重新建立已刪除帳戶，獨立嘅刪除保護帳本會保留隨機內部 EV Command 用戶 ID 嘅 SHA-256 雜湊值同刪除時間戳。嘗試刪除之後 24 小時內，帳本亦會保留隨機操作 ID、經雜湊處理嘅操作密鑰、經雜湊處理嘅內部用戶 ID、狀態、可選嘅隨機收據同時間戳；狀態時限過咗之後，每小時維護程序會刪除呢筆操作記錄。呢啲記錄唔包含 Apple 識別碼、電郵地址、姓名、Tesla 帳戶識別碼、VIN、車輛資料、連線權杖或者供應商權杖，亦唔可以用嚟還原或者存取帳戶。",
    "privacy.deletion.p3":
      "為咗驗證同避免重複處理「用 Apple 登入」伺服器通知，EV Command 會儲存通知 ID 嘅 SHA-256 雜湊值、事件類型、事件時間、接收時間同處理狀態。呢筆記錄唔會儲存通知正文或者 Apple 帳戶識別碼。每小時維護程序會喺處理完成七日後刪除呢啲記錄。",
    "privacy.demo.heading": "示範模式",
    "privacy.demo.p1":
      "你唔需要連接 Tesla 都可以試用有清楚標示嘅示範模式。示範數值係樣例固定資料，同你架車無關。",
    "privacy.contact.heading": "聯絡我哋",
    "privacy.contact.beforeEmail": "如果有私隱問題或者刪除帳戶問題，請電郵去 ",
    "privacy.contact.between": "，或者使用",
    "privacy.contact.link": "EV Command 支援頁面",
    "privacy.contact.after": "。",

    "support.title": "EV Command 支援",
    "support.description":
      "EV Command 帳戶、Tesla 連接、語言、購買、車輛資料同私隱支援資料。",
    "support.eyebrow": "協助同支援",
    "support.heading": "EV Command 支援",
    "support.intro.beforeEmail": "需要 EV Command 協助？請電郵去 ",
    "support.intro.after": "。",
    "support.topics.heading": "常見主題",
    "support.account.label": "帳戶",
    "support.account.text":
      "用 Apple 登入建立或者使用 EV Command 帳戶。你可以喺「帳戶」登出或者永久刪除帳戶。刪除需要新嘅 Apple 確認，會先記錄持久刪除保護，之後嘗試撤銷由此取得嘅 Apple 憑證，再刪除 EV Command 雲端帳戶同相關資料。被拒絕嘅確認唔會令你登出。如果回應中斷，App 會用 iOS 鑰匙圈入面只用嚟查詢狀態嘅操作憑證，喺清除本機記錄之前確認伺服器結果。如果未能確認 Apple 撤銷，帳戶刪除仍然會完成，App 會喺裝置持續保留 Apple 官方手動撤銷指示嘅連結。",
    "support.account.appleLink":
      "喺 Apple 支援網站管理「用 Apple 登入」",
    "support.tesla.label": "Tesla 連接",
    "support.tesla.text":
      "先登入 EV Command，再喺「設定」授權可選嘅只讀 Fleet API 存取。中斷連接會刪除 EV Command 儲存嘅 Tesla 憑證同快取車輛資料。「管理 Tesla 同意」會開啟 Tesla 自己嘅同意頁面，等你修改權限範圍或者撤銷 Tesla 授權。",
    "support.language.label": "語言",
    "support.language.text":
      "可以喺「設定」選擇英文、簡體中文、廣東話、韓文、日文或者西班牙文。",
    "support.purchases.label": "購買",
    "support.purchases.text":
      "喺「會籍」畫面透過 Apple App 內購買，購買或者恢復一次性 EV Command Pro 終身版解鎖。Pro 可以喺裝置受保護、排除備份同按帳戶分隔嘅儲存空間保留最多 180 條不含座標嘅車輛快照，並支援 CSV 匯出。Pro 生效之後，即使冇連接 Tesla，都可以匯出已標示嘅樣例記錄。刪除 EV Command 帳戶唔會移除由 Apple 管理嘅購買。",
    "support.vehicle.label": "車輛資料",
    "support.vehicle.text":
      "即時、快取、過期、暫時不可用同示範狀態會分開標示。快取資料不超過 15 分鐘；過期資料超過 15 分鐘但不超過 6 小時。再舊嘅資料唔會傳回，並由伺服器每小時維護程序刪除。示範資料唔需要 Tesla 帳戶，亦永遠唔代表你架車。",
    "support.privacy.label": "私隱",
    "support.privacy.beforeLink": "請查看",
    "support.privacy.link": "私隱政策",
    "support.privacy.afterLink": "，了解收集欄位、保安同刪除詳情。",

    "terms.title": "EV Command 使用條款",
    "terms.description":
      "適用於 EV Command 可選只讀車輛監控、示範資料同車主工具嘅條款。",
    "terms.eyebrow": "法律資料",
    "terms.heading": "EV Command 使用條款",
    "terms.updated": "最後更新：2026年7月14日",
    "terms.intro":
      "EV Command 提供可選嘅只讀車輛監控、清楚標示嘅示範資料，同埋只供參考嘅車主工具。EV Command 同 Tesla, Inc. 或任何車輛製造商都冇關聯。",
    "terms.use.heading": "使用 App",
    "terms.use.p1":
      "唔好將 EV Command 當成駕駛、充電、安全、維修或者緊急決定嘅唯一資料來源。請一直遵照你架車嘅官方顯示、手冊同維修指引。",
    "terms.accounts.heading": "帳戶同車輛連接",
    "terms.accounts.p1":
      "EV Command 帳戶使用 Apple 登入。連接 Tesla 係可選功能，並需要你喺 Tesla 授權頁面同意。目前版本只要求只讀資料存取，唔會傳送車輛指令。你有責任保護自己裝置同帳戶嘅存取權。",
    "terms.accuracy.heading": "資料準確性同可用性",
    "terms.accuracy.p1":
      "App 會標示即時、快取同過期狀態。快取資料不超過 15 分鐘；過期資料超過 15 分鐘但不超過 6 小時。再舊嘅資料唔會傳回，並由伺服器每小時維護程序刪除。因為車輛休眠、網絡狀況、地區 API 可用性或者第三方服務，車輛資料可能延遲、暫時不可用或者唔完整。示範數值係樣例固定資料，唔係你架車嘅資料。",
    "terms.paid.heading": "付費功能",
    "terms.paid.p1":
      "EV Command Pro 終身版係透過 Apple App 內購買完成嘅一次性非消耗型購買，唔會自動續期。佢會解鎖喺裝置受保護同排除備份嘅儲存空間保存最多 180 條不含座標嘅車輛快照，以及 CSV 匯出功能。任何觀察到嘅 100% 續航都係按最新顯示續航推算，唔係電池容量或者 SOH 診斷。Apple 負責管理付款、恢復購買同退款資格。",
    "terms.deletion.heading": "刪除帳戶",
    "terms.deletion.p1":
      "你可以喺「帳戶 > 刪除帳戶」刪除 EV Command 雲端帳戶。App 會要求重新用 Apple 登入確認，先記錄持久刪除保護，之後嘗試撤銷由此取得嘅 Apple 憑證，再刪除帳戶同已連接車輛記錄。被拒絕嘅確認唔會令你登出。如果回應中斷，App 會先驗證經認證嘅刪除操作結果，再清除本機記錄。如果未能確認 Apple 撤銷，帳戶刪除仍然會完成，App 會喺裝置持續保留 Apple 官方手動撤銷指示嘅連結。獨立嘅假名化刪除保護記錄可以防止舊備份重新建立已成功刪除嘅帳戶。刪除帳戶唔會取消或者刪除由 Apple 管理嘅購買。",
    "terms.contact.heading": "聯絡我哋",
    "terms.contact.beforeEmail": "如需支援，請電郵去 ",
    "terms.contact.after": "。",
  },

  ko: {
    "common.brand": "EV Command",
    "common.skip": "주요 콘텐츠로 건너뛰기",
    "common.language": "언어",
    "common.primaryNavigation": "주요 탐색",
    "nav.home": "홈",
    "nav.product": "제품",
    "nav.privacy": "개인정보",
    "nav.support": "지원",
    "nav.terms": "이용 약관",

    "index.title": "EV Command",
    "index.description":
      "EV Command는 기기 내 스냅샷 기록과 CSV 내보내기를 지원하는 다국어 읽기 전용 Tesla 차량 모니터입니다.",
    "index.eyebrow": "읽기 전용 차량 모니터링",
    "index.heading": "EV Command",
    "index.intro":
      "EV Command는 기기 내 스냅샷 기록과 CSV 내보내기를 지원하는 다국어 읽기 전용 Tesla 차량 모니터입니다.",

    "marketing.title": "EV Command 제품 개요",
    "marketing.description":
      "선택적 Tesla Fleet API 모니터링과 명확히 분리된 데모 모드를 제공하는 다국어 읽기 전용 EV 도우미입니다.",
    "marketing.eyebrow": "제품 개요",
    "marketing.heading": "EV Command",
    "marketing.intro":
      "선택적 Tesla Fleet API 모니터링과 명확히 분리된 데모 모드를 제공하는 다국어 읽기 전용 EV 도우미입니다.",
    "marketing.feature1":
      "지원되는 Tesla 배터리, 주행 가능 거리, 충전, 잠금, 누적 주행거리 및 온도 필드를 확인합니다.",
    "marketing.feature2":
      "실시간, 캐시, 오래된 데이터, 사용 불가 및 데모 데이터를 한눈에 구분합니다.",
    "marketing.feature3":
      "Apple로 로그인하여 EV Command 계정을 만들고 이용하거나 로그아웃 및 삭제합니다.",
    "marketing.feature4":
      "차량 접근은 읽기 전용으로 유지되며, 이 버전은 원격 명령을 보내지 않습니다.",
    "marketing.feature5":
      "EV Command의 Tesla 데이터 연결을 해제하거나 Tesla 동의 페이지를 열어 권한을 철회합니다.",
    "marketing.feature6":
      "EV Command Pro로 좌표를 제외하고 계정별로 분리된 차량 스냅샷을 기기에 최대 180개 보관하고, 실제 기록이나 명확히 표시된 샘플 기록을 CSV로 내보냅니다.",
    "marketing.feature7":
      "영어, 중국어 간체, 광둥어, 한국어, 일본어 및 스페인어로 전환합니다.",

    "privacy.title": "EV Command 개인정보 처리방침",
    "privacy.description":
      "EV Command는 전기차 소유자가 차량 상태와 관련 소유자 정보를 확인하도록 돕습니다. 이 방침은 현재 버전에서 사용하는 계정, 차량 및 구매 데이터를 설명합니다.",
    "privacy.eyebrow": "법적 정보",
    "privacy.heading": "EV Command 개인정보 처리방침",
    "privacy.updated": "최종 업데이트: 2026년 7월 14일",
    "privacy.intro":
      "EV Command는 전기차 소유자가 차량 상태와 관련 소유자 정보를 확인하도록 돕습니다. 이 방침은 현재 버전에서 사용하는 계정, 차량 및 구매 데이터를 설명합니다.",
    "privacy.collect.heading": "수집하는 정보",
    "privacy.collect.p1":
      "Apple로 로그인을 사용하면 가명 Apple 계정 식별자와 Apple이 제공하는 경우 이메일 주소 및 표시 이름을 받습니다. Apple 식별자의 단방향 키 기반 표현, 계정 세부 정보, 해시된 세션 자격 증명, 암호화된 Apple 갱신 토큰 및 보안 타임스탬프를 저장합니다.",
    "privacy.collect.p2":
      "Tesla 연결을 선택하면 암호화된 OAuth 자격 증명과 부여된 범위를 저장합니다. 사용 가능한 최신 차량 식별자, VIN, 표시 이름, 온라인 상태, 배터리 잔량, 예상 주행 가능 거리, 충전 상태, 충전 한도, 잠금 상태, 누적 주행거리 및 실내 또는 외부 온도를 처리합니다. EV Command는 Tesla의 차량 위치 범위를 요청하지 않으며 서버는 위도와 경도를 폐기합니다.",
    "privacy.use.heading": "정보 이용 방법",
    "privacy.use.p1":
      "이 정보는 계정 인증, 선택적 Tesla 연결 유지, 요청한 차량 정보 표시, 재전송 또는 악용 방지, 지원 제공 및 앱 기능 운영에만 사용합니다. 개인정보를 판매하거나 광고에 사용하지 않으며 다른 회사의 앱이나 웹사이트 전반에서 사용자를 추적하지 않습니다.",
    "privacy.vehicle.heading": "차량 데이터",
    "privacy.vehicle.p1":
      "EV Command는 Tesla, Inc.와 제휴하지 않습니다. Tesla 연결은 선택 사항이며 Tesla의 인증 화면을 사용합니다. 현재 버전은 읽기 전용 계정 및 차량 데이터 범위를 요청하고 차량 명령은 구현하지 않습니다. 명확한 가용성 상태를 유지하기 위해 정상적으로 가져온 차량 목록과 스냅샷이 캐시될 수 있습니다. 15분 이하의 데이터는 캐시로, 15분 초과 6시간 이하의 데이터는 오래된 데이터로 표시되며, 그보다 오래된 데이터는 반환하지 않습니다. 서버의 시간별 유지 관리 작업은 6시간이 지나면 차량 캐시 레코드를 삭제합니다.",
    "privacy.vehicle.p2":
      "Tesla 연결을 해제하면 EV Command에 저장된 Tesla 자격 증명, 대기 중인 인증 상태, 캐시된 차량 목록 및 스냅샷이 삭제됩니다. 앱에는 Tesla의 동의 관리 페이지를 여는 별도의 'Tesla 동의 관리' 작업이 있어 범위를 변경하거나 Tesla 인증을 철회할 수 있습니다.",
    "privacy.storage.heading": "저장 및 보안",
    "privacy.storage.p1":
      "앱은 불투명 세션 토큰을 iOS 키체인에 저장합니다. 서버에는 해당 토큰의 해시만 저장합니다. Apple 및 Tesla 갱신 토큰은 서버에서 인증 암호화 방식으로 암호화됩니다. 완전히 안전한 저장 방식은 없지만 보관 필드를 제한하고 원시 토큰, Apple 식별자, 이메일 주소, 이름 또는 상위 서비스 응답 본문을 기록하지 않습니다.",
    "privacy.storage.p2":
      "EV Command Pro가 활성화되면 앱은 요청한 차량 스냅샷을 기기의 보호된 Application Support 저장소에 최대 180개 보관할 수 있습니다. 기록은 무작위 EV Command 계정 ID의 단방향 해시로 분리되며 계정 ID는 일반 텍스트 파일 이름으로 사용되지 않습니다. 각 기록 파일은 iOS 전체 파일 보호를 사용하고 기기 백업에서 제외됩니다. 이 기록에는 차량 식별자, VIN, 타임스탬프, 출처 및 최신성 레이블, 차량 상태, 배터리 잔량, 예상 주행 가능 거리, 충전 상태, 충전 한도, 잠금 상태, 누적 주행거리 및 실내 또는 외부 온도가 포함됩니다. 위도와 경도는 포함되지 않습니다. 로그아웃하거나 권한을 잃으면 해당 로컬 기록이 삭제됩니다. Tesla 연결 해제와 계정 삭제는 서버가 원격 작업을 확인한 뒤 해당 로컬 기록을 삭제하므로, 실패한 원격 요청으로 기록이 없어지지 않습니다.",
    "privacy.purchases.heading": "구매",
    "privacy.purchases.p1":
      "EV Command Pro 평생 이용권은 Apple이 처리하는 일회성 비소모성 구매입니다. Apple은 검증된 이용 권한 상태를 제공하여 앱이 유료 기능을 잠금 해제하도록 합니다. EV Command는 사용자의 전체 결제 카드 정보를 받지 않습니다.",
    "privacy.deletion.heading": "계정 삭제",
    "privacy.deletion.p1":
      "앱의 '계정 > 계정 삭제'에서 EV Command 계정을 영구 삭제할 수 있습니다. 삭제 전에 앱은 새 Apple 로그인 확인을 요구하고 새 신원 토큰이 로그인된 계정을 식별하는지 확인한 뒤, 삭제 보호 툼스톤과 인증된 작업 결과를 먼저 기록합니다. 그 다음 인증 코드 교환과 반환된 갱신 토큰 철회를 시도한 후 계정, 세션, Apple 어설션 지문, 암호화된 Apple 갱신 토큰, 대기 중인 Tesla 인증 상태, Tesla 자격 증명 및 캐시된 차량 데이터를 삭제합니다. 툼스톤이 기록되면 물리적 데이터베이스 정리가 중단되어도 삭제된 내부 계정에 대한 요청이 거부되며, 시작·로그인·시간별 유지 관리에서 남은 행을 정리합니다. 거부되거나 오래된 확인으로 로그아웃되지는 않습니다. 앱은 서버 결과와 로컬 정리가 확인될 때까지 무작위 상태 확인 전용 삭제 작업 자격 증명을 iOS 키체인에 보관하며, 이 자격 증명은 계정 접근을 허용하지 않습니다. 응답이 중단되면 로컬 기록 삭제 여부를 결정하기 전에 결과를 조회합니다. Apple 토큰 교환이나 철회를 확인할 수 없어도 EV Command는 계정과 로컬 기록을 삭제하고, Apple 로그인을 수동으로 중단할 수 있는 Apple 공식 안내 링크가 포함된 알림을 기기에 지속적으로 보관합니다. EV Command 계정 삭제는 Apple이 관리하는 구매를 취소하거나 지우지 않습니다.",
    "privacy.deletion.p2":
      "이전 데이터베이스 백업에서 삭제된 계정이 다시 생성되지 않도록 별도의 삭제 보호 원장이 무작위 내부 EV Command 사용자 ID의 SHA-256 해시와 삭제 타임스탬프를 보관합니다. 삭제 시도 후 24시간 동안 무작위 작업 ID, 해시된 작업 비밀값, 해시된 내부 사용자 ID, 상태, 선택적 무작위 영수증 및 타임스탬프도 보관하며, 시간별 유지 관리에서 상태 확인 기간이 지나면 해당 작업 레코드를 삭제합니다. 이 레코드에는 Apple 식별자, 이메일, 이름, Tesla 계정 식별자, VIN, 차량 데이터, 세션 토큰 또는 제공자 토큰이 없으며 계정을 복원하거나 접근하는 데 사용할 수 없습니다.",
    "privacy.deletion.p3":
      "Apple로 로그인 서버 알림을 인증하고 중복 처리를 방지하기 위해 EV Command는 알림 ID의 SHA-256 해시, 이벤트 유형, 이벤트 시간, 수신 시간 및 처리 상태를 저장합니다. 이 레코드에는 알림 페이로드나 Apple 계정 식별자를 저장하지 않습니다. 시간별 유지 관리에서 처리 완료 후 7일이 지난 레코드를 삭제합니다.",
    "privacy.demo.heading": "데모 모드",
    "privacy.demo.p1":
      "Tesla를 연결하지 않고도 명확히 표시된 데모 모드를 살펴볼 수 있습니다. 데모 값은 샘플 고정 데이터이며 사용자의 차량과 관련이 없습니다.",
    "privacy.contact.heading": "문의",
    "privacy.contact.beforeEmail": "개인정보 또는 삭제 문제는 ",
    "privacy.contact.between": "으로 이메일을 보내거나 ",
    "privacy.contact.link": "EV Command 지원 페이지",
    "privacy.contact.after": "를 이용해 주세요.",

    "support.title": "EV Command 지원",
    "support.description":
      "EV Command 계정, Tesla 연결, 언어, 구매, 차량 데이터 및 개인정보에 대한 지원 정보입니다.",
    "support.eyebrow": "도움말 및 지원",
    "support.heading": "EV Command 지원",
    "support.intro.beforeEmail": "EV Command 도움이 필요하신가요? ",
    "support.intro.after": "으로 이메일을 보내 주세요.",
    "support.topics.heading": "일반 주제",
    "support.account.label": "계정",
    "support.account.text":
      "Apple로 로그인하여 EV Command 계정을 만들거나 이용합니다. 계정에서 로그아웃하거나 계정을 영구 삭제할 수 있습니다. 삭제에는 새 Apple 확인이 필요하며, 영구 삭제 보호를 먼저 기록한 뒤 EV Command 클라우드 계정과 관련 데이터를 제거하기 전에 Apple 자격 증명 철회를 시도합니다. 확인이 거부되어도 로그아웃되지 않습니다. 응답이 중단되면 앱은 iOS 키체인의 상태 확인 전용 작업 자격 증명을 사용해 로컬 기록을 지우기 전에 서버 결과를 확인합니다. Apple 철회를 확인할 수 없어도 계정 삭제는 완료되며, 앱은 Apple 공식 수동 철회 안내 링크를 기기에 지속적으로 보관합니다.",
    "support.account.appleLink":
      "Apple 지원 사이트에서 Apple로 로그인 관리",
    "support.tesla.label": "Tesla 연결",
    "support.tesla.text":
      "먼저 EV Command에 로그인한 뒤 설정에서 선택적 읽기 전용 Fleet API 접근을 승인합니다. 연결 해제는 EV Command에 저장된 Tesla 자격 증명과 캐시된 차량 데이터를 삭제합니다. 'Tesla 동의 관리'는 Tesla 자체 동의 페이지를 열며, 여기에서 범위를 변경하거나 Tesla 인증을 철회할 수 있습니다.",
    "support.language.label": "언어",
    "support.language.text":
      "설정에서 영어, 중국어 간체, 광둥어, 한국어, 일본어 또는 스페인어를 선택합니다.",
    "support.purchases.label": "구매",
    "support.purchases.text":
      "멤버십 화면에서 Apple 앱 내 구입을 통해 일회성 EV Command Pro 평생 이용권을 구입하거나 복원합니다. Pro는 좌표를 제외한 차량 스냅샷을 기기의 보호되고 백업에서 제외되며 계정별로 분리된 저장소에 최대 180개 보관하고 CSV 내보내기를 활성화합니다. Pro가 활성화되면 Tesla를 연결하지 않아도 표시된 샘플 기록을 내보낼 수 있습니다. EV Command 계정을 삭제해도 Apple이 관리하는 구매는 제거되지 않습니다.",
    "support.vehicle.label": "차량 데이터",
    "support.vehicle.text":
      "실시간, 캐시, 오래된 데이터, 사용 불가 및 데모 상태는 각각 표시됩니다. 캐시 데이터는 15분 이하이며, 오래된 데이터는 15분 초과 6시간 이하입니다. 더 오래된 데이터는 반환하지 않고 서버의 시간별 유지 관리에서 삭제합니다. 데모 데이터에는 Tesla 계정이 필요하지 않으며 사용자의 차량을 나타내지 않습니다.",
    "support.privacy.label": "개인정보",
    "support.privacy.beforeLink": "수집 필드, 보안 및 삭제 세부 정보는 ",
    "support.privacy.link": "개인정보 처리방침",
    "support.privacy.afterLink": "에서 확인하세요.",

    "terms.title": "EV Command 이용 약관",
    "terms.description":
      "EV Command의 선택적 읽기 전용 차량 모니터링, 데모 정보 및 소유자 도구에 적용되는 약관입니다.",
    "terms.eyebrow": "법적 정보",
    "terms.heading": "EV Command 이용 약관",
    "terms.updated": "최종 업데이트: 2026년 7월 14일",
    "terms.intro":
      "EV Command는 정보 제공 목적으로 선택적 읽기 전용 차량 모니터링, 명확히 표시된 데모 정보 및 소유자 도구를 제공합니다. EV Command는 Tesla, Inc. 또는 어떤 차량 제조사와도 제휴하지 않습니다.",
    "terms.use.heading": "앱 이용",
    "terms.use.p1":
      "주행, 충전, 안전, 정비 또는 긴급 결정의 유일한 정보 출처로 EV Command에 의존하지 마세요. 항상 차량의 공식 디스플레이, 설명서 및 정비 안내를 따르세요.",
    "terms.accounts.heading": "계정 및 차량 연결",
    "terms.accounts.p1":
      "EV Command 계정은 Apple로 로그인을 사용합니다. Tesla 연결은 선택 사항이며 Tesla 인증 화면에서 사용자의 동의가 필요합니다. 현재 버전은 읽기 전용 데이터 접근을 요청하며 차량 명령을 보내지 않습니다. 기기와 계정에 대한 접근을 보호할 책임은 사용자에게 있습니다.",
    "terms.accuracy.heading": "데이터 정확성 및 가용성",
    "terms.accuracy.p1":
      "앱에는 실시간, 캐시 및 오래된 데이터 상태가 표시됩니다. 캐시 데이터는 15분 이하이며, 오래된 데이터는 15분 초과 6시간 이하입니다. 더 오래된 데이터는 반환하지 않고 서버의 시간별 유지 관리에서 삭제합니다. 차량 절전, 네트워크 상태, 지역별 API 가용성 또는 제3자 서비스 때문에 차량 데이터가 지연되거나 사용할 수 없거나 불완전할 수 있습니다. 데모 값은 샘플 고정 데이터이며 사용자의 차량을 설명하지 않습니다.",
    "terms.paid.heading": "유료 기능",
    "terms.paid.p1":
      "EV Command Pro 평생 이용권은 Apple 앱 내 구입을 통한 일회성 비소모성 구매이며 자동 갱신되지 않습니다. 기기의 보호되고 백업에서 제외된 저장소에 좌표를 제외한 차량 스냅샷을 최대 180개 저장하고 CSV로 내보내는 기능을 잠금 해제합니다. 관측된 100% 주행 가능 거리는 최신 표시 주행 가능 거리의 환산값이며 배터리 용량 또는 SOH 진단이 아닙니다. Apple은 결제, 복원 및 환불 자격을 관리합니다.",
    "terms.deletion.heading": "계정 삭제",
    "terms.deletion.p1":
      "'계정 > 계정 삭제'에서 EV Command 클라우드 계정을 삭제할 수 있습니다. 앱은 새 Apple 로그인 확인을 요구하고 영구 삭제 보호를 먼저 기록한 뒤 Apple 자격 증명 철회를 시도하고 계정과 연결 차량 레코드를 삭제합니다. 확인이 거부되어도 로그아웃되지 않습니다. 응답이 중단되면 로컬 기록을 지우기 전에 인증된 삭제 작업 결과를 확인합니다. Apple 철회를 확인할 수 없어도 계정 삭제는 완료되며, 앱은 Apple 공식 수동 철회 안내 링크를 기기에 지속적으로 보관합니다. 별도의 가명 삭제 보호 레코드는 이전 백업에서 정상적으로 삭제된 계정이 다시 생성되는 것을 방지합니다. 삭제는 Apple이 관리하는 구매를 취소하거나 삭제하지 않습니다.",
    "terms.contact.heading": "문의",
    "terms.contact.beforeEmail": "지원은 ",
    "terms.contact.after": "으로 이메일을 보내 주세요.",
  },

  ja: {
    "common.brand": "EV Command",
    "common.skip": "メインコンテンツへ移動",
    "common.language": "言語",
    "common.primaryNavigation": "メインナビゲーション",
    "nav.home": "ホーム",
    "nav.product": "製品",
    "nav.privacy": "プライバシー",
    "nav.support": "サポート",
    "nav.terms": "利用規約",

    "index.title": "EV Command",
    "index.description":
      "EV Commandは、端末内のスナップショット履歴とCSV書き出しに対応した、多言語の読み取り専用Tesla車両モニターです。",
    "index.eyebrow": "読み取り専用の車両監視",
    "index.heading": "EV Command",
    "index.intro":
      "EV Commandは、端末内のスナップショット履歴とCSV書き出しに対応した、多言語の読み取り専用Tesla車両モニターです。",

    "marketing.title": "EV Command 製品概要",
    "marketing.description":
      "任意のTesla Fleet API監視と明確に分離されたデモモードを備えた、多言語対応の読み取り専用EVコンパニオンです。",
    "marketing.eyebrow": "製品概要",
    "marketing.heading": "EV Command",
    "marketing.intro":
      "任意のTesla Fleet API監視と明確に分離されたデモモードを備えた、多言語対応の読み取り専用EVコンパニオンです。",
    "marketing.feature1":
      "Teslaで対応するバッテリー、航続距離、充電、ロック、走行距離、温度の項目を確認できます。",
    "marketing.feature2":
      "ライブ、キャッシュ、古いデータ、利用不可、デモを一目で区別できます。",
    "marketing.feature3":
      "AppleでサインインしてEV Commandアカウントを作成、利用、サインアウト、削除できます。",
    "marketing.feature4":
      "車両アクセスは読み取り専用です。このリリースはリモートコマンドを送信しません。",
    "marketing.feature5":
      "EV Command内のTeslaデータ接続を解除するか、Teslaの同意ページを開いて認証を取り消せます。",
    "marketing.feature6":
      "EV Command Proでは、座標を含まずアカウントごとに分離した車両スナップショットを端末に最大180件保存し、実データまたは明確に表示したサンプル履歴をCSVとして書き出せます。",
    "marketing.feature7":
      "英語、簡体字中国語、広東語、韓国語、日本語、スペイン語を切り替えられます。",

    "privacy.title": "EV Command プライバシーポリシー",
    "privacy.description":
      "EV Commandは、電気自動車の所有者が車両状態と関連する所有者情報を確認するためのアプリです。本ポリシーは、現行バージョンで使用するアカウント、車両、購入データについて説明します。",
    "privacy.eyebrow": "法的情報",
    "privacy.heading": "EV Command プライバシーポリシー",
    "privacy.updated": "最終更新日：2026年7月14日",
    "privacy.intro":
      "EV Commandは、電気自動車の所有者が車両状態と関連する所有者情報を確認するためのアプリです。本ポリシーは、現行バージョンで使用するアカウント、車両、購入データについて説明します。",
    "privacy.collect.heading": "収集する情報",
    "privacy.collect.p1":
      "Appleでサインインを使用すると、仮名化されたAppleアカウント識別子と、Appleから提供された場合はメールアドレスおよび表示名を受け取ります。Apple識別子の鍵付き一方向表現、アカウントの詳細、ハッシュ化したセッション認証情報、暗号化したApple更新トークン、セキュリティのタイムスタンプを保存します。",
    "privacy.collect.p2":
      "Teslaへの接続を選択すると、暗号化したOAuth認証情報と付与されたスコープを保存します。利用可能な最新の車両識別子、VIN、表示名、オンライン状態、バッテリー残量、推定航続距離、充電状態、充電上限、ロック状態、走行距離、車内または外気温を処理します。EV CommandはTeslaの車両位置スコープを要求せず、サーバーは緯度と経度を破棄します。",
    "privacy.use.heading": "情報の利用方法",
    "privacy.use.p1":
      "これらの情報は、アカウントの認証、任意のTesla接続の維持、要求された車両情報の表示、リプレイまたは不正利用の防止、サポートの提供、アプリ機能の運用にのみ使用します。個人情報を販売したり、広告に使用したり、他社のアプリやウェブサイトを横断して追跡したりすることはありません。",
    "privacy.vehicle.heading": "車両データ",
    "privacy.vehicle.p1":
      "EV CommandはTesla, Inc.と提携していません。Tesla接続は任意で、Teslaの認証画面を使用します。現行リリースは読み取り専用のアカウントおよび車両データスコープを要求し、車両コマンドを実装していません。可用性を明確に示すため、取得に成功した車両一覧とスナップショットがキャッシュされる場合があります。15分以内のデータはキャッシュ、15分を超え6時間以内のデータは古いデータと表示し、それより古いデータは返しません。サーバーの毎時メンテナンス処理により、6時間の期間後に車両キャッシュレコードを削除します。",
    "privacy.vehicle.p2":
      "Tesla接続を解除すると、EV Commandに保存されたTesla認証情報、保留中の認証状態、キャッシュされた車両一覧とスナップショットが削除されます。アプリには、Teslaの同意管理ページを開く独立した「Teslaの同意を管理」操作があり、スコープの変更またはTesla認証の取り消しができます。",
    "privacy.storage.heading": "保存とセキュリティ",
    "privacy.storage.p1":
      "アプリは不透明なセッショントークンをiOSキーチェーンに保存します。サーバーにはそのトークンのハッシュのみを保存します。AppleとTeslaの更新トークンは、サーバーで認証付き暗号化を使用して暗号化します。完全に安全な保存方法はありませんが、保持する項目を制限し、生のトークン、Apple識別子、メールアドレス、氏名、上流サービスのレスポンス本文をログに記録しません。",
    "privacy.storage.p2":
      "EV Command Proが有効な場合、アプリは要求した車両スナップショットを端末上の保護されたApplication Supportストレージに最大180件保持できます。履歴は、ランダムなEV CommandアカウントIDの一方向ハッシュによって分離されます。アカウントIDを平文のファイル名には使用しません。各履歴ファイルはiOSの完全なファイル保護を使用し、端末のバックアップから除外されます。この履歴には、車両識別子、VIN、タイムスタンプ、ソースと鮮度ラベル、車両状態、バッテリー残量、推定航続距離、充電状態、充電上限、ロック状態、走行距離、車内または外気温が含まれます。緯度と経度は含まれません。サインアウトまたは認証の喪失時には該当するローカル履歴を消去します。Tesla接続の解除とアカウント削除では、サーバーがリモート操作を確認した後に該当するローカル履歴を消去するため、失敗したリモート要求によって履歴が失われることはありません。",
    "privacy.purchases.heading": "購入",
    "privacy.purchases.p1":
      "EV Command Pro LifetimeはAppleが処理する1回限りの非消耗型購入です。Appleから検証済みの利用資格状態を受け取り、アプリの有料機能を解除します。EV Commandが支払いカードの完全な情報を受け取ることはありません。",
    "privacy.deletion.heading": "アカウントの削除",
    "privacy.deletion.p1":
      "アプリの「アカウント > アカウントを削除」からEV Commandアカウントを完全に削除できます。削除前に、アプリは新しいAppleでサインイン確認を要求し、新しいIDトークンがサインイン中のアカウントを示すことを検証したうえで、削除保護トゥームストーンと認証済みの操作結果を先に記録します。その後、認証コードの交換と返された更新トークンの取り消しを試みてから、アカウント、セッション、Appleアサーションのフィンガープリント、暗号化したApple更新トークン、保留中のTesla認証状態、Tesla認証情報、キャッシュした車両データを削除します。トゥームストーンが記録されると、物理データベースのクリーンアップが中断しても削除済み内部アカウントへの要求は拒否され、起動、サインイン、毎時メンテナンスで残存行を調整します。拒否された確認や古い確認によってサインアウトすることはありません。アプリは、サーバー結果とローカルクリーンアップが確認されるまで、ランダムな状態確認専用の削除操作認証情報をiOSキーチェーンに保持します。これはアカウントへのアクセスを許可しません。レスポンスが中断した場合、ローカル履歴を消去する前に結果を照会します。Appleのトークン交換または取り消しを確認できない場合でも、EV Commandはアカウントとローカル履歴を削除し、「Appleでサインイン」の使用を手動で停止するためのApple公式案内へのリンクを含む通知を端末に永続的に保存します。EV Commandアカウントを削除しても、Appleが管理する購入の解約や消去は行われません。",
    "privacy.deletion.p2":
      "古いデータベースバックアップから削除済みアカウントが再作成されることを防ぐため、独立した削除保護台帳に、ランダムな内部EV CommandユーザーIDのSHA-256ハッシュと削除タイムスタンプを保持します。削除試行後24時間は、ランダムな操作ID、ハッシュ化した操作シークレット、ハッシュ化した内部ユーザーID、状態、任意のランダムなレシート、タイムスタンプも保持します。毎時メンテナンスにより、状態確認期間が終了するとその操作レコードを削除します。これらのレコードにはApple識別子、メール、氏名、Teslaアカウント識別子、VIN、車両データ、セッショントークン、プロバイダートークンは含まれず、アカウントの復元やアクセスには使用できません。",
    "privacy.deletion.p3":
      "「Appleでサインイン」のサーバー通知を認証し、重複処理を防ぐため、EV Commandは通知IDのSHA-256ハッシュ、イベント種別、イベント時刻、受信時刻、処理状態を保存します。このレコードには通知ペイロードやAppleアカウント識別子を保存しません。毎時メンテナンスにより、処理完了から7日後にレコードを削除します。",
    "privacy.demo.heading": "デモモード",
    "privacy.demo.p1":
      "Teslaに接続せず、明確に表示されたデモモードを試すことができます。デモ値はサンプルの固定データで、お客様の車両には関連しません。",
    "privacy.contact.heading": "お問い合わせ",
    "privacy.contact.beforeEmail":
      "プライバシーまたは削除に関する問題は、",
    "privacy.contact.between": "までメールを送るか、",
    "privacy.contact.link": "EV Commandサポートページ",
    "privacy.contact.after": "をご利用ください。",

    "support.title": "EV Command サポート",
    "support.description":
      "EV Commandのアカウント、Tesla接続、言語、購入、車両データ、プライバシーに関するサポート情報です。",
    "support.eyebrow": "ヘルプとサポート",
    "support.heading": "EV Command サポート",
    "support.intro.beforeEmail": "EV Commandについてお困りの場合は、",
    "support.intro.after": "までメールでお問い合わせください。",
    "support.topics.heading": "よくある項目",
    "support.account.label": "アカウント",
    "support.account.text":
      "AppleでサインインしてEV Commandアカウントを作成または利用します。「アカウント」からサインアウトまたはアカウントの完全な削除ができます。削除には新しいApple確認が必要で、永続的な削除保護を先に記録してから、EV Commandクラウドアカウントと関連データを削除する前にApple認証情報の取り消しを試みます。確認が拒否されてもサインアウトしません。レスポンスが中断した場合、アプリはiOSキーチェーン内の状態確認専用操作認証情報を使い、ローカル履歴を消去する前にサーバー結果を確認します。Appleでの取り消しを確認できなくてもアカウント削除は完了し、アプリはApple公式の手動取り消し案内へのリンクを端末に永続的に保持します。",
    "support.account.appleLink":
      "Appleサポートサイトで「Appleでサインイン」を管理",
    "support.tesla.label": "Tesla接続",
    "support.tesla.text":
      "先にEV Commandへサインインし、「設定」から任意の読み取り専用Fleet APIアクセスを承認します。接続解除によりEV Commandに保存されたTesla認証情報とキャッシュした車両データが削除されます。「Teslaの同意を管理」はTesla自身の同意ページを開き、スコープの変更またはTesla認証の取り消しができます。",
    "support.language.label": "言語",
    "support.language.text":
      "「設定」で英語、簡体字中国語、広東語、韓国語、日本語、スペイン語を選択できます。",
    "support.purchases.label": "購入",
    "support.purchases.text":
      "「メンバーシップ」画面からAppleのアプリ内課金を通じて、1回限りのEV Command Pro Lifetimeを購入または復元します。Proでは、座標を含まない車両スナップショットを、端末上の保護され、バックアップから除外され、アカウントごとに分離されたストレージに最大180件保持し、CSV書き出しを利用できます。Proが有効になれば、Teslaに接続しなくても、表示付きのサンプル履歴を書き出せます。EV Commandアカウントを削除しても、Appleが管理する購入は削除されません。",
    "support.vehicle.label": "車両データ",
    "support.vehicle.text":
      "ライブ、キャッシュ、古いデータ、利用不可、デモの各状態を別々に表示します。キャッシュデータは15分以内、古いデータは15分を超え6時間以内です。それより古いデータは返さず、サーバーの毎時メンテナンスで削除します。デモデータにTeslaアカウントは不要で、お客様の車両を表すことはありません。",
    "support.privacy.label": "プライバシー",
    "support.privacy.beforeLink": "収集項目、セキュリティ、削除の詳細は",
    "support.privacy.link": "プライバシーポリシー",
    "support.privacy.afterLink": "をご確認ください。",

    "terms.title": "EV Command 利用規約",
    "terms.description":
      "EV Commandの任意の読み取り専用車両監視、デモ情報、所有者向けツールに適用される規約です。",
    "terms.eyebrow": "法的情報",
    "terms.heading": "EV Command 利用規約",
    "terms.updated": "最終更新日：2026年7月14日",
    "terms.intro":
      "EV Commandは、情報提供を目的として、任意の読み取り専用車両監視、明確に表示したデモ情報、所有者向けツールを提供します。EV CommandはTesla, Inc.またはいかなる車両メーカーとも提携していません。",
    "terms.use.heading": "アプリの利用",
    "terms.use.p1":
      "運転、充電、安全、整備、緊急時の判断において、EV Commandを唯一の情報源として使用しないでください。必ず車両の公式表示、マニュアル、整備案内に従ってください。",
    "terms.accounts.heading": "アカウントと車両接続",
    "terms.accounts.p1":
      "EV CommandアカウントはAppleでサインインを使用します。Tesla接続は任意で、Teslaの認証画面でお客様の同意が必要です。現行リリースは読み取り専用データアクセスを要求し、車両コマンドを送信しません。端末とアカウントへのアクセスを保護する責任はお客様にあります。",
    "terms.accuracy.heading": "データの正確性と可用性",
    "terms.accuracy.p1":
      "アプリではライブ、キャッシュ、古いデータの状態を表示します。キャッシュデータは15分以内、古いデータは15分を超え6時間以内です。それより古いデータは返さず、サーバーの毎時メンテナンスで削除します。車両のスリープ、ネットワーク状況、地域ごとのAPI可用性、第三者サービスにより、車両データが遅延、利用不可、不完全となる場合があります。デモ値はサンプルの固定データであり、お客様の車両を示しません。",
    "terms.paid.heading": "有料機能",
    "terms.paid.p1":
      "EV Command Pro LifetimeはAppleのアプリ内課金による1回限りの非消耗型購入で、自動更新されません。端末上の保護されバックアップから除外されたストレージに、座標を含まない車両スナップショットを最大180件保存し、CSVとして書き出す機能を解除します。観測された100%航続距離は最新の表示航続距離からの換算値で、バッテリー容量やSOHの診断ではありません。支払い、復元、返金対象の判断はAppleが管理します。",
    "terms.deletion.heading": "アカウントの削除",
    "terms.deletion.p1":
      "「アカウント > アカウントを削除」からEV Commandクラウドアカウントを削除できます。アプリは新しいAppleでサインイン確認を要求し、永続的な削除保護を先に記録してからApple認証情報の取り消しを試み、アカウントと接続車両レコードを削除します。確認が拒否されてもサインアウトしません。レスポンスが中断した場合、ローカル履歴を消去する前に認証済みの削除操作結果を確認します。Appleでの取り消しを確認できなくてもアカウント削除は完了し、アプリはApple公式の手動取り消し案内へのリンクを端末に永続的に保持します。独立した仮名化削除保護レコードにより、正常に削除されたアカウントが古いバックアップから再作成されることを防ぎます。削除しても、Appleが管理する購入の解約や削除は行われません。",
    "terms.contact.heading": "お問い合わせ",
    "terms.contact.beforeEmail": "サポートについては、",
    "terms.contact.after": "までメールでお問い合わせください。",
  },

  "es-ES": {
    "common.brand": "EV Command",
    "common.skip": "Saltar al contenido principal",
    "common.language": "Idioma",
    "common.primaryNavigation": "Navegación principal",
    "nav.home": "Inicio",
    "nav.product": "Producto",
    "nav.privacy": "Privacidad",
    "nav.support": "Soporte",
    "nav.terms": "Términos",

    "index.title": "EV Command",
    "index.description":
      "EV Command es un monitor multilingüe y de solo lectura para vehículos Tesla, con historial de instantáneas en el dispositivo y exportación CSV.",
    "index.eyebrow": "Monitorización del vehículo de solo lectura",
    "index.heading": "EV Command",
    "index.intro":
      "EV Command es un monitor multilingüe y de solo lectura para vehículos Tesla, con historial de instantáneas en el dispositivo y exportación CSV.",

    "marketing.title": "Descripción del producto EV Command",
    "marketing.description":
      "Un asistente multilingüe de solo lectura para vehículos eléctricos, con monitorización opcional mediante Tesla Fleet API y un modo demo claramente separado.",
    "marketing.eyebrow": "Descripción del producto",
    "marketing.heading": "EV Command",
    "marketing.intro":
      "Un asistente multilingüe de solo lectura para vehículos eléctricos, con monitorización opcional mediante Tesla Fleet API y un modo demo claramente separado.",
    "marketing.feature1":
      "Consulta los campos compatibles de batería, autonomía, carga, bloqueo, kilometraje y temperatura de Tesla.",
    "marketing.feature2":
      "Distingue de un vistazo los datos en vivo, en caché, antiguos, no disponibles y de demostración.",
    "marketing.feature3":
      "Crea, accede, cierra sesión y elimina una cuenta de EV Command con Iniciar sesión con Apple.",
    "marketing.feature4":
      "Mantén el acceso al vehículo en modo de solo lectura; esta versión no envía comandos remotos.",
    "marketing.feature5":
      "Desconecta los datos de Tesla en EV Command o abre la página de consentimiento de Tesla para revocar la autorización.",
    "marketing.feature6":
      "Usa EV Command Pro para guardar en el dispositivo hasta 180 instantáneas del vehículo sin coordenadas y aisladas por cuenta, y exporta como CSV el historial real o el historial de muestra claramente identificado.",
    "marketing.feature7":
      "Cambia entre inglés, chino simplificado, cantonés, coreano, japonés y español.",

    "privacy.title": "Política de privacidad de EV Command",
    "privacy.description":
      "EV Command ayuda a los propietarios de vehículos eléctricos a consultar el estado del vehículo y la información relacionada con el propietario. Esta política explica los datos de cuenta, vehículo y compra que utiliza la versión actual.",
    "privacy.eyebrow": "Información legal",
    "privacy.heading": "Política de privacidad de EV Command",
    "privacy.updated": "Última actualización: 14 de julio de 2026",
    "privacy.intro":
      "EV Command ayuda a los propietarios de vehículos eléctricos a consultar el estado del vehículo y la información relacionada con el propietario. Esta política explica los datos de cuenta, vehículo y compra que utiliza la versión actual.",
    "privacy.collect.heading": "Información que recopilamos",
    "privacy.collect.p1":
      "Cuando utilizas Iniciar sesión con Apple, recibimos un identificador seudónimo de la cuenta de Apple y, si Apple los proporciona, tu dirección de correo electrónico y nombre para mostrar. Guardamos una representación unidireccional con clave del identificador de Apple, los datos de la cuenta, credenciales de sesión con hash, un token de actualización de Apple cifrado y marcas de tiempo de seguridad.",
    "privacy.collect.p2":
      "Si decides conectar Tesla, guardamos credenciales OAuth cifradas y los ámbitos concedidos. Tratamos el identificador de vehículo, VIN, nombre para mostrar, estado en línea, nivel de batería, autonomía estimada, estado de carga, límite de carga, estado de bloqueo, cuentakilómetros y temperatura interior o exterior disponibles más recientes. EV Command no solicita el ámbito de ubicación del vehículo de Tesla y el servidor descarta la latitud y la longitud.",
    "privacy.use.heading": "Cómo utilizamos la información",
    "privacy.use.p1":
      "Utilizamos esta información únicamente para autenticar tu cuenta, mantener la conexión opcional con Tesla, mostrar la información del vehículo solicitada, evitar repeticiones o abusos, prestar soporte y hacer funcionar la app. No vendemos información personal, no la utilizamos para publicidad ni te rastreamos entre apps o sitios web de otras empresas.",
    "privacy.vehicle.heading": "Datos del vehículo",
    "privacy.vehicle.p1":
      "EV Command no está afiliada a Tesla, Inc. La conexión con Tesla es opcional y utiliza la pantalla de autorización de Tesla. La versión actual solicita ámbitos de cuenta y datos del vehículo de solo lectura y no implementa comandos del vehículo. Las listas de vehículos y las instantáneas obtenidas correctamente pueden almacenarse en caché para mantener un estado de disponibilidad claro: los datos de hasta 15 minutos se marcan como en caché, los datos de más de 15 minutos y hasta 6 horas se marcan como antiguos, y no se devuelven datos anteriores. Una tarea de mantenimiento del servidor ejecutada cada hora elimina los registros de caché del vehículo después de ese periodo de 6 horas.",
    "privacy.vehicle.p2":
      "Al desconectar Tesla se eliminan de EV Command las credenciales de Tesla guardadas, el estado de autorización pendiente y las listas e instantáneas de vehículos almacenadas en caché. La app ofrece una acción independiente para gestionar el consentimiento de Tesla que abre la página de gestión de consentimiento de Tesla, donde puedes modificar ámbitos o revocar la autorización de Tesla.",
    "privacy.storage.heading": "Almacenamiento y seguridad",
    "privacy.storage.p1":
      "La app guarda su token de sesión opaco en el llavero de iOS. El servidor solo guarda un hash de ese token. Los tokens de actualización de Apple y Tesla se cifran en el servidor mediante cifrado autenticado. Ningún método de almacenamiento es completamente seguro, pero limitamos los campos conservados y no registramos tokens sin procesar, identificadores de Apple, direcciones de correo electrónico, nombres ni cuerpos de respuestas de servicios externos.",
    "privacy.storage.p2":
      "Si EV Command Pro está activo, la app puede conservar hasta 180 instantáneas solicitadas del vehículo en el almacenamiento protegido de Application Support del dispositivo. El historial se separa mediante un hash unidireccional del ID aleatorio de la cuenta de EV Command; el ID de cuenta no se utiliza como nombre de archivo en texto sin cifrar. Cada archivo de historial utiliza la protección completa de archivos de iOS y se excluye de las copias de seguridad del dispositivo. Este historial incluye el identificador del vehículo, VIN, marcas de tiempo, etiquetas de origen y actualidad, estado del vehículo, nivel de batería, autonomía estimada, estado de carga, límite de carga, estado de bloqueo, cuentakilómetros y temperatura interior o exterior. No incluye latitud ni longitud. Al cerrar sesión o perder la autorización se borra el historial local correspondiente. Al desconectar Tesla y eliminar la cuenta se borra el historial local correspondiente después de que el servidor confirme la operación remota, por lo que una solicitud remota fallida no destruye el historial.",
    "privacy.purchases.heading": "Compras",
    "privacy.purchases.p1":
      "EV Command Pro Vitalicio es una compra única y no consumible procesada por Apple. Apple proporciona el estado verificado del derecho de uso para que la app pueda desbloquear las funciones de pago. EV Command no recibe los datos completos de tu tarjeta de pago.",
    "privacy.deletion.heading": "Eliminación de la cuenta",
    "privacy.deletion.p1":
      "Puedes eliminar de forma permanente tu cuenta de EV Command desde Cuenta > Eliminar cuenta en la app. Antes de eliminarla, la app exige una nueva confirmación de Iniciar sesión con Apple, comprueba que el nuevo token de identidad corresponde a la cuenta con la sesión iniciada y registra primero una marca de eliminación protegida y un resultado de operación autenticado. A continuación, intenta intercambiar el código de autorización y revocar el token de actualización devuelto antes de eliminar la cuenta, las sesiones, las huellas de aserciones de Apple, el token de actualización de Apple cifrado, los estados de autorización de Tesla pendientes, las credenciales de Tesla y los datos del vehículo en caché. Una vez registrada la marca, se rechazan las solicitudes para la cuenta interna eliminada aunque se interrumpa la limpieza física de la base de datos; el inicio, el acceso y el mantenimiento cada hora concilian las filas restantes. Una confirmación rechazada o caducada no cierra tu sesión. La app conserva en el llavero de iOS una credencial aleatoria de la operación de eliminación destinada únicamente a consultar el estado hasta confirmar el resultado del servidor y la limpieza local; no autoriza el acceso a la cuenta. Si se interrumpe la respuesta, la app consulta el resultado antes de borrar el historial local. Si no se puede confirmar el intercambio o la revocación de Apple, EV Command igualmente elimina la cuenta y el historial local, y guarda en el dispositivo un recordatorio persistente con un enlace a las instrucciones oficiales de Apple para dejar de usar manualmente Iniciar sesión con Apple. Eliminar una cuenta de EV Command no cancela ni borra las compras gestionadas por Apple.",
    "privacy.deletion.p2":
      "Para impedir que una copia de seguridad antigua de la base de datos vuelva a crear una cuenta eliminada, un registro independiente de protección de eliminación conserva un hash SHA-256 del ID aleatorio interno de usuario de EV Command y la marca de tiempo de eliminación. Durante las 24 horas posteriores a un intento de eliminación, también conserva un ID de operación aleatorio, el secreto de operación con hash, el ID interno de usuario con hash, el estado, un recibo aleatorio opcional y marcas de tiempo; el mantenimiento cada hora elimina ese registro de operación cuando vence el periodo de estado. Estos registros no contienen identificadores de Apple, correo electrónico, nombre, identificador de cuenta de Tesla, VIN, datos del vehículo, token de sesión ni token del proveedor, y no pueden utilizarse para restaurar o acceder a la cuenta.",
    "privacy.deletion.p3":
      "Para autenticar y evitar el procesamiento duplicado de las notificaciones del servidor de Iniciar sesión con Apple, EV Command guarda un hash SHA-256 del ID de notificación, el tipo y la hora del evento, la hora de recepción y el estado de procesamiento. Este registro no guarda la carga de la notificación ni el identificador de la cuenta de Apple. El mantenimiento cada hora elimina los registros completados después de siete días.",
    "privacy.demo.heading": "Modo demo",
    "privacy.demo.p1":
      "Puedes explorar un modo demo claramente identificado sin conectar Tesla. Los valores de demostración son datos de muestra fijos y no están asociados a tu vehículo.",
    "privacy.contact.heading": "Contacto",
    "privacy.contact.beforeEmail":
      "Para consultas de privacidad o problemas de eliminación, escribe a ",
    "privacy.contact.between": " o utiliza la ",
    "privacy.contact.link": "página de soporte de EV Command",
    "privacy.contact.after": ".",

    "support.title": "Soporte de EV Command",
    "support.description":
      "Información de soporte sobre cuentas de EV Command, conexión con Tesla, idiomas, compras, datos del vehículo y privacidad.",
    "support.eyebrow": "Ayuda y soporte",
    "support.heading": "Soporte de EV Command",
    "support.intro.beforeEmail": "¿Necesitas ayuda con EV Command? Escribe a ",
    "support.intro.after": ".",
    "support.topics.heading": "Temas frecuentes",
    "support.account.label": "Cuenta",
    "support.account.text":
      "Utiliza Iniciar sesión con Apple para crear o acceder a una cuenta de EV Command. Puedes cerrar sesión o eliminar permanentemente la cuenta desde Cuenta. La eliminación requiere una nueva confirmación de Apple, registra primero una protección duradera de eliminación e intenta después revocar la credencial resultante antes de eliminar la cuenta de EV Command en la nube y los datos asociados. Una confirmación rechazada no cierra tu sesión. Si se interrumpe la respuesta, la app utiliza una credencial de operación destinada únicamente a consultar el estado en el llavero de iOS para confirmar el resultado del servidor antes de borrar el historial local. Si no se puede confirmar la revocación de Apple, la eliminación de la cuenta igualmente se completa y la app conserva en el dispositivo un enlace persistente a las instrucciones oficiales de Apple para la revocación manual.",
    "support.account.appleLink":
      "Gestionar Iniciar sesión con Apple en el sitio de soporte de Apple",
    "support.tesla.label": "Conexión con Tesla",
    "support.tesla.text":
      "Primero inicia sesión en EV Command y después autoriza el acceso opcional y de solo lectura a Fleet API desde Ajustes. La desconexión elimina las credenciales de Tesla y los datos del vehículo en caché guardados por EV Command. Gestionar el consentimiento de Tesla abre la página de consentimiento de Tesla, donde puedes modificar ámbitos o revocar la autorización de Tesla.",
    "support.language.label": "Idioma",
    "support.language.text":
      "Elige inglés, chino simplificado, cantonés, coreano, japonés o español en Ajustes.",
    "support.purchases.label": "Compras",
    "support.purchases.text":
      "Utiliza la pantalla Membresía para comprar o restaurar el desbloqueo único de EV Command Pro Vitalicio mediante una compra dentro de la app de Apple. Pro conserva hasta 180 instantáneas del vehículo sin coordenadas en un almacenamiento protegido, excluido de las copias de seguridad y aislado por cuenta en el dispositivo, y permite la exportación CSV. Cuando Pro está activo, el historial de muestra identificado puede exportarse sin conectar Tesla. Eliminar una cuenta de EV Command no elimina las compras gestionadas por Apple.",
    "support.vehicle.label": "Datos del vehículo",
    "support.vehicle.text":
      "Los estados en vivo, en caché, antiguos, no disponibles y de demostración se identifican por separado. Los datos en caché tienen como máximo 15 minutos; los datos antiguos tienen más de 15 minutos y como máximo 6 horas. Los datos anteriores no se devuelven y el mantenimiento del servidor los elimina cada hora. Los datos demo no requieren una cuenta de Tesla y nunca representan tu vehículo.",
    "support.privacy.label": "Privacidad",
    "support.privacy.beforeLink": "Consulta la ",
    "support.privacy.link": "Política de privacidad",
    "support.privacy.afterLink":
      " para conocer los campos recopilados y los detalles de seguridad y eliminación.",

    "terms.title": "Términos de uso de EV Command",
    "terms.description":
      "Términos que rigen la monitorización opcional y de solo lectura del vehículo, la información demo y las herramientas para propietarios de EV Command.",
    "terms.eyebrow": "Información legal",
    "terms.heading": "Términos de uso de EV Command",
    "terms.updated": "Última actualización: 14 de julio de 2026",
    "terms.intro":
      "EV Command ofrece monitorización opcional y de solo lectura del vehículo, información demo claramente identificada y herramientas para propietarios con fines informativos. EV Command no está afiliada a Tesla, Inc. ni a ningún fabricante de vehículos.",
    "terms.use.heading": "Uso de la app",
    "terms.use.p1":
      "No confíes en EV Command como única fuente para tomar decisiones de conducción, carga, seguridad, servicio o emergencia. Sigue siempre las pantallas, los manuales y las indicaciones de servicio oficiales de tu vehículo.",
    "terms.accounts.heading": "Cuentas y conexión del vehículo",
    "terms.accounts.p1":
      "Una cuenta de EV Command utiliza Iniciar sesión con Apple. La conexión con Tesla es opcional y requiere tu consentimiento en la pantalla de autorización de Tesla. La versión actual solicita acceso a datos de solo lectura y no envía comandos al vehículo. Eres responsable de proteger el acceso a tu dispositivo y tus cuentas.",
    "terms.accuracy.heading": "Exactitud y disponibilidad de los datos",
    "terms.accuracy.p1":
      "Los estados en vivo, en caché y antiguos se identifican en la app. Los datos en caché tienen como máximo 15 minutos; los datos antiguos tienen más de 15 minutos y como máximo 6 horas. Los datos anteriores no se devuelven y el mantenimiento del servidor los elimina cada hora. Los datos del vehículo pueden retrasarse, no estar disponibles o estar incompletos debido al reposo del vehículo, las condiciones de red, la disponibilidad regional de la API o servicios de terceros. Los valores demo son datos de muestra fijos y no describen tu vehículo.",
    "terms.paid.heading": "Funciones de pago",
    "terms.paid.p1":
      "EV Command Pro Vitalicio es una compra única y no consumible mediante una compra dentro de la app de Apple y no se renueva automáticamente. Desbloquea hasta 180 instantáneas del vehículo sin coordenadas, guardadas en un almacenamiento protegido y excluido de las copias de seguridad del dispositivo, y la exportación CSV. Cualquier autonomía observada al 100 % es una extrapolación de la última autonomía mostrada, no un diagnóstico de capacidad ni de SOH de la batería. Apple gestiona el pago, la restauración y la posibilidad de reembolso.",
    "terms.deletion.heading": "Eliminación de la cuenta",
    "terms.deletion.p1":
      "Puedes eliminar tu cuenta de EV Command en la nube desde Cuenta > Eliminar cuenta. La app exige una nueva confirmación de Iniciar sesión con Apple, registra primero una protección duradera de eliminación e intenta después revocar la credencial resultante antes de eliminar la cuenta y los registros del vehículo conectado. Una confirmación rechazada no cierra tu sesión. Si se interrumpe la respuesta, la app verifica el resultado autenticado de la operación de eliminación antes de borrar el historial local. Si no se puede confirmar la revocación de Apple, la eliminación de la cuenta igualmente se completa y la app conserva en el dispositivo un enlace persistente a las instrucciones oficiales de Apple para la revocación manual. Registros seudónimos e independientes de protección de eliminación impiden que una copia de seguridad antigua vuelva a crear una cuenta eliminada correctamente. La eliminación no cancela ni elimina las compras gestionadas por Apple.",
    "terms.contact.heading": "Contacto",
    "terms.contact.beforeEmail": "Para recibir soporte, escribe a ",
    "terms.contact.after": ".",
  },
});

const STORAGE_KEY = "ev-command-locale";

export function normalizeLocale(value) {
  if (typeof value !== "string" || value.length === 0) {
    return null;
  }

  const tag = value.replaceAll("_", "-").toLowerCase();

  if (
    tag === "yue" ||
    tag.startsWith("yue-") ||
    tag === "zh-hant-hk" ||
    tag.startsWith("zh-hant-hk-") ||
    tag === "zh-hant-mo" ||
    tag.startsWith("zh-hant-mo-") ||
    tag === "zh-hk" ||
    tag.startsWith("zh-hk-") ||
    tag === "zh-mo" ||
    tag.startsWith("zh-mo-")
  ) {
    return "yue-Hant-HK";
  }

  if (
    tag === "zh-hant" ||
    tag.startsWith("zh-hant-") ||
    tag === "zh-tw" ||
    tag.startsWith("zh-tw-")
  ) {
    return null;
  }

  if (
    tag === "zh" ||
    tag === "zh-hans" ||
    tag.startsWith("zh-hans-") ||
    tag === "zh-cn" ||
    tag.startsWith("zh-cn-") ||
    tag === "zh-sg" ||
    tag.startsWith("zh-sg-")
  ) {
    return "zh-Hans";
  }

  if (tag === "ko" || tag.startsWith("ko-")) {
    return "ko";
  }

  if (tag === "ja" || tag.startsWith("ja-")) {
    return "ja";
  }

  if (tag === "es" || tag.startsWith("es-")) {
    return "es-ES";
  }

  if (tag === "en" || tag.startsWith("en-")) {
    return "en-US";
  }

  return null;
}

export function selectInitialLocale(storedLocale, browserLocales = []) {
  if (SUPPORTED_LOCALES.includes(storedLocale)) {
    return storedLocale;
  }

  for (const browserLocale of browserLocales) {
    const normalized = normalizeLocale(browserLocale);
    if (normalized) {
      return normalized;
    }
  }

  return "en-US";
}

function readStoredLocale(storage) {
  try {
    return storage?.getItem(STORAGE_KEY) ?? null;
  } catch {
    return null;
  }
}

function storeLocale(storage, locale) {
  try {
    storage?.setItem(STORAGE_KEY, locale);
  } catch {
    // The selected locale still applies for this page when storage is unavailable.
  }
}

function browserLocales() {
  return Array.isArray(navigator.languages)
    ? navigator.languages
    : [navigator.language];
}

function browserStorage() {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

function messageFor(locale, key) {
  const localized = MESSAGES[locale]?.[key];
  return typeof localized === "string" ? localized : MESSAGES["en-US"][key];
}

export function applyLocale(locale, root = document) {
  const resolvedLocale = SUPPORTED_LOCALES.includes(locale) ? locale : "en-US";
  const html = root.documentElement;

  if (html) {
    html.lang = resolvedLocale;
  }

  root.querySelectorAll("[data-i18n]").forEach((element) => {
    const message = messageFor(resolvedLocale, element.dataset.i18n);
    if (typeof message === "string") {
      element.textContent = message;
    }
  });

  root.querySelectorAll("[data-i18n-content]").forEach((element) => {
    const message = messageFor(resolvedLocale, element.dataset.i18nContent);
    if (typeof message === "string") {
      element.setAttribute("content", message);
    }
  });

  root.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const message = messageFor(resolvedLocale, element.dataset.i18nAriaLabel);
    if (typeof message === "string") {
      element.setAttribute("aria-label", message);
    }
  });

  const switcher = root.querySelector("#locale-switcher");
  if (switcher) {
    switcher.value = resolvedLocale;
  }

  return resolvedLocale;
}

export function initializeLocalization(options = {}) {
  const root = options.root ?? document;
  const detectedLocales = options.browserLocales ?? browserLocales();
  const storage = Object.hasOwn(options, "storage")
    ? options.storage
    : browserStorage();
  const initialLocale = selectInitialLocale(
    readStoredLocale(storage),
    detectedLocales
  );
  applyLocale(initialLocale, root);

  const switcher = root.querySelector("#locale-switcher");
  switcher?.addEventListener("change", (event) => {
    const locale = event.currentTarget.value;
    if (!SUPPORTED_LOCALES.includes(locale)) {
      return;
    }

    storeLocale(storage, locale);
    applyLocale(locale, root);
  });

  return initialLocale;
}

if (typeof document !== "undefined" && typeof navigator !== "undefined") {
  initializeLocalization();
}
