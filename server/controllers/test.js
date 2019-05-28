import { TestBlob } from '../models';

export const createTest = async (ctx, next) => {
  const { body } = ctx.request;
  const test = new TestBlob({
    title: body.title,
    content: body.content,
    date: body.date,
    count: body.count,
    keyMapTest: {
      MALE: '男',
      FEMALE: '女'
    }
  });

  // 提前校验schema 类型
  try {
    await test.validate();
  } catch (e) {
    ctx.body = {
      data: null,
      code: 400,
      msg: e.message
    };
    return;
  }

  try {
    const createResult = await test.save();
    ctx.body = {
      data: createResult,
      code: 0,
      msg: '成功'
    };
  } catch (e) {
    console.log(e)
    ctx.throw(500, '服务器内部错误');
  }
};

export const patchTest = async (ctx, next) => {
  try {
    const doc = await TestBlob.findOne({ _id: ctx.params.id })
    doc.title = '修改后的title';
    const result = await doc.save();
    ctx.body = {
      data: result,
      code: 0,
      msg: '成功'
    };
  } catch (e) {
    console.log(e)
    ctx.throw(500, '服务器内部错误');
  }
}

export const deleteTest = async (ctx, next) => {
  try {
    const req = await TestBlob.findOneAndDelete({ _id: ctx.params.id });
    if (req) {
      ctx.body = {
        data: req,
        code: 0,
        msg: '删除成功'
      };
    } else {
      ctx.body = {
        data: null,
        code: 404,
        msg: 'not found'
      };
    }
  } catch (e) {
    console.log(e)
    ctx.throw(500, '服务器内部错误');
  }
}
