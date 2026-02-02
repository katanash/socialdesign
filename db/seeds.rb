# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# SaaS Products Sample Data
saas_products = [
  {
    name: 'Slack',
    category: 'Communication',
    description: 'Slack is a messaging app for business that connects people to the information they need. By bringing people together to work as one unified team, Slack transforms the way organizations communicate.',
    price_monthly: 8.75,
    price_yearly: 87.50,
    free_plan: true,
    trial_days: 0,
    features: "Real-time messaging\nFile sharing\nIntegrations with 2000+ apps\nVideo and voice calls\nSearchable message history\nCustom workflows\nEnterprise security",
    website_url: 'https://slack.com',
    logo_url: 'https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png',
    rating: 4.5,
    pros: "Excellent integrations ecosystem\nIntuitive user interface\nPowerful search functionality\nGreat mobile apps",
    cons: "Can be expensive for large teams\nNotifications can be overwhelming\nFree plan has message history limits",
    target_users: 'Teams of all sizes, Remote workers, Startups'
  },
  {
    name: 'Salesforce',
    category: 'CRM',
    description: 'Salesforce is the world\'s #1 customer relationship management (CRM) platform. It helps your marketing, sales, commerce, service and IT teams work as one from anywhere.',
    price_monthly: 25.00,
    price_yearly: 300.00,
    free_plan: false,
    trial_days: 30,
    features: "Contact management\nOpportunity management\nLead management\nSales forecasting\nWorkflow automation\nReports and dashboards\nMobile app\nAI-powered insights",
    website_url: 'https://www.salesforce.com',
    logo_url: 'https://c1.sfdcstatic.com/content/dam/sfdc-docs/www/logos/logo-salesforce.svg',
    rating: 4.3,
    pros: "Highly customizable\nExtensive ecosystem (AppExchange)\nPowerful reporting\nScalable for enterprise",
    cons: "Steep learning curve\nExpensive for small businesses\nComplex implementation",
    target_users: 'Enterprise, Sales teams, Large organizations'
  },
  {
    name: 'Asana',
    category: 'Project Management',
    description: 'Asana is a web and mobile work management platform designed to help teams organize, track, and manage their work.',
    price_monthly: 10.99,
    price_yearly: 131.88,
    free_plan: true,
    trial_days: 30,
    features: "Task management\nProject timelines\nWorkload management\nCustom fields\nForms\nAutomation rules\nGoals tracking\n100+ integrations",
    website_url: 'https://asana.com',
    logo_url: 'https://assets.asana.biz/m/6e03e3f8c0a7ccef/original/asana-logo.png',
    rating: 4.4,
    pros: "Beautiful and intuitive interface\nFlexible project views\nStrong collaboration features\nGenerous free tier",
    cons: "Limited reporting in free plan\nCan be complex for simple projects\nNo built-in time tracking",
    target_users: 'Project managers, Teams, Startups, Agencies'
  },
  {
    name: 'HubSpot CRM',
    category: 'CRM',
    description: 'HubSpot CRM is a free CRM platform with all the tools you need to attract, engage, and delight customers.',
    price_monthly: 0.00,
    price_yearly: 0.00,
    free_plan: true,
    trial_days: 0,
    features: "Contact management\nDeal pipeline\nEmail tracking\nMeeting scheduling\nLive chat\nReporting dashboard\nEmail templates\nDocument tracking",
    website_url: 'https://www.hubspot.com/products/crm',
    logo_url: 'https://www.hubspot.com/hubfs/HubSpot_Logos/HubSpot-Inversed-Favicon.png',
    rating: 4.5,
    pros: "Completely free CRM\nEasy to use\nGreat email integration\nScales with paid features",
    cons: "Advanced features require paid plans\nLimited customization in free tier\nCan get expensive with add-ons",
    target_users: 'Small businesses, Startups, Sales teams'
  },
  {
    name: 'Notion',
    category: 'Project Management',
    description: 'Notion is an all-in-one workspace that combines notes, docs, project management, and collaboration.',
    price_monthly: 8.00,
    price_yearly: 96.00,
    free_plan: true,
    trial_days: 0,
    features: "Notes and docs\nDatabases\nKanban boards\nCalendars\nTemplates\nReal-time collaboration\nAPI access\nTeam wikis",
    website_url: 'https://www.notion.so',
    logo_url: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
    rating: 4.6,
    pros: "Extremely flexible and customizable\nBeautiful design\nGreat for knowledge management\nGenerous free plan",
    cons: "Steep learning curve\nCan be slow with large databases\nLimited offline functionality",
    target_users: 'Teams, Individuals, Startups, Knowledge workers'
  },
  {
    name: 'Zoom',
    category: 'Communication',
    description: 'Zoom is a video communications platform that provides video conferencing, online meetings, chat, and mobile collaboration.',
    price_monthly: 15.99,
    price_yearly: 159.90,
    free_plan: true,
    trial_days: 0,
    features: "HD video meetings\nScreen sharing\nRecording\nVirtual backgrounds\nBreakout rooms\nWebinars\nTeam chat\nCloud storage",
    website_url: 'https://zoom.us',
    logo_url: 'https://st1.zoom.us/zoom.ico',
    rating: 4.4,
    pros: "Reliable video quality\nEasy to use\nWorks on any device\nGreat free tier",
    cons: "40-minute limit on free group calls\nSecurity concerns in the past\nCan be resource-intensive",
    target_users: 'Remote teams, Educators, Enterprise, Everyone'
  },
  {
    name: 'QuickBooks',
    category: 'Accounting',
    description: 'QuickBooks is accounting software that helps small businesses manage their finances, invoicing, expenses, and payroll.',
    price_monthly: 30.00,
    price_yearly: 360.00,
    free_plan: false,
    trial_days: 30,
    features: "Invoicing\nExpense tracking\nBank connections\nFinancial reports\nTax preparation\nPayroll\nInventory management\nTime tracking",
    website_url: 'https://quickbooks.intuit.com',
    logo_url: 'https://quickbooks.intuit.com/etc/designs/quickbooks/clientlibs/img/logo.svg',
    rating: 4.2,
    pros: "Industry standard for small business\nComprehensive features\nGood mobile app\nExtensive integrations",
    cons: "Can be expensive\nLearning curve for non-accountants\nCustomer support varies",
    target_users: 'Small businesses, Freelancers, Accountants'
  },
  {
    name: 'Figma',
    category: 'Design',
    description: 'Figma is a collaborative interface design tool that enables teams to create, prototype, and gather feedback in one place.',
    price_monthly: 15.00,
    price_yearly: 144.00,
    free_plan: true,
    trial_days: 0,
    features: "Vector editing\nPrototyping\nReal-time collaboration\nDesign systems\nPlugins\nDeveloper handoff\nVersion history\nTeam libraries",
    website_url: 'https://www.figma.com',
    logo_url: 'https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png',
    rating: 4.7,
    pros: "Best-in-class collaboration\nBrowser-based (no installation)\nPowerful prototyping\nGreat free tier",
    cons: "Requires internet connection\nCan lag with complex files\nLimited offline functionality",
    target_users: 'Designers, Product teams, Startups, Agencies'
  },
  {
    name: 'Zendesk',
    category: 'Customer Support',
    description: 'Zendesk is a customer service software and support ticket system that helps businesses build better customer relationships.',
    price_monthly: 49.00,
    price_yearly: 588.00,
    free_plan: false,
    trial_days: 14,
    features: "Ticketing system\nLive chat\nKnowledge base\nCall center\nAnalytics\nAI-powered bots\nMulti-channel support\nCustomer portal",
    website_url: 'https://www.zendesk.com',
    logo_url: 'https://d1eipm3vz40ber.cloudfront.net/images/logos/zendesk-logo.svg',
    rating: 4.3,
    pros: "Comprehensive support solution\nExcellent analytics\nScalable for enterprise\nStrong ecosystem",
    cons: "Can be expensive\nComplex setup\nSteep learning curve",
    target_users: 'Support teams, Enterprise, E-commerce'
  },
  {
    name: 'GitHub',
    category: 'Development',
    description: 'GitHub is a developer platform that allows developers to create, store, manage, and share their code using Git version control.',
    price_monthly: 4.00,
    price_yearly: 48.00,
    free_plan: true,
    trial_days: 0,
    features: "Git repositories\nPull requests\nCode review\nActions (CI/CD)\nIssue tracking\nProject boards\nSecurity features\nCopilot AI",
    website_url: 'https://github.com',
    logo_url: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    rating: 4.8,
    pros: "Industry standard for code hosting\nExcellent collaboration features\nPowerful CI/CD\nHuge community",
    cons: "Private repos limited in free tier\nCan be complex for beginners\nPricing for enterprise features",
    target_users: 'Developers, Open source projects, Teams'
  }
]

puts "Seeding SaaS products..."
saas_products.each do |product_data|
  SaasProduct.find_or_create_by(name: product_data[:name]) do |product|
    product.assign_attributes(product_data)
    puts "  Created: #{product.name}"
  end
end
puts "Done! #{SaasProduct.count} SaaS products in database."
