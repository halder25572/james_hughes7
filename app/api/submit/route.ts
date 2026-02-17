import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    
    // Console এ data দেখুন (development এ)
    console.log('📋 Form Submission Data:');
    console.log('========================');
    console.log(JSON.stringify(formData, null, 2));
    console.log('========================');
    
    // পরে এখানে database save করবেন
    // Example:
    // const result = await db.vehicleSubmissions.create({
    //   data: formData
    // });
    
    // Success response
    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
      referenceId: `VH-${Date.now()}`, // Temporary reference ID
      data: formData, // Development এ data return করছি
    }, { status: 200 });
    
  } catch (error) {
    console.error('❌ Form submission error:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Failed to submit form',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}