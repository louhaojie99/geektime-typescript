module.exports = {
    // devtool应该的匹配模式是以inline-或hidden-或eval-起始，webpack5中对于devtool更加严格，需要严格遵循模式中的关键字顺序。
    // devtool: 'cheap-module-eval-source-map'
    devtool: 'eval-cheap-module-source-map'
}
