const quota_table = {
  quota: {
    title: '基础',
    base_price: '基础价格',
    mau_limit: 'MAU 限制',
    included_tokens: '包含的令牌',
  },
  application: {
    title: '应用',
    total: '总应用数',
    m2m: '机器对机器',
    /** UNTRANSLATED */
    third_party: 'Third-party apps',
  },
  resource: {
    title: 'API 资源',
    resource_count: '资源数量',
    scopes_per_resource: '每资源权限',
  },
  branding: {
    title: '界面与品牌',
    custom_domain: '自定义域名',
    custom_css: '自定义 CSS',
    app_logo_and_favicon: '应用图标与网站图标',
    dark_mode: '深色模式',
    i18n: '国际化',
  },
  user_authn: {
    title: '用户认证',
    omni_sign_in: '全渠道登录',
    password: '密码',
    passwordless: '免密码登录 - 电子邮件和短信',
    email_connector: '电子邮件连接器',
    sms_connector: '短信连接器',
    social_connectors: '社交连接器',
    standard_connectors: '标准连接器',
    built_in_email_connector: '内置电子邮件连接器',
    mfa: '多因素认证',
    sso: '企业 SSO',
    adaptive_mfa: '自适应MFA',
  },
  user_management: {
    title: '用户管理',
    user_management: '用户管理',
    roles: '角色',
    machine_to_machine_roles: '机器对机器角色',
    scopes_per_role: '每角色权限',
  },
  audit_logs: {
    title: '审计日志',
    retention: '保留期限',
  },
  hooks: {
    title: 'Webhooks',
    hooks: 'Webhooks',
  },
  organizations: {
    title: '组织',
    organizations: '组织',
    monthly_active_organization: '每月活跃组织',
    allowed_users_per_org: '每组织允许的用户数',
    invitation: '邀请',
    org_roles: '组织角色',
    org_permissions: '组织权限',
    just_in_time_provisioning: '即时配置',
  },
  support: {
    title: '合规与支持',
    community: '社区',
    customer_ticket: '客户支持票据',
    premium: '高级版',
    email_ticket_support: '邮件支持票据',
    soc2_report: 'SOC2报告',
    hipaa_or_baa_report: 'HIPAA/BAA报告',
  },
  unlimited: '无限制',
  contact: '联系',
  monthly_price: '${{value, number}} / 月',
  days_one: '{{count, number}} 天',
  days_other: '{{count, number}} 天',
  add_on: '附加功能',
  tier: '层级{{value, number}}：',
  paid_token_limit_tip:
    'Logto将为超出您配额限制的功能收费。您可以在2024年第二季度左右开始收费之前免费使用它。如果您需要更多的令牌，请与我们联系。默认情况下，我们每月为每百万令牌收费80美元。',
  paid_quota_limit_tip:
    'Logto将为超出配额限制的功能添加费用。在我们从2024年第二季度开始收费之前，您可以免费使用它。',
  paid_add_on_feature_tip:
    '这是一个附加功能。在我们从2024年第二季度开始收费之前，您可以免费使用它。',
  million: '{{value, number}} 百万',
  mau_tip: 'MAU（月活跃用户）是指在计费周期内与Logto交换过至少一个令牌的独立用户数量。',
  tokens_tip: 'Logto 发行的所有类型令牌，包括访问令牌、刷新令牌等。',
  mao_tip: 'MAO（月度活跃组织）是指在计费周期内至少有一个MAU（月度活跃用户）的独特组织数量。',
  /** UNTRANSLATED */
  third_party_tip:
    'Use Logto as your OIDC identity provider for third-party app sign-ins and permission grants.',
  included: '已包含{{value, number}}',
  included_mao: '已包含 {{value, number}} MAO',
  extra_quota_price: '然后每月 ${{value, number}} / 每个之后',
  per_month_each: '每月 ${{value, number}} / 每个',
  extra_mao_price: '然后每 MAO ${{value, number}}',
  per_month: '每月 ${{value, number}}',
};

export default Object.freeze(quota_table);
