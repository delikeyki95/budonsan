module.exports = {
    publicPath: '/budonsan/dist/',
    css: {
      loaderOptions: {
        scss: {
          // 이 옵션에 변수를 모아둔 파일을 연결한다.
          additionalData: `
              @import "@/assets/_variable.scss";
              @import "@/assets/_reset.scss";
                  `,
        },
      },
    },
};