import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductModule } from './product/product.module';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  // { path: 'detail', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProductModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// productファイルなど、用途ごとのモジュールを読み込むファイル
// router-outletの中身を記述するタイプスクリプトファイル
// シングルページアプリケーションを作る際は、router-outletを経由させ、URLごとに表示を切り替える設定をする
