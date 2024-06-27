"use strict";(self.webpackChunksea_ql_blog=self.webpackChunksea_ql_blog||[]).push([[6545],{9680:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>v});var r=a(6687);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),u=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},m=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,l=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),c=u(a),v=n,h=c["".concat(l,".").concat(v)]||c[v]||p[v]||o;return a?r.createElement(h,s(s({ref:e},m),{},{components:a})):r.createElement(h,s({ref:e},m))}));function v(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,s=new Array(o);s[0]=c;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:n,s[1]=i;for(var u=2;u<o;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2670:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=a(1308),n=(a(6687),a(9680));const o={slug:"2021-11-19-whats-new-in-0.4.0",title:"What's new in SeaORM 0.4.0",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},s=void 0,i={permalink:"/preview/pr-123/blog/2021-11-19-whats-new-in-0.4.0",editUrl:"https://github.com/SeaQL/seaql.github.io/edit/master/Blog/blog/2021-11-19-whats-new-in-0.4.0.md",source:"@site/blog/2021-11-19-whats-new-in-0.4.0.md",title:"What's new in SeaORM 0.4.0",description:"\ud83c\udf89 We are pleased to release SeaORM 0.4.0 today! Here are some feature highlights \ud83c\udf1f:",date:"2021-11-19T00:00:00.000Z",formattedDate:"November 19, 2021",tags:[{label:"news",permalink:"/preview/pr-123/blog/tags/news"}],readingTime:3.13,hasTruncateMarker:!1,authors:[{name:"SeaQL Team",title:"Chris Tsang",url:"https://github.com/SeaQL",imageURL:"https://www.sea-ql.org/SeaORM/img/SeaQL.png"}],frontMatter:{slug:"2021-11-19-whats-new-in-0.4.0",title:"What's new in SeaORM 0.4.0",author:"SeaQL Team",author_title:"Chris Tsang",author_url:"https://github.com/SeaQL",author_image_url:"https://www.sea-ql.org/SeaORM/img/SeaQL.png",tags:["news"]},prevItem:{title:"What's new in SeaORM 0.5.0",permalink:"/preview/pr-123/blog/2022-01-01-whats-new-in-0.5.0"},nextItem:{title:"What's new in SeaORM 0.3.0",permalink:"/preview/pr-123/blog/2021-10-15-whats-new-in-0.3.0"}},l={authorsImageUrls:[void 0]},u=[{value:"Rust Edition 2021",id:"rust-edition-2021",level:2},{value:"Enumeration",id:"enumeration",level:2},{value:"Supports <code>RETURNING</code> Clause on PostgreSQL",id:"supports-returning-clause-on-postgresql",level:2},{value:"Axum Integration Example",id:"axum-integration-example",level:2},{value:"Sponsor",id:"sponsor",level:2},{value:"Community",id:"community",level:2}],m={toc:u};function p(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\ud83c\udf89 We are pleased to release SeaORM ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/releases/tag/0.4.0"},(0,n.kt)("inlineCode",{parentName:"a"},"0.4.0"))," today! Here are some feature highlights \ud83c\udf1f:"),(0,n.kt)("h2",{id:"rust-edition-2021"},"Rust Edition 2021"),(0,n.kt)("p",null,"[",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/273"},"#273"),"] Upgrading SeaORM to ",(0,n.kt)("a",{parentName:"p",href:"https://blog.rust-lang.org/2021/10/21/Rust-1.56.0.html#rust-2021"},"Rust Edition 2021")," \ud83e\udd80\u2764\ud83d\udc1a!"),(0,n.kt)("p",null,"Contributed by:"),(0,n.kt)("div",{class:"row"},(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/sno2"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/43641633?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Carter Snook"))))),(0,n.kt)("h2",{id:"enumeration"},"Enumeration"),(0,n.kt)("p",null,"[",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/issues/252"},"#252"),"] You can now use Rust enums in model where the values are mapped to a database string, integer or native enum. Learn more ",(0,n.kt)("a",{parentName:"p",href:"https://www.sea-ql.org/SeaORM/docs/generate-entity/enumeration"},"here"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Debug, Clone, PartialEq, DeriveEntityModel)]\n#[sea_orm(table_name = "active_enum")]\npub struct Model {\n    #[sea_orm(primary_key)]\n    pub id: i32,\n    // Use our custom enum in a model\n    pub category: Option<Category>,\n    pub color: Option<Color>,\n    pub tea: Option<Tea>,\n}\n\n#[derive(Debug, Clone, PartialEq, EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "String", db_type = "String(Some(1))")]\n// An enum serialized into database as a string value\npub enum Category {\n    #[sea_orm(string_value = "B")]\n    Big,\n    #[sea_orm(string_value = "S")]\n    Small,\n}\n\n#[derive(Debug, Clone, PartialEq, EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "i32", db_type = "Integer")]\n// An enum serialized into database as an integer value\npub enum Color {\n    #[sea_orm(num_value = 0)]\n    Black,\n    #[sea_orm(num_value = 1)]\n    White,\n}\n\n#[derive(Debug, Clone, PartialEq, EnumIter, DeriveActiveEnum)]\n#[sea_orm(rs_type = "String", db_type = "Enum", enum_name = "tea")]\n// An enum serialized into database as a database native enum\npub enum Tea {\n    #[sea_orm(string_value = "EverydayTea")]\n    EverydayTea,\n    #[sea_orm(string_value = "BreakfastTea")]\n    BreakfastTea,\n}\n')),(0,n.kt)("div",{class:"row"},(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},"Designed by:",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/tyt2y3"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/1782664?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Chris Tsang")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},"Contributed by:",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/billy1624"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Billy Chan"))))),(0,n.kt)("h2",{id:"supports-returning-clause-on-postgresql"},"Supports ",(0,n.kt)("inlineCode",{parentName:"h2"},"RETURNING")," Clause on PostgreSQL"),(0,n.kt)("p",null,"[",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/issues/183"},"#183"),"] When performing insert or update operation on ",(0,n.kt)("inlineCode",{parentName:"p"},"ActiveModel")," against PostgreSQL, ",(0,n.kt)("inlineCode",{parentName:"p"},"RETURNING")," clause will be used to perform select in a single SQL statement."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'// For PostgreSQL\ncake::ActiveModel {\n    name: Set("Apple Pie".to_owned()),\n    ..Default::default()\n}\n.insert(&postgres_db)\n.await?;\n\nassert_eq!(\n    postgres_db.into_transaction_log(),\n    vec![Transaction::from_sql_and_values(\n        DbBackend::Postgres,\n        r#"INSERT INTO "cake" ("name") VALUES ($1) RETURNING "id", "name""#,\n        vec!["Apple Pie".into()]\n    )]);\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-rust"},'// For MySQL & SQLite\ncake::ActiveModel {\n    name: Set("Apple Pie".to_owned()),\n    ..Default::default()\n}\n.insert(&other_db)\n.await?;\n\nassert_eq!(\n    other_db.into_transaction_log(),\n    vec![\n        Transaction::from_sql_and_values(\n            DbBackend::MySql,\n            r#"INSERT INTO `cake` (`name`) VALUES (?)"#,\n            vec!["Apple Pie".into()]\n        ),\n        Transaction::from_sql_and_values(\n            DbBackend::MySql,\n            r#"SELECT `cake`.`id`, `cake`.`name` FROM `cake` WHERE `cake`.`id` = ? LIMIT ?"#,\n            vec![15.into(), 1u64.into()]\n        )]);\n')),(0,n.kt)("div",{class:"row"},(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},"Proposed by:",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/marlon-sousa"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/21093041?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Marlon Brand\xe3o de Sousa")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},"Contributed by:",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/billy1624"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/30400950?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Billy Chan"))))),(0,n.kt)("h2",{id:"axum-integration-example"},"Axum Integration Example"),(0,n.kt)("p",null,"[",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/pull/297"},"#297"),"] Added ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/tree/master/examples/axum_example"},"Axum integration example"),". More examples ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/issues/269"},"wanted"),"!"),(0,n.kt)("p",null,"Contributed by:"),(0,n.kt)("div",{class:"row"},(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/YoshieraHuang"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/38752027?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Yoshiera"))))),(0,n.kt)("h2",{id:"sponsor"},"Sponsor"),(0,n.kt)("p",null,"Our ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/sponsors/SeaQL"},"GitHub Sponsor")," profile is up! If you feel generous, a small donation will be greatly appreciated."),(0,n.kt)("p",null,"A big shout out to our first sponsors \ud83d\ude07:"),(0,n.kt)("div",{class:"row"},(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/shanesveller"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/831?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Shane Sveller")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm",href:"https://github.com/exzachlyvv"},(0,n.kt)("img",{src:"https://avatars.githubusercontent.com/u/46034847?v=4"})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Zachary Vander Velden")))),(0,n.kt)("div",{class:"col col--6 margin-bottom--md"},(0,n.kt)("div",{class:"avatar"},(0,n.kt)("a",{class:"avatar__photo-link avatar__photo avatar__photo--sm"},(0,n.kt)("img",{style:{width:"100%"},src:"data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="})),(0,n.kt)("div",{class:"avatar__intro"},(0,n.kt)("div",{class:"avatar__name"},"Unnamed Sponsor"))))),(0,n.kt)("h2",{id:"community"},"Community"),(0,n.kt)("p",null,"SeaQL is a community driven project. We welcome you to participate, contribute and together build for Rust's future."),(0,n.kt)("p",null,"Here is the roadmap for SeaORM ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeaQL/sea-orm/milestone/5"},(0,n.kt)("inlineCode",{parentName:"a"},"0.5.x")),"."))}p.isMDXComponent=!0}}]);