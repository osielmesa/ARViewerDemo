//
//  ARViewerModule.m
//  ARViewerDemo
//
//  Created by Osiel Lima Díaz on 27.6.23..
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"

@interface RCT_EXTERN_MODULE(ARViewerModule, NSObject) //exposing the module to JS
RCT_EXTERN_METHOD(displayInAR: (NSString)url) //exposing the method to JS
@end
