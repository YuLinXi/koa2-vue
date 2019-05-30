import { SubTestBlob } from '../models';

export const create = async (ctx, next) => {
  const { body } = ctx.request;
  const req = new SubTestBlob({
    title: body.title
  });
  if (body.child) {
    req.child.create({
      title: body.child.title,
    })
  }
  if (body.children && body.children.length) {
    req.children = body.children;
  }
  try {
    const res = await req.save();
    ctx.body = {
      data: res,
      code: 0,
      msg: '成功'
    }
  } catch (e) {
    console.log(e);
  }
}
