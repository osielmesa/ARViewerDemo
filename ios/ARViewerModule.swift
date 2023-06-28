//
//  ARViewerModule.swift
//  ARViewerDemo
//
//  Created by Osiel Lima Díaz on 27.6.23..
//

import Foundation
import QuickLook
import ARKit

@objc(ARViewerModule) // expose the class to objc code
class ARViewerModule: NSObject, QLPreviewControllerDataSource {
  
  private var previewItem: QLPreviewItem? // Item to be shown in AR
  
  func numberOfPreviewItems(in controller: QLPreviewController) -> Int {
    return 1 // Amount of QLPreviewItem to show
  }
  
  func previewController(_ controller: QLPreviewController, previewItemAt index: Int) -> QLPreviewItem {
    return previewItem! //QLPreviewController will show the returned QLPreviewItem here
  }
  
  @objc // expose the method to objc code
  func displayInAR(_ url: NSString) {
    let url = URL(string: url as String)!
    let task = URLSession.shared.downloadTask(with: url) { localURL, urlResponse, error in
      if let localURL = localURL {
        do {
          // We need to download the file first in order to display it in AR Quicklook
          let httpURLResponse = urlResponse as? HTTPURLResponse
          let fileName = httpURLResponse?.suggestedFilename ?? httpURLResponse?.url?.lastPathComponent ?? url.lastPathComponent
          let destination = FileManager.default.temporaryDirectory.appendingPathComponent(fileName)
          if FileManager.default.fileExists(atPath: destination.path) {
            try FileManager.default.removeItem(at: destination)
          }
          try FileManager.default.moveItem(at: localURL, to: destination)
          
          // We save the local destination file in previewItem, QLPreviewController will show it next
          self.previewItem = destination as NSURL
          DispatchQueue.main.async {
            let previewController = QLPreviewController()
            previewController.dataSource = self //QLPreviewController will use our module as data source
            var rootVC = UIApplication.shared.keyWindow?.rootViewController
            rootVC?.present(previewController, animated: true, completion: nil) //Presenting QLPreviewController
          }
        } catch {
          print(error)
        }
      
      }
    }
    
    task.resume()
  }
}
