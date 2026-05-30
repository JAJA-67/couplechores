import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { pointsToSend } = await request.json();

    // 基礎檢查：確保傳過來的是數字
    if (!pointsToSend || isNaN(pointsToSend)) {
      return NextResponse.json({ error: '請輸入有效的點數數字' }, { status: 400 });
    }

    // 商業邏輯：允許自由發送！直接回傳成功
    return NextResponse.json({ 
      message: `🎉 成功發送 ${pointsToSend} 點給另一半！` 
    });
  } catch (err) {
    return NextResponse.json({ error: '發送失敗' }, { status: 500 });
  }
}
