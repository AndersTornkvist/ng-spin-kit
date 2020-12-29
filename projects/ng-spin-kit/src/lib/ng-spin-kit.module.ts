import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChasingDotsComponent } from './spinner/chasing-dots.component';
import { CircleComponent } from './spinner/circle.component';
import { CubeGridComponent } from './spinner/cube-grid.component';
import { DoubleBounceComponent } from './spinner/double-bounce.component';
import { FadingCircleComponent } from './spinner/fading-circle.component';
import { FoldingCubeComponent } from './spinner/folding-cube.component';
import { PulseComponent } from './spinner/pulse.component';
import { RotatingPlaneComponent } from './spinner/rotating-plane.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ThreeBounceComponent } from './spinner/three-bounce.component';
import { WanderingCubesComponent } from './spinner/wandering-cubes.component';
import { WaveComponent } from './spinner/wave.component';
import { WordPressComponent } from './spinner/word-press.component';


@NgModule({
  declarations: [
    SpinnerComponent,
    RotatingPlaneComponent,
    DoubleBounceComponent,
    WaveComponent,
    WanderingCubesComponent,
    PulseComponent,
    ChasingDotsComponent,
    CircleComponent,
    ThreeBounceComponent,
    CubeGridComponent,
    WordPressComponent,
    FadingCircleComponent,
    FoldingCubeComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SpinnerComponent,
    RotatingPlaneComponent,
    DoubleBounceComponent,
    WaveComponent,
    WanderingCubesComponent,
    PulseComponent,
    ChasingDotsComponent,
    CircleComponent,
    ThreeBounceComponent,
    CubeGridComponent,
    WordPressComponent,
    FadingCircleComponent,
    FoldingCubeComponent,
  ],
})
export class NgSpinKitModule {
}
