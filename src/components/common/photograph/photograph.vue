<template>
	<ymt-shade>
		<div class="photograph">
			<div class="close"><i class="icon iconfont icon-chacha" @click="handleClose"></i></div>
			<div class="content">
				<div class="content-img"><img src="../../../assets/images/car/picture_idcard03@2x.png" alt=""></div>
				<div class="content-tip">请按照图片，提交行驶证照片，照片要四角对齐，避免出现模糊，太暗有遮挡的情况。</div>
			</div>
			<div class="operate">
				<div @click="handlePhoto">拍照</div>
				<div @click="handleImages">相册</div>
			</div>
		</div>
	</ymt-shade>
</template>
<script>
	export default {
		methods: {
			handleClose() {
				if (this._events["click"]) {
					this.$emit("click");
				}
			},
			handlePhoto() {
				if (this._events["photo"]) {
					this.$emit("photo");
				}
			},
			handleImages() {
				if (this._events["images"]) {
					this.$emit("images");
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.photograph {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		margin: auto;
		color: #fff;
		text-align: center;

		.close {
			margin: 165/20rem 0 0 0;
			padding: 0 54/20rem;
			text-align: right;

			i {
				font-size: 1.5rem;
			}
		} 
				
		.content {
			margin: (242-165-30)/20rem 54/20rem;

			.content-img img{
				width: 642/20rem;
				height: 452/20rem;
			}

			.content-tip {
				height: (24+12)/20rem;
				line-height: (24+12)/20rem;
				margin: 24/20rem 0 0 0;
				font-size: 24/20rem;
				color: #fff;
			}
		}

		.operate { 
			margin: 158/20rem 110/20rem;  

			div {
				width: 26.5rem;
				height: 4.4rem;
				line-height: 4.4rem;
				margin: 0 auto 2.3rem auto;
				border: 1px solid #fff;
				border-radius: .5rem;
				font-size: 1.8rem;
				color: #fff;
				/*background-color: #000; */
			}
		}
	}
</style>