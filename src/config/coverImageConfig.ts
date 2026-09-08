// src/config/coverImageConfig.ts

const coverImageConfig = {
  // 基础恢复：设为 true 让解构不报错，若后续 utils 当函数调用再改
  randomCoverImage: true, 
};

// 必须导出此对象，供 image-utils.ts 解构
export { coverImageConfig };
export default coverImageConfig;