/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx7220ab59634f1b49',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '89973dea2d0829ce01357dd2f816571d',

  PROVINCE: '四川',
  CITY: '成都',

  USERS: [
    {
      // 想要发送的人的名字
      name: '姚姚宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oEVEk6fiFWFBRAxMTmlV3JvhZcD8',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'mL70tO97gvSFTkWGKmt6ZKMyYyiAVC3Fb925SvSU2V4',

      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '姚姚宝贝', year: '1997', date: '10-19',
        },
        
        {
          type: '节日', name: '恋爱纪念日', year: '2023', date: '03-09',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-03-09' },
        
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'mL70tO97gvSFTkWGKmt6ZKMyYyiAVC3Fb925SvSU2V4',

  CALLBACK_USERS: [
    {
      name: '',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oEVEk6fiFWFBRAxMTmlV3JvhZcD8',
    }
  ],

}

module.exports = USER_CONFIG

